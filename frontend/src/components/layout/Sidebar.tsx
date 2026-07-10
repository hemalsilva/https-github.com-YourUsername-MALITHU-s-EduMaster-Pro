import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, UserPlus, BookOpen, GraduationCap, Clock, CreditCard, FileText, Settings, Book } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { path: "/dashboard", name: "Dashboard", icon: LayoutDashboard },
    { path: "/students", name: "Students", icon: Users },
    { path: "/parents", name: "Parents", icon: UserPlus },
    { path: "/teachers", name: "Teachers", icon: GraduationCap },
    { path: "/staff", name: "Staff", icon: Users },
    { path: "/subjects", name: "Subjects", icon: Book },
    { path: "/classes", name: "Classes", icon: BookOpen },
    { path: "/attendance", name: "Attendance", icon: Clock },
    { path: "/payments", name: "Payments", icon: CreditCard },
    { path: "/reports", name: "Reports", icon: FileText },
    { path: "/settings", name: "Settings", icon: Settings },
  ];

  return (
    <div className="w-64 bg-[#0B3C5D] min-h-screen p-4 text-white">
      <div className="flex items-center gap-2 mb-8 px-2">
        <BookOpen className="h-8 w-8 text-[#D4AF37]" />
        <span className="text-xl font-bold font-['Inter']">MALITHU's EduMaster Pro</span>
      </div>
      
      <nav className="space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive 
                  ? "bg-[#D4AF37] text-[#0B3C5D] font-semibold" 
                  : "hover:bg-white/10"
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
