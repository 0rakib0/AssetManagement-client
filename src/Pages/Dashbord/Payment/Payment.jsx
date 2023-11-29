
import {Elements} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
const Payment = () => {
    return (
        <div className="mt-12 md:ml-12">
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Payment;