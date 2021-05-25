<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class postController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getposts(Request $request)
    {
        $page = $request->page;
        $posts = Post::orderBy('updated_at', 'DESC')->skip(0)->take($page)->get();
        return response() -> json(['status' => 200,'page'=>$page, 'posts' => $posts]);
    }

    public function index()
    {
        $posts = Post::orderBy('updated_at', 'DESC')->limit(6)->get();
        return response() -> json(['status' => 200, 'posts' => $posts]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $newPost = Post::create([
            'title' => $request->title,
            'type' => $request->type,
            'description' => $request->description,
            'tags' => json_encode($request->tags),
        ]);
        if($newPost){
            return response()->json(["status" => 200]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $posts = Post::find($id);
        return response()->json(['status' => 200, 'posts' => $posts]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $posts = Post::find($id);
        $posts->title = $request->title;
        $posts->type = $request->type;
        $posts->description = $request->description;
        $posts->tags = json_encode($request->tags);
        if($posts -> save()){
            return response()->json(["status" => 200]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $posts = Post::find($id);
        if($posts -> delete()){
            return response()->json(["status" => 200]);
        }
    }
}
