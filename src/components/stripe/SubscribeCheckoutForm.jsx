import React, { useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { showToast } from "../../utils/toast";



const SubscribeCheckoutForm = ({ onClose, totalPrice, onPaymentSuccess }) => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const { error: stripeError, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5173/dashboard",
      },
      redirect: "if_required",
    });

    if (stripeError) {
      setError(stripeError.message);
      setLoading(false);
    } else if (paymentIntent.status === "succeeded") {
      setSuccess(true);
      setLoading(false);
      showToast({
        title: "Payment",
        description: "Payment made successfully.",
        status: "success",
        duration: 8000,
        isClosable: true,
      })
      onPaymentSuccess()
      onClose()
    }
  };

  

  

  return (
    <div className="bg-black bg-opacity-50 fixed top-0 left-0 w-[100%] h-[100%] flex justify-center items-center z-[1000]">
      <form
        onSubmit={handleSubmit}
        className="w-[420px] mx-auto p-6 bg-white shadow-xl rounded-md"
      >
        <div className="flex justify-between items-center border-b gap border-[#ededf3] py-[10px] -mt-5">
          <h1 className="text-[16px] font-semibold">Add Your Payment Information</h1>
          <button className="close-btn -mt-1" type="button" onClick={onClose }>x</button>
        </div>

        <p className="mb-1 mt-5">Card information</p>
        <PaymentElement className="my-4"  options={{paymentMethodOrder: ['card']}} />

        <button
          type="submit"
          className="w-full bg-[#FE7E00] text-white text-[16px] font-bold p-2 rounded-lg"
          disabled={!stripe || loading}
        >
          {loading ? "Processing..." : `Pay £${totalPrice} `}
        </button>
        {/* {error && <div className="text-red-400">{error}</div>} */}
      </form>
    </div>
  );
};

export default SubscribeCheckoutForm;
