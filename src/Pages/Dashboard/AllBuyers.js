import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/buyers');
            const data = await res.json();
            return data;
        }
    })
    // const handleSellerVerify = id => {
    //     fetch(`http://localhost:5000/users/sellers/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json',
    //             authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount > 0) {
    //                 refetch();
    //                 toast.success('Seller verify successful !!')
    //             }
    //         })
    // }
    return (
        <div>
            <h2 className='text-3xl my-2 text-center'>All Sellers</h2>
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
                                    <button className="btn btn-danger btn-xs">delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllBuyers;