<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public $fillable = ['name', 'price', 'image', 'currency', 'user_id'];

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
