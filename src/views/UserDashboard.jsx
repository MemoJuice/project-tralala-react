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

      {/-* section 3blocks of measurement */}
      <div className="flex gap-50 ">
        <UserProfileCard />
        <div className="flex justify-self-end flex-1 gap-4 *:mr-4 *:mb-4">
          <HealthCard info={"heartrate"} />
          <HealthCard info={"bloodpressure"} />
          <HealthCard info={"bloodsugar"} />
        </div>
      </div>

      {/* <ViewHistoryLog/> */}
      <div>
        <div className="col-span-12 md:col-span-8 flex justify-start pt-6">
          <div className="bg-gray-200 rounded-2xl p-4 w-150 h-100 flex flex-col pt-6 mr-8 mb-8">
            <h1 className="text-lg text-black font-semibold mb-4">
              รายการย้อนหลัง
            </h1>
            <p classname="text-gray">--ข้อมูล--</p>
          </div>
        </div>
      </div>
      {/* <ReportClient/> */}
      <div className="col-span-12 md:col-span-8 flex justify-end items-start pt-6">
        <div className="bg-gray-200 rounded-2xl p-4 w-150 h-100 flex flex-col pt-6 mr-8 mb-8">
          <h1 className="text-lg text-black font-semibold mb-4">
            บันทึกรายละเอียดของผู้ใช้บริการ
          </h1>
          <p classname="text-gray">--ข้อมูล--</p>
        </div>
      </div>
    </div>
  );
}
