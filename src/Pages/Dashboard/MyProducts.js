import React from 'react';

const MyProducts = () => {
    return (
        <div>
            <h2 className='text-3xl'>All products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Phone</th>
                            <th>Price</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    {/* <tbody> */}
                        {/* {
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{++i}</th>
                                <td>{booking.treatment}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td>
                                <td>
                                    {booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
                                        <button className='btn btn-sm btn-secondary'>Pay</button>
                                    </Link>}
                                    {booking.price && booking.paid && <span className='text-green-600 font-bold ml-1'>Paid</span>}
                                </td>
                            </tr>)
                        }
                    </tbody> */}
                </table>
            </div>
        </div >
    );
};

export default MyProducts;