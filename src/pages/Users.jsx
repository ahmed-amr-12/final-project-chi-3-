
import {
  useEffect,
  useState,
} from "react";

import {
  User,
  Shield,
  Pencil,
  Trash2,
  Plus,
  X,
} from "lucide-react";

import {
  getUsers,
  deleteUser,
  addUser,
} from "../services/api";

function Users() {
  const [users, setUsers] =
    useState([]);

  const [showModal,
    setShowModal] =
    useState(false);

  const [formData,
    setFormData] =
    useState({
      username: "",
      fullName: "",
      email: "",
      phone: "",
      role: "pharmacist",
      password: "",
      expectedDays: 24,
      dailyHours: 8,
    });

  // ================= GET USERS =================
  const fetchUsers =
    async () => {
      try {
        const data =
          await getUsers();

        setUsers(
          Array.isArray(
            data
          )
            ? data
            : []
        );
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ================= DELETE =================
  const handleDelete =
    async (id) => {
      const confirmDelete =
        window.confirm(
          "متأكد إنك عايز تمسح المستخدم؟"
        );

      if (!confirmDelete)
        return;

      try {
        await deleteUser(id);

        // refresh data
        fetchUsers();
      } catch (error) {
        console.log(error);
      }
    };

  // ================= ADD =================
 const handleAddUser =
  async (e) => {
    e.preventDefault();

    if (!isValidForm) {
      return;
    }

    try {
      const response =
        await addUser(
          formData
        );

      if (
        response.error
      ) {
        alert(
          response.error
        );
        return;
      }

      const updatedUsers =
        await getUsers();

      setUsers(
        updatedUsers
      );

      // reset form
      setFormData({
        username: "",
        fullName: "",
        email: "",
        phone: "",
        role:
          "pharmacist",
        password: "",
        expectedDays: 24,
        dailyHours: 8,
      });

      setShowModal(
        false
      );

      alert(
        "تم إضافة المستخدم بنجاح"
      );
    } catch (error) {
      console.log(
        error
      );

      alert(
        "حصل خطأ"
      );
    }
  };
const isValidEmail =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    formData.email
  );

const isValidPhone =
  /^01[0-2,5]{1}[0-9]{8}$/.test(
    formData.phone
  );

const isValidPassword =
  formData.password
    .length >= 6;

const isValidForm =
  formData.fullName
    .trim() &&
  formData.username
    .trim() &&
  isValidEmail &&
  isValidPhone &&
  isValidPassword;



  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">

        <div className="text-right">
          <h1 className="text-2xl font-bold text-white">
            إدارة المستخدمين
          </h1>

          <p className="text-gray-400 text-sm">
            للمديرين فقط •{" "}
            {users.length} مستخدمين
          </p>
        </div>

        <button
          onClick={() =>
            setShowModal(
              true
            )
          }
          className="bg-gray-200 text-black px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-white transition"
        >
          <Plus size={16} />
          إضافة مستخدم
        </button>
      </div>

      {/* Users Cards */}
      <div className="grid md:grid-cols-2 gap-4">

        {users?.map(
          (user) => (
            <div
              key={user.id}
              className="bg-[#0f172a] border border-white/10 rounded-2xl p-5 flex justify-between items-center hover:border-blue-500/30 transition"
            >
              {/* Right */}
              <div className="text-right space-y-2">

                <h2 className="text-white font-bold text-lg">
                  {
                    user.fullName
                  }
                </h2>

                <p className="text-gray-400 text-sm">
                  {
                    user.email
                  }
                  {" • @"}
                  {
                    user.username
                  }
                </p>

                <div className="flex gap-2 justify-end">

                  <span className="bg-white/10 px-3 py-1 rounded-full text-xs">
                    {user.role ===
                    "admin"
                      ? "مدير"
                      : "موظف"}
                  </span>

                  <span className="bg-white/10 px-3 py-1 rounded-full text-xs">
                    {
                      user.dailyHours
                    }{" "}
                    ساعات/يوم
                  </span>

                </div>
              </div>

              {/* Left */}
              <div className="flex items-center gap-4">

                <div className="bg-white/10 p-3 rounded-xl">
                  {user.role ===
                  "admin" ? (
                    <Shield className="text-blue-400" />
                  ) : (
                    <User className="text-gray-300" />
                  )}
                </div>

                <div className="flex gap-3">

                  <button
                    onClick={() =>
                      handleDelete(
                        user.id
                      )
                    }
                    className="text-red-400 hover:text-red-500"
                  >
                    <Trash2
                      size={18}
                    />
                  </button>

                  <button className="text-gray-400 hover:text-white">
                    <Pencil
                      size={18}
                    />
                  </button>

                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* ADD USER MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

          <div className="bg-[#111827] p-6 rounded-3xl w-[500px] border border-white/10">

            <div className="flex justify-between items-center mb-5">

              <button
                onClick={() =>
                  setShowModal(
                    false
                  )
                }
              >
                <X className="text-gray-400" />
              </button>

              <h2 className="text-white text-xl font-bold">
                إضافة مستخدم
              </h2>
            </div>

 <form
  onSubmit={handleAddUser}
  className="space-y-4"
>
  {/* Full Name */}
  <div>
    <input
      type="text"
      placeholder="الاسم الكامل"
      value={formData.fullName}
      onChange={(e) =>
        setFormData({
          ...formData,
          fullName:
            e.target.value,
        })
      }
      className="w-full p-3 rounded-xl bg-[#0f172a] text-white outline-none border border-white/10"
    />
  </div>

  {/* Username */}
  <div>
    <input
      type="text"
      placeholder="Username"
      value={formData.username}
      onChange={(e) =>
        setFormData({
          ...formData,
          username:
            e.target.value,
        })
      }
      className="w-full p-3 rounded-xl bg-[#0f172a] text-white outline-none border border-white/10"
    />
  </div>

  {/* Email */}
  <div>
    <input
      type="email"
      placeholder="Email"
      value={formData.email}
      onChange={(e) =>
        setFormData({
          ...formData,
          email:
            e.target.value,
        })
      }
      className={`w-full p-3 rounded-xl bg-[#0f172a] text-white outline-none border ${
        formData.email &&
        !isValidEmail
          ? "border-red-500"
          : "border-white/10"
      }`}
    />

    {formData.email &&
      !isValidEmail && (
        <p className="text-red-400 text-sm mt-1">
          اكتب Email صحيح
        </p>
      )}
  </div>

  {/* Phone */}
  <div>
    <input
      type="text"
      placeholder="رقم الموبايل"
      value={formData.phone}
      onChange={(e) =>
        setFormData({
          ...formData,
          phone:
            e.target.value,
        })
      }
      className={`w-full p-3 rounded-xl bg-[#0f172a] text-white outline-none border ${
        formData.phone &&
        !isValidPhone
          ? "border-red-500"
          : "border-white/10"
      }`}
    />

    {formData.phone &&
      !isValidPhone && (
        <p className="text-red-400 text-sm mt-1">
          رقم موبايل غير صحيح
        </p>
      )}
  </div>

  {/* Password */}
  <div>
    <input
      type="password"
      placeholder="Password"
      value={formData.password}
      onChange={(e) =>
        setFormData({
          ...formData,
          password:
            e.target.value,
        })
      }
      className={`w-full p-3 rounded-xl bg-[#0f172a] text-white outline-none border ${
        formData.password &&
        !isValidPassword
          ? "border-red-500"
          : "border-white/10"
      }`}
    />

    {formData.password &&
      !isValidPassword && (
        <p className="text-red-400 text-sm mt-1">
          الباسورد لازم
          تكون 6 حروف
          على الأقل
        </p>
      )}
  </div>

  {/* Role */}
  <select
    value={formData.role}
    onChange={(e) =>
      setFormData({
        ...formData,
        role:
          e.target.value,
      })
    }
    className="w-full p-3 rounded-xl bg-[#0f172a] text-white outline-none border border-white/10"
  >
    <option value="pharmacist">
      موظف
    </option>

    <option value="admin">
      مدير
    </option>
  </select>

  {/* Submit */}
  <button
    type="submit"
    disabled={!isValidForm}
    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition text-white py-3 rounded-xl"
  >
    إضافة المستخدم
  </button>
</form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;