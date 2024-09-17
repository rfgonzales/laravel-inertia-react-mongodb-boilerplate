<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;
use Carbon\Carbon;

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
        'updated_at',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $dates = [
        'created_at',
        'updated_at',
    ];

    /**
     * Custom date format handling.
     *
     * @param  string  $value
     * @return \Carbon\Carbon
     */
    // public function getCreatedAtAttribute($value)
    // {
    //     // Convert MongoDB UTCDate to Carbon instance
    //     return $value instanceof \MongoDB\BSON\UTCDateTime
    //         ? Carbon::createFromTimestampMs($value->toDateTime()->getTimestampMs())
    //         : Carbon::parse($value);
    // }

    // public function getUpdatedAtAttribute($value)
    // {
    //     // Convert MongoDB UTCDate to Carbon instance
    //     return $value instanceof \MongoDB\BSON\UTCDateTime
    //         ? Carbon::createFromTimestampMs($value->toDateTime()->getTimestampMs())
    //         : Carbon::parse($value);
    // }

    public static function createToken($email, $token)
    {
        return self::create([
            'email' => $email,
            'token' => $token,
            'created_at' => Carbon::now(), // Ensure created_at is set
        ]);
    }

    public function recentlyCreatedToken($user)
    {
        return $this->where('email', $user->email)
            ->where('created_at', '>=', Carbon::now()->subMinutes(30))
            ->exists();
    }

    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = '_id'; // MongoDB uses '_id' by default
}
