<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exam extends Model
{
    use HasFactory;

    protected $fillable = [
        'class_id',
        'subject_id',
        'title',
        'exam_date',
        'total_marks',
        'is_published'
    ];
}
