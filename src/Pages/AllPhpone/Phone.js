import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaCartPlus, FaRegUser } from 'react-icons/fa';

const Phone = ({ phone, setOrderPhone }) => {
    const [verified, setVerified] = useState('');
    const { newPhone, category, sellerEmail, sellerName, postTime, phoneImage } = phone;
    const { condition, description, location, name, phone: buyerPhone, purchasePrice, purchaseYear, sellingPrice, storage } = newPhone;
    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_url}/test/verify?seller=${sellerEmail}`)
            .then(res => res.json())
            .then(data => {
                setVerified(data)
            })
    }, [sellerEmail])
    return (
        <div>
            <div className="card card-side border-2 rounded-none p-6 flex-col lg:flex-row my-5 items-center">
                <figure><img src={phoneImage} className='h-[400px] w-full overflow-hidden duration-300 transform hover:-translate-x-4 hover:scale-110' alt="Movie" /></figure>
                <div className="flex-1">
                    <div className='lg:flex justify-between '>
                        <div className='text-center lg:text-left mb-10 lg:mb-0'>
                            <h2 className="text-lg font-mono text-gray-500 animate-pulse">{category}</h2>
                            <h4 className='text-3xl text-sky-600 mb-3'>{name}</h4>
                            <table className='border-2 border-black text-lg mx-auto w-96'>
                                <tr className=''>
                                    <td className='border-2 px-2'>Storage:</td>
                                    <th className='border-2 px-2'><span className='font-semibold'>{storage}</span></th>
                                </tr>
                                <tr>
                                    <td className='border-2 px-2'>Resell price:</td>
                                    <td className='border-2 px-2'><span className='font-semibold text-orange-400'>{sellingPrice}</span>tk</td>
                                </tr>
                                <tr>
                                    <td className='border-2 px-2'>Original price: </td>
                                    <td className='border-2 px-2'> <span className='font-semibold'>{purchasePrice}</span>tk</td>
                                </tr>
                                <tr>
                                    <td className='border-2 px-2'>Purchase year: </td>
                                    <td className='border-2 px-2'>{purchaseYear}</td>
                                </tr>
                                <tr>
                                    <td className='border-2 px-2'>Condition: </td>
                                    <td className='border-2 px-2'>{condition}!!</td>
                                </tr>
                            </table>
                        </div>
                        <div className='lg:mr-8 lg:mt-7 text-center max-w-40'>
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
                    <p className='text-sm mt-10 lg:mt-3'><span className='font-semibold'>Description:</span> {description}</p>
                    <div className="mt-6 flex justify-center">
                        <div>
                            <label
                                onClick={() => {
                                    setOrderPhone(phone)
                                }}
                                htmlFor="order-modal"
                                className="btn btn-secondary w-48"
                            >Order Now <FaCartPlus className='ml-2 text-xl hover:text-green-500' /></label>
                            <div className='text-center mt-2'>
                                <button className='btn btn-sm btn-ghost link' title='If there is any problem can report'>Add A Report</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Phone;