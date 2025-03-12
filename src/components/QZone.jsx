import React from 'react';
import classImg from '../assets/class.png';
import swimImg from '../assets/swimming.png';
import playImg from '../assets/playground.png';

const QZone = () => {
    return (
        <div className='p-4 bg-base-200 rounded-sm'>
            <h3 className='text-xl font-semibold mb-5'>Q-Zone</h3>
            <div className='space-y-5'>
                <img src={swimImg} alt="" />
                <img src={classImg} alt="" />
                <img src={playImg} alt="" />
            </div>    
        </div>
    );
};

export default QZone;