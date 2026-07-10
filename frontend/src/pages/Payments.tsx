import React, { useState } from "react";
import { CreditCard, DollarSign, Search, FileText, Download } from "lucide-react";

export default function Payments() {
  const [activeTab, setActiveTab] = useState("Collect");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Fees & Payments</h1>
          <p className="text-gray-500 mt-1">Process transactions and generate invoices.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex border-b border-gray-200 overflow-x-auto">
          <button onClick={() => setActiveTab("Collect")} className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors ${activeTab === "Collect" ? "border-b-2 border-secondary text-primary bg-gray-50" : "text-gray-500"}`}>
            <DollarSign className="h-4 w-4" /> Collect Fee
          </button>
          <button onClick={() => setActiveTab("History")} className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors ${activeTab === "History" ? "border-b-2 border-secondary text-primary bg-gray-50" : "text-gray-500"}`}>
            <FileText className="h-4 w-4" /> Transaction History
          </button>
        </div>

        <div className="p-6 min-h-[500px]">
          {activeTab === "Collect" && (
            <div className="max-w-2xl mx-auto space-y-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input type="text" placeholder="Search by Admission No or Student Name..." className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent" />
              </div>
              
              <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100">
                <h3 className="font-bold text-lg text-primary mb-4">Payment Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Fee Type</label>
                    <select className="w-full rounded-lg border border-gray-300 px-4 py-2">
                      <option>Monthly Tuition Fee</option>
                      <option>Admission Fee</option>
                      <option>Exam Fee</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Amount (Rs.)</label>
                    <input type="number" defaultValue={2500} className="w-full rounded-lg border border-gray-300 px-4 py-2 font-mono text-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer p-3 border rounded-lg flex-1 justify-center hover:bg-gray-50 border-secondary ring-1 ring-secondary">
                        <input type="radio" name="method" defaultChecked className="hidden" />
                        <span>Cash</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer p-3 border rounded-lg flex-1 justify-center hover:bg-gray-50">
                        <input type="radio" name="method" className="hidden" />
                        <CreditCard className="h-4 w-4" />
                        <span>Card</span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <button className="w-full mt-6 bg-secondary text-primary font-bold py-3 rounded-lg hover:bg-opacity-90 transition-colors">
                  Process Payment & Generate Invoice
                </button>
              </div>
            </div>
          )}

          {activeTab === "History" && (
            <div>
               <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-600 text-sm border-b">
                    <th className="p-4 font-medium">Invoice No</th>
                    <th className="p-4 font-medium">Student</th>
                    <th className="p-4 font-medium">Date</th>
                    <th className="p-4 font-medium">Method</th>
                    <th className="p-4 font-medium text-right">Amount</th>
                    <th className="p-4 font-medium text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3].map((i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50/50">
                      <td className="p-4 font-mono text-sm">INV-240{i}</td>
                      <td className="p-4">STU-2024-00{i}</td>
                      <td className="p-4 text-sm text-gray-500">Today, 10:{10 + i} AM</td>
                      <td className="p-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">Cash</span></td>
                      <td className="p-4 text-right font-medium">Rs. 2,500.00</td>
                      <td className="p-4 text-center">
                        <button className="text-primary hover:text-blue-800"><Download className="h-4 w-4 mx-auto" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}