import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
             <h3 className="text-xl font-semibold mb-4">Login With</h3>
             <div className="flex flex-col gap-2">
             <button className="btn text-blue-600"> <FaGoogle></FaGoogle> Login with Google</button>
             <button className="btn"> <FaGithub></FaGithub> Login with Github</button>
             </div>
        </div>
    );
};

export default SocialLogin;