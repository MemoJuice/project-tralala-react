import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export default function Navbar() {
  const { user, logout, loadingAuth } = useAuth();

  if (loadingAuth) return null;

  return (
    <nav className="flex sticky items-center bg-[#FEFBF2] top-0 w-full h-20 overflow-hidden md:justify-start z-99">
      <div className="sm:ml-2 h-full min-w-16 hover:cursor-pointer mt-1">
        <Link to="/">
          <img
            alt="tralala"
            src="images/tralala_shark_pic_logo_nobg.png"
            className="w-16"
          />
        </Link>
      </div>

      <div className="flex flex-col items-start min-w-64 m-2 hover:cursor-pointer">
        <Link to="/">
          <p className="text-2xl md:text-3xl font-semibold text-zinc-800 ">
            Tralala Prima Care
          </p>
          <p className="text-xl font-semibold text-zinc-600">For Senior</p>
        </Link>
      </div>

      <ul className="hidden xl:flex ml-auto text-lg 2xl:text-xl font-medium text-zinc-600 font-noto h-full *:h-full">
        <li className="h-full flex items-center min-w-16 px-2 2xl:px-6 hover:text-black hover:cursor-pointer hover:bg-pink-400">
          <Link to="/">หน้าแรก</Link>
        </li>
        <li className="h-full flex items-center min-w-16 px-2 2xl:px-6 hover:text-black hover:cursor-pointer hover:bg-pink-400">
          <Link to="/about">เกี่ยวกับเรา</Link>
        </li>
        <li className="h-full flex items-center min-w-16 px-2 2xl:px-6 hover:text-black hover:cursor-pointer hover:bg-pink-400">
          <Link to="/serviceslist">บริการของเรา</Link>
        </li>
        <li className="h-full flex items-center min-w-16 px-2 2xl:px-6 hover:text-black hover:cursor-pointer hover:bg-pink-400">
          <Link to="/ourcaregiver">ผู้ดูแลของเรา</Link>
        </li>
        <li className="h-full flex items-center min-w-16 px-2 2xl:px-6 hover:text-black hover:cursor-pointer hover:bg-pink-400">
          <Link to="/contact">สมัครเป็นผู้ดูแล</Link>
        </li>
      </ul>

      <ul className="flex ml-auto gap-1 md:gap-4 sm:text-black-600">
        <li className="hidden sm:flex self-center text-center max-w-40 hover:cursor-pointer hover:font-bold">
          <img
            src="images/phone-call.svg"
            alt="phone"
            className="w-7 mr-2 md:mr-0"
          />
          <span className="hidden md:block ml-2 md:text-base">
            086-858-8666
          </span>
        </li>
        {/* <li className="flex self-center outline-1 p-2 w-10 bg-white rounded-full hover:cursor-pointer hover:font-bold">
          <img src="images/user.svg" className="w-full" />
        </li> */}
        <li className="hidden sm:flex self-center xl:mr-4 relative group">
          {!user ? (
            <Link
              to="/login"
              className="py-2 px-4 bg-white rounded-full font-semibold text-sm md:text-base hover:bg-pink-400 transition"
            >
              เข้าสู่ระบบ
            </Link>
          ) : (
            <>
              {/* Profile Pill */}
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full cursor-pointer hover:bg-gray-100 transition">
                <span className="text-sm font-medium text-gray-800">
                  {user.username}
                </span>
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Dropdown */}
              <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
                <button
                  onClick={logout}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 rounded-xl"
                >
                  ออกจากระบบ
                </button>
              </div>
            </>
          )}
        </li>
      </ul>

      {/* Mobile Navbar */}
      <div className="ml-2 sm:ml-4 flex flex-col gap-2 xl:hidden self-center py-2 pr-4 text-2xl font-noto hover:cursor-pointer">
        <div className="w-9 h-1 bg-black"></div>
        <div className="w-9 h-1 bg-black"></div>
        <div className="w-9 h-1 bg-black"></div>
        <div className="group fixed w-full hover:w-70 hover:right-0">
          <div className="h-11 bg-none"></div>
          <ul className="group-hover:flex flex-col *:py-4 *:text-gray-800">
            <li className="self-center text-center min-w-full hover:cursor-pointer hover:bg-pink-200 group-hover:bg-pink-50 group-hover:outline-1 outline-pink-200">
              <Link to="/">หน้าแรก</Link>
            </li>
            <li className="self-center text-center min-w-full hover:cursor-pointer hover:bg-pink-200 group-hover:bg-pink-50 group-hover:outline-1 outline-pink-200">
              <Link to="/about">เกี่ยวกับเรา</Link>
            </li>
            <li className="self-center text-center min-w-full hover:cursor-pointer hover:bg-pink-200 group-hover:bg-pink-50 group-hover:outline-1 outline-pink-200">
              <Link to="/serviceslist">บริการของเรา</Link>
            </li>
            <li className="self-center text-center min-w-full hover:cursor-pointer hover:bg-pink-200 group-hover:bg-pink-50 group-hover:outline-1 outline-pink-200">
              <Link to="/ourcaregiver">ผู้ดูแลของเรา</Link>
            </li>
            <li className="self-center text-center min-w-full hover:cursor-pointer hover:bg-pink-200 group-hover:bg-pink-50 group-hover:outline-1 outline-pink-200 rounded-bl-3xl">
              <Link to="/contact">สมัครเป็นผู้ดูแล</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
