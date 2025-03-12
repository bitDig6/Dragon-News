import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
    }, []);

    return (
        <div>
            <h2 className='text-xl font-semibold mb-5'>All Category ({categories.length})</h2>
            <div className='flex flex-col gap-2'>
                {
                    categories.map(category =>
                        <NavLink to={`/category/${category.category_id}`}
                        className='btn btn-ghost justify-start text-lg text-gray-400 font-medium' key={category.category_id}>
                            {category.category_name}
                        </NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;