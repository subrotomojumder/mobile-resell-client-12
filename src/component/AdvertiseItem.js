import React from 'react';
import { Link } from 'react-router-dom';

const AdvertiseItem = ({advertise}) => {
    
    const { newPhone, sellerEmail, sellerName, postTime, phoneImage } = advertise;
    const { name, purchasePrice, sellingPrice, storage } = newPhone;
    return (
        <div>
            <Link
                aria-label="View Item"
                className="inline-block overflow-hidden duration-300 transform bg-white shadow-sm hover:-translate-y-4  border-2 border-blue-600 rounded-2xl"
            >
                <div className="flex flex-col h-full">
                    <img
                        src={phoneImage}
                        className="object-cover w-full lg:min-w-96 lg:h-80"
                        alt=""
                    />
                    <div className="flex-grow bg-green-200">
                        <div className="p-5">
                            <h6 className="mb-2 text-xl font-semibold leading-5">
                                {name}
                            </h6>
                            <h5>Resell price: {sellingPrice}tk</h5>
                            <h5>Original price: {purchasePrice}tk</h5>
                            <h5>Storage: <span className='font-semibold'>{storage}</span></h5>
                            <h5>Post Time: {postTime}</h5>
                            <h4 className='font-semibold'>Seller: {sellerName}</h4>
                            <p>Email: {sellerEmail}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default AdvertiseItem;