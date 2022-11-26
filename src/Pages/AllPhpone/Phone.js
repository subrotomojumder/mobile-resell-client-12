import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaCartPlus, FaRegUser } from 'react-icons/fa';

const Phone = ({ phone, setOrderPhone }) => {
    const { newPhone, sellerEmail, sellerName, postTime, phoneImage } = phone;
    const { category, condition, description, location,  name, phone: buyerPhone, purchasePrice, purchaseYear, sellingPrice, storage } = newPhone;
    const {data: verified = false, loading} = useQuery({
        queryKey: ['verified', sellerEmail],
        queryFn: ()=> fetch(`http://localhost:5000/users/verify?email=${sellerEmail}`).then(res => res.json())
    })
    return (
        <div>
            <div className="card card-side border-2 rounded-none p-6 flex-col lg:flex-row my-5 items-center">
                <figure><img src={phoneImage} className='h-[400px] overflow-hidden duration-300 transform hover:-translate-x-4 hover:scale-110' alt="Movie" /></figure>
                <div className="flex-1">
                    <div className='lg:flex justify-between '>
                        <div className='text-center lg:text-left'>
                            <h2 className="text-lg font-mono text-gray-500 animate-pulse">{category}</h2>
                            <h4 className='text-3xl text-sky-600 mb-3'>{name}</h4>
                            <h4 className='text-lg'>Condition: {condition}!!</h4>
                            <h5 className='text-xl'>Storage: <span className='font-semibold'>{storage}</span></h5>
                            <h5 className='text-xl'>Resell price: <span className='font-semibold text-orange-400'>{sellingPrice}</span>tk</h5>
                            <h5>Purchase year: {purchaseYear}</h5>
                            <h5 className='text-xl mb-2'>Original price: <span className='font-semibold'>{purchasePrice}</span>tk</h5>

                        </div>
                        <div className='lg:mr-5 text-center max-w-40'>
                            <div>
                                <FaRegUser className='text-red-400 text-3xl mx-auto' />
                                <div className='flex items-center justify-center mx-auto mb-1'>
                                    <p className='font-bold'>Seller Verified</p>
                                    <input type="checkbox" checked={verified} className="checkbox checkbox-info" />
                                </div>
                                <hr />
                                <h3 className='mt-1'>Name: <span className='font-bold'>{sellerName}</span></h3>
                                <h5 className='font-semibold'>{sellerEmail}</h5>
                                <h6 className='font-semibold'>Phone: {buyerPhone}</h6>
                                <h5>Post: {postTime}</h5>
                                <p>Meeting: {location}</p>
                            </div>
                        </div>
                    </div>
                    <p className='text-sm mt-10 lg:mt-6'><span className='font-semibold'>Description:</span> {description}</p>
                    <div className="mt-4 flex justify-center">
                        <label
                            onClick={() => {
                                setOrderPhone(phone)
                            }}
                            htmlFor="order-modal"
                            className="btn btn-secondary w-48"
                        >Order Now <FaCartPlus className='ml-2 text-xl hover:text-green-500' /></label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Phone;