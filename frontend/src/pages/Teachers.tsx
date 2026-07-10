import React, { useState } from 'react';
import { User, Clock, DollarSign, BookOpen, Calendar, Save } from 'lucide-react';

export default function Teachers() {
  const [activeTab, setActiveTab] = useState('Profile');
  const tabs = [
    { id: 'Profile', icon: User },
    { id: 'Attendance', icon: Clock },
    { id: 'Salary', icon: DollarSign },
    { id: 'Subjects', icon: BookOpen },
    { id: 'Timetable', icon: Calendar },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Teacher Management</h1>
          <p className="text-gray-500 mt-1">Manage teacher records, subjects, and payroll.</p>
        </div>
        <button className="bg-primary text-white font-bold py-2 px-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-2">
          <Save className="h-4 w-4" /> Save Profile
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex border-b border-gray-200 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={lex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors whitespace-nowrap }
            >
              <tab.icon className="h-4 w-4" />
              {tab.id}
            </button>
          ))}
        </div>

        <div className="p-6 min-h-[400px]">
          {activeTab === 'Profile' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Employee No</label>
                <input type="text" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="TCH-001" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="Jane Smith" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Qualifications</label>
                <input type="text" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="BSc. Mathematics, PGDE" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent" placeholder="jane@edumaster.com" />
              </div>
            </div>
          )}
          
          {activeTab !== 'Profile' && (
            <div className="flex items-center justify-center h-full py-12 text-gray-400">
              <p>{activeTab} module content will be displayed here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
