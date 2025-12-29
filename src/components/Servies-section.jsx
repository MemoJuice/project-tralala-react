import { Link } from "react-router"

export default function ServiceSection (){
    return (
        <div id="service" className="bg-[#FEFBF2] py-20 font-noto">
        <div className="max-w-screen-xl mx-auto px-4 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-10">บริการของเรา</h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* <!-- Card --> */}

            <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl">
              <Link to="/order">
                <img src="https://www.vnshealth.org/wp-content/smush-webp/2022/05/best-qualities-caregiving-1536x1024.jpg.webp" />
                <div className="p-5 text-left">
                  <h3 className="text-xl font-semibold">เยี่ยมบ้าน</h3>
                  <p className="text-sky-600 font-medium">เริ่มต้น 500 บาท</p>
                  <p className="text-gray-600">ตรวจสุขภาพ, ให้ความรู้, พูดคุย</p>
                  <p className="text-gray-500 text-sm mt-2">กรุงเทพ</p>
                </div>
              </Link>
            </div>

            {/* <!-- Card --> */}

            <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl">
              <Link to="/order">
                <img src="https://bucknerparkwayplace.org/wp-content/uploads/2023/03/What-Are-the-Duties-of-a-Respite-Caregiver.png" />
                <div className="p-5 text-left">
                  <h3 className="text-xl font-semibold">บริการระยะสั้น</h3>
                  <p className="text-sky-600 font-medium">เริ่มต้น 600 บาท</p>
                  <p className="text-gray-600">ระยะเวลา 2 ชั่วโมงขึ้นไป</p>
                  <p className="text-gray-500 text-sm mt-2">กรุงเทพ</p>
                </div>
              </Link>
            </div>

            {/* <!-- Card --> */}
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl">
              <Link to="/order">
                <img src="https://assets.contenthub.wolterskluwer.com/api/public/content/b18f3052df5143139623db4bf6ba83ad?v=3ec1d82d&t=w768l" />
                <div className="p-5 text-left">
                  <h3 className="text-xl font-semibold">บริการระยะยาว</h3>
                  <p className="text-sky-600 font-medium">เริ่มต้น 15,000 บาท</p>
                  <p className="text-gray-600">Caregiver ผ่านการอบรมครบถ้วน</p>
                  <p className="text-gray-500 text-sm mt-2">กรุงเทพ</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
    </div>
    )
}