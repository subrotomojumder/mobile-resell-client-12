import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import OrderModal from '../../component/OrderModal';
import Spinner from '../Shared/Spinner';
import Phone from './Phone';

const AllPhones = () => {
    const [orderPhone, setOrderPhone] = useState(null);
    const navigation = useNavigation();
    const phones = useLoaderData();
    const navigate = useNavigate();

    const handlePhoneOrder = event => {
        event.preventDefault();
        const form = event.target;
        const phoneName = form.phoneName.value;
        const price = form.price.value;
        const clientName = form.clientName.value;
        const clientEmail = form.clientEmail.value;
        const clientNumber = form.clientNumber.value;
        const clientLocation = form.clientLocation.value;
        const order = {
            phoneName,
            clientName,
            phoneId: orderPhone._id,
            category: orderPhone.category,
            price,
            clientEmail,
            clientNumber,
            clientLocation
        }
        fetch(`${process.env.REACT_APP_SERVER_url}/orders?phoneId=${orderPhone?._id}&clientEmail=${clientEmail}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('confirm your order!!')
                    setOrderPhone(null)
                    navigate('/dashboard/my-orders')
                }
                else {
                    toast.error(data.message)
                }
            })
    }
    if (navigation.state === "loading") {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <div>
                {!phones.length ? <div className='h-screen flex items-center justify-center'><h5 className='text-4xl font-thin text-center'>No available second hand <br /> resell phone !!</h5></div>
                    :
                    phones?.map(phone => <Phone
                        key={phone._id}
                        phone={phone}
                        setOrderPhone={setOrderPhone}
                    />)
                }
            </div>
            {
                orderPhone &&
                <OrderModal
                    orderPhone={orderPhone}
                    setOrderPhone={setOrderPhone}
                    handlePhoneOrder={handlePhoneOrder}
                >
                </OrderModal>
            }
        </div>
    );
};

export default AllPhones;