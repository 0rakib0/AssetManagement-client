import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure"
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const Checkoutform = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setCientSecret] = useState('')

    const secureAxios = useAxiosSecure()
    const { user } = useAuth()
    const [setTranjectionID] = useState('')
    const [error, setError] = useState('')
    // const [cart] = useCard()
    // const totalAmount = cart?.reduce((total, item) => total + item.price, 0)
    const totalAmount = 500
    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setError(error)
        } else {
            console.log('Payment Method Here---', paymentMethod)
            setError('')
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymus',
                    name: user.displayName || 'anonymus'
                }
            }
        })

        if (confirmError) {

            alert('Payment Not Complate! Something wrong!')
        } else {
            console.log(paymentIntent.status)
            Swal.fire({
                position: `Your Payment ID: ${paymentIntent.id}`,
                icon: "success",
                title: "Payment successfully complate!",
                showConfirmButton: false,
                timer: 1500
            });
            setTranjectionID(paymentIntent.id)
            const paymentinfo = {
                email: user?.email,
                price: totalAmount,
                date: new Date(),
                transactionId: paymentIntent.id,
                status: 'pending'
            }
            secureAxios.post('/payments', paymentinfo)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: `order successfully submited!`,
                            icon: "success",
                            title: "Thanks you order. come back again!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
    



    if (totalAmount > 0) {
        useEffect(() => {
            secureAxios.post('/create-payment-intent', { price: totalAmount })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setCientSecret(res.data.clientSecret)
                })
        }, [secureAxios, totalAmount])
    }
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <button type="submit" className="bg-primaryColor text-white  px-6 py-2 rounded-lg  mt-8" disabled={!stripe}>
                    Pay
                </button>
                <button className="bg-yellow-400 px-12 py-2 mt-6 rounded-lg" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className="text-red-600 mt-2">{error.message}</p>
            </form>
        </div>
    );
};

export default Checkoutform;