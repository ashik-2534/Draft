import { Outlet } from "react-router";
import Header from "../assets/Components/Header";
import Footer from "../assets/Components/Footer";

const Mainlayouts = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>

    );
};

export default Mainlayouts;