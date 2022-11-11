import React, { useEffect, useState } from 'react';
import useTitle from '../../../Hooks/useTitle';
import ServiceCard from './ServiceCard';

const AllServices = () => {
    useTitle('Services')
    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState([]);

    // all services data were fetch from server

    useEffect(() => {
        fetch('https://carry-you-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);

            })
    }, [])

    // a spinner is added to show before loading all data

    if (loading) {
        return (<div className="flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>)
    }

    return (
        <div className='w-4/5 mx-auto'>
            <div className='pb-5'>
                <h2 className='text-4xl text-center text-green-500 pb-4'>Welcome to CarryYou's services {services.length}</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-3'>
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

export default AllServices;