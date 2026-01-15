export default function UserProfileCard() {
  return (
    // <div className="text-center text-gray-500 mb-8">
    <div className="w-800 h-90 bg-white rounded-lg shadow-xl/20  mt-10 ml-30">
      <div className="flex items-start p-6">
        <img src="images/woman.png" alt="user-profile" className="w-32 " />
        <div className="flex-col flex-start justify-center ml-6 flex-1  ">
          <div className="mb-2">
            <span className="inline-block w-36 font-medium">ชื่อ-สกุล:</span>
          </div>
          <div className="mb-2">
            <p className="inline-block w-36 font-medium">วันเกิด:</p>
          </div>
          <div className="mb-2">
            <p className="inline-block w-36 font-medium">อายุ:</p>
          </div>
          <div className="mb-2">
            <p className="inline-block w-36 font-medium">เพศ :</p>
          </div>
          <div className="mb-2">
            <p className="inline-block w-36 font-medium">ลักษณะอาการ :</p>
          </div>
          <div className="mb-2">
            <p className="inline-block w-36 font-medium">ยา :</p>
          </div>
          <div className="mb-2">
            <p className="inline-block w-36 font-medium">ชื่อญาติผู้รับบริการ :</p>
          </div>
          <div className="mb-2">
            <p className="inline-block w-36 font-medium">เบอร์โทรศัพท์ฉุกเฉิน :</p>
            </div>
              </div>
            </div>
          </div>
  )
}
