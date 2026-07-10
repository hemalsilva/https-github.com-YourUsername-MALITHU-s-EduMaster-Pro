import React from "react";
import { Settings as SettingsIcon, Shield, Cloud, Smartphone, Video } from "lucide-react";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">System Configuration</h1>
          <p className="text-gray-500 mt-1">Manage API keys, roles, and automated backups.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
          <h2 className="text-lg font-bold text-primary flex items-center gap-2 border-b pb-2"><Smartphone className="h-5 w-5 text-secondary" /> WhatsApp API Settings</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">API Endpoint URL</label>
            <input type="text" className="w-full rounded-lg border border-gray-300 px-4 py-2" defaultValue="https://api.whatsapp.com/v1/" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Access Token</label>
            <input type="password" className="w-full rounded-lg border border-gray-300 px-4 py-2" defaultValue="****************" />
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium">Save API Config</button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
          <h2 className="text-lg font-bold text-primary flex items-center gap-2 border-b pb-2"><Video className="h-5 w-5 text-secondary" /> Virtual Classrooms (Zoom)</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Client ID</label>
            <input type="text" className="w-full rounded-lg border border-gray-300 px-4 py-2" defaultValue="zoom_abc123" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Client Secret</label>
            <input type="password" className="w-full rounded-lg border border-gray-300 px-4 py-2" defaultValue="****************" />
          </div>
          <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium">Save API Config</button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
          <h2 className="text-lg font-bold text-primary flex items-center gap-2 border-b pb-2"><Cloud className="h-5 w-5 text-secondary" /> Cloud Backups (OneDrive)</h2>
          <p className="text-sm text-gray-600">Daily database backups are scheduled automatically via Laravel Scheduler.</p>
          <div className="flex gap-4">
             <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium">Trigger Manual Backup</button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
          <h2 className="text-lg font-bold text-primary flex items-center gap-2 border-b pb-2"><Shield className="h-5 w-5 text-secondary" /> Role & Permissions</h2>
          <p className="text-sm text-gray-600">Configure access levels using Spatie RBAC.</p>
          <button className="border border-primary text-primary px-4 py-2 rounded-lg font-medium hover:bg-gray-50">Manage Roles</button>
        </div>
      </div>
    </div>
  );
}