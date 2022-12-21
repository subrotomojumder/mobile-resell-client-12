import React from 'react';
import { Helmet } from 'react-helmet';
import Advertise from './Advertise';
import Banner from './Banner';
import BestSeller from './BestSeller';
import PhoneCategory from './PhoneCategory';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home-Mobile Resell Shop</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <Banner></Banner>
            <PhoneCategory></PhoneCategory>
            <Advertise></Advertise>
            <BestSeller></BestSeller>
        </div>
    );
};

export default Home;