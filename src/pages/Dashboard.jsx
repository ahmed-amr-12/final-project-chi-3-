import { Card, CardContent } from "../components/ui/Card";
import { ShoppingCart, TrendingUp, Package, AlertTriangle } from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function Dashboard() {
  const data = [
    { day: "السبت", sales: 4000 },
    { day: "الأحد", sales: 3000 },
    { day: "الإثنين", sales: 5000 },
    { day: "الثلاثاء", sales: 2000 },
    { day: "الأربعاء", sales: 4500 },
    { day: "الخميس", sales: 6000 },
    { day: "الجمعة", sales: 7000 },
  ];

  return (
    <div className="space-y-6 bg-white dark:bg-[#0b1220] min-h-screen transition-colors duration-300">



      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-black dark:text-white text-white">لوحة التحكم</h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm">نظرة عامة على النظام</p>
      </div>

      {/* Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="مبيعات اليوم" value="12,500 ج" icon={<ShoppingCart />} />
        <StatCard title="الأرباح" value="3,200 ج" icon={<TrendingUp />} />
        <StatCard title="عدد المنتجات" value="120 صنف" icon={<Package />} />
        <StatCard title="تنبيهات" value="5" icon={<AlertTriangle />} danger />
      </div>

      {/* 🔥 Chart FULL WIDTH */}
      <Card>
        <CardContent>
          <h2 className="mb-4 font-bold text-lg text-black dark:text-white">
            المبيعات — آخر 7 أيام
          </h2>

          <div className="h-[420px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                
                <CartesianGrid stroke="#1f2937" />

                <XAxis
                  dataKey="day"
                  stroke="#9ca3af"
                  tick={{ fill: "#9ca3af" }}
                />

                <YAxis
                  stroke="#9ca3af"
                  tick={{ fill: "#9ca3af" }}
                />

                <Tooltip
                  contentStyle={{
                    background: "#111827",
                    border: "1px solid #1f2937",
                    color: "white",
                  }}
                />

                <Bar
                  dataKey="sales"
                  fill="#3b82f6"
                  radius={[8, 8, 0, 0]}
                />

              </BarChart>
            </ResponsiveContainer>
          </div>

        </CardContent>
      </Card>

      {/* Alerts تحت الشارت */}
      <div className="grid lg:grid-cols-2 gap-4">

        <Card>
          <CardContent>
            <h2 className="mb-4 font-bold text-white">تنبيهات هامة</h2>

            <div className="space-y-3">
              <div className="p-3 border border-white/10 rounded-lg">
                <p className="font-semibold text-white">Amoxicillin 500mg</p>
                <p className="text-sm text-gray-400">متبقي 8 علب فقط</p>
              </div>

              <div className="p-3 border border-white/10 rounded-lg">
                <p className="font-semibold text-white">Ibuprofen 400mg</p>
                <p className="text-sm text-gray-400">قرب انتهاء الصلاحية</p>
              </div>
            </div>

          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="mb-4 font-bold text-white">
              قرب انتهاء الصلاحية (30 يوم)
            </h2>

            <p className="text-gray-400 text-sm">
              Ibuprofen 400mg - ينتهي خلال 20 يوم
            </p>
          </CardContent>
        </Card>

      </div>

    </div>
  );
}

function StatCard({ title, value, icon, danger }) {
  return (
    <Card>
      <CardContent>
        <div className="flex justify-between items-center">
          
          <div>
            <p className="text-sm text-gray-400">{title}</p>
            <h2 className="text-xl font-bold text-white">{value}</h2>
          </div>

          <div
            className={`p-3 rounded-xl ${
              danger
                ? "bg-red-500/20 text-red-400"
                : "bg-blue-500/20 text-blue-400"
            }`}
          >
            {icon}
          </div>

        </div>
      </CardContent>
    </Card>
  );
}

export default Dashboard;