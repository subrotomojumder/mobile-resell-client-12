import React from 'react';

const GenericConfirmToast = ({cancelToast, toastAction, toastData,value, des, toastHeader}) => {
    return (
        <div className=''>
            <input type="checkbox" id="generic-confirm-toast" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure you want to deleted ?</h3>
                    <h2 className='text-lg font-semibold'>Name: {toastHeader}</h2>
                    <p className="text-lg">{value}</p>
                    <p className="text-lg">ID: {des}</p>
                    <div className="modal-action justify-center">
                        <button onClick={cancelToast} className='btn btn-outline btn-warning mr-4'>Cancel</button>
                        <label
                            onClick={() => toastAction(toastData)}
                            htmlFor="generic-confirm-toast"
                            className="btn btn-secondary"
                        >
                            Confirm
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GenericConfirmToast;