
import Header from './parts/Header';
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <br />
  
        </>
    )
};

export default Layout;

