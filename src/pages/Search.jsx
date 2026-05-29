import {
  Search as SearchIcon,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import { getMedicines } from "../services/api";

function SearchPage() {
  const [search, setSearch] =
    useState("");

  const [medicines, setMedicines] =
    useState([]);

  // ==========================
  // GET MEDICINES
  // ==========================
  useEffect(() => {
    const fetchMedicines =
      async () => {
        try {
          const data =
            await getMedicines();

          console.log(
            "SEARCH MEDICINES:",
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

  // ==========================
  // FILTER SEARCH
  // ==========================
  const filteredMedicines =
    medicines.filter(
      (item) =>
        item.name
          ?.toLowerCase()
          .includes(
            search
              .toLowerCase()
              .trim()
          ) ||
        item.barcode
          ?.toString()
          .includes(
            search.trim()
          ) ||
        item.genericName
          ?.toLowerCase()
          .includes(
            search
              .toLowerCase()
              .trim()
          )
    );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          البحث المتقدم
        </h1>

        <p className="text-gray-400 text-sm">
          ابحث في كتالوج
          الأدوية بالكامل
          بالاسم أو
          الباركود
        </p>
      </div>

      {/* Search Input */}
      <div className="bg-[#111827] border border-white/10 rounded-xl px-4 py-3 flex items-center">
        <input
          value={search}
          onChange={(e) =>
            setSearch(
              e.target
                .value
            )
          }
          placeholder="اكتب اسم الدواء أو امسح الباركود..."
          className="bg-transparent outline-none w-full text-gray-300"
        />

        <SearchIcon className="text-gray-400" />
      </div>

      {/* Results Count */}
      <p className="text-gray-400 text-sm">
        {
          filteredMedicines.length
        }{" "}
        نتائج
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMedicines.length ===
        0 ? (
          <div className="col-span-full text-center text-gray-400 bg-[#111827] rounded-2xl p-10">
            لا يوجد أدوية
          </div>
        ) : (
          filteredMedicines.map(
            (
              item
            ) => (
              <div
                key={
                  item.id
                }
                className="bg-[#111827] border border-white/10 rounded-2xl p-5 hover:bg-white/5 transition"
              >
                {/* Top */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-white font-bold">
                      {
                        item.name
                      }
                    </h2>

                    <p className="text-xs text-gray-400">
                      {
                        item.barcode
                      }
                    </p>
                  </div>

                  <div className="flex gap-2">
                    {item.requiresPrescription ===
                      1 && (
                      <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                        روشتة
                      </span>
                    )}

                    {item.quantity <
                      10 && (
                      <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full">
                        ناقص
                      </span>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">
                      الصلاحية
                    </p>

                    <p className="text-white">
                      {new Date(
                        item.expiryDate
                      ).toLocaleDateString()}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400">
                      الكمية
                    </p>

                    <p className="text-white">
                      {
                        item.quantity
                      }{" "}
                      علبة
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400">
                      سعر الشراء
                    </p>

                    <p className="text-white">
                      ج.م{" "}
                      {
                        item.purchasePrice
                      }
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400">
                      سعر البيع
                    </p>

                    <p className="text-white">
                      ج.م{" "}
                      {
                        item.sellingPrice
                      }
                    </p>
                  </div>
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
}

export default SearchPage;