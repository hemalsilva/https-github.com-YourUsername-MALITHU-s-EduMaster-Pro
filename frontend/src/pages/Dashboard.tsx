import React from "react";
import { Users, BookOpen, DollarSign, Clock } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Overview</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Students", value: "2,450", icon: Users, color: "bg-blue-500" },
          { label: "Active Classes", value: "45", icon: BookOpen, color: "bg-secondary" },
          { label: "Monthly Income", value: "Rs. 4.2M", icon: DollarSign, color: "bg-green-500" },
          { label: "Pending Fees", value: "Rs. 1.1M", icon: Clock, color: "bg-red-500" },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
            <div className={`p-4 rounded-lg text-white ${stat.color}`}>
              <stat.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Revenue Overview</h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-200">
            <p className="text-gray-500">Revenue Chart Placeholder</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Notice Board</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-l-4 border-secondary pl-4 py-2">
                <p className="text-sm font-medium text-gray-800">Term Test Schedule Update</p>
                <p className="text-xs text-gray-500 mt-1">Today, 09:00 AM</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
