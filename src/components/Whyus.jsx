import { Link } from "react-router-dom";

export default function WhyUS (){
    return (
      <div className="py-20 font-noto">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-14 px-4 items-center">

          {/* <!-- Text --> */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-700">ทำไมต้องเลือกเรา</h2>

            <p className="text-gray-700 mb-6 text-xl">
              เรามีทีมผู้ดูแลที่ผ่านการอบรม พร้อมบริการคุณภาพสูงระดับมืออาชีพ
            </p>
            <Link to="/serviceslist"><button type="submit" className="w-90 md:w-100 md:text-2xl py-3 rounded-4xl bg-pink-400 text-white hover:bg-pink-600 ">
                  จองบริการตอนนี้
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