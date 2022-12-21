import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import GenericConfirmToast from '../../component/GenericConfirmToast';
import { AuthContext } from '../../context/AuthProvider';

const MyOrders = () => {
    const [order, setOrder] = useState(null);
    const { user } = useContext(AuthContext);
    const { data: orders = [],  refetch } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: () => fetch(`${process.env.REACT_APP_SERVER_url}/orders`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    })
    const cancelToast = () => {
        setOrder(null);
    }
    const handleOrder = order => {
        fetch(`${process.env.REACT_APP_SERVER_url}/orders/${order._id}`,{
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                refetch();
                toast.success('canceled your order')
            }
        })
    }
    if (!orders.length) {
        return <div className='h-screen flex items-center justify-center'><p className='text-4xl mb-10'>Your order list Empty !</p></div>
    }
    return (
        <div>
            <Helmet>
                <title>Orders-Mobile Resell Shop</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <h1 className='text-3xl font-thin text-center my-1'>My Orders</h1>
            <div className="overflow-x-auto w-full">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>
                                Brand
                            </th>
                            <th>Phone</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => <tr key={order._id}>
                            <th>
                                <span className='font-serif ml-2 text-gray-600'>{order.category}</span>
                            </th>
                            <th className='font-semibold text-xs'>
                                Model:<span className='text-blue-500 text-lg'> {order.phoneName}</span> <br />
                                Phone ID: {order.phoneId}
                            </th>
                            <td>{order.price} tk</td>
                            <th className='font-semibold'>
                                {order.paid ? <span className='text-orange-500 font-bold ml-4'>Paid</span> : <Link to={`/dashboard/payment/${order._id}`}><button  className='btn btn-ghost bg-green-300 '>Pay</button></Link>}
                            </th>
                            <th>
                                <label htmlFor='generic-confirm-toast' onClick={() => setOrder(order)} className="btn btn-ghost"><FaTrash className='text-lg text-red-500' /></label>
                            </th>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {order &&
                <GenericConfirmToast
                    cancelToast={cancelToast}
                    toastData={order}
                    toastAction={handleOrder}
                    toastHeader={order.phoneName}
                    des={order.phoneId}
                    value={`Price : ${order.price}`}
                >
                </GenericConfirmToast>
            }
        </div>
    );
};

export default MyOrders;