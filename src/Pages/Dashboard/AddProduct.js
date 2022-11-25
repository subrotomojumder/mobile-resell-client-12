import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';

import { useForm } from 'react-hook-form';
import Spinner from '../Shared/Spinner';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const postTime = new Date().toLocaleString();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleAddProduct = newPhone => {
        const imageFile = newPhone.image;
        delete newPhone.image;
        const formData = new FormData();
        formData.append('image', imageFile[0]);
        setLoading(true);
        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imageBB_key}`, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(results => {

                const product = {
                    newPhone,
                    postTime,
                    phoneImage: results?.data?.display_url,
                    sellerName: user?.displayName,
                    sellerEmail: user?.email,
                }
                fetch('http://localhost:5000/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`,
                    },
                    body: JSON.stringify(product)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            toast.success('added a new phone');
                            setLoading(false);
                            navigate('/dashboard/my-products');
                        }
                    })
            }).catch(e => {
                setLoading(false)
                toast.error(e.message)
            })
    }
    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='md:w-[600px] border rounded-lg p-8'>
                <h2 className='text-4xl semibold mb-2 text-primary text-center'>Add a new Product</h2>
                <h5 className='text-center'>{postTime}</h5>
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div className='flex justify-between gap-3'>
                        <div className="form-control flex-1">
                            <label className="label"><span className="label-text font-semibold">Phone name</span></label>
                            <input {...register("name", {
                                required: "product name is required"
                            })} type="text" placeholder="phone name" className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50' />
                            {errors.name && <small className='text-red-500 text-sm'>{errors.name?.message}</small>}
                        </div>
                        <div className="form-control w-32">
                            <label className="label"><span className="label-text font-semibold">Brand</span></label>
                            <select {...register("category", {
                                required: "Brand name required"
                            })} type="text" placeholder="phone brand" className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                            >
                                <option value="Vivo">Vivo</option>
                                <option value="Realme">Realme</option>
                                <option value="Apple">Apple</option>
                            </select>
                            {errors.category && <small className='text-red-500 text-sm'>{errors.category?.message}</small>}
                        </div>
                    </div>
                    <div className='flex justify-between gap-3'>
                        <div className="form-control flex-1">
                            <label className="label"><span className="label-text font-semibold">Ram & Rom</span></label>
                            <input {...register("storage", {
                                required: "Ram and Rom name is required"
                            })} type="text" placeholder="phone Ram and Rom" className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50' />
                            {errors.storage && <small className='text-red-500 text-sm'>{errors.storage?.message}</small>}
                        </div>
                        <div className="form-control w-32">
                            <label className="label"><span className="label-text font-semibold">condition</span></label>
                            <select
                                {...register("condition", {
                                    required: "condition  required"
                                })} type="text" placeholder='condition' className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                            >
                                <option selected value="Good">Good</option>
                                <option value="Excellent">Excellent</option>
                                <option value="Fair">Fair</option>
                            </select>
                            {errors.condition && <small className='text-red-500 text-sm'>{errors.condition?.message}</small>}
                        </div>
                    </div>
                    <div className='flex justify-between gap-3'>
                        <div className="form-control flex-1">
                            <label className="label"><span className="label-text font-semibold">Meeting location</span></label>
                            <input {...register("location", {
                                required: "Location is required"
                            })} type="text" placeholder="meeting location" className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50' />
                            {errors.location && <small className='text-red-500 text-sm'>{errors.location?.message}</small>}
                        </div>
                        <div className="form-control w-32">
                            <label className="label"><span className="label-text font-semibold">Purchase year</span></label>
                            <input {...register("purchaseYear", {
                                required: "purchases year required"
                            })} type="text" placeholder="Purchases year" className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50' />
                            {errors.purchaseYear && <small className='text-red-500 text-sm'>{errors.purchaseYear?.message}</small>}
                        </div>
                    </div>
                    <div className='flex justify-between gap-3'>
                        <div className="form-control flex-1">
                            <label className="label"><span className="label-text font-semibold">Contact number</span></label>
                            <input {...register("phone", {
                                required: "phone number is required"
                            })} type="text" placeholder="contact number" className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50' />
                            {errors.phone && <small className='text-red-500 text-sm'>{errors.phone?.message}</small>}
                        </div>
                        <div className="form-control w-32">
                            <label className="label"><span className="label-text font-semibold">Original price</span></label>
                            <input {...register("purchasePrice", {
                                required: "purchase Price is required"
                            })} type="text" placeholder="original Price" className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50' />
                            {errors.purchasePrice && <small className='text-red-500 text-sm'>{errors.purchasePrice?.message}</small>}
                        </div>
                    </div>
                    <div className='flex justify-between gap-3'>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text font-semibold">Phone Image</span></label>
                            <input {...register("image", {
                                required: "phone image required"
                            })} type="file" accept='image/*' className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50' />
                            {errors.image && <small className='text-red-500 text-sm'>{errors.image?.message}</small>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text font-semibold">Now resell price</span></label>
                            <input {...register("sellingPrice", {
                                required: "Resell price is required"
                            })} type="text" placeholder="selling Price" className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50' />
                            {errors.sellingPrice && <small className='text-red-500 text-sm'>{errors.sellingPrice?.message}</small>}
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text font-semibold">Description</span></label>
                        <textarea {...register("description", {
                            required: "Description is required"
                        })} type="text" placeholder="Description...." className='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50' />
                        {errors.description && <small className='text-red-500 text-sm'>{errors.description?.message}</small>}
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-info mt-4 rounded-xl hover:btn-accent text-purple-700 font-bold w-40' type="submit" >{loading ? <Spinner /> : 'Add Product'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;