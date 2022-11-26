import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/sellers');
            const data = await res.json();
            return data;
        }
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
                    refetch();
                    toast.success('Seller verify successful !!')
                }
            })
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
                            users?.map(user => <tr key={user._id}>
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
                                    {!user.verified ? <button className='btn btn-sm btn-outline' onClick={() => handleSellerVerify(user._id)}>Approve</button> : <span className='ml-2 font-semibold'>Verified</span>}
                                </td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllSellers;