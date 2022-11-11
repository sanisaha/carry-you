import React from 'react';
import { FaBusinessTime, FaHandsHelping, FaMoneyBillWaveAlt, FaUsersCog } from 'react-icons/fa';

const Gurantee = () => {
    return (
        <div>
            <div className="text-sm breadcrumbs">
                <ul>
                    <li>

                        <div className='bg-blue-200 p-10'>
                            <FaBusinessTime className='text-3xl' />
                            <h2 className='text-2xl'>On time service</h2>
                            <div className='pt-4'>
                                <p>CarryYou always try to serve </p><br />
                                <p> customes as soon as possible</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='bg-blue-200 p-10'>
                            <FaMoneyBillWaveAlt className='text-3xl'></FaMoneyBillWaveAlt>
                            <h2 className='text-2xl'>Reasonable price</h2>
                            <div className='pt-4'>
                                <p>CarryYou's services are reasonable</p><br />
                                <p> compare to other company's service</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='bg-blue-200 p-10'>
                            <FaHandsHelping className='text-3xl'></FaHandsHelping>
                            <h2 className='text-2xl'>Trustworthy</h2>
                            <div className='pt-4'>
                                <p>CarryYou try to serve you best </p><br />
                                <p>visit our reviews for authentication</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='bg-blue-200 p-10'>
                            <FaUsersCog className='text-2xl' />
                            <h2 className='text-3xl'>experienced</h2>
                            <div className='pt-4'>
                                <p>CarryYou is experienced in moving</p><br />
                                <p>Your comfort is our main priority</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Gurantee;