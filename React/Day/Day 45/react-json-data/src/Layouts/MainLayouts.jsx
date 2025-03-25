import { Outlet } from "react-router";
import Footer from "../assets/Components/Footer";
import Header from "../assets/Components/header";
const MainLayouts = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayouts;
