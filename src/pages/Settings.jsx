import { Sun, Moon, Shield, Upload, Download, RotateCcw } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Settings() {
  const { dark, setDark } = useTheme();

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");

    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDark(!dark);
  };

  
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="text-right">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          الإعدادات
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          تفضيلات النظام، النسخ الاحتياطي، والأمان
        </p>
      </div>

      {/* Theme */}
      <div className="bg-white dark:bg-[#0f172a] border border-black/10 dark:border-white/10 rounded-2xl p-6 flex justify-between items-center">

        {/* Right */}
        <div className="text-right space-y-1">
          <h2 className="text-black dark:text-white font-bold">
            المظهر
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            السمة (Theme) — التبديل بين الوضع الليلي والنهاري
          </p>
        </div>

        {/* Left */}
        <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-lg"
>
  {dark ? "الوضع النهاري" : "الوضع الليلي"}
</button>

      </div>

      {/* Security */}
      <div className="bg-white dark:bg-[#0f172a] border border-black/10 dark:border-white/10 rounded-2xl p-6 flex justify-between items-center">

        {/* Right */}
        <div className="text-right space-y-2">
          <h2 className="text-black dark:text-white font-bold flex items-center gap-2 justify-end">
            <Shield size={16} />
            أمان المدير
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-sm">
            تم تعيين الرمز (PIN)
          </p>

          <div className="text-sm text-gray-700 dark:text-gray-300">
            <p>admin@pharmacy.com</p>
            <p>+201000000000</p>
          </div>
        </div>

        {/* Left */}
        <button className="bg-gray-100 dark:bg-[#020617] border border-black/10 dark:border-white/10 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition">
          إعادة تعيين الرمز
        </button>

      </div>

      {/* Backup */}
      <div className="bg-white dark:bg-[#0f172a] border border-black/10 dark:border-white/10 rounded-2xl p-6 space-y-4">

        <h2 className="text-black dark:text-white font-bold text-right">
          النسخ الاحتياطي والاستعادة
        </h2>

        <div className="flex gap-3 flex-wrap justify-end">

          <button className="bg-red-500 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-600 transition text-white">
            <RotateCcw size={16} />
            إعادة ضبط النظام (حذف الكل)
          </button>

          <button className="bg-gray-100 dark:bg-[#020617] border border-black/10 dark:border-white/10 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-white/10 transition">
            <Upload size={16} />
            استعادة من ملف
          </button>

          <button className="bg-gray-100 dark:bg-[#020617] border border-black/10 dark:border-white/10 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-white/10 transition">
            <Download size={16} />
            تحميل نسخة (JSON)
          </button>

        </div>

      </div>

    </div>
  );
}

export default Settings;