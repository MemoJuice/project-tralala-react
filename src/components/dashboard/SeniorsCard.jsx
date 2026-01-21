import React from "react";
import { Link } from "react-router";

export default function SeniorsCard() {
  return (
    <div className="lg:col-span-1 rounded-3xl p-6 md:p-6 flex flex-col items-center justify-center shadow-lg bg-white">
      <div className="w-24 h-24 md:w-28 md:h-28 bg-white bg-opacity-40 rounded-full mb-4 flex items-center justify-center">
        <img src="images/woman.png" alt="user-profile" className="w-32 " />
      </div>
      <div className="space-y-2 w-full">
        <div className="bg-gray-100 bg-opacity-90 rounded-full px-4 py-4 text-center">
          <p className="text-gray-800 font-semibold text-xs md:text-sm">
            สมจิต ใจดี
          </p>
          <p className="text-gray-700 text-xs md:text-sm">อายุ 66 ปี</p>
        </div>
        <Link to="/userdashboard">
          <button
            type="submit"
            className="w-1/2 bg-pink-400 hover:bg-pink-600 text-gray-800 py-2 rounded-2xl mx-auto block hover:cursor-pointer"
          >
            ดูเพิ่มเติม
          </button>
        </Link>
      </div>
    </div>
  );
}
