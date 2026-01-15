// import { Calendar } from "@/components/ui/calendar"
import HealthCard from "../components/HealthCard";
import ReportClient from "../components/ReportClient";
import UserProfileCard from "../components/UserProfileCard";
import ViewHistoryLog from "../components/ViewHistoryLog";

export default function UserDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-2 mt-4">
        Health Overview
      </h1>

      {/* section 3blocks of measurement  */}
      <div className="flex gap-50 ">
        <UserProfileCard />
        <div className="flex justify-self-end flex-1 gap-4 *:mr-4 *:mb-4">
          <HealthCard info={"heartrate"} />
          <HealthCard info={"bloodpressure"} />
          <HealthCard info={"bloodsugar"} />
        </div>
      </div>

      {/* <ViewHistoryLog/> */}
      <ReportClient/>
    </div>
  );
}
