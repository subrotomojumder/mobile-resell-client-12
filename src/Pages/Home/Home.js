import React from 'react';
import Advertise from './Advertise';
import Banner from './Banner';
import BestSeller from './BestSeller';
import PhoneCategory from './PhoneCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PhoneCategory></PhoneCategory>
            <Advertise></Advertise>
            <BestSeller></BestSeller>
        </div>
    );
};

export default Home;