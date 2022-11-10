import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import ReviewTable from './ReviewTable';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';


const MyReviews = () => {
    useTitle('My Reviews')
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(e => console.error(e))
    }, [])
    const handleDelete = (id) => {
        const proceed = window.confirm('are you really want to delete')
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast("Review deleted successfully");
                    }
                    const rest = reviews.filter(review => review._id !== id);
                    setReviews(rest);
                })
                .catch(e => console.error(e))
        }
    }

    return (
        <div>
            <div className='text-center p-5'>
                <h2 className='text-3xl font-semibold'>Your Reviews</h2>
            </div>
            <div className='w-4/5 mx-auto'>
                {reviews.length < 1 ?
                    <>
                        <div>
                            <div className='p-24 text-center'>
                                <h1 className='text-5xl font-bold'>No reviews were added</h1>
                            </div>
                            <div className='text-center p-5'>
                                <Link to='/services'><button className='btn btn-info'>Add A Review</button></Link>
                            </div>
                        </div>
                    </>
                    :
                    <><div className="overflow-x-auto pt-10 pb-32">
                        <table className="table w-1/4 lg:w-4/5 mx-auto">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Service</th>
                                    <th>review</th>
                                    <th>Action</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {reviews.map((review, index) => <ReviewTable
                                    key={review._id}
                                    index={index}
                                    review={review}
                                    handleDelete={handleDelete}
                                ></ReviewTable>)}
                            </tbody>
                        </table>
                    </div></>
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default MyReviews;