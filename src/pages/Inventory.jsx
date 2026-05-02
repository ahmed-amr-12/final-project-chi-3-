import { Plus, Search, Trash2, Pencil } from "lucide-react";

function Inventory() {
  const data = [
    {
      name: "Amoxicillin 500mg",
      barcode: "6221001000028",
      quantity: 8,
      expiry: "2026-10-24",
      buy: 22,
      sell: 38,
      supplier: "فارما أوفرسيز ابن سينا فارما",
    },
    {
      name: "Ibuprofen 400mg",
      barcode: "6221001000035",
      quantity: 45,
      expiry: "2026-05-17",
      buy: 11,
      sell: 22,
      supplier: "الشركة المصرية للأدوية",
    },
    {
      name: "Paracetamol 500mg",
      barcode: "6221001000011",
      quantity: 123,
      expiry: "2027-06-21",
      buy: 8,
      sell: 15,
      supplier: "الشركة المصرية للأدوية",
    },
  ];

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">المخزن</h1>
          <p className="text-gray-400 text-sm">3 صنف مسجل في الكتالوج</p>
        </div>
      </div>

      {/* Top Controls */}
      <div className="flex gap-3 items-center">

        <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg">
          <Plus size={16} />
          إضافة دواء
        </button>

        <div className="flex items-center bg-[#111827] border border-white/10 rounded-lg px-3 py-2 w-80">
          <Search size={16} className="text-gray-400" />
          <input
            placeholder="بحث بالاسم أو الباركود..."
            className="bg-transparent outline-none text-sm px-2 w-full text-gray-300"
          />
        </div>

      </div>

      {/* Table */}
      <div className="bg-[#111827] border border-white/10 rounded-2xl overflow-hidden">

        <table className="w-full text-sm text-right">

          <thead className="bg-[#0b1220] text-gray-400">
            <tr>
              <th className="p-4">الدواء</th>
              <th className="p-4">الباركود</th>
              <th className="p-4">الكمية</th>
              <th className="p-4">الصلاحية</th>
              <th className="p-4">شراء / بيع</th>
              <th className="p-4">الموردين</th>
              <th className="p-4"></th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, i) => (
              <tr
                key={i}
                className="border-t border-white/10 hover:bg-white/5 transition"
              >

                <td className="p-4 text-white font-medium">
                  {item.name}
                </td>

                <td className="p-4 text-gray-300">
                  {item.barcode}
                </td>

                <td className="p-4">
                  {item.quantity < 10 ? (
                    <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs">
                      ناقص {item.quantity}
                    </span>
                  ) : (
                    <span className="text-white">{item.quantity}</span>
                  )}
                </td>

                <td className="p-4 text-gray-300">
                  {item.expiry}
                </td>

                <td className="p-4 text-gray-300">
                  <div>ج.م {item.buy}</div>
                  <div className="text-xs text-gray-500">ج.م {item.sell}</div>
                </td>

                <td className="p-4 text-gray-300">
                  {item.supplier}
                </td>

                {/* Actions */}
                <td className="p-4 flex gap-3">
                  <button className="text-gray-400 hover:text-white">
                    <Pencil size={16} />
                  </button>

                  <button className="text-red-400 hover:text-red-500">
                    <Trash2 size={16} />
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Inventory;    