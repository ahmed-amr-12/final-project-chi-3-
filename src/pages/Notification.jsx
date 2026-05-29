import {
  Bell,
  AlertTriangle,
  Calendar,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  getNotifications,
} from "../services/api";

function Notification() {
  const [
    notifications,
    setNotifications,
  ] = useState([]);

  useEffect(() => {
    const fetchNotifications =
      async () => {
        try {
          const data =
            await getNotifications();

          console.log(
            "NOTIFICATIONS:",
            data
          );

          setNotifications(
            Array.isArray(data)
              ? data
              : []
          );
        } catch (error) {
          console.log(error);
        }
      };

    fetchNotifications();
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          الإشعارات والتنبيهات
        </h1>

        <p className="text-gray-400 text-sm">
          {
            notifications.length
          }{" "}
          تنبيه نشط
        </p>
      </div>

      {/* Sub Header */}
      <div className="flex items-center gap-2 text-gray-400 text-sm">
        <Bell size={16} />
        تنبيهات أخرى (
        {
          notifications.length
        }
        )
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {notifications.map(
          (item) => (
            <div
              key={item.id}
              className={`border rounded-2xl p-5 flex justify-between items-center transition hover:bg-white/5
              
              ${
                item.urgent
                  ? "bg-red-500/10 border-red-500/20"
                  : "bg-[#111827] border-white/10"
              }`}
            >
              {/* Text */}
              <div className="text-right">
                <h2 className="text-white font-semibold text-lg">
                  {
                    item.title
                  }
                </h2>

                <p className="text-gray-400 text-sm mt-1">
                  {
                    item.message
                  }
                </p>

                {/* Type Badge */}
                <div className="mt-3">
                  <span
                    className={`text-xs px-3 py-1 rounded-full
                    ${
                      item.type ===
                      "low_stock"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {item.type ===
                    "low_stock"
                      ? "نقص مخزون"
                      : "قرب انتهاء الصلاحية"}
                  </span>
                </div>
              </div>

              {/* Icon */}
              <div
                className={`p-4 rounded-2xl
                ${
                  item.type ===
                  "low_stock"
                    ? "bg-red-500/10"
                    : "bg-yellow-500/10"
                }`}
              >
                {item.type ===
                "low_stock" ? (
                  <AlertTriangle className="text-red-400" />
                ) : (
                  <Calendar className="text-yellow-400" />
                )}
              </div>
            </div>
          )
        )}

        {/* Empty State */}
        {notifications.length ===
          0 && (
          <div className="bg-[#111827] border border-white/10 rounded-2xl p-10 text-center">
            <Bell className="mx-auto text-gray-500 mb-3" />

            <h3 className="text-white font-medium">
              لا توجد إشعارات
            </h3>

            <p className="text-gray-400 text-sm mt-1">
              كله تمام مفيش اشعارات 
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Notification;