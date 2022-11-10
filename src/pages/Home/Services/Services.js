import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://carry-you-server.vercel.app/limitedServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className='py-20 text-center text-5xl text-orange-500'>CarryYou's Services</h1>
            </div>
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-3 '>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center py-4'>
                <Link to='/services'><button className="btn btn-active btn-primary text-xl px-5">See All</button></Link>
            </div>
        </div>
    );
};

export default Services;