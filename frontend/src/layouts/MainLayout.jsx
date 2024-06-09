import { Outlet } from "react-router-dom";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";

export default function MainLayout() {
  return (
    <div className="bg-darkBg text-white min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
