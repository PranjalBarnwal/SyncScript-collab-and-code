import { Outlet } from "react-router-dom";
import ErrorPage from "../routes/ErrorPage";
import Navbar from "./Navbar";
import Space from "../routes/Space";
export default function Bundle() {
  return (
    <div className="px-[5rem] h-full w-full">
      <Navbar />

      <Outlet />
    </div>
  );
}
