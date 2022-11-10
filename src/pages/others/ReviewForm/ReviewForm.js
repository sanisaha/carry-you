import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import useTitle from '../../../Hooks/useTitle';

const ReviewForm = () => {
    useTitle('Submit review')
    const { user } = useContext(AuthContext);
    const { _id, title } = useLoaderData();
    const handleReviews = (event) => {
        event.preventDefault();
        const name = user?.displayName;
        const img = user?.photoURL;
        const email = user?.email;
        const form = event.target;
        const message = event.target.message.value;
        const review = {
            service: _id,
            serviceName: title,
            reviewer: name,
            img,
            email,
            message,
            date: new Date()
        }
        fetch('https://carry-you-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast('your service has added successfully')
                    form.reset();
                }
            })
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
            <ToastContainer />

        </form>
    );
};

export default ReviewForm;