import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import useGetPlans from "../hooks/useGetPlans";
import useBillings from "../hooks/useBillings";
import configs from "../config";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SubscribeCheckoutForm from "../components/stripe/subscribeCheckoutForm";

import vec from "../assets/vec.png";

const stripePromise = loadStripe(configs.stripeSecret);

const PlanPayment = ({ handleSkip, onPaymentSuccess }) => {
  const { data } = useGetPlans();
  const { subscribe } = useBillings();
  const [plans, setPlans] = useState([]);
  const [clientSecret, setClientSecret] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(null);

  const [totalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    if (!data) return;
    setPlans(data?.data);
  }, []);

  const handleSubscribe = async (plan) => {
    const value = {
      plan_id: plan._id,
    };

    const price = plan.amount;
    setTotalPrice(price);

    try {
      setLoading(plan._id);
      const res = await subscribe(value);
      setClientSecret(res.client_secret);
      setIsOpen(true);
      setLoading(null);
    } catch (error) {
      console.log(error);
      setLoading(null);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-[18px] font-semibold text-[#303237] ">
          Meal Plans Payment
        </p>
        <p
          className="text-[#FE7E00] text-[14px] cursor-pointer select-none "
          onClick={handleSkip}
        >
          Skip
        </p>
      </div>
      <p className="mt-1 text-[14px] text-[#7E8494]">
        Choose your preffered subscription plan
      </p>

      <div className="mt-4">
        {data?.data?.map((plan) => (
          <div className="mb-10" key={plan._id}>
            <p className="text-[#7E8494] capitalize mb-1">{plan.name}</p>
            <p className="font-semibold">{plan.description}</p>
            <p className="font-semibold">Delivery: £{plan.delivery_fee || 0}</p>
            <p className="mt-2">
              Total:&nbsp;{" "}
              <span className="font-bold text-[16px] ">£{plan.amount}</span>
            </p>

            <div className="my-6">
              {plan.perks.map((perk) => (
                <div
                  className="my-2 text-[12px] text-[#7E8494] flex gap-2 "
                  key={perk}
                >
                  <span className="border border-[#FE7E00] p-1 rounded-full">
                    <img
                      src={vec}
                      alt=""
                      width={8}
                      className="text-[#FE7E00]  invert brightness-1 m-auto mt-[2px] "
                    />
                  </span>
                  <span className="">{perk}</span>
                </div>
              ))}
            </div>
            <button
              className="w-full border border-solid border-[#FE7E00] text-[14px] text-[#FE7E00] p-2 rounded-lg font-medium"
              onClick={() => handleSubscribe(plan)}
            >
              {loading === plan._id ? (
                <span className="flex justify-center items-center px-3">
                  <Icon icon="gg:spinner" className="animate-spin h-6 w-6 " />
                </span>
              ) : (
                "Subscribe"
              )}
            </button>
          </div>
        ))}
      </div>

      {isOpen && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <SubscribeCheckoutForm
            clientSecret={clientSecret}
            onClose={() => setIsOpen(false)}
            totalPrice={totalPrice}
            onPaymentSuccess={onPaymentSuccess}
          />
        </Elements>
      )}
    </div>
  );
};

export default PlanPayment;
