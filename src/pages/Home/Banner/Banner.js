import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../../Assets/Banner Images/packing-13.png'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${background})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Moving is now easy and stressfree with CarryYou</h1>
                        <p className="mb-5">CarryYou value your presious time and do really care about your very own important household belongigs </p>
                        <button className="btn btn-primary"><Link>Book Your Service Now</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;