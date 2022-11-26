import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import AdvertiseItem from '../../component/AdvertiseItem';

const Advertise = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/advertised`)
            .then(data => setProducts(data?.data));
    }, [])
    return (
        <>
            { products && products?.length > 0 &&
                <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                Brand new
                            </p>
                        </div>
                        <h3 className='font-thin text-3xl'>Advertised</h3>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-semibold leading-none tracking-tight text-sky-600 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">Special</span>
                            </span>{' '}
                            Offer Resell Phones
                        </h2>
                    </div>
                    <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-1">
                        {
                            products?.map(advertise => <AdvertiseItem
                                key={advertise._id}
                                advertise={advertise}
                            />)
                        }
                    </div>
                </div>
            }
        </>
    );
};

export default Advertise;