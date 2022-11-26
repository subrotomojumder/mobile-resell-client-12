import React from 'react';

const OrderModal = ({ orderPhone, setOrderPhone, handlePhoneOrder }) => {
    return (
        <div>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handlePhoneOrder} className="modal-box relative  rounded-lg px-12">
                    <label htmlFor="order-modal" onClick={()=>setOrderPhone(null)} className="btn btn-sm btn-circle absolute right-2 top-2" >✕</label>
                    <h3 className='text-center text-2xl font-serif mb-4'>{orderPhone?.newPhone?.category}</h3>
                    <div className="form-control mb-2">
                        <label className="input-group">
                            <span className='w-24'>Phone:</span>
                            <input name='phoneName' readOnly type="text" defaultValue={orderPhone?.newPhone?.name} className="input input-bordered w-full font-semibold" />
                        </label>
                    </div>
                    <div className="form-control mb-2">
                        <label className="input-group">
                            <span className='w-24'>Price:</span>
                            <input name='price' readOnly type="text" defaultValue={orderPhone?.newPhone?.sellingPrice +'tk'} className="input input-bordered w-full font-semibold" />
                        </label>
                    </div>
                    <div className="form-control mb-2">
                        <label className="input-group">
                            <span className='w-24'>Buyer:</span>
                            <input name='clientName' readOnly type="text" defaultValue={orderPhone?.sellerName} className="input input-bordered w-full font-semibold" />
                        </label>
                    </div>
                    <div className="form-control mb-2">
                        <label className="input-group">
                            <span className='w-24'>Email:</span>
                            <input name='clientEmail' readOnly type="text" defaultValue={orderPhone?.sellerEmail} className="input input-bordered w-full font-semibold" />
                        </label>
                    </div>
                    <div className="form-control mb-2">
                        <label className="input-group">
                            <span className='w-24'>Phone:</span>
                            <input type="text" name='clientNumber' placeholder='your phone number here' className="input input-bordered w-full font-semibold" required/>
                        </label>
                    </div>
                    <div className="form-control mb-2">
                        <label className="input-group">
                            <span className='w-24 text-sm'>Location:</span>
                            <input type="text" name='clientLocation' placeholder='your local location' className="input input-bordered w-full font-semibold" required/>
                        </label>
                    </div>
                    <div className='text-center mt-4'>
                        <button type='submit' className='btn btn-ghost bg-sky-300'>Confirm order</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OrderModal;