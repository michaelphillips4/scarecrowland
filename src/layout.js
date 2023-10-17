
import Header from './parts/Header';
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <br />
            <div className='text-center'>
            &copy; scarecrowland 2023
            </div>
            <br /> <br /> <br />
        
        </>
    )
};

export default Layout;

