<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Posts;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Posts::create([
            'foto'      => 'verduras.png',
            'titulo'     => 'Lorem ipsum dolor sit amet, consectetur adipiscing?',
            'subtitulo'  => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio aliquam phasellus ipsum blandit non egestas eget sit.',
            'likes'  => 732,
        ]);

        Posts::create([
            'foto'      => 'ceu-vermelho.png',
            'titulo'     => 'Lorem ipsum dolor sit amet, consectetur.',
            'subtitulo'  => '',
            'likes'  => 1450,
        ]);

        Posts::create([
            'foto'      => 'manifestacao.png',
            'titulo'     => 'Lorem ipsum dolor sit amet, consectetur.',
            'subtitulo'  => '',
            'likes'  => 1450,
        ]);
    }
}
