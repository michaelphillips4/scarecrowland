
import Header from './parts/Header';
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <br />
            <p className="text-center">v2.0</p>
        </>
    )
};

export default Layout;

