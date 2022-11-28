import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../context/AuthProvider';

const ReportedForm = ({ reportItem, setReportItem }) => {
    const {user} = useContext(AuthContext);
    const handleAddReportAdd = e => {
        e.preventDefault();
        const reportText = e.target.reportText.value;
        const report = {
            reportText,
            reporter: user.displayName,
            reporterEmail: user.email,
            phoneName: reportItem.newPhone.name,
            phoneId: reportItem._id,
            seller: reportItem.sellerName            
        }
        fetch(`${process.env.REACT_APP_SERVER_url}/reports`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(report)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('added your report')
                setReportItem(null)
            }
        })
    }
    return (
        <form onSubmit={handleAddReportAdd}>
            <h5 className='text-red-500 text-lg ml-2 mt-3'>Write your report text.</h5>
            <textarea name="reportText" required placeholder='add report text....' className='input input-bordered pt-2' ></textarea>
            <div className='flex justify-center'>
                <button onClick={() => setReportItem(null)} className='btn btn-outline rounded-full  btn-sm px-2 mr-3'>X</button>
                <button type='submit' className='btn btn-sm bg-red-400'>Report</button>
            </div>
        </form>
    );
};

export default ReportedForm;