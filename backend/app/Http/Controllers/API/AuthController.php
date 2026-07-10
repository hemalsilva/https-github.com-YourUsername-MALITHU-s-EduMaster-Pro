<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        if (!Auth::attempt($request->validated())) {
            return response()->json([
                'success'=>false,
                'message'=>'Invalid Credentials'
            ],401);
        }

        $user = Auth::user();
        $token = $user->createToken('edumaster')->plainTextToken;

        return response()->json([
            'success'=>true,
            'token'=>$token,
            'user'=>$user
        ]);
    }

    public function logout()
    {
        request()->user()->currentAccessToken()->delete();
        return response()->json([
            'success'=>true,
            'message'=>'Logged Out'
        ]);
    }
}
