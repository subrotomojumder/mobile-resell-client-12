import React, { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Spinner from '../Shared/Spinner';
import { FaTrash } from 'react-icons/fa';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [myProducts, setMyProducts] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/products/${user?.email}`)
            .then(data => setMyProducts(data?.data));
    }, [user?.email])
    if (myProducts.length === 0) {
        return <div className='h-screen flex items-center justify-center'><p className='text-4xl'>Empty</p></div>
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
                            myProducts?.map(phone => <tr>
                                <td>{phone?.newPhone.category}</td>
                                <th>{phone?.newPhone.name}</th>
                                <td>{phone?.newPhone.sellingPrice}tk</td>
                                <td>{phone?.newPhone.paid ? <span>Sold</span> :<span>available</span>}</td>
                                <td> <FaTrash className='text-red-400 text-xl hover:text-red-600 ml-3'/></td>
                                <td>{!phone?.newPhone.paid && <button className='btn btn-sm btn-ghost bg-slate-100'>advertise</button>}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyProducts;