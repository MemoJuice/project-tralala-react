import TodayTaskCard from "./TodayTaskCard";
import SeniorsCard from "./SeniorsCard";
import DashboardSchedule from "./DashboardSchedule";
import { useEffect, useState } from "react";
import apiauth from "@/api/axios";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiauth
      .get("/caregivers/me/overview")
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error(err);
        if (err.response?.status === 401) {
          localStorage.clear();
          sessionStorage.clear();
          window.location.href = "/login";
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading dashboard...</p>;
  if (!data) return <p>ไม่พบข้อมูล</p>;

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        Hello{" "}
        {data.caregiver
          ? `${data.caregiver.firstName} ${data.caregiver.lastName}`
          : "Caregiver"}{" "}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <TodayTaskCard task={data.todayTask} />
        <SeniorsCard senior={data.senior} />
      </div>

      <DashboardSchedule schedule={data.schedule} />
    </div>
  );
}
