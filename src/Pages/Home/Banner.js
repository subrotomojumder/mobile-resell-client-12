import React from 'react';
import background from '../../assets/image/header-bg.jpg';
import { FaArrowRight } from "react-icons/fa";
import Lottie from 'react-lottie';
import animationData from '../../assets/lottie/jmfAWdpIzr.json'
import { Wave } from 'react-animated-text';

const Banner = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div>
            <div className="hero min-h-[80vh]" style={{ backgroundImage: `url(${background})`, backgroundAttachment: 'fixed' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className='flex flex-col-reverse md:flex-row-reverse justify-center items-center ml-[5%] py-4'>
                    <div className='w-full md:w-1/2 lg:1/3'>
                        <Lottie
                            options={defaultOptions}
                        />
                        <h2 className='text-orange-200 text-center text-2xl font-thin'>Buy and Sell second-hand Phone</h2>
                    </div>
                    <div className=" text-neutral-content flex-1">
                        <div className="">
                            <h1 className="animate-pulse mb-5 text-3xl font-bold font-serif">WELCOME</h1>
                            <h4 className='mb-4 text-4xl lg:text-5xl text-green-400 font-semibold'><Wave text="Used Mobile Resale Shope" effectChange={0.8} speed={5} /></h4>
                            <p className="mb-5 lg:text-xl">Visit our website to buy and sell used mobiles. Our web market will get your product in front of everyone. If you want you can buy old mobile directly from here</p>
                            <a href="#category"><button className="btn btn-secondary animate-bounce mt-4 md:mt-10 px-8"> Order now <FaArrowRight /></button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;