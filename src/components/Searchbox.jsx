import { Link } from "react-router"

export default function Searchbox (){
    return (
        <div>
			    <form className="md:w-[40%] mt-6 space-y-4 md:mt-20">
              <input
                type="text"
                placeholder="ค้นหาผู้ดูแล"
                className="w-full border border-gray-300 rounded-xl p-3 bg-white focus:ring-2 focus:ring-sky-400"
              />

              <select className="w-full border border-gray-300 rounded-xl p-3 bg-white focus:ring-2 focus:ring-sky-400">
                <option disabled selected>เลือกประเภทบริการ</option>
                <option>บริการเยี่ยมบ้าน</option>
                <option>แผนดูแลระยะยาว</option>
                <option>แผนดูแลรายชั่วโมง</option>
              </select>

              <div className="flex gap-3">
                <button type="button" className="w-full md:w-25 py-3 rounded-2xl bg-amber-100 hover:bg-amber-300">
                  ตัวกรอง
                </button>
                <Link to="/productcard"><button type="submit" className="w-full md:w-25 py-3 rounded-2xl bg-sky-500 text-white hover:bg-sky-600">
                  ค้นหา
                </button></Link>
              </div>
            </form>
        </div>
    )
}