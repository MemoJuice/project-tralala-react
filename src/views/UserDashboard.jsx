// import { Calendar } from "@/components/ui/calendar"
import HealthCard from "../components/HealthCard";
import ReportClient from "../components/ReportClient";
import UserProfileCard from "../components/UserProfileCard";
import ViewHistoryLog from "../components/ViewHistoryLog";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UserDashboard() {
  const navigate = useNavigate();
  const checkSession = sessionStorage.getItem("checkSession");

  useEffect(() => {
    if (!checkSession) {
      console.log("UNAUTHORIZATION, PLEASE LOG IN");
      navigate("/login");
    }
  }, []);

  return (
    <div>
       { !checkSession ?
      <h1 className="text-black text-3xl">UNAUTHORIZATION, PLEASE LOG IN</h1>
      :
      <div>
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2 mt-4">
          Health Overview
        </h1>

        {/* section 3blocks of measurement  */}
        <div className="flex gap-20 ">
          <UserProfileCard />
          <div className="flex justify-self-end flex-1 gap-4 *:mr-4 *:mb-4">
            <HealthCard info={"heartrate"} />
            <HealthCard info={"bloodpressure"} />
            <HealthCard info={"bloodsugar"} />
          </div>
        </div>

        <div className="flex justify-center">
        <ViewHistoryLog/>
        <ReportClient/>
        </div>
      </div>
      }
    </div>
  );
}
