import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const {data:news} = useLoaderData();
    // console.log(data)

    return (
        <div>
            <h2 className='font-semibold mb-3'>Dragon News Home</h2>
            <div className='space-y-7'>
                {
                    news.map( singleNews => 
                        <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
                     )
                }
            </div>
        </div>
    );
};

export default CategoryNews;