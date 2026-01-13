
export default function UserCard (){
    return (

        <div className="text-center text-gray-500 mb-8">August 12, 2024
        <div className="box-content w-[400px] h-[300px] bg-white rounded-lg shadow-xl/20 mt-8 ml-6">

        <div className="flex items-start p-4">
  <img
    src="images/woman.png"
    alt="user-profile"
    className="w-30 h-30 object-cover"
  />
  <div className="ml-4 flex-1">
    <div className="mb-2">
      <span className="font-bold">ชื่อ-สกุล:</span>
      <span className="ml-2">สมศรี</span>
    </div>
    <div className="text-sm text-gray-500 mb-1">
      <span className="inline-block w-32">วันเกิด:</span>
      <span>12 ธันวาคม 1954</span>
    </div>
    <div className="text-sm text-gray-500 mb-1">
      <span className="inline-block w-32">อายุ:</span>
      <span>71 ปี</span>
    </div>
    <div className="text-sm text-gray-500 mb-1">
      <span className="inline-block w-32">เพศ:</span>
      <span>หญิง</span>
    </div>
    <div className="text-sm text-gray-500 mb-1">
      <span className="inline-block w-32">ลักษณะอาการ:</span>
      <span></span>
    </div>
    <div className="text-sm text-gray-500">
      <span className="inline-block w-32">เบอร์โทรศัพท์:</span>
      <span></span>
    </div>
  </div>
</div>

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