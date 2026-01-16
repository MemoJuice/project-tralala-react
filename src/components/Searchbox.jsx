import { Link } from "react-router";
import ServiesBox from "./ServiesBox";



export default function Searchbox (){
    return (
        <div>
			    <form className="md:w-[40%] mt-2 space-y-4 md:mt-10">
              <ServiesBox />
              <div className="flex gap-3">
                <Link to="/serviceslist"><button type="submit" className="w-90 md:w-100 md:text-2xl py-3 rounded-4xl bg-pink-400 text-white hover:bg-pink-600 ">
                  ค้นหา
                </button></Link>
              </div>
            </form>
        </div>
    )
}