import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import { Eye, EyeOff } from "lucide-react";
import { useContext } from "react";
import { MessageContext } from "../../context/MessageContext";

export default function RegisterForm() {
  const { API } = useContext(MessageContext);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChang = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.role) {
      setError("กรุณาเลือกบทบาทก่อนสมัคร");
      return;
    }

    try {
      await axios.post(`${API}/auth/register`, formData);
      alert("User registered successfully");
      navigate("/login");
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || "Register failed");
    }
  };

  return (
    <AuthLayout title="สมัครสมาชิก">
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center">
          <label htmlFor="username" className="w-full md:w-1/3 text-gray-700">
            ชื่อผู้ใช้
          </label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChang}
            required
            className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-pink-500 transition"
          />
        </div>
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
            className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-pink-500 transition "
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="hover:cursor-pointer absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <label className="w-full md:w-1/3 text-gray-700">เลือกบทบาท</label>

          <div className="flex gap-3 w-full">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, role: "CUSTOMER" })}
              className={`flex-1 py-2 rounded-xl border-2 transition hover:cursor-pointer
        ${
          formData.role === "CUSTOMER"
            ? "bg-pink-500 text-white border-pink-500"
            : "border-gray-300 text-gray-700"
        }`}
            >
              หาผู้ดูแล
            </button>

            <button
              type="button"
              onClick={() => setFormData({ ...formData, role: "CAREGIVER" })}
              className={`flex-1 py-2 rounded-xl border-2 transition hover:cursor-pointer
        ${
          formData.role === "CAREGIVER"
            ? "bg-pink-500 text-white border-pink-500"
            : "border-gray-300 text-gray-700"
        }`}
            >
              ผู้ดูแล
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full hover:cursor-pointer bg-pink-400  hover:bg-pink-600 text-gray-800 py-3 rounded-lg font-medium mt-2"
        >
          สมัครสมาชิก
        </button>
        <div className="text-center text-sm">
          มีบัญชีผู้ใช้แล้ว
          <Link to="/login" className="text-blue-600">
            เข้าสู่ระบบ
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}
