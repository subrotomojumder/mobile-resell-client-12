import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaReply } from 'react-icons/fa';
import GenericConfirmToast from '../../component/GenericConfirmToast';

const ReportItems = () => {
    const [report, setReport] = useState(null);
    const { data: reports = [], refetch } = useQuery({
        queryKey: ['reports'],
        queryFn: () => fetch(`${process.env.REACT_APP_SERVER_url}/reports`, {
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    })
    const handleDeleteReportPhone = report => {
        fetch(`${process.env.REACT_APP_SERVER_url}/reports-item/?phoneId=${report?.phoneId}&reportId=${report._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    refetch();
                    toast.success(`${report.phoneName} delete successful !!`)
                }
            })
    }
    const cancelToast = () => {
        setReport(null);
    }

    if (!reports.length) {
        return <div className='h-screen flex items-center justify-center'><p className='text-4xl mb-10'>Report list Empty !</p></div>
    }
    return (
        <div>
            <h2 className='text-3xl my-2 text-center'>Reported phones</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th><span className='ml-8'> Seller</span></th>
                            <th>Reporter</th>
                            <th><span className='ml-2'>Phone</span></th>
                            <th><span className='ml-4'>Report-text</span></th>
                            <th>Delete phone</th>
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
                                    <label onClick={() => setReport(report)} htmlFor='generic-confirm-toast' className="btn btn-danger btn-xs ml-4">delete</label>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                report &&
                <GenericConfirmToast
                    cancelToast={cancelToast}
                    toastAction={handleDeleteReportPhone}
                    toastData={report}
                    toastHeader={report.phoneName}
                    des={report.phoneId}
                    value={`Seller : ${report.seller}`}
                ></GenericConfirmToast>
            }
        </div>
    );
};

export default ReportItems;