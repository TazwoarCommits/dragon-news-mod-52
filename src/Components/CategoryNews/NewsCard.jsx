import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// {
//     "_id": "4e6092d54c18fbd89ad59e88a1e87fbb",
//     "others_info": {
//       "is_todays_pick": false,
//       "is_trending": false
//     },
//     "category_id": "07",
//     "rating": {
//       "number": 4.5,
//       "badge": "Excellent"
//     },
//     "total_view": 300,
//     "title": "Joe Biden announces $3B in new military aid to Ukraine",
//     "author": {
//       "name": "",
//       "published_date": "2022-08-24 22:30:00",
//       "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
//     },
//     "thumbnail_url": "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png",
//     "image_url": "https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png",
//     "details": "Washington, Aug 24 (Prensa Latina) President Joe Biden has announced he will allot nearly billion in military aid to Kyiv – the biggest US package so far since the beginning of the Russian military…"
//   },

const NewsCard = ({ singleNews }) => {
    const { title, author, image_url, details } = singleNews

    return (
        <div className="mx-4 card card-compact bg-base-100 mb-8">
            <div className="flex gap-2">
                <img className="w-[45px] rounded-full" src={author.img} alt="" />
                <div>
                    <p>{author.name ? author.name : "User"}</p>
                    <p>{author.published_date}</p>
                </div>
            </div>
            <h2>{title}</h2>
            <figure>
                <img
                    className="w-full"
                    src={image_url}
                    alt="Image" />
            </figure>
            <div className="card-body">
                <p>{details.slice(0, 250)}...<span className="text-pink-500"><Link>Read More</Link></span></p>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    singleNews: PropTypes.object.isRequired,
}

export default NewsCard;