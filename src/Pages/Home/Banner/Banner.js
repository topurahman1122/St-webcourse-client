import React from 'react';
import img from '../../../assets/images/banner/1.webp';

const Banner = () => {
    return (
        <div className="carousel carousel-center rounded-box">
            <div className="carousel-item">
                <img src={img} alt="Pizza" />
            </div>
            <div className="carousel-item">
                <img src="" alt="" />
            </div>
            <div className="carousel-item">
                <img src="" alt="" />
            </div>
            <div className="carousel-item">
                <img src="" alt="" />
            </div>
            <div className="carousel-item">
                <img src="" alt="" />
            </div>
            <div className="carousel-item">
                <img src="" alt="" />
            </div>
            <div className="carousel-item">
                <img src="" alt="" />
            </div>
        </div>
    );
};

export default Banner;