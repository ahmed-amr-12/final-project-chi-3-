import { Download } from "lucide-react";

function Reports() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">التقارير والإحصائيات</h1>
        <p className="text-gray-400 text-sm">
          تتبع المبيعات، تحليل الأرباح، وتقفيل اليومية
        </p>
      </div>

      {/* 🔥 Today's Sales */}
      <div className="bg-[#111827] border border-white/10 rounded-2xl p-5 space-y-4">

        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">0 عملية بيع</span>
          <h2 className="text-white font-bold">مبيعات اليوم الحالية</h2>
        </div>

        {/* Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <Box title="كاش" value="0.00" />
          <Box title="فيزا" value="0.00" />
          <Box title="محفظة" value="0.00" />
          <Box title="تأمين" value="0.00" />

        </div>

        {/* Total */}
        <div className="flex justify-between items-center border-t border-white/10 pt-4">
          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg opacity-60">
            تقفيل اليومية (مطلوب رمز)
          </button>

          <div className="text-right">
            <p className="text-gray-400 text-sm">إجمالي مبيعات اليوم</p>
            <h2 className="text-white text-2xl font-bold">ج.م 0.00</h2>
          </div>
        </div>

      </div>

      {/* 🔥 Previous Reports */}
      <div className="bg-[#111827] border border-white/10 rounded-2xl p-5 space-y-5">

        {/* Top */}
        <div className="flex justify-between items-center">

          {/* Filters */}
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-white text-black rounded-lg text-sm">
              يومي
            </button>
            <button className="px-3 py-1 bg-white/10 text-gray-300 rounded-lg text-sm">
              أسبوعي
            </button>
            <button className="px-3 py-1 bg-white/10 text-gray-300 rounded-lg text-sm">
              شهري
            </button>
          </div>

          <h2 className="text-white font-bold">التقارير السابقة</h2>

        </div>

        {/* Export */}
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-lg text-sm">
            PDF <Download size={14} />
          </button>

          <button className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-lg text-sm">
            CSV <Download size={14} />
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-4">

          <SmallBox title="إجمالي المبيعات" value="0.00" />
          <SmallBox title="الأرباح" value="0.00" />
          <SmallBox title="عدد العمليات" value="0" />

        </div>

        {/* Chart Placeholder */}
        <div className="h-40 border border-dashed border-white/10 rounded-xl flex items-center justify-center text-gray-500">
          لا يوجد بيانات
        </div>

        {/* Table */}
        <div className="bg-[#0b1220] border border-white/10 rounded-xl overflow-hidden">

          <table className="w-full text-sm text-right">

            <thead className="text-gray-400 border-b border-white/10">
              <tr>
                <th className="p-3">التاريخ</th>
                <th className="p-3">المبيعات</th>
                <th className="p-3">الربح</th>
                <th className="p-3">عدد العمليات</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colSpan="4" className="text-center p-6 text-gray-500">
                  لا يوجد بيانات لهذه الفترة
                </td>
              </tr>
            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

/* Components */

function Box({ title, value }) {
  return (
    <div className="bg-[#0b1220] border border-white/10 rounded-xl p-4 text-center">
      <p className="text-gray-400 text-sm">{title}</p>
      <h2 className="text-white font-bold">ج.م {value}</h2>
    </div>
  );
}

function SmallBox({ title, value }) {
  return (
    <div className="bg-[#0b1220] border border-white/10 rounded-xl p-4 text-center">
      <p className="text-gray-400 text-sm">{title}</p>
      <h2 className="text-white font-bold">{value}</h2>
    </div>
  );
}

export default Reports;