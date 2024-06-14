import React, { useEffect, useState } from "react";
import "./checkout.css";
import { Icon } from "@iconify/react";
import configs from "../config";
import usePlaceOrder from "../hooks/usePlaceOrder";
import useGetCart from "../hooks/useGetCart";
import CheckoutForm from "../components/stripe/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(configs.stripeSecret);

const CheckOut = ({ onClose }) => {
  const { placeOrder } = usePlaceOrder();
  const { data } = useGetCart();

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postcode, setPostcode] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [coupon, setCoupon] = useState("");
  const [loading, setLoading] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [deliveryModal, setDeliveryModal] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const [orderInfo, SetOrderInfo] = useState({});
  const [orderAddress, setOrderAddress] = useState({});

  // useEffect(() => {
  //   setDeliveryModal(true)
  // }, [deliveryModal])

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    const deliveryAddress = {
      address_: address,
      city: city,
      country: country,
      postcode: postcode,
    };

    setOrderAddress(deliveryAddress);

    const placeOrderItem = {
      delivery_address: deliveryAddress,
      delivery_date: deliveryDate,
      coupon: coupon,
      cart_session_id: data?.cart?.session_id,
    };

    try {
      setLoading(true);
      const res = await placeOrder(placeOrderItem);
      const clientSecret = res?.client_secret;
      const orderInfo = res?.order
      setClientSecret(clientSecret);
      SetOrderInfo(orderInfo)
      setIsOpen(true);
      // setDeliveryModal(false);
      setLoading(false);
    } catch (error) {
      console.error("Failed to place order", error);
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    // setDeliveryModal(true)
  };

  const getTomorrowDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const year = tomorrow.getFullYear();
    const month = (tomorrow.getMonth() + 1).toString().padStart(2, "0");
    const day = tomorrow.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const validateDateInput = (e) => {
    const inputDate = e.target.value;
    const datePattern = /^\d{4}-\d{2}-\d{2}$/; // Regex to match YYYY-MM-DD format
    if (!datePattern.test(inputDate)) {
      setErrorMessage("Please enter a valid date in the format.");
      setDeliveryDate("");
    } else {
      const enteredDate = new Date(inputDate);
      const tomorrowDate = new Date(getTomorrowDate());
      if (enteredDate < tomorrowDate) {
        setErrorMessage(
          "Please select a date that is at least one day in the future."
        );
        setDeliveryDate("");
      } else {
        setErrorMessage(""); // Clear error message
        setDeliveryDate(inputDate);
      }
    }
  };

  // const isDayDisabled = (date) => {
  //   const day = date.getDay();
  //   // Disable Monday (1), Saturday (6), and Sunday (0)
  //   return day === 1 || day === 6 || day === 0;
  // };

  const isButtonDisabled = !city || !country || !postcode || !deliveryDate;

  return (
    <>
       <div className="checkout-modal overflow-scroll overflow-x-hidden">
          <div className="checkout-content">
            <div className="checkout-container">
              <div className="flex justify-between">
                <h1 className="text-[18px] font-bold">Delivery Details</h1>
                <button className="close-checkout-btn" onClick={onClose}>
                  X
                </button>
              </div>
              <p>
                Kindly provide the following information to complete your order.
                Your meal will be delivered to this address.
              </p>
              <form onSubmit={handlePlaceOrder} className="mt-2">
                <div className="form-container">
                  <div className="input-container">
                    <label>Address</label>
                    <input
                      type="text"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="input-container">
                    <label>City/Town</label>
                    <input
                      type="text"
                      placeholder="City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div className="input-container">
                    <div className="block lg:flex lg:justify-between lg:space-x-3">
                      <div>
                        <label>Country</label>
                        <input
                          type="text"
                          placeholder="Country"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className="md:block w-full"
                        />
                      </div>
                      <div>
                        <div className="mt-3 md:mt-0">
                          <label className="">Postal Code</label>
                        </div>
                        <input
                          type="text"
                          placeholder="Postal Code"
                          value={postcode}
                          onChange={(e) => setPostcode(e.target.value)}
                          className="md:block w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input-container">
                    <div className="block lg:flex lg:justify-between lg:space-x-3 xl:space-x-14">
                      <div>
                        <label className="mr-3 block select select-none">
                          Delivery Date
                        </label>
                        <input
                          type="date"
                          placeholder="Delivery Date"
                          value={deliveryDate}
                          onChange={(e) => setDeliveryDate(e.target.value)}
                          onBlur={validateDateInput} // Validate on blur
                          min={getTomorrowDate()}
                          // filterDate={isDayDisabled}
                          className="w-full lg:w-[180px] xl:w-[205px] select-none"
                        />
                        {errorMessage && (
                          <div className="text-red-400 text-[14px]">{errorMessage}</div>
                        )}
                      </div>
                      <div className="mt-3 md:mt-0">
                        <label className="">Coupon Code</label>
                        <input
                          type="text"
                          placeholder="Coupon Code"
                          value={coupon}
                          onChange={(e) => setCoupon(e.target.value)}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="proceed-checkout-btn"
                    disabled={isButtonDisabled}
                    onClick={() => setDeliveryModal(false)}
                  >
                    {loading ? (
                      <span className="flex justify-center items-center ">
                        <Icon
                          icon="gg:spinner"
                          className="animate-spin h-6 w-6 text-white text-center"
                        />
                      </span>
                    ) : (
                      <span>Proceed to payment</span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

      {isOpen && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm
            clientSecret={clientSecret}
            orderAddress={orderAddress}
            onClose={handleCloseModal}
            closeDeliveryModal={onClose}
            orderInfo={orderInfo}
          />
        </Elements>
      )}
    </>
  );
};

export default CheckOut;
