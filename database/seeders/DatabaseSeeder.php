<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Category;
use App\Models\Image;
use App\Models\Product;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create categories
        foreach (Category::$categories as $category) {
            Category::factory()->create([
                "title" => $category,
            ]);
        }

        // Create products
        $categories = Category::all();
        foreach ($categories as $category) {
            $number = random_int(10, 30);

            Product::factory($number)->create([
                "category_id" => $category->id,
            ]);
        }

        // Create images
        $products = Product::all();
        foreach ($products as $product) {
            Image::factory(4)->create([
                "product_id" => $product->id,
            ]);
        }

        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
