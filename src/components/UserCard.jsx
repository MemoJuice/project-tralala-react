
export default function UserCard (){
    return (

        <div className="text-center text-gray-500 mb-8">August 12, 2024
        <div className="box-content w-[400px] h-[300px] bg-white rounded-lg shadow-xl/20 mt-8 ml-6">

         <div className="flex items-start p-4"> 
          <img
            src="images/woman.png"
            alt="user-profile"
            className="w-30 h-30 py-4 px-4 "
          />
          <div className="mt-4 px-4 ">
             <div className="mb-3">
             <span className="text-sm text-black">ชื่อ-สกุล:</span>
             <span className="ml-2">สมศรี</span>
          </div>
           <div className="text-sm text-black mb-1">
             <span className="ml-2 w-32">วันเกิด:</span>
             <span>12 ธันวาคม 1954</span>
          </div>


            <div className="text-sm text-black mb-1">
      <span className=" w-32">อายุ:</span>
      <span>71 ปี</span>


            <div className="text-sm text-black">เพศ : หญิง</div>
          

            <div className="text-sm text-black">ลักษณะอาการ : </div>


            <div className="text-sm text-black">เบอร์โทรศัพท์ :</div>


        {/* <div className="bg-cyan-100 text-gray-800 px-6 py-3 rounded-lg flex gap-4">
        <span className="font-medium">status:Active</span>
            <div className="flex gap-4">
              <div className="bg-cyan-100 text-gray-800 px-6 py-3 rounded-xl mt-6">
                <span className="font-medium">package :1month</span>
              </div>
              <div className="bg-green-200 text-gray-800 px-6 py-3 rounded-xl mt-6">
                <span className="font-medium">status:active</span>
              </div>
            </div> */}
          </div>
        </div>
        </div>
        </div>
        </div>
      

    )
  }