import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='bg-[#F3F3F3] flex gap-4 py-4 items-center px-4'>
            <p className='bg-[#D72050] text-white font-medium text-xl px-3 py-1'>Latest</p>
            <Marquee pauseOnHover={true} speed={100} className='space-x-10 text-lg font-semibold'>
                <Link>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Link>

                <Link>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Link>

                <Link>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;