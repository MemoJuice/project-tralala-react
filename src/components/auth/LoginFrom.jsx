import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import { Eye, EyeOff } from "lucide-react";
import { MessageContext } from "../../context/MessageContext";
import apiauth from "@/api/axios";

export default function LoginForm() {
  const {API} = useContext(MessageContext);
  const [message, setMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await apiauth.post(`/auth/login`, formData);
      alert("login successfully");
      const { token, user } = res.data;
      // console.log(res.data);

      // เก็บไว้ถาวร ไม่ต้อง login ใหม่
      if (rememberMe) {
        // เลือก "จดจำฉันไว้" → localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        // ไม่เลือก → sessionStorage ปิดแท็บแล้วต้อง login ใหม่
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("user", JSON.stringify(user));
      }
      window.dispatchEvent(new Event("auth-change"));

      setMessage({
        type: "success",
        text: "เข้าสู่ระบบสำเร็จ",
      });

      setFormData({ email: "", password: "" });
      // setRememberMe(false);
      console.log(user.role);

      navigate(user.role === "CAREGIVER" ? "/dashboard" : "/userdashboard");
    } catch (error) {
      console.error(error);
      setMessage({
        type: "error",
        text: "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
      });
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    let token = "";
    if (sessionStorage.getItem("token")) {
      token = sessionStorage.getItem("token");
    } else if (localStorage.getItem("token")) {
      token = localStorage.getItem("token")
    };

    if (token) {
      console.log("AUTHORIZED, NAVIGATE TO DASHBOARD");
      const user = JSON.parse(sessionStorage.getItem("user"));
      navigate(user.role === "CAREGIVER" ? "/dashboard" : "/userdashboard");
    }
  }, []);
  

  return (
    <AuthLayout title="ยินดีต้อนรับ">
      {message && (
        <div
          className={`p-3 rounded ${
            message.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {message.text}
        </div>
      )}
      <form className="space-y-6 " onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <label
            htmlFor="email"
            className="w-full md:w-1/3 text-gray-700 font-medium"
          >
            อีเมล
          </label>
          <div className="relative w-full">
            <input
              type="email"
              name="email"
              placeholder="กรุณากรอกอีเมล"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-pink-500 transition disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <label
            htmlFor="password"
            className="w-full md:w-1/3 text-gray-700 font-medium"
          >
            รหัสผ่าน
          </label>

          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="กรุณากรอกรหัสผ่าน"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-pink-500 transition disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              disabled={loading}
              className="hover:cursor-pointer absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              disabled={loading}
              className="w-4 h-4 cursor-pointer"
            />
            <span>จดจำฉันไว้</span>
          </label>

          <Link to="#" className="text-red-600">
            ลืมรหัสผ่าน?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-pink-400 hover:bg-pink-600 text-gray-800 hover:cursor-pointer py-3 rounded-lg"
        >
          {loading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
        </button>

        <div className="text-center text-sm mt-2">
          ไม่มีบัญชีผู้ใช้?
          <Link
            to="/register"
            className="text-blue-600 hover:text-blue-800 ml-1"
          >
            ลงทะเบียน
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}
