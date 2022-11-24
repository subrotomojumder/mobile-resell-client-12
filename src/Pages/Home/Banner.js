import React from 'react';
import background from '../../assets/image/header-bg.jpg';
import { FaArrowDown } from "react-icons/fa";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[80vh]" style={{ backgroundImage: `url(${background})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-2/3">
                        <h1 className="animate-pulse mb-5 text-3xl font-bold font-serif">WELCOME</h1>
                        <h4 className='mb-4 text-4xl lg:text-5xl text-green-400 font-semibold'>Used Mobile Resale Shope</h4>
                        <p className="mb-5 lg:text-xl">Visit our website to buy and sell used mobiles. Our web market will get your product in front of everyone. If you want you can buy old mobile directly from here</p>
                        <h2 className='text-orange-200 text-xl font-sans font-semibold'>Buy and Sell second-hand Phone</h2>
                        <button className="btn bg-slate-50 btn-circle animate-bounce mt-4"><FaArrowDown className='text-primary text-2xl'/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;