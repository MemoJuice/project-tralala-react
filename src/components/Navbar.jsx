import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center bg-[#FEFBF2] top-0 left-0 w-full h-16 overflow-hidden md:justify-start">
      <div className="sm:ml-2 h-full min-w-16 hover:cursor-pointer">
        <img
          alt="tralala"
          src="images/tralala_shark_pic_logo_nobg.png"
          className="w-16"
        />
      </div>

      <div className="flex flex-col items-start min-w-64 m-2 hover:cursor-pointer">
        <p className="text-3xl font-semibold text-zinc-800 ">
          Tralala Prima Care
        </p>
        <p className="text-xl font-semibold text-zinc-600">For Senior</p>
      </div>

      <ul className="hidden xl:flex ml-auto text-lg 2xl:text-xl font-medium text-zinc-600 font-noto h-full *:h-full">
        <li className="h-full flex items-center min-w-16 px-2 2xl:px-6 hover:text-black hover:cursor-pointer hover:bg-yellow-100">
          <Link to="/">หน้าแรก</Link>
        </li>
        <li className="h-full flex items-center min-w-16 px-2 2xl:px-6 hover:text-black hover:cursor-pointer hover:bg-yellow-100">
          <Link to="/about">เกี่ยวกับเรา</Link>
        </li>
        <li className="h-full flex items-center min-w-16 px-2 2xl:px-6 hover:text-black hover:cursor-pointer hover:bg-yellow-100">
          <Link to="/services">บริการของเรา</Link>
        </li>
        <li className="h-full flex items-center min-w-16 px-2 2xl:px-6 hover:text-black hover:cursor-pointer hover:bg-yellow-100">
          <Link to="/caregiver">ผู้ดูแลของเรา</Link>
        </li>
        <li className="h-full flex items-center min-w-16 px-2 2xl:px-6 hover:text-black hover:cursor-pointer hover:bg-yellow-100">
          <Link to="/contact">ติดต่อเรา</Link>
        </li>
      </ul>

      <ul className="flex ml-auto gap-1 md:gap-4 sm:text-black-600 font-noto">
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
        <li className="flex self-center outline-1 p-2 w-10 bg-white rounded-full hover:cursor-pointer hover:font-bold">
          <img src="images/user.svg" className="w-full" />
        </li>
        <li className="hidden sm:flex self-center text-center outline-1 py-2 px-6 bg-white rounded-full xl:mr-6 font-bold text-sm md:text-lg hover:cursor-pointer hover:bg-yellow-100">
          <Link to="/login">เข้าสู่ระบบ</Link>
        </li>
      </ul>
    </nav>
  );
}
