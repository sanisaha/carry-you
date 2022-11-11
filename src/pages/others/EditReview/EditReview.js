import React, { useContext, useState } from 'react';
import useTitle from '../../../Hooks/useTitle';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const EditReview = () => {
    useTitle('Edit review')
    const { user } = useContext(AuthContext);
    const reviews = useLoaderData();
    const { _id, message, serviceName } = reviews;
    const [review, setReview] = useState(reviews);

    const handleEditStatus = (event) => {
        event.preventDefault();
        // put method use for data updata, data information take from here and send to server
        // for updating in the database
        fetch(`https://carry-you-server.vercel.app/review/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('review updated')
                }
            })
            .catch(e => console.error(e))




    }
    const handleChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...review };
        newReview[field] = value;
        setReview(newReview);
    }


    return (
        <form onSubmit={handleEditStatus} className='text-center'>
            <div className='py-5'>
                <h1 className='text-3xl font-semibold'>Service: {serviceName}</h1>
            </div>
            <div>
                <textarea onChange={handleChange} name='message' className="textarea textarea-primary w-1/2 h-80" defaultValue={message}></textarea>
            </div>
            <div className='py-5'>
                <input className='btn btn-submit' type="submit" value="Edit Review" />
            </div>
        </form>
    );
};

export default EditReview;