import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-gray-300 text-black font-medium p-4 ">
      <ul className="flex gap-6 justify-end">
        <li>
          <Link to="/">หน้าแรก</Link>
        </li>
        <li>
          <Link to="/about">เกี่ยวกับเรา</Link>
        </li>
        <li>
          <Link to="/services">บริการของเรา</Link>
        </li>
        <li>
          <Link to="/caregiver">ผู้ดูแลของเรา</Link>
        </li>
        <li>
          <Link to="/contact">ติดต่อเรา</Link>
        </li>
      </ul>
    </nav>
  );
}
