export default function UserDashboard(){
    return (
    <div>
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2 mt-4">
          Health Overview
        </h1>
        <p className="text-center text-gray-500 mb-8">August 12, 2024</p>
        <div
          className="box-content w-[400px] h-[300px] bg-white rounded-lg shadow-xl/20 mt-8 ml-6"
        >
          <img
            src="images/woman.png"
            alt="user-profile"
            className="w-16 mx-auto items-center py-2"
          />
          <div className="mt-4 px-4 ">
            <p className="text-bold">Somsri N Trang</p>
            <p classNameName="text-sm text-gray-500">วันเกิด 12 ธันวาคม 1954</p>
            <p classNameName="text-sm text-gray-500">อายุ 71 ปี</p>
            <p classNameName="text-sm text-gray-500">เพศ หญิง</p>
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
      </div>
      <div className="flex flex-cols-3 gap-4 justify-end *:mr-4 *:mb-4">
        <p className="box-content size-32 p-4 bg-white rounded-lg shadow-sm/20">
          Blood Sugar
          <img
            src="images/bloodpressure.png"
            alt="user-profile"
            className="w-64 mx-auto items-center py-2"
          />
        </p>
        <p className="box-content size-32 p-4 bg-white rounded-lg shadow-sm/20">
          Hearth Rate
           <img
            src="images/Heartrate.png"
            alt="heartrate"
            className="w-64 mx-auto items-center py-2"
          />
        </p>
        <p className="box-content size-32 p-4 bg-white rounded-lg shadow-sm/20">
          Blood Pressure
           <img
            src="images/Bloodsugar.png"
            alt="bloodsugar"
            className="w-64 mx-auto items-center py-2"
          />
        </p>
        </div>
        <div className="bg-white  w-[500px] h-[400px] ml-6 mb-6 rounded-lg">
        <img
            src="images/activity.png"
            alt="bloodsugar"
            className="box-content w-[100%] h-[90%] flex justify-center items-center py-2 mt-8"/>
      </div>
    </div>
        )
}