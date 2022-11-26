import React from 'react';
import { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import OrderModal from '../../component/OrderModal';
import Spinner from '../Shared/Spinner';
import Phone from './Phone';

const AllPhones = () => {
    const [orderPhone, setOrderPhone] = useState(null);
    const phones = useLoaderData();
    const navigation = useNavigation();



    if (navigation.state === "loading") {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <div>
                {
                    phones?.map(phone => <Phone key={phone._id} phone={phone} />)
                }
            </div>
            <OrderModal>
                
            </OrderModal>
        </div>
    );
};

export default AllPhones;