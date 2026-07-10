<?php

namespace App\Http\Controllers;

use App\Models\Exam;
use App\Models\ExamResult;
use Illuminate\Http\Request;

class ExamController extends Controller
{
    public function index()
    {
        return response()->json(Exam::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'class_id' => 'required|exists:classes,id',
            'subject_id' => 'required|exists:subjects,id',
            'title' => 'required|string',
            'exam_date' => 'required|date',
        ]);
        
        $exam = Exam::create($validated);
        return response()->json($exam, 201);
    }

    public function storeResults(Request $request, $exam_id)
    {
        // Mass assign results logic
    }
}
