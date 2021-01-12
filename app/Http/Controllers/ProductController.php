<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Http\Resources\ProductResourceCollection;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{


    public function __construct()
    {
        $this->middleware(['auth:api'])->only(['store', 'destroy']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $products = Product::with('user')->orderByDesc('updated_at');

        if ($request->q) {
            $products = $products->where('name', 'like', '%' . $request->q . '%');
        }
        return new ProductResourceCollection($products->paginate(15));
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
        //
        $request->validate([
            "name" => "required",
            "currency" => "required",
            "price" => "required|numeric"
        ]);

        
        if ($request->hasFile('photo')) {
            $fileNameWithExt = $request->file('photo')->getClientOriginalName();
            //Get only file name
            $fileName = pathinfo($fileNameWithExt, PATHINFO_FILENAME);
            //File extension
            $extension = $request->file('photo')->getClientOriginalExtension();
            //File name to store
            $fileNameToStore = $fileName . '_' . time() . '.' . $extension;
            //Upload Image
            $path = $request->file('photo')->storeAs('img', $fileNameToStore);
        } else {
            $fileNameToStore = 'placeholder.png';
        }

        $request->request->add(['user_id' => Auth::Id()]);
        $request->request->add(['image' => $fileNameToStore]);

        Product::create($request->all());

        return response()->json([
            'message' => 'Successfully added'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
        return new ProductResource($product);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
        $request->validate([
            "name" => "required",
            "currency" => "required",
            "price" => "required|numeric"
        ]);

        $product->update($request->all());

        return response()->json([
            'message' => 'Successfully added'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //

        $this->authorize('delete', $product);

        $product->delete();

        return response()->json([
            'message' => 'Successfully deleted'
        ]);
    }
}
