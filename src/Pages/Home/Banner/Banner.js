import React from 'react';
import img from '../../../assets/images/banner/top.webp';

const Banner = () => {
    return (
        <div className="carousel carousel-center rounded-box">
            <div className="carousel-item">
                <img src={img} alt="Pizza" />
            </div>
            <div className="carousel-item">
                <img src="https://placeimg.com/400/300/arch" alt="Pizza" />
            </div>
            <div className="carousel-item">
                <img src="https://placeimg.com/400/300/arch" alt="Pizza" />
            </div>
            <div className="carousel-item">
                <img src="https://placeimg.com/400/300/arch" alt="Pizza" />
            </div>
            <div className="carousel-item">
                <img src="https://placeimg.com/400/300/arch" alt="Pizza" />
            </div>
            <div className="carousel-item">
                <img src="https://placeimg.com/400/300/arch" alt="Pizza" />
            </div>
            <div className="carousel-item">
                <img src="https://placeimg.com/400/300/arch" alt="Pizza" />
            </div>
        </div>
    );
};

export default Banner;