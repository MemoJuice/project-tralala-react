import React, { useState } from "react";
import { useNavigate } from "react-router";
import AuthLayout from "./AuthLayout";
import { Link } from "react-router";

function LoginFrom() {
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

  const handleSubmit = async (e) => {
    e.preventDefult();
    try {
    } catch (error) {}
  };

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
            className="block w-full p-2 border rounded-xl border-gray-400"
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center">
          <label htmlFor="password" className="w-full md:w-1/3 text-gray-700">
            รหัสผ่าน
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChang}
            required
            className="block w-full p-2 border rounded-xl border-gray-400"
          />
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
            className="w-full bg-pink-400 hover:bg-pink-600 text-gray-800 py-3 rounded-lg"
          >
            เข้าสู่ระบบ
          </button>
        </Link>

        <Link to="/userdashboard">
          <button
            type="button"
            className="w-full border border-gray-300 rounded-lg py-2 flex justify-center items-center gap-2 mt-4"
          >
            <img src="https://www.google.com/favicon.ico" className="w-5" />
            เข้าสู่ระบบผ่าน Google
          </button>
        </Link>

        <div className="text-center text-sm mt-2">
          ไม่มีบัญชีผู้ใช้?
          <Link to="/signup" className="text-blue-600">
            ลงทะเบียน
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}

export default LoginFrom;
