import { Link } from "react-router"

export default function ServiceSection (){
    return (
        <div id="service" className="bg-[#FEFBF2] py-20">
        <div className="max-w-screen-xl mx-auto px-4 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-10">บริการของเรา</h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* <!-- Card --> */}

            <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl">
              <Link to="/serviceslist?view=hospitalplan">
                <img src="images/caregiving-hos.jpg" />
                <div className="p-5 gap-0.5 text-left">
                  <h3 className="text-2xl text-gray-700 mb-1 font-bold">พาไปพบแพทย์</h3>
                  <p className="text-gray-700 mb-1">บริการพาไปพบแพทย์ ดูแลอย่างใกล้ชิดตลอดการนัดหมาย</p>
                  <p className="text-sky-600 font-medium mt-3">อ่านเพิ่ม</p>
                </div>
              </Link>
            </div>

            {/* <!-- Card --> */}

            <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl">
              <Link to="/serviceslist?view=dailyplan">
                <img src="images/caregiver-daily.jpg" />
                <div className="p-5 text-left">
                  <h3 className="text-2xl text-gray-700 mb-1 font-bold">บริการดูแลรายวัน</h3>
                  <p className="text-gray-700 mb-1"> เหมาะสำหรับครอบครัวที่ต้องการผู้ดูแลในช่วงเวลาสั้นๆ หรือเป็นบางวัน ดูแลสุขอนามัย การใช้ชีวิตประจำวัน</p>
                  <p className="text-sky-600 font-medium mt-3">อ่านเพิ่ม</p>
                </div>
              </Link>
            </div>

            {/* <!-- Card ---> */}
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl">
              <Link to="/serviceslist?view=monthlyplan">
                <img src="images/cargive-monthly.jpg" />
                <div className="p-5 text-left">
                  <h3 className="text-2xl text-gray-700 mb-1 font-bold">บริการดูแลรายเดือน</h3>
                  <p className="text-gray-700 mb-1">เหมาะสำหรับการดูแลระยะยาว โดยทีมผู้ดูแลคุณภาพที่มีประสบการณ์และผ่านการอบรม </p>
                  <p className="text-sky-600 font-medium mt-3">อ่านเพิ่ม</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
    </div>
    )
}