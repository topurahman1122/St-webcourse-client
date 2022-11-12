import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Courses = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')//http://localhost:5000/news-categories
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='text-center'>
                <p className="text-2xl font-bold mt-10 text-green-600">Course</p>
                <h2 className="text-5xl font-bold">Our Course</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Courses;