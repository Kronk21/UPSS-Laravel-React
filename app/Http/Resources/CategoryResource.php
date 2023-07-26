<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "title" => $this->title,
            "description" => $this->description,
            "products" => $this->when(
                request()->has("with_products"),
                function () {
                    return ProductResource::collection($this->products);
                }
            ),
            // "products" => ProductResource::collection($this->products()->get()),
        ];
    }
}
