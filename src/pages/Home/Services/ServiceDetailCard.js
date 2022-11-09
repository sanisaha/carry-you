import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import ShowReviews from '../../others/ShowReviews/ShowReviews';

const ServiceDetailCard = () => {
    const service = useLoaderData();
    const { _id, img, price, title, details } = service;
    return (
        <PhotoProvider>
            <div>
                <div>
                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <PhotoView src={img}><img src={img} alt='' className="max-w-lg rounded-lg shadow-2xl" /></PhotoView>
                            <div>
                                <h1 className="text-5xl font-bold">{title}</h1>
                                <p className="pt-6 text-lg">{details}</p>
                                <p className="py-2 text-xl text-secondary">Price of the service :${price}</p>
                                <button className="btn btn-primary"><Link to='/login'>Login Now</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-center text-4xl'>Review section</h1>
                </div>
                <div>
                    <ShowReviews service={service}></ShowReviews>
                </div>
                <div className='text-center text-lg'>
                    <Link to={`/reviewform/${_id}`}>Add Review</Link>
                </div>
            </div>
        </PhotoProvider>
    );
};

export default ServiceDetailCard;