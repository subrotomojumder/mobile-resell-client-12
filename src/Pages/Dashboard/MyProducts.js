import React from 'react';
import { FaTrash } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: myProducts = [],refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: () => fetch(`http://localhost:5000/products/${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    });

const handleAddAdvertise = id => {
    fetch(`http://localhost:5000/advertised/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                toast.success('your phone has been added');
                refetch();
            }
        })
}
const handleProductDelete = id => {
    fetch(`http://localhost:5000/products/${id}`, {
        method: 'DELETE',
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                toast.success('your data has been deleted');
                refetch();
            }
            else toast.error(data.message);
        })
}

if (!myProducts.length) {
    return <div className='h-screen flex items-center justify-center'><p className='text-4xl mb-10'>Empty !</p></div>
}
return (
    <div>
        <h2 className='text-3xl my-2 text-center'>All products</h2>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Phone</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Delete</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myProducts?.map(phone => <tr key={phone._id}>
                            <td>{phone?.category}</td>
                            <th>{phone?.newPhone.name}</th>
                            <td>{phone?.newPhone.sellingPrice}tk</td>
                            <td>{phone?.status ? <span>Sold</span> : <span>available</span>}</td>
                            <td> <button onClick={() => handleProductDelete(phone._id)}><FaTrash className='text-red-400 text-xl hover:text-red-600 ml-3' /></button></td>
                            <td>{(!phone?.advertise && phone?.status !== 'sold') && <button onClick={() => handleAddAdvertise(phone?._id)} className='btn btn-sm btn-ghost bg-slate-100'>advertise</button>}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div >
);
};

export default MyProducts;