import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const FindUs = () => {
    return (
        <div className="mt-7">
           <h3 className="text-xl font-semibold mb-3">Find Us On</h3> 
           <div className="flex flex-col gap-2">
            <button className="btn flex items-center gap-2 w-full"><span className="text-blue-700"><FaFacebook></FaFacebook></span>Facebook</button>
            <button className="btn flex items-center gap-2 w-full"><span className="text-blue-400"><FaTwitter></FaTwitter></span>Twitter</button>
            <button className="btn flex items-center gap-2 w-full"><span className="text-pink-400"><FaInstagram></FaInstagram></span>Instagram</button>
           </div>
        </div>
    );
};

export default FindUs;