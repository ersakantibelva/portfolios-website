import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function RootPage() {
  return (
    <div className="flex flex-col h-screen mx-auto bg-honeydew max-w-screen">
      <Navbar />
      <div className="h-full overflow-auto">
      <Outlet />
      <Footer />
      </div>
    </div>
  );
}
