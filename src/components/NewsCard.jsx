import React from "react";
import { FaEye, FaRegBookmark, FaStar } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

const NewsCard = ({ news }) => {
    const {
        title,
        author,
        thumbnail_url,
        rating,
        total_view,
        details,
    } = news;

    return (
        <div className=" bg-white rounded-sm shadow-lg overflow-hidden border border-gray-300">
            {/* Author Info */}
            <div className="flex items-center justify-between p-4 bg-gray-200">
                <div>
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p className="font-semibold text-sm">{author.name}</p>
                        <p className="text-xs text-gray-500">{author.published_date.split(" ")[0]}</p>
                    </div>
                </div>

                <div className="space-x-1">
                    <button className="text-xl btn btn-ghost">
                        <FaRegBookmark></FaRegBookmark>
                    </button>
                    <button className="text-xl btn btn-ghost">
                        <IoShareSocialOutline></IoShareSocialOutline>
                    </button>
                </div>
            </div>

            {/* News Content */}
            <div className="p-4">
                <h2 className="font-bold text-lg mb-2">{title}</h2>
                {/* Thumbnail */}
                <figure className="w-full mx-auto h-96">
                    <img src={thumbnail_url} alt={title} className="w-full h-full rounded-sm" />
                </figure>
                <p className="text-sm text-gray-600 mb-3">
                    {details.length > 100 ? `${details.slice(0, 100)}...` : details}
                </p>

                {/* Footer Section */}
                <div className="flex justify-between items-center text-sm">
                    {/* Rating */}
                    <div className="flex items-center text-yellow-500">
                        <FaStar className="text-xl" />
                        <span className="ml-1 font-medium">{rating.number}</span>
                    </div>

                    {/* Views */}
                    <div className="flex items-center text-gray-500">
                        <FaEye className="text-xl" />
                        <span className="ml-1">{total_view}</span>
                    </div>
                </div>

                {/* Read More Button */}
                <div className="mt-4">
                    <a href="#" className="text-blue-500 font-semibold text-sm">
                        Read More →
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
