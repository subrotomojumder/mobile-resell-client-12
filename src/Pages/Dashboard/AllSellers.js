import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import GenericConfirmToast from '../../component/GenericConfirmToast';

const AllSellers = () => {
    const [seller, setSeller] = useState(null);
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: () => fetch('http://localhost:5000/users/sellers', {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    })

    const handleSellerVerify = id => {
        fetch(`http://localhost:5000/users/sellers/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Seller verify successful !!')
                }
            })
    }
    const handleDeleteBuyer = seller => {
        fetch(`http://localhost:5000/users/${seller._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('seller delete successful !!')
                }
            })
    }
    const cancelToast = () => {
        setSeller(null);
    }
    return (
        <div>
            <h2 className='text-3xl my-2 text-center'>All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th><span className='ml-4'>Name</span></th>
                            <th>Position</th>
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers?.map(user => <tr key={user._id}>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.photo} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='ml-2'>
                                        <div className="font-semibold ml-1">{user.name}</div>
                                        <div className="badge badge-ghost badge-sm font-semibold">{user.email}</div>
                                    </div>
                                </td>
                                <td>
                                    <span className='font-semibold bg-green-100 rounded-md p-1'>Seller</span>
                                </td>
                                <td>
                                    {!user.verified ? <button className='btn btn-sm btn-outline bg-green-300' onClick={() => handleSellerVerify(user._id)}>Approve</button> : <span className='ml-2 font-semibold text-orange-400'>Verified</span>}
                                </td>
                                <th>
                                    <label onClick={() => setSeller(user)} htmlFor='generic-confirm-toast' className="btn btn-ghost btn-xs">delete</label>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                seller &&
                <GenericConfirmToast
                        cancelToast={cancelToast}
                        toastAction={handleDeleteBuyer}
                        toastData={seller}
                        toastHeader={seller.name}
                        des={seller._id}
                        value={`Email: ${seller.email}`}
                    ></GenericConfirmToast>
            }
        </div >
    );
};

export default AllSellers;