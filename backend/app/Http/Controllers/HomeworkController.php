<?php

namespace App\Http\Controllers;

use App\Models\Homework;
use Illuminate\Http\Request;

class HomeworkController extends Controller
{
    public function index()
    {
        return response()->json(Homework::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'class_id' => 'required|exists:classes,id',
            'teacher_id' => 'required|exists:teachers,id',
            'title' => 'required|string',
            'due_date' => 'required|date',
        ]);
        
        $hw = Homework::create($validated);
        return response()->json($hw, 201);
    }
}
