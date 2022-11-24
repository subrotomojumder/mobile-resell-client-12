import React from 'react';
import seller1 from '../../assets/sellers/images1.jpg'
import seller2 from '../../assets/sellers/seller2.jpg'
import seller3 from '../../assets/sellers/seller3.webp'
import oppo from '../../assets/phone/Oppo-F11-Pro.jpg'
import apple from '../../assets/phone/Apple-iPhone-14-Pro.jpg'
import vivo from '../../assets/phone/vivo-y33e.jpg'


const BestSeller = () => {
    const sells = [
        {
            phone: vivo,
            name: 'Vivo y33',
            storage: 'Ram: 4GB, Rom: 64GB',
            price: 6500,
            seller: seller3,
            sellerName: 'Roxy Dash',
            date: '15/03/23',
            battery: '5500mAh',
            camera: '60+5MP'
        },
        {
            phone: apple,
            name: 'iPhone 14 Pro',
            storage: 'Ram: 4GB, Rom: 64GB',
            price: 6500,
            seller: seller2,
            sellerName: 'Rohim uddin',
            date: '27/03/23',
            battery: '5000mAh',
            camera: '44+16MP'
        },
        {
            phone: oppo,
            name: 'Oppo F11 Pro',
            storage: 'Ram: 2GB, Rom: 16GB',
            price: 6500,
            seller: seller1,
            sellerName: 'MD. Belal',
            date: '12/03/23',
            battery: '5000mAh',
            camera: '50+5MP'
        },
    ]
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className=' text-center mb-8'>
                <h4 className='text-xl text-gray-500 font-thin'>Some show</h4>
                <h2 className='text-3xl font-semibold'>Last month's best sellers</h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                {
                    sells.map((sell, i) => <div key={i} className="relative overflow-hidden transition-shadow duration-300 bg-white rounded">
                        <img
                            src={sell.seller}
                            className="object-cover w-full h-64 rounded"
                            alt=""
                        />
                        <div className="pb-5">
                            <p className='text-lg font-semibold mt-1'>Seller: {sell.sellerName}</p>
                            <p className="mb-3 text-xs font-semibold text-gray-600">Sells Date: {sell.date}</p>                       
                            <p className="text-gray-700 font-semibold">Price: {sell.price}</p>
                            <p className='text-lg font-mono'>Camera: {sell.camera}</p>
                            <p className="text-gray-700">Battery: {sell.battery}</p>
                            <p className="text-gray-700 mb-2">{sell.storage}</p>
                            <div className='absolute top-1/3 right-2 mt-6'>
                                <img className='max-h-40 rounded-3xl' src={sell.phone} alt="" />
                                <p className="text-xl font-bold leading-5 text-center mt-2">{sell.name}</p>
                            </div>
                            <div className="flex space-x-4">

                                <div className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                    >
                                        <polyline
                                            points="6 23 1 23 1 12 6 12"
                                            fill="none"
                                            strokeMiterlimit="10"
                                        />
                                        <path
                                            d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit="10"
                                        />
                                    </svg>
                                </div>
                                <p className="font-semibold">7.4K</p>

                                <div className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                    >
                                        <polyline
                                            points="23 5 23 18 19 18 19 22 13 18 12 18"
                                            fill="none"
                                            strokeMiterlimit="10"
                                        />
                                        <polygon
                                            points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit="10"
                                        />
                                    </svg>
                                </div>
                                <p className="font-semibold">81</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default BestSeller;