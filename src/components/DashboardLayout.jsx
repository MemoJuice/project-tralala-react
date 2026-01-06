import { useState } from "react";
import Sidebar from "./Sidebar";

import Dashboard from "@/views/Dashboard";
import DashboardSchedule from "@/views/DashboardSchedule";
import DashboardIncome from "@/views/DashboardIncome";

export default function DashboardLayout() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar setCurrentPage={setCurrentPage} />

      <main className="flex-1 p-6 overflow-auto">
        {currentPage === "dashboard" && <Dashboard />}
        {currentPage === "dashboardschedule" && <DashboardSchedule />}
        {currentPage === "dashboardincome" && <DashboardIncome />}
      </main>
    </div>
  );
}
