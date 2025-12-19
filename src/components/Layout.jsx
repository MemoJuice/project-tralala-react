import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="font-noto">
      <Navbar />
      <div className="min-h-[calc(100dvh-112px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
