import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title, details } = service;
    return (
        <PhotoProvider>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className='lg:h-1/2 p-5'>
                    <PhotoView src={img}><figure className='lg:w-80 lg:h-40'><img src={img} alt="services" /></figure></PhotoView>
                </div>
                <div className="card-body lg:h-1/2">
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <p>
                        {details.length > 100 ?
                            <>{details.slice(0, 100) + '.....'}</>
                            :
                            details
                        }
                    </p>
                    <p>Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/services/${_id}`} className='btn badge badge-outline'>Show details</Link>
                    </div>
                </div>
            </div>
        </PhotoProvider>
    );
};

export default ServiceCard;