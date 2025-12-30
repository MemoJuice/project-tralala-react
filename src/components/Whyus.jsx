import { Link } from "react-router-dom";

export default function WhyUS (){
    return (
      <div className="py-20 font-noto">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-14 px-4 items-center">

          {/* <!-- Text --> */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ทำไมต้องเลือกเรา</h2>

            <p className="text-gray-600 mb-6">
              เรามีทีมผู้ดูแลที่ผ่านการอบรม พร้อมบริการคุณภาพสูงระดับมืออาชีพ
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold">Trusted by Thousands</h3>
              <p className="text-gray-600">บริการที่ได้รับความไว้วางใจจากครอบครัวทั่วประเทศ</p>
            </div>

              <Link to="/productcard"><button className="bg-sky-500 text-white px-8 py-4 rounded-xl text-lg hover:bg-sky-600 pointer-events-auto hover:cursor-pointer">
                Booking Now
              </button></Link>
          </div>

          {/* <!-- Image --> */}

          <div>
            <img
              src="images/caregiver_booking.png"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    )
}