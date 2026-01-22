import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const getToken = () =>
  localStorage.getItem("token") || sessionStorage.getItem("token");

export default function Navbar() {
  const navigate = useNavigate();

  // 1) อ่าน token/user จาก localStorage
  const [token, setToken] = useState(getToken);

  // 2) กันกรณี token เปลี่ยนจากแท็บอื่น
  useEffect(() => {
    const syncAuth = () => setToken(getToken());

    window.addEventListener("storage", syncAuth);
    window.addEventListener("auth-change", syncAuth);

    return () => {
      window.removeEventListener("storage", syncAuth);
      window.removeEventListener("auth-change", syncAuth);
    };
  }, []);

  const handleLogout = () => {
    // ลบ token
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");

    // ลบ user )
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");

    // update state
    setToken(null);

    // แจ้งระบบว่า auth เปลี่ยน
    window.dispatchEvent(new Event("auth-change"));

    navigate("/");
  };
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
        <li className="hidden sm:flex self-center xl:mr-4 relative">
          {!token ? (
            <Link
              to="/login"
              className="py-2 px-4 bg-white rounded-full font-semibold text-sm md:text-base hover:bg-pink-400 transition"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="py-2 px-4 bg-white rounded-full font-semibold text-sm md:text-base hover:bg-pink-400 transition"
            >
              Logout
            </button>
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
