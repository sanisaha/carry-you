import React from 'react';
import { Link } from 'react-router-dom';

const ReviewTable = ({ review, index, handleDelete }) => {
    return (
        <tr>
            <th>{`${index + 1}`}</th>
            <td>{review.serviceName}</td>
            <td>{review.message}</td>
            <td><button onClick={() => handleDelete(review._id)} className='btn btn-error'>Delete review</button></td>
            <td><Link to={`/review/${review._id}`}><button className='btn btn-info'>Update</button></Link>
            </td>
        </tr>
    );
};

export default ReviewTable;