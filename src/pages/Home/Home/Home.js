import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;