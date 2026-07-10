# MALITHU's EduMaster Pro ERP

A Professional Tuition Institute Management System.

## Features

- Student Management
- Parent Portal
- Teacher Management
- Staff Management
- QR Attendance
- WhatsApp Notifications
- Online Payments
- Homework
- Exams
- Reports
- Dashboard
- Inventory
- Salary Management

## Technology

- **Backend:** Laravel 12
- **Frontend:** React + Vite
- **Database:** MySQL
- **Authentication:** Laravel Sanctum
- **Permissions:** Spatie Permission

## Installation

### Backend

`ash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
`

### Frontend

`ash
cd frontend
npm install
npm run dev
`

## System Modules & Tables

**Core Entities**
- users, roles, permissions, notifications, audit_logs, settings

**Academic**
- students, parents, teachers, staff, subjects, grades, classes, student_classes
- attendance, homework, exams, exam_results

**Finance & Operations**
- payments, payment_methods, receipts, expenses, salary, inventory

## Defined Roles
Super Admin, Admin, Manager, Reception, Cashier, Teacher, Parent, Student

## Notification Triggers
The system automatically sends WhatsApp/Email notifications for:
- Admission
- Attendance (Arrival)
- Payment Received
- Payment Reminder
- Homework
- Exam Reminder
- Birthday Wishes
- Holiday Notice

## QR Attendance Workflow
1. Student Arrives
2. Reception Opens Scanner module
3. Scan Student QR Code
4. Attendance Saved in database
5. WhatsApp notification automatically sent to Parent
6. Dashboard statistics updated in real-time
