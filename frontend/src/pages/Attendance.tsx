import React, { useState } from "react";
import { Camera, CheckCircle, XCircle, Search, Clock, MessageSquare } from "lucide-react";

export default function Attendance() {
  const [scanStatus, setScanStatus] = useState<"idle" | "success" | "error">("idle");
  const [admissionNo, setAdmissionNo] = useState("");

  const handleManualMark = (e: React.FormEvent) => {
    e.preventDefault();
    if (admissionNo) {
      setScanStatus("success");
      setTimeout(() => setScanStatus("idle"), 3000);
      setAdmissionNo("");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Attendance Scanner</h1>
        <p className="text-gray-500 mt-1">Live QR scanning and manual entry terminal.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Side: Scanner */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center">
          <div className={`w-full max-w-sm aspect-square bg-gray-50 rounded-2xl border-4 flex flex-col items-center justify-center transition-colors ${
            scanStatus === "success" ? "border-green-500" : 
            scanStatus === "error" ? "border-red-500" : "border-gray-200 border-dashed"
          }`}>
            {scanStatus === "success" ? (
              <div className="text-center">
                <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-4" />
                <p className="text-xl font-bold text-green-600">Scan Successful!</p>
                <p className="text-sm text-green-500 mt-1">WhatsApp Sent</p>
              </div>
            ) : scanStatus === "error" ? (
              <div className="text-center">
                <XCircle className="h-20 w-20 text-red-500 mx-auto mb-4" />
                <p className="text-xl font-bold text-red-600">Invalid QR</p>
              </div>
            ) : (
              <div className="text-center text-gray-400">
                <Camera className="h-16 w-16 mx-auto mb-4" />
                <p>Awaiting QR Scan...</p>
              </div>
            )}
          </div>

          <div className="mt-8 w-full max-w-sm">
            <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">OR MANUAL ENTRY</span>
                <div className="flex-grow border-t border-gray-200"></div>
            </div>
            
            <form onSubmit={handleManualMark} className="flex gap-2">
              <input 
                type="text" 
                value={admissionNo}
                onChange={(e) => setAdmissionNo(e.target.value)}
                placeholder="Enter Admission No" 
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent" 
              />
              <button type="submit" className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90">
                Mark
              </button>
            </form>
          </div>
        </div>

        {/* Right Side: Live Feed */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col h-[600px]">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5 text-secondary" /> Live Activity Feed
          </h2>
          
          <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div>
                  <p className="font-bold text-gray-800">STU-2024-00{i}</p>
                  <p className="text-sm text-gray-500">Grade {9 + i} • Mathematics</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400 font-medium">Just now</p>
                  <div className="flex items-center gap-1 text-green-600 mt-1">
                    <MessageSquare className="h-3 w-3" />
                    <span className="text-xs font-medium">Sent</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}