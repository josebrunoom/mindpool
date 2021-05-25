<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    protected $table = "posts";

    protected $fillable = [
        'foto',
        'titulo',
        'subtitulo',
        'likes',
    ];

    protected $casts = [
        'id' => 'integer',
    ];
}
