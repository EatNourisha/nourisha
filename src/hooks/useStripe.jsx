import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { showToast } from "../utils/toast";

const useStripeCheckout = ({ }) => {

  console.log(amount, clientSecret, "Test")

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    // Trigger form validation and wallet collection
    const {error: submitError} = await elements.submit();
    if (submitError) {
      // Show error to your customer
      setErrorMessage(submitError.message);
      showToast({
        title: "",
        description: errorMessage,
        status: "error",
        duration: 5000,
        isClosable: true,
    })
      return;
    }

    
    const clientSecret = "pi_3PJJOGFNnzerOyv31NbRsTgL_secret_ze32HHk1Cor5XbaUqmSlft5hH"

    const {error} = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      clientSecret,
      confirmParams: {
        return_url: 'http://localhost:5173/dashboard/overview',
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
      showToast({
        title: "",
        description: errorMessage,
        status: "error",
        duration: 5000,
        isClosable: true,
    })
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const options = {
  mode: 'payment',
  amount: 100,
  currency: 'gbp',
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};

return (
  <Elements stripe={stripePromise} options={options}>
    <CheckoutForm />
  </Elements>
)

}

export default useStripeCheckout