import React, { useState } from "react";
import { useNavigate } from "react-router";
import AuthLayout from "./AuthLayout";
import { Link } from "react-router";
import { Eye, EyeOff } from "lucide-react";

function LoginFrom() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFromData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigation = useNavigate();

  const handleChang = (e) => {
    setFromData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefult();
  //   try {
  //   } catch (error) {}
  // };

  return (
    <AuthLayout title="ยินดีต้อนรับ">
      <form className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center">
          <label htmlFor="email" className="w-full md:w-1/3 text-gray-700">
            อีเมล
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChang}
            required
            className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-pink-500 transition"
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center relative w-full">
          <label htmlFor="password" className="w-full md:w-1/3 text-gray-700">
            รหัสผ่าน
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChang}
            required
            className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-pink-500 transition"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="hover:cursor-pointer absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            จดจำฉันไว้
          </label>

          <Link to="#" className="text-red-600">
            ลืมรหัสผ่าน?
          </Link>
        </div>

        <Link to="/userdashboard">
          <button
            type="submit"
            className="w-full bg-pink-400 hover:bg-pink-600 text-gray-800 hover:cursor-pointer py-3 rounded-lg"
          >
            เข้าสู่ระบบ
          </button>
        </Link>

        <Link to="/userdashboard">
          <button
            type="button"
            className="w-full border border-gray-300 hover:cursor-pointer rounded-lg py-2 flex justify-center items-center gap-2 mt-4"
          >
            <img src="https://www.google.com/favicon.ico" className="w-5" />
            เข้าสู่ระบบผ่าน Google
          </button>
        </Link>

        <div className="text-center text-sm mt-2">
          ไม่มีบัญชีผู้ใช้?
          <Link to="/register" className="text-blue-600">
            ลงทะเบียน
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}

export default LoginFrom;
