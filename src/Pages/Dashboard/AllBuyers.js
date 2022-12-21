import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import GenericConfirmToast from '../../component/GenericConfirmToast';

const AllBuyers = () => {
    const [buyer, setBuyer] = useState(null);
    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_SERVER_url}/users/buyers`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    const handleDeleteBuyer = buyer => {
        fetch(`${process.env.REACT_APP_SERVER_url}/users/${buyer._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Buyer delete successful !!')
                }
            })
    }
    const cancelToast = () => {
        setBuyer(null);
    }
    return (
        <div><Helmet>
            <title>Buyers-Mobile Resell Shop</title>
            <meta name="description" content="Helmet application" />
        </Helmet>
            <h2 className='text-3xl my-2 text-center'>All Buyers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th><span className='ml-4'>Name</span></th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers?.map(user => <tr key={user._id}>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.photo} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="bg-green-50 rounded-md ">
                                        <span className='p-1 font-semibold'>{user.email}</span><br />
                                        <span className='ml-1 text-sm text-gray-500'>UID : {user._id}</span>
                                    </div>
                                </td>
                                <td>
                                    <div className='ml-2'>
                                        <div className=" text-lg ml-1">{user.name}</div>
                                    </div>
                                </td>

                                <th>
                                    <label htmlFor='generic-confirm-toast' onClick={(() => setBuyer(user))} className="btn btn-danger btn-xs">delete</label>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
                {
                    buyer &&
                    <GenericConfirmToast
                        cancelToast={cancelToast}
                        toastAction={handleDeleteBuyer}
                        toastData={buyer}
                        toastHeader={buyer.name}
                        des={buyer._id}
                        value={`Email: ${buyer.email}`}
                    ></GenericConfirmToast>

                }
            </div>
        </div >
    );
};

export default AllBuyers;