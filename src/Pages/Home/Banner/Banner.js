import React from 'react';
import img from '../../../assets/images/banner/e-learning-banner-design-template_23-2149113592.webp';

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