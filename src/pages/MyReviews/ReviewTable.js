import React from 'react';

const ReviewTable = ({ review, index, handleDelete }) => {
    return (
        <tr>
            <th>{`${index + 1}`}</th>
            <td>{review.serviceName}</td>
            <td>{review.message}</td>
            <td><button onClick={() => handleDelete(review._id)} className='btn btn-error'>Delete review</button></td>
            <td><button className='btn btn-active btn-primary'>Edit review</button></td>
        </tr>
    );
};

export default ReviewTable;