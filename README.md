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

## Biometric Fingerprint Machine Integration
EduMaster Pro supports direct integration with ZKTeco and other standard biometric fingerprint machines over the network (TCP/IP).
- Pull real-time attendance logs directly from the device.
- Auto-sync users/staff to the machine.
- Triggers the same WhatsApp parent notifications as the QR Scanner.

## Virtual Classrooms (Zoom Integration)
EduMaster Pro features seamless API integration with Zoom for online learning.
- **Auto-Generate Meetings:** Teachers can schedule live classes directly from the ERP.
- **Student Access:** Students see a "Join Class" button in their portal.
- **Cloud Recordings:** Automatically fetch and publish Zoom cloud recordings to the student dashboard after the class concludes.
