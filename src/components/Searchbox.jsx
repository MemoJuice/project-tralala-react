import { Link } from "react-router"

export default function Searchbox (){
    return (
        <div>
			    <form className="md:w-[40%] mt-6 space-y-4 md:mt-10">
              <select className="w-full md:w-100 border-gray-300 rounded-4xl py-4 bg-white focus:ring-2 focus:ring-pink-400">
                <option disabled selected>เลือกประเภทบริการ</option>
                <option>บริการเยี่ยมบ้าน</option>
                <option>แผนดูแลระยะยาว</option>
                <option>แผนดูแลรายชั่วโมง</option>
              </select>

              <div className="flex gap-3">
                <Link to="/productlist"><button type="submit" className="w-90 md:w-100 md:text-2xl py-4 rounded-4xl bg-pink-400 text-white hover:bg-pink-600 ">
                  ค้นหา
                </button></Link>
              </div>
            </form>
        </div>
    )
}