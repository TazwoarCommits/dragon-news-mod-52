import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSidebar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h3 className="text-xl font-semibold mb-4">All Caterogy {categories.length}</h3>
            <div className="flex flex-col gap-2 ">
                {
                    categories.map(category => <NavLink to={`/category/${category.category_id}`}
                        className="btn rounded-md bg-base-100"
                        key={category.category_id}>
                        {category.category_name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftSidebar;