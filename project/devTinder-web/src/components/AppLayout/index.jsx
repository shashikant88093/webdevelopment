import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
