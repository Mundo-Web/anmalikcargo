<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimony extends Model
{
    use HasFactory, HasUuids;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'name',
        'correlative',
        'description',
        'visible',
        'status',
        'image',
        'lang_id',
        'case'

    ];
    public function lang()
    {
        return $this->belongsTo(Lang::class);
    }
}
