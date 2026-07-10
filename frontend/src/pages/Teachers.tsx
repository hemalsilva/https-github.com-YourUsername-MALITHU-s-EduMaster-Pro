import React, { useState } from "react";
import { User, Clock, DollarSign, BookOpen, Calendar, Save } from "lucide-react";

export default function Teachers() {
  const [activeTab, setActiveTab] = useState("Profile");
  const tabs = [
    { id: "Profile", icon: User },
    { id: "Attendance", icon: Clock },
    { id: "Salary", icon: DollarSign },
    { id: "Subjects", icon: BookOpen },
    { id: "Timetable", icon: Calendar },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Teacher Management</h1>
          <p className="text-gray-500 mt-1">Manage teacher records.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex border-b border-gray-200 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? "border-b-2 border-secondary text-primary bg-gray-50/50"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.id}
            </button>
          ))}
        </div>
        <div className="p-6 min-h-[400px]">
          <div className="flex items-center justify-center h-full py-12 text-gray-400">
            <p>{activeTab} module content.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
