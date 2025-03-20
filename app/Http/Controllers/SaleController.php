<?php

namespace App\Http\Controllers;

use App\Jobs\SendSaleEmail;
use App\Jobs\SendSaleWhatsApp;
use App\Models\Sale;
use App\Models\Bundle;
use App\Models\Item;
use App\Models\Renewal;
use App\Models\SaleDetail;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use SoDe\Extend\Trace;
use SoDe\Extend\Array2;
use SoDe\Extend\Response;

class SaleController extends Controller
{
    static function create(array $sale, array $details): array
    {
        dump($sale, $details);
        try {
            $itemsJpa = Item::whereIn('id', array_map(fn($item) => $item['id'], $details))->get();

            foreach ($itemsJpa as $itemJpa) {
                $item = Array2::find($details, fn($item) => $item['id'] == $itemJpa->id);
                $itemJpa->final_price = $itemJpa->discount != 0
                    ? $itemJpa->discount
                    : $itemJpa->price;
                $itemJpa->quantity = $item['quantity'];
                $itemJpa->color = $item['color'];
                $itemJpa->size = $item['size'];
            }

            $saleJpa = new Sale();
            dump($itemsJpa);
            // Sale info
            $saleJpa->code = Trace::getId();
            //  $saleJpa->user_formula_id = $sale['user_formula_id'];
            $saleJpa->user_id = Auth::check() ? Auth::user()->id : null;
            $saleJpa->name = $sale['name'];
            $saleJpa->lastname = $sale['lastname'];
            $saleJpa->email = $sale['email'];
            $saleJpa->phone = $sale['phone'];
            $saleJpa->status_id = 'f13fa605-72dd-4729-beaa-ee14c9bbc47b';

            // Address info
            $saleJpa->country = $sale['country'];
            $saleJpa->department = $sale['department'];
            $saleJpa->province = $sale['province'];
            $saleJpa->district = $sale['district'];
            $saleJpa->zip_code = $sale['zip_code'];
            $saleJpa->address = $sale['address'];
            $saleJpa->number = $sale['number'];
            $saleJpa->reference = $sale['reference'];
            $saleJpa->comment = $sale['comment'];

            if (Auth::check()) {
                $userJpa = User::find(Auth::user()->id);
                $userJpa->phone = $sale['phone'];
                $userJpa->country = $sale['country'];
                $userJpa->department = $sale['department'];
                $userJpa->province = $sale['province'];
                $userJpa->district = $sale['district'];
                $userJpa->zip_code = $sale['zip_code'];
                $userJpa->address = $sale['address'];
                $userJpa->address_number = $sale['number'];
                $userJpa->address_reference = $sale['reference'];
                $userJpa->save();
            }

            // Sale Header
            $totalPrice = array_sum(array_map(
                fn($item) => $item['final_price'] * $item['quantity'],
                $itemsJpa->toArray()
            ));

            $totalItems = array_sum(array_map(fn($item) => $item['quantity'], $itemsJpa->toArray()));

            if (isset($sale['coupon']) && $sale['coupon']) {
                [$couponStatus, $couponJpa] = CouponController::verify(
                    $sale['coupon'],
                    $totalPrice,
                    $sale['email']
                );

                if (!$couponStatus) throw new Exception($couponJpa);

                $saleJpa->coupon_id = $couponJpa->id;
                if ($couponJpa->type == 'percentage') {
                    $saleJpa->coupon_discount = ($totalPrice) * ($couponJpa->amount / 100);
                } else {
                    $saleJpa->coupon_discount = $couponJpa->amount;
                }
            }

            $saleJpa->amount = $totalPrice;
            $saleJpa->delivery = 0; // Agregar lógica si es que se tiene precio por envío
            $saleJpa->save();

            $detailsJpa = array();
            foreach ($itemsJpa as $itemJpa) {
                $detailJpa = new SaleDetail();
                $detailJpa->sale_id = $saleJpa->id;
                $detailJpa->item_id = $itemJpa->id;
                $detailJpa->name = $itemJpa->name;
                $detailJpa->price = $itemJpa->final_price;
                $detailJpa->quantity = $itemJpa->quantity;
                $detailJpa->color = $itemJpa->color;
                $detailJpa->size = $itemJpa->size;
                $detailJpa->save();

                $detailsJpa[] = $detailJpa->toArray();
            }

            $saleToReturn = Sale::with(['details'])->find($saleJpa->id);

            return [true, $saleToReturn];
        } catch (\Throwable $th) {
            return [false, [
                'error' => $th->getMessage(),
                'file' => $th->getFile(),
                'line' => $th->getLine()
            ]];
        }
    }


    public function notify(Request $request)
    {
        $response = Response::simpleTryCatch(function () use ($request) {
            $sale = Sale::where('code', $request->code)->first();
            if (!$request->code) throw new Exception('No existe la venta');
            SendSaleWhatsApp::dispatchAfterResponse($sale, true, false);
            SendSaleEmail::dispatchAfterResponse($sale, true, false);
        });
        return response($response->toArray(), $response->status);
    }
}
