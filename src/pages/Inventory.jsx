import {
  Plus,
  Search,
  Trash2,
  Pencil,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import { getMedicines } from "../services/api";

function Inventory() {
  const [medicines, setMedicines] =
    useState([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    const fetchMedicines =
      async () => {
        try {
          const data =
            await getMedicines();

          console.log(
            "MEDICINES:",
            data
          );

          setMedicines(
            data || []
          );
        } catch (error) {
          console.log(error);
        }
      };

    fetchMedicines();
  }, []);

  // Search filter
  const filteredMedicines =
    medicines.filter(
      (item) =>
        item.name
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        item.barcode?.includes(
          search
        )
    );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">
            المخزن
          </h1>

          <p className="text-gray-400 text-sm">
            {
              filteredMedicines.length
            }{" "}
            صنف مسجل في الكتالوج
          </p>
        </div>

        <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl hover:bg-gray-200 transition">
          <Plus size={16} />
          إضافة دواء
        </button>
      </div>

      {/* Search */}
      <div className="flex items-center bg-[#111827] border border-white/10 rounded-xl px-4 py-3 w-full md:w-[350px]">
        <Search
          size={18}
          className="text-gray-400"
        />

        <input
          type="text"
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          placeholder="بحث بالاسم أو الباركود..."
          className="bg-transparent outline-none text-sm px-2 w-full text-gray-300"
        />
      </div>

      {/* Table */}
      <div className="bg-[#111827] border border-white/10 rounded-3xl overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-right">
            {/* Header */}
            <thead className="bg-[#0b1220] text-gray-400">
              <tr>
                <th className="p-5 text-right">
                  الدواء
                </th>

                <th className="p-5 text-center">
                  الكمية
                </th>

                <th className="p-5 text-center">
                  السعر
                </th>

                <th className="p-5 text-center">
                  الصلاحية
                </th>

                <th className="p-5 text-center">
                  الشركة
                </th>

                <th className="p-5 text-center">
                  الحالة
                </th>

                <th className="p-5 text-center">
                  إجراءات
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {filteredMedicines.map(
                (item) => (
                  <tr
                    key={item.id}
                    className="border-t border-white/10 hover:bg-white/5 transition duration-200"
                  >
                    {/* Medicine */}
                    <td className="p-5 min-w-[280px]">
                      <div className="flex flex-col gap-1">
                        <span className="text-white font-semibold text-base">
                          {item.name}
                        </span>

                        <span className="text-sm text-gray-400">
                          {
                            item.genericName
                          }
                          {" • "}
                          {
                            item.medicineForm
                          }
                        </span>

                        <span className="text-xs text-gray-500">
                          {
                            item.stripCount
                          }{" "}
                          strips •{" "}
                          {
                            item.pillCount
                          }{" "}
                          pills
                        </span>

                        <span className="text-xs text-gray-500">
                          Barcode:{" "}
                          {
                            item.barcode
                          }
                        </span>
                      </div>
                    </td>

                    {/* Quantity */}
                    <td className="p-5 text-center">
                      {item.quantity <
                      10 ? (
                        <span className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-xs font-medium">
                          ناقص{" "}
                          {
                            item.quantity
                          }
                        </span>
                      ) : (
                        <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-xs font-medium">
                          {
                            item.quantity
                          }
                        </span>
                      )}
                    </td>

                    {/* Price */}
                    <td className="p-5 text-center">
                      <div className="flex flex-col">
                        <span className="text-white font-medium">
                          {
                            item.sellingPrice
                          }{" "}
                          ج.م
                        </span>

                        <span className="text-xs text-gray-500">
                          شراء{" "}
                          {
                            item.purchasePrice
                          }{" "}
                          ج.م
                        </span>
                      </div>
                    </td>

                    {/* Expiry */}
                    <td className="p-5 text-center text-gray-300">
                      {item.expiryDate?.split(
                        "T"
                      )[0]}
                    </td>

                    {/* Manufacturer */}
                    <td className="p-5 text-center text-gray-300">
                      {
                        item.manufacturer
                      }
                    </td>

                    {/* Prescription */}
                    <td className="p-5 text-center">
                      {item.requiresPrescription ? (
                        <span className="bg-red-500/20 text-red-400 px-3 py-2 rounded-full text-xs">
                          يحتاج روشتة
                        </span>
                      ) : (
                        <span className="bg-green-500/20 text-green-400 px-3 py-2 rounded-full text-xs">
                          بدون روشتة
                        </span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="p-5">
                      <div className="flex justify-center gap-3">
                        <button className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition">
                          <Pencil
                            size={16}
                            className="text-gray-300"
                          />
                        </button>

                        <button className="w-9 h-9 rounded-lg bg-red-500/10 hover:bg-red-500/20 flex items-center justify-center transition">
                          <Trash2
                            size={16}
                            className="text-red-400"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Inventory;