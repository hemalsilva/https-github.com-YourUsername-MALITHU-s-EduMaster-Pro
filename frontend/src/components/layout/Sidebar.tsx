import React from 'react';
import { Home, Users, BookOpen, Clock, CreditCard, FileText, Settings, LogOut, GraduationCap, Building } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/dashboard' },
  { icon: GraduationCap, label: 'Students', path: '/students' },
  { icon: Users, label: 'Parents', path: '/parents' },
  { icon: BookOpen, label: 'Teachers', path: '/teachers' },
  { icon: Building, label: 'Staff', path: '/staff' },
  { icon: BookOpen, label: 'Subjects', path: '/subjects' },
  { icon: Clock, label: 'Classes', path: '/classes' },
  { icon: Clock, label: 'Attendance', path: '/attendance' },
  { icon: CreditCard, label: 'Payments', path: '/payments' },
  { icon: FileText, label: 'Reports', path: '/reports' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="bg-primary text-white w-64 min-h-screen flex flex-col shadow-xl">
      <div className="p-6 flex items-center gap-3 border-b border-blue-900">
        <span className="text-secondary text-2xl font-bold">?</span>
        <h1 className="text-xl font-bold">MALITHU's EduMaster Pro</h1>
      </div>
      <nav className="flex-1 py-4">
        <ul className="space-y-1 px-3">
          {menuItems.map((item, index) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <li key={index}>
                <Link
                  to={item.path}
                  className={lex items-center gap-3 px-4 py-3 rounded-lg transition-colors }
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="p-4 border-t border-blue-900">
        <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-900 text-gray-300 hover:text-white transition-colors">
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Logout</span>
        </Link>
      </div>
    </div>
  );
}
