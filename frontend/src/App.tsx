import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Teachers from './pages/Teachers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/parents" element={<div className="p-6 text-2xl font-bold text-gray-800">Parents Module</div>} />
          <Route path="/staff" element={<div className="p-6 text-2xl font-bold text-gray-800">Staff Module</div>} />
          <Route path="/subjects" element={<div className="p-6 text-2xl font-bold text-gray-800">Subjects Module</div>} />
          <Route path="/classes" element={<div className="p-6 text-2xl font-bold text-gray-800">Classes Module</div>} />
          <Route path="/attendance" element={<div className="p-6 text-2xl font-bold text-gray-800">Camera Scan & Attendance Workflow</div>} />
          <Route path="/payments" element={<div className="p-6 text-2xl font-bold text-gray-800">Cash, Card, PayHere & Invoicing</div>} />
          <Route path="/reports" element={<div className="p-6 text-2xl font-bold text-gray-800">Reports (Income, Attendance)</div>} />
          <Route path="/settings" element={<div className="p-6 text-2xl font-bold text-gray-800">Settings (Roles, Backups, Audit Logs)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
