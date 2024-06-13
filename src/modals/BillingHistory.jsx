import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import useBillingHistory from "../hooks/useBillingHistory";
import useTransaction from "../hooks/useTransaction";


const BillingHistory = ({ close }) => {
  const [showTransaction, setShowTransaction] = useState(false);
  const [billings, setBillings] = useState([])
  const [id, setId] = useState("")
  // const [isLoading, setIsLoading] = useState(false)

  const { data, isLoading } = useBillingHistory()
  const { transaction, transactionLoading } = useTransaction(id)

  const amount = transaction?.amount;
  const status = transaction?.status;
  const subscriptionType = transaction?.itemRefPath;
  const ref = transaction?.reference;
  const paymentChannel = transaction?.payment_method;
  const paymentgateway = transaction?.payment_gateway;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { 
      month: "long", 
      day: "numeric", 
      year: "numeric", 
      hour: "numeric", 
      minute: "numeric", 
      hour12: true 
    };
    
    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();
    const time = date.toLocaleString("en-US", { 
      hour: "numeric", 
      minute: "numeric", 
      hour12: true 
    });

    return `${month} ${day}, ${year} ${time}`;
  };

  useEffect(() => {
    // setIsLoading(true)
    try {
      if(data) setBillings(data?.data)
        // setIsLoading(false)
    } catch (error) {
      // setIsLoading(false)
    }
  }, [data])


  const toggleTransaction = (historyId) => {
    setShowTransaction(true);
    setId(historyId)
  };

  return (
    <div className="bg-black bg-opacity-50 fixed top-0 left-0 w-[100%] h-[100%] flex justify-center items-center overflow-scroll overflow-x-hidden z-[1000] ">
      <div className="meal-content bg-white fixed top-0 right-0 xxs:w-[100%] md:w-[450px] h-[100vh] flex flex-col p-4 ">
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

            <>
             {isLoading ? (<Icon
              icon="gg:spinner"
              className="animate-spin w-10 h-10 mt-20 mx-auto text-orange-400 flex justify-center items-center md:w-14 md:h-14"
            />) : (
              <> 
              {billings?.map((history) => (
                <div className="flex justify-between border p-4 rounded-lg shadow mb-4 " key={history._id}>
                  <div className="flex flex-col">
                    <div className="font-semibold text-[15px text-[#303237] ">
                      {history?.reason === "subscription" ? <p className="capitalize select-none font-bold text-[13px]"> Subscription {history?.status} </p> : <p className="capitalize select-none font-bold text-[13px]"> Order {history.status} </p> } 
                    </div>
                    <p className="mb-3 text-[#7E8494] text-[13px] ">
                      {formatDate(history.createdAt)} 
                    </p>
  
                    <button
                      className="text-[#FE7E00] text-[13px] cursor-pointer "
                      onClick={() => toggleTransaction(history._id)}
                    >
                      Veiw Payment Details
                    </button>
                  </div>
                  <p className="font-semibold text-[15px] text-[#303237] ">£{history.amount}</p>
                </div>
              ))}
              </>
            )}
            </>

            
          </>
        ) : (
            <>
          <div className="flex justify-between items-center">
            <p className="text-[22px] text-[#030517] font-medium ">
                Transaction details
            </p>
            <button className="close-btn select-none" onClick={() => setShowTransaction(false)}>
              X
            </button>
          </div>
          <hr className="my-5" />

          {transactionLoading ? (<Icon
              icon="gg:spinner"
              className="animate-spin w-10 h-10 mt-20 mx-auto text-orange-400 flex justify-center items-center md:w-14 md:h-14"
            />) : (
              <div className="mt-16">
            <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-[#7E8494] text-[14px] leading-[18px] ">Amount</p>
                <p className="font-bold text-[24px] text[#303237] ">£{amount}</p>
                <p className={`${status === 'successful' ? "text-[#20AF0B]" : "text-[#FE7E00]"}  text-[14px] capitalize`}>{status}</p>
            </div>
            <hr className="my-3" />

            <div className={`mt-10 border border-dashed ${status === 'successful' ? "border-[#20AF0B] " : "border-[#FE7E00] "} rounded-lg`}>
                <div className="flex flex-col p-4 px-6 text-[#565C69] text-[14px] ">
                    <div className="flex justify-between items-center mb-2">
                        <p>Subscription Type</p>
                        <p>{subscriptionType}</p>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                        <p>Transaction Ref</p>
                        <p>{ref}</p>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                        <p>Payment Channel</p>
                        <p>{paymentChannel}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Payment Gateway</p>
                        <p>{paymentgateway}</p>
                    </div>
                </div>
            </div>
          </div>
            ) }
          
            </>
        )}
      </div>
    </div>
  );
};

export default BillingHistory;
