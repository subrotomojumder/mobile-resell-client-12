import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../component/CheckoutForm';
import { Helmet } from 'react-helmet';

const stripePromise = loadStripe('pk_test_51M6PozIGmWCyah4OIF2vuKGxMJlYXfDmQaPUEabIriYb7PujUZIXgFbBFTAUVpjcB1AHRL7GCoYeSCBYPrfTyShO00MDt6o5G4');

const Payment = () => {
    const order = useLoaderData();
    
    return (
        <div className='h-screen flex justify-center items-center pb-20'>
            <Helmet>
                <title>Payment-Mobile Resell Shop</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className='w-96 p-6 shadow-xl rounded-xl bg-green-100 text-center'>
                <h2 className='text-xl text-warning'>Payment your order.</h2>
                <h3 ><span className='text-blue-500 text-2xl'>{order?.phoneName}</span></h3>
                <h3 className='text-lg'> Price: {order?.price}Tk</h3>
                <h4 className='font-serif mt-2 text-blue-400'>Your card information</h4>
                <div>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            order={order}
                        >
                        </CheckoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;