import FindUs from "../FindUs/FindUs";
import SocialLogin from "../SocialLogin/SocialLogin";

const RightSidebar = () => {
    return (
        <div>
           <SocialLogin></SocialLogin>
           <FindUs></FindUs>
        </div>
    );
};

export default RightSidebar;