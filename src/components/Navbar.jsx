
import { Bell } from "lucide-react";

function Navbar() {
  return (
    <div className="w-full">

      {/* 🔥 Top Bar */}
      <div className="bg-white dark:bg-[#020617] px-6 py-3 flex justify-between items-center transition-colors duration-300">
        
        {/* Left */}
        <Bell className="text-gray-600 dark:text-gray-400" size={20} />

        {/* Right */}
        <div className="text-right">
          <p className="text-sm text-gray-600 dark:text-gray-400">صيدلية كير بلس</p>
          <h2 className="text-black dark:text-white font-bold">لوحة التحكم</h2>
        </div>

      </div>

      {/* 🔥 Bottom Bar */}
      {/* <div className="bg-white dark:bg-[#0b1220] px-6 py-4 border-b border-black/10 dark:border-white/10 transition-colors duration-300">
        <h1 className="text-2xl font-bold text-black dark:text-white">لوحة التحكم</h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          نظرة عامة على المبيعات، المخزون، والتنبيهات
        </p>
      </div> */}

    </div>
  );
}

export default Navbar;