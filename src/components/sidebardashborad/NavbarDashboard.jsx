import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
// import { GrSchedules } from "react-icons/gr";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

export default function NavbarDashboard() {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 h-full flex flex-col justify-between">
      <div className="mb-10 text-center">
        <p className="mt-3 font-semibold text-gray-800">นานา</p>
        <p className="text-xs text-gray-500">Caregiver</p>
      </div>

      <nav className="text-sm">
        <ul className="flex flex-col gap-6">
          <li>
            <Link
              to="/dashboard"
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <RxDashboard />
              <span>Dashboard</span>
            </Link>
          </li>
          {/* <li>
            <Link
              to="/dashboardschedule"
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <GrSchedules />
              <span>Schedule</span>
            </Link>
          </li> */}
          <li>
            <Link
              to="/dashboardincome"
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <RiMoneyDollarBoxLine />
              <span>Income</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
