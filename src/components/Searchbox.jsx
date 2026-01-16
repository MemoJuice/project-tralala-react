import { Link } from "react-router";
import ServiesBox from "./ServiesBox";
import { useState } from "react"



export default function Searchbox (){

    const [service, setService] = useState("dailyplan")

    return (
        <div>
			    <form className="md:w-[40%] mt-2 space-y-4 md:mt-10">
              <ServiesBox value={service} onChange={setService}/>
              <div className="flex gap-3">

                <Link to={`/serviceslist/${service}`}>
                <button type="serviesbutton" className="w-90 md:w-100 md:text-2xl py-3 rounded-4xl bg-pink-400 text-white hover:bg-pink-600 ">
                  ค้นหา
                </button></Link>
              </div>
            </form>
        </div>
    )
}