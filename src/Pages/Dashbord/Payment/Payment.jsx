
import {Elements} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";
import Checkoutform from "./Checkoutform";

const stripePromise = loadStripe('pk_test_51OEoO4Blrghrygtul7qcnZ2QxRfa2WsBD1BOmsfyp8VyLl5ZDRbC7AkA89wTRtUIsRnCRrhGTJgfDoXIUT6s9eU400JTND6Mye');

const Payment = () => {
    return (
        <div className="mt-12 md:ml-12">
            <h4 className="text-center my-4 text-3xl font-semibold">Please Complate You Payment</h4>
            <Elements stripe={stripePromise}>
                <Checkoutform></Checkoutform>
            </Elements>
        </div>
    );
};

export default Payment;