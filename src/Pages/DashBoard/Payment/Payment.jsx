

import { Elements } from "@stripe/react-stripe-js";
import UseCart from "../../../hook/UseCart/UseCart";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useContext } from "react";
import useAxiosSecure from "../../../hook/useAxiosSecure/useAxiosSecure";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { AuthProviderContext } from "../../../Provider/AuthProvider/AuthProvider";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const { id } = useParams()
    const { user, loading } = useContext(AuthProviderContext)
    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['users'],
        enabled: !loading,
        queryFn: async () => {
            if (user) {
                const res = await axiosSecure(`/allclasses/${id}`)
                // console.log('res from axios', res)
                return res.data;
            }
        },
    })

    console.log(classes);
    // const total= classes.price
    // const price = parseFloat(total.toFixed(2))
    // console.log(price);


    return (
        <div>
            <h1 className="text-center text-4xl">Pay Now</h1>
            total Price : {classes.price}
            <Elements stripe={stripePromise}>
                <CheckoutForm classes={classes} price={classes.price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;