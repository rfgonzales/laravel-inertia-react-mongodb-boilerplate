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
        'created_at',
    ];

    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = 'email'; // MongoDB uses '_id' by default but can use a custom primary key
}
