import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Truck,
  BarChart3,
  Users,
  Bell,
  Search,
  Settings,
  Shield,
} from "lucide-react";

function Sidebar() {
  const location = useLocation();

  const nav = [
    { to: "/", label: "لوحة التحكم", icon: LayoutDashboard },
    { to: "/pos", label: "الكاشير / بيع", icon: ShoppingCart },
    { to: "/inventory", label: "المخزن", icon: Package },
    { to: "/suppliers", label: "الموردين", icon: Truck },
    { to: "/search", label: "بحث", icon: Search },
    { to: "/reports", label: "التقارير", icon: BarChart3 },
    { to: "/notification", label: "الإشعارات", icon: Bell },
    { to: "/users", label: "المستخدمين", icon: Users },
{ to: "/daily-transactions", label: "المعاملات اليومية", icon: Shield },
    { to: "/settings", label: "الإعدادات", icon: Settings },
  ];

  return (
    <aside className="w-64 h-screen bg-white dark:bg-[#0b1220] text-black dark:text-white flex flex-col transition-colors duration-300">

      {/* Logo */}
      <div className="p-5 border-b border-black/10 dark:border-white/10">
        <h2 className="text-lg font-bold">صيدلية كير بلس</h2>
        <p className="text-xs text-gray-600 dark:text-gray-400">إدارة الصيدليات</p>
      </div>

      {/* Links */}
      <div className="flex-1 p-3 space-y-1">
        {nav.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.to;

          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center justify-between px-3 py-2 rounded-lg transition ${
                active
                ? "bg-blue-600 text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon size={18} />
                <span>{item.label}</span>
              </div>

              {/* icon صغير زي الصورة */}
              {active && <LayoutDashboard size={14} />}
            </Link>
          );
        })}
      </div>

    </aside>
  );
}

export default Sidebar;