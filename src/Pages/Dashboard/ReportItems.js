import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaReply } from 'react-icons/fa';

const ReportItems = () => {
    const { data: reports = [], } = useQuery({
        queryKey: ['reports'],
        queryFn: () => fetch(`${process.env.REACT_APP_SERVER_url}/reports`, {
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    })
    if (!reports.length) {
        return <div className='h-screen flex items-center justify-center'><p className='text-4xl mb-10'>Report list Empty !</p></div>
    }
    return (
        <div>
            <h2 className='text-3xl my-2 text-center'>All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th><span className='ml-8'> Seller</span></th>
                            <th>Reporter</th>
                            <th><span className='ml-2'>Phone</span></th>
                            <th><span className='ml-4'>Report-text</span></th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reports?.map(report => <tr key={report._id}>
                                <td>
                                    <span className='ml-6 font-semibold'>{report.seller}</span>
                                </td>
                                <td>
                                    <div className=''>
                                        <span className='font-semibold'>{report.reporter}</span><br />
                                        <span className='text-sm text-gray-500'>{report.reporterEmail}</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="">
                                        <span className='p-1 font-semibold'>{report.phoneName}</span><br />
                                        <span className='ml-1 text-sm text-gray-500'>ID : {report._id}</span>
                                    </div>
                                </td>
                                <td>
                                    <span className='text-warning text-lg'><FaReply className='inline' /> {report.reportText}</span>
                                </td>
                                <th>
                                    <label htmlFor='generic-confirm-toast' className="btn btn-danger btn-xs">delete</label>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportItems;