import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="font-noto">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
