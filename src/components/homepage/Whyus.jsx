import { Link } from "react-router-dom";

export default function WhyUS (){
    return (
      <div className="py-16">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-14 px-4 items-center">

          {/* <!-- Text --> */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-700">ทำไมต้องเลือกเรา</h2>

            <p className="text-gray-700 mb-6 text-xl">
              เรามีทีมผู้ดูแลที่ผ่านการอบรม พร้อมบริการคุณภาพสูงระดับมืออาชีพ
            </p>
            <ul className="list-disc list-inside mb-6 text-gray-700 space-y-3 text-lg">
               
              <li>ผ่านการตรวจสอบประวัติอาชญากรรม</li>
              <li>อบรมและทดสอบทักษะโดยกระทรวงสาธารณสุข</li>
              <li>ทักษะและประสบการณ์ที่ตรงกับโจทย์ของคุณ</li>
            </ul>
            <div className="flex flex-wrap gap-3 md:flex-row justify-between">
            <Link to="/serviceslist"><button type="submit" className="px-8 text-shadow-sm text-2xl md:px-24 md:text-2xl  py-3 rounded-4xl bg-pink-400 text-white hover:bg-pink-600">
                  จองบริการตอนนี้
            </button></Link>
            <Link to="/about"><button type="submit" className="px-4 text-shadow-sm text-2xl md:px-8 md:text-2xl py-3 rounded-4xl bg-sky-400 text-white hover:bg-sky-600">
                  ทำความรู้จักเรา
            </button></Link>
            </div>
          </div>

          <div>
            <img
              src="images/caregiver_booking.png"
              className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    )
}