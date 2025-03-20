<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\BasicController;
use App\Http\Controllers\Controller;
use App\Models\Ad;
use App\Models\Item;
use Illuminate\Http\Request;

class AdController extends BasicController
{
    public $model = Ad::class;
    public $reactView = 'Admin/Ads';
    public $imageFields = ['image'];

    public function setReactViewProperties(Request $request)
    {
        $items = Item::all();

        return [
            'items' => $items,

        ];
    }

    public function setPaginationInstance(string $model)
    {
        return $model::with('item');
    }
}
