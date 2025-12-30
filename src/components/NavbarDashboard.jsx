import { Link } from "react-router";

export default function NavbarDashboard() {
  return (
    <aside className="grid grid-cols-12 gap-6 max-w-7xl mx-auto mt-20 px-6">
      <div className="text-center">
        <img src="" alt="" />
        <p className="mt-3 font-semibold text-gray-800">Natalya</p>
        <p className="text-xs text-gray-500">Caregiver</p>
      </div>
      <nav className="flex flex-col gap-3 text-sm mt-16">
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboardschedule">Schedule</Link>
          </li>
          <li>
            <Link to="/dashboardincome">Income</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
