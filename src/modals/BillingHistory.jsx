import React, { useState } from "react";

const TransactionsDetails = () => {};

const BillingHistory = ({ close }) => {
  const [showTransaction, setShowTransaction] = useState(false);

  const toggleTransaction = () => {
    setShowTransaction(true);
  };

  return (
    <div className="bg-black bg-opacity-50 fixed top-0 left-0 w-[100%] h-[100%] flex justify-center items-center overflow-scroll overflow-x-hidden z-[1000] ">
      <div className="meal-content bg-white fixed top-0 right-0 w-[450px] h-[100vh] flex flex-col p-4 ">
        {!showTransaction ? (
          <>
            <div className="flex justify-between items-center">
              <p className="text-[22px] text-[#030517] font-medium ">
                Billing History
              </p>
              <button className="close-btn select-none" onClick={close}>
                X
              </button>
            </div>
            <hr className="my-3" />

            <div className="flex justify-between border p-4 rounded-lg shadow ">
              <div className="flex flex-col">
                <p className="font-semibold text-[15px text-[#303237] ">
                  Successful Subscription
                </p>
                <p className="mb-3 text-[#7E8494] text-[13px] ">
                  Fri, July 23, 2021
                </p>

                <p
                  className="text-[#FE7E00] text-[13px] cursor-pointer "
                  onClick={toggleTransaction}
                >
                  Veiw Payment Details
                </p>
              </div>
              <p className="font-semibold text-[15px] text-[#303237] ">£157</p>
            </div>
          </>
        ) : (
            <>
          <div className="flex justify-between items-center">
            <p className="text-[22px] text-[#030517] font-medium ">
                Transaction detail
            </p>
            <button className="close-btn select-none" onClick={() => setShowTransaction(false)}>
              X
            </button>{" "}
          </div>
          <hr className="my-5" />

          <div className="mt-16">
            <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-[#7E8494] text-[14px] leading-[18px] ">Amount</p>
                <p className="font-bold text-[24px] text[#303237] ">£157</p>
                <p className="text-[#20AF0B] text-[14px] ">Successful</p>
            </div>
            <hr className="my-3" />

            <div className="mt-10 border border-dashed border-[#FE7E00] rounded-lg">
                <div className="flex flex-col p-4 px-6 text-[#565C69] text-[14px] ">
                    <div className="flex justify-between items-center mb-2">
                        <p>Subscription Type</p>
                        <p>Individual</p>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                        <p>Transaction Ref</p>
                        <p>vx8910023342v</p>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                        <p>Payment Channel</p>
                        <p>Card</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Payment Gateway</p>
                        <p>Paystack</p>
                    </div>
                </div>
            </div>
          </div>
            </>
        )}
      </div>
    </div>
  );
};

export default BillingHistory;
