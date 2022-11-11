import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import ShowReviews from '../../others/ShowReviews/ShowReviews';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';

const ServiceDetailCard = () => {
    useTitle('Service Details')
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, img, price, title, details } = service;
    return (

        // Photoprovider and photoview added to zoom the photo in bigger screen

        <PhotoProvider>
            <div>
                <div>
                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <PhotoView src={img}><img src={img} alt='' className="w-4/5 lg:max-w-lg rounded-lg shadow-2xl" /></PhotoView>
                            <div>
                                <h1 className="text-5xl font-bold">{title}</h1>
                                <p className="pt-6 text-lg">{details}</p>
                                <p className="py-2 text-xl text-secondary">Price of the service :${price}</p>
                                <button className="btn btn-primary"><Link to='/login'>Login Now</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-slate-200 p-8'>
                    <div>
                        <h1 className='text-center text-4xl font-semibold py-5'>Feedback from users</h1>
                    </div>
                    <div>
                        <ShowReviews service={service}></ShowReviews>
                    </div>
                    <div className='text-center text-lg py-4'>

                        {
                            user?.uid ?
                                <><Link to={`/reviewform/${_id}`}><button className='btn btn-active btn-accent text-xl'>Add Review</button></Link></>
                                :
                                <><Link to='/login'><button className='lg:btn lg:btn-warning text-xl'>Please login to add review</button></Link></>
                        }
                    </div>
                </div>
            </div>
        </PhotoProvider>
    );
};

export default ServiceDetailCard;