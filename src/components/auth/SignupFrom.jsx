import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import AuthLayout from "./AuthLayout";
import { Link } from "react-router";

export default function SignupFrom() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
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
    try {
      await axios.post("http://localhost:3000/api/v1/auth/register", formData);
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
            className="block w-full p-2 border rounded-xl border-gray-400"
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
        <button
          type="submit"
          className="w-full bg-pink-400 hover:bg-pink-600 text-gray-800 py-3 rounded-lg font-medium mt-2"
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
