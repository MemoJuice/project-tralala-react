// import { Calendar } from "@/components/ui/calendar"
import HealthCard from "../components/HealthCard"
import ReportClient from "../components/ReportClient"
import UserCard from "../components/UserCard"

export default function UserDashboard() {
 
  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-2 mt-4">
        Health Overview
      </h1>

      <UserCard/>

      {/* profile section left side */}
      {/* <div className="text-center text-gray-500 mb-8">August 12, 2024
        <div
          className="box-content w-[400px] h-[300px] bg-white rounded-lg shadow-xl/20 mt-8 ml-6"
        >

          <img
            src="images/woman.png"
            alt="user-profile"
            className="w-16 mx-auto items-center py-2"
          />
          <div className="mt-4 px-4 ">
            <div className="text-bold">Somsri N Trang</div>
            <div className="text-sm text-gray-500">วันเกิด 12 ธันวาคม 1954</div>
            <div className="text-sm text-gray-500">อายุ 71 ปี</div>
            <div className="text-sm text-gray-500">เพศ หญิง</div>

            <div className="text-sm text-gray-500">อาการป่วย</div>
            <div className="text-sm text-gray-500">เบอร์โทรศัพท์</div>


         <div classNameName="bg-cyan-100 text-gray-800 px-6 py-3 rounded-lg flex gap-4">
        <span classNameName="font-medium">stastus:Active</span>
            <div className="flex gap-4">
              <div className="bg-cyan-100 text-gray-800 px-6 py-3 rounded-xl mt-6">
                <span className="font-medium">package :1month</span>
              </div>
              <div className="bg-green-200 text-gray-800 px-6 py-3 rounded-xl mt-6">
                <span className="font-medium">status:active</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="h-100">
      < Calendar
       mode="single"
      className="rounded-md border shadow-sm"
      captionLayout="dropdown"
      />
      </div> */}


      {/* section 3block of measurement */}
      <div className="flex flex-cols-3 gap-4 justify-end *:mr-4 *:mb-4">
        <HealthCard info={"heartrate"}/>
        <HealthCard info={"bloodpressure"}/>
        <HealthCard info={"bloodsugar"}/>
      </div>
      <ReportClient/>


    </div>
  )
}