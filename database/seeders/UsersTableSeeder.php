<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        User::create([
            'name' => 'admin',
            'email' => 'admin_laravel@yopmail.com',
            'password' => Hash::make('admin_laravel_1'),
            'email_verified_at' => Carbon::now(),
        ]);
    }
}
