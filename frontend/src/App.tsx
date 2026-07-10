import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Teachers from './pages/Teachers';
import Attendance from './pages/Attendance';
import Payments from './pages/Payments';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/settings" element={<Settings />} />
          
          {/* Phase 2 Placeholders */}
          <Route path="/parents" element={<div className="p-6 text-2xl font-bold text-gray-800">Parents Directory</div>} />
          <Route path="/staff" element={<div className="p-6 text-2xl font-bold text-gray-800">Staff Management</div>} />
          <Route path="/subjects" element={<div className="p-6 text-2xl font-bold text-gray-800">Subjects Module</div>} />
          <Route path="/classes" element={<div className="p-6 text-2xl font-bold text-gray-800">Classes Module</div>} />
          <Route path="/reports" element={<div className="p-6 text-2xl font-bold text-gray-800">Reports (Income, Attendance)</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;