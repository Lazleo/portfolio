import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="bg-gradient-to-b from-darkBg from-[5%] via-midBg to-lightBg py-4 font-text text-neutral">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
