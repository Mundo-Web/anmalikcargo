<?php

namespace App\Http\Controllers;

use App\Models\Formula;
use App\Models\Sale;
use Illuminate\Support\Facades\View;
use SoDe\Extend\Fetch;
use SoDe\Extend\Text;

class WhatsAppController extends Controller
{
    static function sendSale(Sale $sale, bool $send2client = true, bool $send2group = true)
    {
        try {

            $jpa  = Sale::with([
                'formula',
                'formula.hasTreatment',
                'formula.scalpType',
                'formula.hairType',
                'formula.fragrance',
                'status',
                'details',
                'details.item',
                'renewal',
                'bundle',
                'coupon'
            ])->find($sale->id);
            $hairGoals = Formula::whereIn('id', $jpa->formula->hair_goals)->get();
            $jpa->formula->hair_goals_list = $hairGoals;

            $data =  [
                'sale' => $jpa
            ];

            $content = View::make('mailing.sale-done', $data)->render();

            $onlyName = \explode(' ', $sale->name)[0];
            $address = ($sale->province ?? $sale->district) . ", {$sale->department}, {$sale->country}" . ($sale->zip_code ? ' - ' . $sale->zip_code : '');
            try {
                if ($send2client) {
                    new Fetch(env('WA_URL') . '/api/send', [
                        'method' => 'POST',
                        'headers' => [
                            'Content-Type' => 'application/json'
                        ],
                        'body' => [
                            'from' => env('APP_CORRELATIVE'),
                            'to' => ['51' . Text::keep($sale->phone, '0123456789')],
                            'content' => "Hola *{$onlyName}*! nos llegó tu pedido por la web 🥰\n\n*Nombre*: {$sale->name} {$sale->lastname}\n*Dirección*: {$sale->address} {$sale->number}, {$address}\n*Correo electrónico*: {$sale->email}\n*Teléfono*: {$sale->phone}",
                            'html' => $content
                        ]
                    ]);
                    if ($sale->status_id == 'f13fa605-72dd-4729-beaa-ee14c9bbc47b') {
                        new Fetch(env('WA_URL') . '/api/send', [
                            'method' => 'POST',
                            'headers' => [
                                'Content-Type' => 'application/json'
                            ],
                            'body' => [
                                'from' => env('APP_CORRELATIVE'),
                                'to' => ['51' . Text::keep($sale->phone, '0123456789')],
                                'content' => 'Deseas realizar el pago por yape, plin o tarjeta?'
                            ]
                        ]);
                    }
                }
            } catch (\Throwable $th) {
            }
            try {
                if ($send2group)
                    new Fetch(env('WA_URL') . '/api/send', [
                        'method' => 'POST',
                        'headers' => [
                            'Content-Type' => 'application/json'
                        ],
                        'body' => [
                            'from' => env('APP_CORRELATIVE'),
                            'to' => [env('WAGROUP_VENTAS_ID')],
                            'content' => "Pedido `{$sale->code}`\n\n*Nombre*: {$sale->name} {$sale->lastname}\n*Dirección*: {$sale->address} {$sale->number}, {$address}\n*Correo electrónico*: {$sale->email}\n*Teléfono*: {$sale->phone}\n\n> " . $sale->created_at->format('Y-m-d H:i:s'),
                            'html' => $content
                        ]
                    ]);
            } catch (\Throwable $th) {
            }
        } catch (\Throwable $th) {
            //dump($th->getMessage());
        }
    }
}
