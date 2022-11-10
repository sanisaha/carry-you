import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Banner from '../Banner/Banner';
import Gurantee from '../Gurantee/Gurantee';
import Moving from '../Moving-individual/Moving';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home')
    return (
        <div className='w-4/5 mx-auto'>
            <Banner></Banner>
            <Services></Services>
            <Gurantee></Gurantee>
            <Moving></Moving>
        </div>
    );
};

export default Home;