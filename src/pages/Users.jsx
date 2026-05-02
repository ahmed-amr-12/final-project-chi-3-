import { User, Shield, Pencil, Trash2, Plus } from "lucide-react";

function Users() {
  const users = [
    {
      name: "صيدلي",
      email: "sara@pharmacy.com",
      username: "@employee",
      role: "موظف",
    },
    {
      name: "المدير",
      email: "admin@pharmacy.com",
      username: "@admin",
      role: "مدير",
    },
  ];

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="text-right">
          <h1 className="text-2xl font-bold text-white">
            إدارة المستخدمين
          </h1>
          <p className="text-gray-400 text-sm">
            للمديرين فقط • {users.length} مستخدمين
          </p>
        </div>

        <button className="bg-gray-200 text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white transition">
          <Plus size={16} />
          إضافة مستخدم
        </button>
      </div>

      {/* Users Cards */}
      <div className="grid md:grid-cols-2 gap-4">

        {users.map((user, i) => (
          <div
            key={i}
            className="bg-[#0f172a] border border-white/10 rounded-2xl p-5 flex justify-between items-center hover:border-blue-500/30 transition"
          >

            {/* Right Side (info) */}
            <div className="text-right space-y-2">

              <h2 className="text-white font-bold text-lg">
                {user.name}
              </h2>

              <p className="text-gray-400 text-sm">
                {user.email} • {user.username}
              </p>

              <div className="flex gap-2 justify-end">

                <span className="bg-white/10 px-3 py-1 rounded-full text-xs">
                  {user.role}
                </span>

                <span className="bg-white/10 px-3 py-1 rounded-full text-xs">
                  8 ساعات/يوم
                </span>

              </div>
            </div>

            {/* Left Side (icon + actions) */}
            <div className="flex items-center gap-4">

              <div className="bg-white/10 p-3 rounded-xl">
                {user.role === "مدير" ? (
                  <Shield className="text-blue-400" />
                ) : (
                  <User className="text-gray-300" />
                )}
              </div>

              <div className="flex gap-2">
                <Trash2 className="text-red-400 cursor-pointer" size={18} />
                <Pencil className="text-gray-400 cursor-pointer" size={18} />
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Users;