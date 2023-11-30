import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAdminInfo from "../../../Hooks/useAdminInfo";
import { useNavigate } from "react-router-dom";

const Checkoutform = () => {
  const useAdmin = useAdminInfo()
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  const secureAxios = useAxiosSecure();
  const { user } = useAuth();
  const [transactionID, setTransactionID] = useState('');
  const [error, setError] = useState('');
  const navigt = useNavigate()

  const [totalAmount, setTotalAmount] = useState(0)

  console.log(totalAmount)


  useEffect(() => {
    if (useAdmin?.memberpackage === '5member') {
      setTotalAmount(5)
    } else if (useAdmin?.memberpackage === '10Member') {
      setTotalAmount(8)
    } else if (useAdmin?.memberpackage === '20Member') {
      setTotalAmount(15)
    }
  }, [useAdmin?.memberpackage])




  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });

      if (error) {
        setError(error);
        return;
      }

      console.log('Payment Method Here---', paymentMethod);
      setError('');

      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'anonymous',
            name: user?.displayName || 'anonymous',
          },
        },
      });

      if (confirmError) {
        console.error('Payment Not Complete! Something went wrong:', confirmError.message);
        return;
      }

      console.log(paymentIntent.status);

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Package Confirm!',
        showConfirmButton: false,
        timer: 1500,
      });

      navigt('/dashbord')
      setTransactionID(paymentIntent.id);



      secureAxios.put(`/update-paid/${useAdmin?.email}`)
        .then((res) => {
          console.log(res.data);
          navigt('/dashbord')
        });
    } catch (e) {
      console.error('Error during payment:', e.message);
    }
  };

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const response = await secureAxios.post('/create-payment-intent', { price: totalAmount });
        console.log(response.data.clientSecret);
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        console.error('Error fetching client secret:', error.message);
      }
    };

    if (totalAmount > 0) {
      fetchClientSecret();
    }
  }, [secureAxios, totalAmount]);

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
        <button type="submit" className="bg-primaryColor text-white px-6 py-2 rounded-lg mt-8" disabled={!stripe}>
          Pay
        </button>
        <p className="text-red-600 mt-2">{error.message}</p>
      </form>
    </div>
  );
};

export default Checkoutform;
