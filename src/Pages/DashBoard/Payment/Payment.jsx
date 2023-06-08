

import { Elements } from "@stripe/react-stripe-js";
import UseCart from "../../../hook/UseCart/UseCart";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [carts] = UseCart();
    const total = carts.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <h1 className="text-center text-4xl">Pay Now</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={carts} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;