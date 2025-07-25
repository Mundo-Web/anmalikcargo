<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Translation extends Model
{
    use HasFactory, HasUuids;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'group',
        'key',
        'value',
        'lang_id',
        'visible',
        'status',
    ];

    public function lang()
    {
        return $this->belongsTo(Lang::class);
    }
}
