import { Plus, Search, Phone, MapPin, Truck, Trash2, Pencil } from "lucide-react";

function Suppliers() {
  const suppliers = [
    {
      name: "ابن سينا فارما",
      phone: "+20233334444",
      address: "الجيزة",
    },
    {
      name: "فارما أوفرسيز",
      phone: "+20227778888",
      address: "مصر الجديدة، القاهرة",
    },
    {
      name: "الشركة المصرية للأدوية",
      phone: "+20223456789",
      address: "مدينة نصر، القاهرة",
    },
  ];

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">الموردين</h1>
          <p className="text-gray-400 text-sm">
            {suppliers.length} مورد مسجل
          </p>
        </div>
      </div>

      {/* Top Controls */}
      <div className="flex gap-3 items-center">

        <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg">
          <Plus size={16} />
          إضافة مورد
        </button>

        <div className="flex items-center bg-[#111827] border border-white/10 rounded-lg px-3 py-2 w-80">
          <Search size={16} className="text-gray-400" />
          <input
            placeholder="بحث عن مورد..."
            className="bg-transparent outline-none text-sm px-2 w-full text-gray-300"
          />
        </div>

      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

        {suppliers.map((supplier, i) => (
          <div
            key={i}
            className="bg-[#111827] border border-white/10 rounded-2xl p-5 hover:bg-white/5 transition"
          >

            {/* Top */}
            <div className="flex justify-between items-start mb-4">

              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Truck size={18} />
                </div>

                <div>
                  <h2 className="text-white font-bold">{supplier.name}</h2>

                  <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-gray-300">
                    0 أدوية مرتبطة
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button className="text-gray-400 hover:text-white">
                  <Pencil size={16} />
                </button>

                <button className="text-red-400 hover:text-red-500">
                  <Trash2 size={16} />
                </button>
              </div>

            </div>

            {/* Info */}
            <div className="space-y-2 text-sm text-gray-400">

              <div className="flex items-center gap-2">
                <Phone size={14} />
                {supplier.phone}
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={14} />
                {supplier.address}
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Suppliers;