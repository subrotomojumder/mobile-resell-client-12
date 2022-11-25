import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../Shared/Spinner';
import Phone from './Phone';

const AllPhones = () => {
    const phones = useLoaderData();
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Spinner></Spinner>
    }
    return (
        <div className=''>
            {
                phones?.map(phone => <Phone key={phone._id} phone={phone} />)
            }
        </div>
    );
};

export default AllPhones;