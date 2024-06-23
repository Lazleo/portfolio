import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className=" bg-gradient-to-b from-indigo-950 to-teal-600 py-4 px-12">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
