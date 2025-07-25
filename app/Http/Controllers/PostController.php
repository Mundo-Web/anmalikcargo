<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;

class PostController extends PublicController
{
    public $model = Post::class;
    public $prefix4filter = 'posts';

    public function setPaginationInstance(string $model)
    {

        return $model::select(['posts.*'])
            ->with(['category'])
            ->join('categories AS category', 'category.id', 'posts.category_id')
            ->where('posts.status', true)
            ->where('category.status', true);
    }
}
