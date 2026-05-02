import { Search as SearchIcon, Pill } from "lucide-react";

function SearchPage() {
  const data = [
    {
      name: "Ibuprofen 400mg",
      barcode: "6221001000035",
      quantity: 45,
      expiry: "2026-05-17",
      buy: 11,
      sell: 22,
    },
    {
      name: "Amoxicillin 500mg",
      barcode: "6221001000028",
      quantity: 8,
      expiry: "2026-10-24",
      buy: 22,
      sell: 38,
      low: true,
      prescription: true,
    },
    {
      name: "Paracetamol 500mg",
      barcode: "6221001000011",
      quantity: 123,
      expiry: "2027-06-21",
      buy: 8,
      sell: 15,
    },
  ];

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">البحث المتقدم</h1>
        <p className="text-gray-400 text-sm">
          ابحث في كتالوج الأدوية بالكامل بالاسم أو الباركود
        </p>
      </div>

      {/* Search Input */}
      <div className="bg-[#111827] border border-white/10 rounded-xl px-4 py-3 flex items-center">
        <input
          placeholder="اكتب اسم الدواء أو امسح الباركود..."
          className="bg-transparent outline-none w-full text-gray-300"
        />
        <SearchIcon className="text-gray-400" />
      </div>

      {/* Results Count */}
      <p className="text-gray-400 text-sm">3 نتائج</p>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

        {data.map((item, i) => (
          <div
            key={i}
            className="bg-[#111827] border border-white/10 rounded-2xl p-5 hover:bg-white/5 transition"
          >

            {/* Top */}
            <div className="flex justify-between items-start mb-4">

              <div>
                <h2 className="text-white font-bold">{item.name}</h2>
                <p className="text-xs text-gray-400">{item.barcode}</p>
              </div>

              <div className="flex gap-2">
                {item.prescription && (
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                    روشتة
                  </span>
                )}
              </div>

            </div>

            {/* Info */}
            <div className="grid grid-cols-2 gap-4 text-sm">

              <div>
                <p className="text-gray-400">الصلاحية</p>
                <p className="text-white">{item.expiry}</p>
              </div>

              <div>
                <p className="text-gray-400">الكمية</p>
                {item.low ? (
                  <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-xs">
                    ناقص {item.quantity}
                  </span>
                ) : (
                  <p className="text-white">{item.quantity} علبة</p>
                )}
              </div>

              <div>
                <p className="text-gray-400">سعر الشراء</p>
                <p className="text-white">ج.م {item.buy}</p>
              </div>

              <div>
                <p className="text-gray-400">سعر البيع</p>
                <p className="text-white">ج.م {item.sell}</p>
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default SearchPage;