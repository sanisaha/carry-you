import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const ReviewForm = () => {
    const { user } = useContext(AuthContext);
    const { _id, title } = useLoaderData();
    const handleReviews = (event) => {
        event.preventDefault();
        const name = user?.displayName;
        const img = user?.photoURL;
        const email = user?.email;
        const message = event.target.message.value;
        const review = {
            service: _id,
            serviceName: title,
            reviewer: name,
            img,
            email,
            message
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(e => console.error(e))
    }

    return (
        <form onSubmit={handleReviews} className='text-center'>
            <div className='py-5'>
                <h1 className='text-3xl font-semibold'>Service: {title}</h1>
            </div>
            <div>
                <textarea name='message' className="textarea textarea-primary w-1/2 h-80" placeholder="write your review here"></textarea>
            </div>
            <div className='py-5'>
                <input className='btn btn-submit' type="submit" value="Add Review" />
            </div>

        </form>
    );
};

export default ReviewForm;