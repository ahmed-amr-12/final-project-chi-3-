import { Bell, AlertTriangle, Calendar } from "lucide-react";

function Notification() {
  const notifications = [
    {
      title: "نقص مخزون: Amoxicillin 500mg",
      desc: "متبقي 8 علب فقط",
      type: "low",
    },
    {
      title: "قرب انتهاء الصلاحية: Ibuprofen 400mg",
      desc: "تنتهي الصلاحية خلال 18 يوم (17-05-2026)",
      type: "expiry",
    },
  ];

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          الإشعارات والتنبيهات
        </h1>
        <p className="text-gray-400 text-sm">
          {notifications.length} تنبيه نشط
        </p>
      </div>

      {/* Sub header */}
      <div className="flex items-center gap-2 text-gray-400 text-sm">
        <Bell size={16} />
        تنبيهات أخرى ({notifications.length})
      </div>

      {/* List */}
      <div className="space-y-4">
        {notifications.map((item, index) => (
          <div
            key={index}
            className="bg-[#111827] border border-white/10 rounded-2xl p-5 flex justify-between items-center hover:bg-white/5 transition"
          >

            {/* Text */}
            <div className="text-right">
              <h2 className="text-white font-semibold">{item.title}</h2>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>

            {/* Icon */}
            <div className="bg-white/10 p-3 rounded-xl">
              {item.type === "low" ? (
                <AlertTriangle className="text-red-400" />
              ) : (
                <Calendar className="text-yellow-400" />
              )}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Notification;