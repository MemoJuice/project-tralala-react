import { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { GrSchedules } from "react-icons/gr";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

const menuItems = [
  {
    icons: <RxDashboard size={24} />,
    label: "Dashboard",
    page: "dashboard",
  },
  {
    icons: <GrSchedules size={24} />,
    label: "Schedules",
    page: "dashboardschedule",
  },
  {
    icons: <RiMoneyDollarBoxLine size={24} />,
    label: "Income",
    page: "dashboardincome",
  },
];

export default function Sidebar({ setCurrentPage }) {
  const [open, setOpen] = useState(true);

  return (
    <nav
      className={`shadow-md h-screen p-2 flex flex-col duration-500 bg-white ${
        open ? "w-60" : "w-16"
      }`}
    >
      {/* Header */}
      <div className="px-3 py-2 h-20 flex justify-between items-center">
        <MdMenuOpen
          size={34}
          className={`duration-500 cursor-pointer ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
      </div>

      {/* Menu */}
      <ul className="flex-1">
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => setCurrentPage(item.page)}
            className="px-3 py-2 my-2 hover:bg-gray-300 rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group"
          >
            <div>{item.icons}</div>

            <p
              className={`${
                !open && "w-0 translate-x-24"
              } duration-500 overflow-hidden`}
            >
              {item.label}
            </p>

            {/* Tooltip when collapsed */}
            <p
              className={`${
                open && "hidden"
              } absolute left-32 shadow-md rounded-md
                w-0 p-0 text-black bg-white duration-100 overflow-hidden
                group-hover:w-fit group-hover:p-2 group-hover:left-16`}
            >
              {item.label}
            </p>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="flex items-center gap-2 px-3 py-2">
        <FaUserCircle size={30} />
        <div
          className={`leading-5 ${
            !open && "w-0 translate-x-24"
          } duration-500 overflow-hidden`}
        >
          <p>Saheb</p>
          <span className="text-xs">saheb@gmail.com</span>
        </div>
      </div>
    </nav>
  );
}
