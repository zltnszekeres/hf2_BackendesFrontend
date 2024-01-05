<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Song>
 */
class SongFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake('hu_HU')->realText(15),
            'name' => fake('hu_HU')->realText(15), 
            'date' => fake()->dateTimeBetween('2000-01-01', '2023-10-10'),
            
        ];
    }
}
