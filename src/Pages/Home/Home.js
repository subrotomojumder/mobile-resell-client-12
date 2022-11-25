import React from 'react';
import Banner from './Banner';
import BestSeller from './BestSeller';
import PhoneCategory from './PhoneCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PhoneCategory></PhoneCategory>
            <BestSeller></BestSeller>
            
        </div>
    );
};

export default Home;