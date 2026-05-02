import { Shield, FileText, Printer } from "lucide-react";

function DailyTransactions() {
  const invoices = [
    {
      id: "#Z705X1FH9YSJ",
      total: "15.00 ج.م",
      cashier: "الكاشير المدير",
      date: "2026-04-27 03:27",
    },
  ];

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="text-right space-y-2">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2 justify-end">
          <Shield size={20} />
          مركز الإدارة والمراقبة
        </h1>

        <p className="text-gray-400 text-sm">
          تتبع مفصل لنشاط الموظفين وحركة المبيعات والمرتجعات
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 text-sm border-b border-white/10 pb-2 justify-end">
        <span className="text-white border-b-2 border-white pb-1 cursor-pointer">
          المبيعات اليومية
        </span>
        <span className="text-gray-400 cursor-pointer">المرتجعات</span>
        <span className="text-gray-400 cursor-pointer">حضور الموظفين</span>
        <span className="text-gray-400 cursor-pointer">إغلاق اليوم</span>
        <span className="text-gray-400 cursor-pointer">سجلات النظام</span>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="...بحث باسم الموظف أو الحدث"
        className="w-full bg-[#020617] border border-white/10 rounded-xl px-4 py-3 text-white outline-none"
      />

      {/* Stats */}
      <div className="grid md:grid-cols-2 gap-4">

        <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-5 text-right">
          <p className="text-gray-400 text-sm">إجمالي الإيرادات</p>
          <h2 className="text-2xl font-bold text-white mt-2">
            15.00 ج.م
          </h2>
        </div>

        <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-5 text-right">
          <p className="text-gray-400 text-sm">عدد فواتير اليوم</p>
          <h2 className="text-2xl font-bold text-white mt-2">
            1
          </h2>
        </div>

      </div>

      {/* Invoices */}
      <div className="space-y-3">

        {invoices.map((inv, i) => (
          <div
            key={i}
            className="bg-[#0f172a] border border-white/10 rounded-2xl p-5 flex justify-between items-center hover:bg-white/5 transition"
          >

            {/* Right (info) */}
            <div className="text-right space-y-1">
              <p className="text-white font-semibold">
                فاتورة {inv.id}
              </p>

              <p className="text-gray-400 text-sm">
                {inv.cashier}
              </p>
            </div>

            {/* Left (price + actions) */}
            <div className="flex items-center gap-4">

              <div className="text-right">
                <p className="text-white font-bold">
                  {inv.total}
                </p>
                <p className="text-gray-400 text-xs">
                  {inv.date}
                </p>
              </div>

              <div className="flex gap-2">
                <button className="bg-white/10 p-2 rounded-lg hover:bg-white/20">
                  <Printer size={16} />
                </button>

                <button className="bg-white/10 p-2 rounded-lg hover:bg-white/20">
                  <FileText size={16} />
                </button>
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default DailyTransactions;