import { useState } from "react"
import FromCalendarMonthly from "@/components/caregivercard/FromCalendarMonthly"
import FromCalendarDaily from "@/components/caregivercard/FromCalendarDaily";
import FromCalendarHospotal from "@/components/caregivercard/FromCalendarHospotal";



export default function ServiesBar() {
  const [ view, setView] = useState("")
  return (
        <div className="flex justify-center mt-4 md-8 w-70 mx-20 md:w-100 flex-col items-center gap-6">
      <select
        name="ServicesBox"
        value={view}
        onChange={(e) => setView(e.target.value)}
        className="w-75 flex h-12 rounded-4xl mt-4 md:text-2xl py-2 bg-sky-100 shadow-xs hover:shadow-2xs focus:outline-pink-400"
      >
        <option value="" disabled>
          บริการของเรา
        </option>
        <option value="hospitalplan">พาไปหาหมอ</option>
        <option value="dailyplan">บริการดูแลรายวัน</option>
        <option value="monthlyplan">บริการดูแลรายเดือน</option>
      </select>

      {/* Render the correct calendar based on view */}
      {view === "hospitalplan" && <FromCalendarHospotal />}
      {view === "dailyplan" && <FromCalendarDaily />}
      {view === "monthlyplan" && <FromCalendarMonthly />}
    </div>
  );
}

