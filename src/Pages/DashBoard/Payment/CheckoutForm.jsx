import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthProviderContext } from "../../../Provider/AuthProvider/AuthProvider";
import useAxiosSecure from "../../../hook/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckoutForm = ({ cart, price }) => {
    const navigate=useNavigate()
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthProviderContext)
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    // console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (paymentMethodError) {
            // console.log('Payment method error:', paymentMethodError);
            setCardError(paymentMethodError.message);
            return;
        }

        setProcessing(true);

        try {
            const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
                clientSecret,
                {
                    payment_method: paymentMethod.id,
                }
            );

            if (confirmError) {
                // console.log('Confirm error:', confirmError);
                setProcessing(false);
                return;
            }

            // console.log('Payment intent:', paymentIntent);

            if (paymentIntent && paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id);
                // Save payment information to the server
                const payment = {
                    email: user?.email,
                    transactionId: paymentIntent.id,
                    price,
                    date: new Date(),
                    quantity: cart.length,
                    cartItemId:cart.map(item=>item._id),
                    courseId: cart.map(item => item.courseId),
                    courseInstractorsEmail: cart.map(items => items.instructorEmail),
                    courseName: cart.map(item => item.courseName)
                };

                axiosSecure.post('/payments', payment)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.insertResult.insertedId) {
                            // Display confirmation
                            
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Payment Confirmed Successfully',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            if (user) {
                                axiosSecure.put(`/payments?email=${user.email}`)
                                .then(res=>console.log(res.data))
                            }
                            


                            navigate("/dashboard/enrolledClasses");
                        }
                    });
            }
        } catch (error) {
            // console.log('Error during payment:', error);
            setProcessing(false);
        }
    };

    return (
        <>
            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
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
                <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-950">TransactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;