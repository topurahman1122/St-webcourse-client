import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Courses from '../Services/Courses';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Courses></Courses>
        </div>
    );
};

export default Home;