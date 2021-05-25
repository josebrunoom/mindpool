<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Exception;
use App\Posts;

class PostsController extends Controller
{
    public function index()
    {
        try
        {
            $Posts = Posts::all();

            return response()->json($Posts, 200);
        }
        catch (MazeException $e)
        {
            throw $e;
        }
        catch (Exception $e)
        {
            Log::error($e);
            throw new Excpetion('Não foi possível listar os posts', 500);
        }
    }
    
    public function like($id)
    {
		try {
            if(!$Post = Posts::find($id))
            {
                throw new MazeException('Post não encontrado.', 404);
            }

            $Post->increment('likes');

            return response()->json($Post, 200);
        }
        catch (MazeException $e)
        {
            throw $e;
        }
        catch (Exception $e)
        {
            Log::error($e);
            throw new MazeException('Não foi possível listar as chaves', 500);
        }
    }
}
