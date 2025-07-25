<?php

namespace App\Http\Controllers;

use App\Models\Facility;
use App\Models\General;
use App\Models\LandingHome;
use App\Models\Social;
use App\Models\Staff;
use Illuminate\Http\Request;

class ContactController extends BasicController
{
    public $reactView = 'Contacto';
    public $reactRootView = 'public';

    public function setReactViewProperties(Request $request)
    {
        $langId = app('current_lang_id');
        $landing = LandingHome::where('correlative', 'like', 'page_contact%')->where('lang_id', $langId)->get();
        $sedes = Facility::where('visible', true)->where('status', true)->where('lang_id', $langId)->get();

        $staff = Staff::where('visible', true)
            ->where('status', true)
            ->whereNotIn('job', ['Director', 'Directora'])
            ->where('lang_id', $langId)
            ->latest()
            ->take(3)
            ->get();
        $whatsapp = Social::where('status', true)->where('visible', true)->where('description', '=', 'WhatsApp')->first();
        return [
            'landing' => $landing,
            'sedes' => $sedes,
            'whatsapp' => $whatsapp,
            'staff' => $staff,
        ];
    }
}
