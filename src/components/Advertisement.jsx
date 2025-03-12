import React from 'react';
import fakeAdImg from '../assets/demo-card-thumbnail.png';

const Advertisement = () => {
    return (
        <div className='ad-bg-img rounded-sm p-5'>
            <div className='space-y-3 *:border-2 *:border-white'>
                <img src={fakeAdImg} alt="" />
                <img src={fakeAdImg} alt="" />
                <img src={fakeAdImg} alt="" />
                <img src={fakeAdImg} alt="" />
                <img src={fakeAdImg} alt="" />
            </div>          
        </div>
    );
};

export default Advertisement;