import React from 'react';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title, details } = service;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
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
                    <div className="badge badge-outline">Show details</div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;