
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const AuthLayout = () => {
    return (
        <div className="font-poppins">
            <header className="w-11/12 mx-auto py-3">
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;