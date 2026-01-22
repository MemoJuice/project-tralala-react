import Sidebar from "./Sidebar";
import Dashboard from "@/components/dashboard/Dashboard";
import DashboardSchedule from "@/components/dashboard/DashboardSchedule";
import DashboardLog from "@/components/dashboard/DashboardLog";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("dashboard");
  let token = "";
  if (sessionStorage.getItem("token")) {
    token = sessionStorage.getItem("token");
  } else if (localStorage.getItem("token")) {
    token = localStorage.getItem("token")
  };

  useEffect(() => {
    if (!token) {
      console.log("UNAUTHORIZATION, PLEASE LOG IN");
      navigate("/login");
    }
  }, []);

  return (
    <div>
      { !token ?
      <h1 className="text-black text-3xl">UNAUTHORIZATION, PLEASE LOG IN</h1>
      : <div className="flex h-screen bg-gray-100  ">
        <Sidebar setCurrentPage={setCurrentPage} />

        <main className="flex-1 p-6 overflow-auto">
          {currentPage === "dashboard" && <Dashboard />}
          {currentPage === "dashboardschedule" && <DashboardSchedule />}
          {currentPage === "dashboardLog" && <DashboardLog />}
        </main>
      </div>
      }
    </div>
  );
}
