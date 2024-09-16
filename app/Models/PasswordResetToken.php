<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class PasswordResetToken extends Model
{
    /**
     * The MongoDB connection name.
     *
     * @var string
     */
    protected $connection = 'mongodb';

    /**
     * The MongoDB collection name.
     *
     * @var string
     */
    protected $collection = 'password_reset_tokens';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'email',
        'token',

    ];

    protected function casts(): array
    {
        return [
            'created_at' => 'datetime:Y-m-d H:i:s',
        ];
    }


    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = 'email'; // MongoDB uses '_id' by default but can use a custom primary key
}
