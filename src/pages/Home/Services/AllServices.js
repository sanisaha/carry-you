import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const AllServices = () => {
    const services = useLoaderData();

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