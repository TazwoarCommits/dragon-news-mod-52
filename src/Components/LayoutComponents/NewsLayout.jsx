import { Outlet } from "react-router-dom";

const NewsLayout = () => {
    return (
        <div>
            <h3 className="text-xl font-semibold">Dragon News Home</h3>
            <Outlet></Outlet>
        </div>
    );
};

export default NewsLayout;