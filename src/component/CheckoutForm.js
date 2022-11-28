import React, { useEffect } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import Spinner from '../Pages/Shared/Spinner';

const CheckoutForm = ({ order }) => {
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const { price, clientName, clientEmail, phoneId,_id } = order;

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_url}/create-payment-intent`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if(error) {
            setCardError(error.message)
        } else {
            setCardError('')
        }
        setSuccess('');
        setIsLoading(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: clientName,
                        email: clientEmail,
                    },
                },
            },
        );
        if (confirmError) {
            setIsLoading(false)
            setCardError(confirmError.message)
            return;
        }
        if (paymentIntent.status === 'succeeded') {
            const payment = {
                transactionId: paymentIntent.id,
                price,
                clientEmail,
                phoneId,
                orderId: _id
            }
            fetch(`${process.env.REACT_APP_SERVER_url}/payments`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        setSuccess('Congrats your payment completed')
                        setTransactionId(paymentIntent.id)
                    }
                })
        }
        setIsLoading(false)
    }
    return (
        <div className='text-center'>
            <form onSubmit={handleSubmit}>
                <div className='border border-green-400 py-2 px-4 '>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                </div>
                {cardError && <span className='text-sm'>Error: {cardError}<br /></span>}
                <button className='btn btn-warning btn-sm px-4 mt-2' type="submit" disabled={!stripe || !clientSecret || isLoading}>
                    {isLoading ? <Spinner/> : "Pay"}
                </button>
                {
                    success && <div>
                        <p className='text-green-500 text-lg'>{success}</p>
                        <p className='text-sm font-semibold'>TransactionId: <span>{transactionId}</span></p>
                    </div>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;