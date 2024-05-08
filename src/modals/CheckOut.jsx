import React, { useState } from "react";
import "./checkout.css";
import usePlaceOrder from "../hooks/usePlaceOrder";
import useGetCart from "../hooks/useGetCart";

const CheckOut = ({ onClose }) => {
  const { placeOrder } = usePlaceOrder();
  const { data } = useGetCart();

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postcode, setPostcode] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [coupon, setCoupon] = useState("");

  const handlePlaceOrder = async (e) => {
    e.preventDefault(); // Prevent form submission
    const deliveryAddress = {
      address_: address,
      city: city,
      country: country,
      postcode: postcode,
    };
    const placeOrderItem = {
      delivery_address: deliveryAddress,
      delivery_date: deliveryDate,
      coupon: coupon,
      cart_session_id: data.cart.session_id,
    };

    try {
      await placeOrder(placeOrderItem);
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Failed to place order", error);
    }
  };

  return (
    <div className="checkout-modal">
      <div className="checkout-content">
        <div className="checkout-container">
          <div className="flex justify-between">
            <h1 className="text-[18px] font-bold ">Delivery Details</h1>
            <button className="close-checkout-btn" onClick={onClose}>
              X
            </button>
          </div>
          <p>
            Kindly provide the following information to complete your order.
            Your meal will be delivered to this address
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
                      className="md:block w-full "
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
                      className="md:block w-full "
                    />
                  </div>
                </div>
              </div>

              <div className="input-container ">
                <div className="block lg:flex lg:justify-between lg:space-x-3 xl:space-x-14">
                  <div>
                    <label className="mr-3 block">Delivery Date</label>
                    <input
                      type="date"
                      placeholder="Delivery Date"
                      value={deliveryDate}
                      onChange={(e) => setDeliveryDate(e.target.value)}
                      className="w-full lg:w-[180px] xl:w-[205px]"
                    />
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
              {/* <div className="input-container">
              </div> */}
              <button type="submit" className="proceed-checkout-btn">
                Proceed to payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
