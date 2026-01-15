import { Link } from "react-router-dom";

export default function TopCaregiver (){
    return (
		<div className="py-20 bg-sky-50 font-inter">
     	   <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl text-gray-700 md:text-4xl font-bold text-center mb-8">แนะนำผู้ดูแล</h2>

          <Link to="/productcard">
          <div className="grid p-8 md:grid-cols-2 gap-20 items-center">
            {/* <!-- Image --> */}
            <div>
              <img 
                src="https://www.isavta.co.il/content/migrated-a779904c62a810bcaef859555e16fdc2-592.jpg"
                className="rounded-2xl shadow-lg hover:scale-105"
              />
            </div>
            {/* <!-- Text --> */}
            <div className=" flex-row justify-start">
              <h3 className="text-4xl text-gray-700 font-bold mb-4">นานา จาจา</h3>
              <p className="text-pink-400 text-xl mb-3">ประสบการณ์ 3 ปี</p>
              <p className="text-gray-700 text-xl">
                "มีประสบการณ์ด้านการดูแลผู้สูงอายุ ผ่านการอบรมด้านการดูแลสุขภาพและการใช้ชีวิตประจำวัน มีความเอาใจใส่ ใจเย็น และดูแลผู้รับบริการด้วยความอบอุ่นเสมือนคนในครอบครัว”
              </p>
            </div>
          </div>
          </Link>

        </div>
      </div>
)
}