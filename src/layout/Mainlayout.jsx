import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function Mainlayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
