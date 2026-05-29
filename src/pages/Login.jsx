import {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  Pill,
  Lock,
  User,
} from "lucide-react";

import { loginUser } from "../services/api";

function Login() {
  const navigate =
    useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [formData, setFormData] =
    useState({
      username: "",
      password: "",
    });

  const handleChange = (
    e
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleLogin =
    async (e) => {
      e.preventDefault();

      setError("");

      if (
        !formData.username
          .trim()
      ) {
        return setError(
          "اكتب اسم المستخدم"
        );
      }

      if (
        !formData.password
          .trim()
      ) {
        return setError(
          "اكتب كلمة المرور"
        );
      }

      try {
        setLoading(true);

        const data =
          await loginUser(
            formData
          );

        console.log(
          "LOGIN:",
          data
        );

        // save token
        localStorage.setItem(
          "token",
          data.token
        );

        // save user
        localStorage.setItem(
          "user",
          JSON.stringify(
            data.user
          )
        );

        navigate("/");
      } catch (error) {
        setError(
          error.message
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="min-h-screen bg-[#020817] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-[#111827] border border-white/10 rounded-3xl p-8 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-blue-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Pill className="text-blue-400 w-10 h-10" />
          </div>

          <h1 className="text-3xl font-bold text-white">
            صيدلية كير بلس
          </h1>

          <p className="text-gray-400 mt-2">
            تسجيل الدخول
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={
            handleLogin
          }
          className="space-y-5"
        >
          {/* Username */}
          <div>
            <label className="text-gray-300 text-sm block mb-2">
              اسم المستخدم
            </label>

            <div className="relative">
              <User className="absolute right-4 top-4 text-gray-400 w-5 h-5" />

              <input
                type="text"
                name="username"
                value={
                  formData.username
                }
                onChange={
                  handleChange
                }
                placeholder="ادخل اسم المستخدم"
                className="w-full bg-[#0b1220] border border-white/10 rounded-xl p-4 pr-12 text-white outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-300 text-sm block mb-2">
              كلمة المرور
            </label>

            <div className="relative">
              <Lock className="absolute right-4 top-4 text-gray-400 w-5 h-5" />

              <input
                type="password"
                name="password"
                value={
                  formData.password
                }
                onChange={
                  handleChange
                }
                placeholder="ادخل كلمة المرور"
                className="w-full bg-[#0b1220] border border-white/10 rounded-xl p-4 pr-12 text-white outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-500/20 border border-red-500/30 text-red-400 text-sm rounded-xl p-3 text-center">
              {error}
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={
              loading
            }
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-xl font-semibold disabled:opacity-50"
          >
            {loading
              ? "جاري تسجيل الدخول..."
              : "تسجيل الدخول"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;