import React, { useState } from 'react';
import { User, Image, QrCode, Users, BookOpen, CreditCard, Clock, Save } from 'lucide-react';

export default function Students() {
  const [activeTab, setActiveTab] = useState('Admission');
  const tabs = [
    { id: 'Admission', icon: User },
    { id: 'Photo', icon: Image },
    { id: 'QR Code', icon: QrCode },
    { id: 'Parent', icon: Users },
    { id: 'Subjects', icon: BookOpen },
    { id: 'Payments', icon: CreditCard },
    { id: 'Attendance', icon: Clock },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Student Profile</h1>
          <p className="text-gray-500 mt-1">Manage student details, enrollment, and history.</p>
        </div>
        <button className="bg-secondary text-primary font-bold py-2 px-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-2">
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
          {activeTab === 'Admission' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Admission No</label>
                <input type="text" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="STU-2024-001" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                <input type="text" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Grade</label>
                <select className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>Grade 10</option>
                  <option>Grade 11</option>
                  <option>Grade 12</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">School</label>
                <input type="text" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Royal College" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Medical Conditions</label>
                <textarea className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent" rows={3} placeholder="Any known allergies or medical conditions..."></textarea>
              </div>
            </div>
          )}
          
          {activeTab === 'QR Code' && (
            <div className="flex flex-col items-center justify-center h-full py-12">
              <div className="w-48 h-48 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center mb-4">
                <QrCode className="h-16 w-16 text-gray-400" />
              </div>
              <button className="text-primary font-medium hover:underline">Generate New QR Code</button>
            </div>
          )}
          
          {activeTab !== 'Admission' && activeTab !== 'QR Code' && (
            <div className="flex items-center justify-center h-full py-12 text-gray-400">
              <p>{activeTab} module content will be displayed here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
