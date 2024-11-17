import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center p-2">
            <button className="bg-rose-500 text-base-300 py-2 px-3 rounded-md">Latest</button>
            <Marquee speed='30' pauseOnHover='true' className="space-x-10">
                <Link to='/news'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sed mollitia animi perferendis eveniet saepe a sequi soluta obcaecati hic?
                </Link>
                <Link to='/news'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sed mollitia animi perferendis eveniet saepe a sequi soluta obcaecati hic?
                </Link>
                <Link to='/news'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sed mollitia animi perferendis eveniet saepe a sequi soluta obcaecati hic?
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;