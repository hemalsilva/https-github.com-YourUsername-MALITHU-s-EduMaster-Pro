import React from 'react';
import { Users, BookOpen, DollarSign, Clock } from 'lucide-react';

const stats = [
  { title: 'Total Students', value: '1,245', icon: Users, color: 'bg-blue-500' },
  { title: 'Active Classes', value: '42', icon: BookOpen, color: 'bg-indigo-500' },
  { title: 'Monthly Income', value: ',200', icon: DollarSign, color: 'bg-green-500' },
  { title: 'Pending Fees', value: ',400', icon: Clock, color: 'bg-red-500' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
          <p className="text-gray-500 mt-1">Welcome back! Here's what's happening today.</p>
        </div>
        <div className="text-sm bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-sm font-medium text-gray-600">
          {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center gap-4 transition-transform hover:-translate-y-1 duration-300">
            <div className={p-4 rounded-lg text-white }>
              <stat.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.title}</p>
              <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:col-span-2">
          <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Recent Payments</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                <tr>
                  <th className="px-4 py-3">Student</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i} className="border-b last:border-0 hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Student Name {i}</td>
                    <td className="px-4 py-3 text-green-600 font-semibold">.00</td>
                    <td className="px-4 py-3 text-gray-500">Today, 10:45 AM</td>
                    <td className="px-4 py-3">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Completed</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Notice Board</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                <div className="w-10 h-10 rounded bg-blue-100 flex-shrink-0 flex items-center justify-center text-primary font-bold">
                  {i}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">School Event Upcoming</h4>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">Please be informed that the annual sports meet will be held next week...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
