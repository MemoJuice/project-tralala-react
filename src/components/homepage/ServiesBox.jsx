import { useState } from "react"
import { Link } from "react-router-dom"

export default function ServiesBox() {
  // const [open, setOpen] = React.useState(false)
  const [ view, setView] = useState("")
  return (
    <div className="flex flex-col gap-4 mt-3">
      <select
        name="ServicesBox"
        value={view}
        onChange={(e) => setView(e.target.value)}
        className="w-90 md:w-100 md:text-2xl py-2 bg-white shadow-lg rounded-4xl overflow-hidden hover:shadow-xl items-center "
      >
        <option value="" disabled>
          บริการของเรา
        </option>
        <option value="hospitalplan">พาไปหาหมอ</option>
        <option value="dailyplan">บริการดูแลรายวัน</option>
        <option value="monthlyplan">บริการดูแลรายเดือน</option>
      </select>

      <Link to={`/serviceslist?view=${view}`}>
        <button
          type="button"
          className="w-90 md:w-100 md:text-2xl py-3 rounded-4xl bg-pink-400 text-white hover:bg-pink-600"
          disabled={!view}
        >
          ค้นหา
        </button>
      </Link>
    </div>
  )
}
