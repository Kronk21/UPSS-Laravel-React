<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
 */

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource("category", CategoryController::class);

Route::prefix("/products")->group(function () {
    Route::get("/", function () {
        return ProductResource::collection(Product::all());
    })->name("products.index");

    Route::get("/{product}", function (Product $product) {
        return new ProductResource($product);
    })->name("products.show");
});
