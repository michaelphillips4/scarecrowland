import Footer from './parts/Footer';
import Header from './parts/Header';
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <br />
            <Footer />
            <p className="text-center">v2.1</p>
        </>
    )
};

export default Layout;