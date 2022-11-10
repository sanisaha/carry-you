import React, { useEffect, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';

const ShowReviews = ({ service }) => {
    const { _id } = service;
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://carry-you-server.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(e => console.error(e))
    }, [])
    return (
        <div className='grid gap-6 grid-cols-1 lg:grid-cols-3'>
            {reviews.map(review => <div className='p-5'
                key={review._id}
            >
                <div className="p-5 card w-96 bg-white shadow-xl">
                    <div className="h-3/4card-body items-center text-center">
                        <div className='text-center py-8'>
                            <p className='text-xl'>{review.message}</p>
                        </div>
                        <div className='h-1/4 flex items-center'>
                            {
                                review.img ?
                                    <><figure className="">
                                        <img src={review.img} alt="Shoes" className="rounded-xl h-8 w-8" />
                                    </figure></>
                                    :
                                    <><FaUserAlt className='h-8 w-8' /></>
                            }
                            <div>
                                <p className='text-lg mx-2'>{review.reviewer}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    );
};

export default ShowReviews;