
import Header from './parts/Header';
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <br />
            <span>&copy; scarecrowland 2023</span>
            <br /> <br /> <br />
            <main>

            </main>
        </>
    )
};

export default Layout;

