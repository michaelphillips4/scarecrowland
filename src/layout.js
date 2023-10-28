import Footer from './parts/Footer';
import Header from './parts/Header';
import { Outlet } from "react-router-dom";
import Navigation from './parts/Navigation';

const Layout = () => {
    return (
        <>
            <Header />
            <Navigation />
            <Outlet />
            <br />
            <Footer />
           
        </>
    )
};

export default Layout;