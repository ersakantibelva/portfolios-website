import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function RootPage() {
  return (
    <div className="flex flex-col min-h-screen mx-auto bg-honeydew max-w-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
