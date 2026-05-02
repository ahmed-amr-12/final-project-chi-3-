import { ShoppingCart } from "lucide-react";

function Pos() {
  return (
    <div className="grid lg:grid-cols-3 gap-6">

      {/* 🛒 Cart (الشمال) */}
      <div className="bg-[#111827] border border-white/10 rounded-2xl p-5 flex flex-col">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="flex items-center gap-2 text-white font-bold">
            <ShoppingCart size={18} />
            سلة المشتريات
          </h2>

          <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300">
            0 أصناف
          </span>
        </div>

        {/* Empty */}
        <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
          <ShoppingCart size={40} />
          <p className="mt-3 text-sm">السلة فارغة. امسح باركود لبدء.</p>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-4 space-y-3">

          <div className="flex justify-between text-white">
            <span>الإجمالي</span>
            <span className="font-bold">ج.م 0.00</span>
          </div>

          <select className="w-full bg-[#0b1220] border border-white/10 rounded-lg p-2 text-sm text-gray-300">
            <option>نقدي (كاش)</option>
          </select>

          <button className="w-full bg-gray-600 text-white py-2 rounded-lg opacity-50 cursor-not-allowed">
            دفع ج.م 0.00
          </button>

        </div>

      </div>

      {/* 🔎 Right Side */}
      <div className="lg:col-span-2 space-y-6">

        {/* Barcode */}
        <div className="bg-[#111827] border border-white/10 rounded-2xl p-5">
          <h2 className="text-white font-bold mb-3">قارئ الباركود</h2>

          <p className="text-sm text-gray-400 mb-4">
            امسح الباركود أو اكتبه واضغط Enter. سيظل حقل الإدخال نشطًا للمسح المستمر.
          </p>

          <input
            type="text"
            placeholder="امسح الباركود هنا..."
            className="w-full bg-[#0b1220] border border-white/10 rounded-lg p-3 text-gray-300 focus:outline-none"
          />
        </div>

        {/* Manual Search */}
        <div className="bg-[#111827] border border-white/10 rounded-2xl p-5">
          <h2 className="text-white font-bold mb-3">
            بحث يدوي (بديل)
          </h2>

          <input
            type="text"
            placeholder="ابحث بالاسم أو الباركود..."
            className="w-full bg-[#0b1220] border border-white/10 rounded-lg p-3 text-gray-300 focus:outline-none"
          />
        </div>

      </div>

    </div>
  );
}

export default Pos;