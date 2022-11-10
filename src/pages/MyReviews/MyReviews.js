import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import ReviewTable from './ReviewTable';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const MyReviews = () => {
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
            <div>
                <h2>Total reviews {reviews.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
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
            </div>
            <ToastContainer />
        </div>
    );
};

export default MyReviews;