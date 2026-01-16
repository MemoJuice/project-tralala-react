import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export default function Dashboard() {
  // const[user, setUser] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {}, []);
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Hello Natalya 👋</h2>

      <div className="bg-white rounded-2xl p-6 shadow">
        <h3 className="text-lg font-semibold mb-6">งานวันนี้</h3>

        <div className="space-y-6">
          <div className="flex justify-between items-center border-b pb-3">
            <div className="flex items-center gap-3">
              <span className="text-blue-500 text-xl">🚌</span>
              <p className="text-gray-800">พาคุณสมจิตไปโรงพยาบาล</p>
            </div>
            <span className="text-sm text-gray-600">8:00 น.</span>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-gray-800 font-semibold">รายละเอียดงาน</p>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit...
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 mt-8">
        <div className="col-span-12 md:col-span-4 bg-white shadow rounded-2xl">
          <div className="rounded-2xl shadow p-6 text-center h-full">
            <img
              src="images/woman.png"
              alt="user-profile"
              className="mx-auto w-24 h-24 rounded-full"
            />
            <h4 className="mt-4 font-semibold text-lg">สมจิต ใจดี</h4>
            <p className="text-sm">อายุ 66 ปี</p>
            <button className="mt-4 bg-blue-400 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-blue-200">
              ดูเพิ่มเติม
            </button>
          </div>
        </div>

        <div className="col-span-12 md:col-span-8">
          <div className="bg-gray-200 rounded-2xl h-64 p-4 text-sm text-gray-700">
            บันทึกงาน…
            <p className="mt-2 text-gray-500 text-xs">
              Lorem ipsum dolor sit amet...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
