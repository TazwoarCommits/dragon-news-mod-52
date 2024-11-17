
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const AuthLayout = () => {
    return (
        <div className="font-poppins">
            <header className="w-11/12 mx-auto py-3">
                <Navbar></Navbar>
            </header>
            <div>
                 <Outlet></Outlet>
                <h2>hello</h2>
            </div>
        </div>
    );
};

export default AuthLayout;