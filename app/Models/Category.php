<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    public static array $categories = ["Audifonos", "Baterias", "Memorias", "Modems", "Cables", "Camaras de Seguridad", "Bocinas"];

    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
