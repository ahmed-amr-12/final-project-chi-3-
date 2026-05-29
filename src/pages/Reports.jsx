import { Download } from "lucide-react";
import { useEffect, useState } from "react";

import {
  getTodayReport,
  getHistoricalReport,
} from "../services/api";

function Reports() {
  const [todayReport, setTodayReport] =
    useState(null);

  const [historical, setHistorical] =
    useState([]);

  const [range, setRange] =
    useState("day");

  // Today's report
  useEffect(() => {
    const fetchToday =
      async () => {
        try {
          const data =
            await getTodayReport();

          console.log(
            "TODAY REPORT:",
            data
          );

          setTodayReport(
            data || {}
          );
        } catch (error) {
          console.log(error);
        }
      };

    fetchToday();
  }, []);

  // Historical report
  useEffect(() => {
    const fetchHistorical =
      async () => {
        try {
          const data =
            await getHistoricalReport(
              range
            );

          console.log(
            "HISTORICAL REPORT:",
            data
          );

          // FIX
          setHistorical(
            Array.isArray(
              data?.history
            )
              ? data.history
              : []
          );
        } catch (error) {
          console.log(error);
          setHistorical([]);
        }
      };

    fetchHistorical();
  }, [range]);

  // Safe totals
  const totalSales =
    (historical || []).reduce(
      (sum, item) =>
        sum +
        Number(
          item?.sales || 0
        ),
      0
    );

  const totalProfit =
    (historical || []).reduce(
      (sum, item) =>
        sum +
        Number(
          item?.profit || 0
        ),
      0
    );

  const totalOperations =
    (historical || []).reduce(
      (sum, item) =>
        sum +
        Number(
          item?.salesCount ||
            0
        ),
      0
    );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          التقارير والإحصائيات
        </h1>

        <p className="text-gray-400 text-sm">
          تتبع المبيعات،
          تحليل الأرباح،
          وتقفيل اليومية
        </p>
      </div>

      {/* Today's Sales */}
      <div className="bg-[#111827] border border-white/10 rounded-2xl p-5 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">
            {todayReport?.salesCount ||
              0}{" "}
            عملية بيع
          </span>

          <h2 className="text-white font-bold">
            مبيعات اليوم الحالية
          </h2>
        </div>

        {/* Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Box
            title="كاش"
            value={
              todayReport
                ?.totals?.cash ||
              0
            }
          />

          <Box
            title="فيزا"
            value={
              todayReport
                ?.totals?.card ||
              0
            }
          />

          <Box
            title="محفظة"
            value={
              todayReport
                ?.totals
                ?.wallet || 0
            }
          />

          <Box
            title="تأمين"
            value={
              todayReport
                ?.totals
                ?.insurance ||
              0
            }
          />
        </div>

        {/* Total */}
        <div className="flex justify-between items-center border-t border-white/10 pt-4">
          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg opacity-60">
            تقفيل اليومية
            (مطلوب رمز)
          </button>

          <div className="text-right">
            <p className="text-gray-400 text-sm">
              إجمالي مبيعات
              اليوم
            </p>

            <h2 className="text-white text-2xl font-bold">
              ج.م{" "}
              {Number(
                todayReport?.grandTotal ||
                  0
              ).toFixed(2)}
            </h2>
          </div>
        </div>
      </div>

      {/* Previous Reports */}
      <div className="bg-[#111827] border border-white/10 rounded-2xl p-5 space-y-5">

        {/* Top */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button
              onClick={() =>
                setRange(
                  "day"
                )
              }
              className={`px-3 py-1 rounded-lg text-sm ${
                range ===
                "day"
                  ? "bg-white text-black"
                  : "bg-white/10 text-gray-300"
              }`}
            >
              يومي
            </button>

            <button
              onClick={() =>
                setRange(
                  "week"
                )
              }
              className={`px-3 py-1 rounded-lg text-sm ${
                range ===
                "week"
                  ? "bg-white text-black"
                  : "bg-white/10 text-gray-300"
              }`}
            >
              أسبوعي
            </button>

            <button
              onClick={() =>
                setRange(
                  "month"
                )
              }
              className={`px-3 py-1 rounded-lg text-sm ${
                range ===
                "month"
                  ? "bg-white text-black"
                  : "bg-white/10 text-gray-300"
              }`}
            >
              شهري
            </button>
          </div>

          <h2 className="text-white font-bold">
            التقارير السابقة
          </h2>
        </div>

        {/* Export */}
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-lg text-sm">
            PDF{" "}
            <Download
              size={14}
            />
          </button>

          <button className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-lg text-sm">
            CSV{" "}
            <Download
              size={14}
            />
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-4">
          <SmallBox
            title="إجمالي المبيعات"
            value={totalSales.toFixed(
              2
            )}
          />

          <SmallBox
            title="الأرباح"
            value={totalProfit.toFixed(
              2
            )}
          />

          <SmallBox
            title="عدد العمليات"
            value={
              totalOperations
            }
          />
        </div>

        {/* Chart */}
        <div className="h-40 border border-dashed border-white/10 rounded-xl flex items-center justify-center text-gray-500">
          {historical.length >
          0
            ? "تم تحميل البيانات"
            : "لا يوجد بيانات"}
        </div>

        {/* Table */}
        <div className="bg-[#0b1220] border border-white/10 rounded-xl overflow-hidden">
          <table className="w-full text-sm text-right">
            <thead className="text-gray-400 border-b border-white/10">
              <tr>
                <th className="p-3">
                  التاريخ
                </th>

                <th className="p-3">
                  المبيعات
                </th>

                <th className="p-3">
                  الربح
                </th>

                <th className="p-3">
                  عدد العمليات
                </th>
              </tr>
            </thead>

            <tbody>
              {historical.length >
              0 ? (
                historical.map(
                  (
                    item,
                    index
                  ) => (
                    <tr
                      key={
                        index
                      }
                      className="border-b border-white/5"
                    >
                      <td className="p-3">
                        {item?.date ||
                          "—"}
                      </td>

                      <td className="p-3">
                        ج.م{" "}
                        {Number(
                          item?.sales ||
                            0
                        ).toFixed(
                          2
                        )}
                      </td>

                      <td className="p-3">
                        ج.م{" "}
                        {Number(
                          item?.profit ||
                            0
                        ).toFixed(
                          2
                        )}
                      </td>

                      <td className="p-3">
                        {item?.salesCount ||
                          0}
                      </td>
                    </tr>
                  )
                )
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center p-6 text-gray-500"
                  >
                    لا يوجد
                    بيانات لهذه
                    الفترة
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Box({
  title,
  value,
}) {
  return (
    <div className="bg-[#0b1220] border border-white/10 rounded-xl p-4 text-center">
      <p className="text-gray-400 text-sm">
        {title}
      </p>

      <h2 className="text-white font-bold">
        ج.م{" "}
        {Number(
          value || 0
        ).toFixed(2)}
      </h2>
    </div>
  );
}

function SmallBox({
  title,
  value,
}) {
  return (
    <div className="bg-[#0b1220] border border-white/10 rounded-xl p-4 text-center">
      <p className="text-gray-400 text-sm">
        {title}
      </p>

      <h2 className="text-white font-bold">
        {value}
      </h2>
    </div>
  );
}

export default Reports;