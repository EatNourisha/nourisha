import { useState } from "react";
import OpenOrder from "./OpenOrder";
import CloseOder from "./CloseOder";
import usePlaceOrder from "../hooks/usePlaceOrder";
import back from '../assets/back.png'

const Tab = ({ tabs, onClose }) => {

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-md mx-auto -mt-4 md:mt-0">
      <div className="">
        <img src={back} alt="" onClick={onClose} width={25} className="md:hidden -ml-2 cursor-pointer" />
      </div>
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              index === activeTab
                ? "border-orange-500 text-orange-500 text-[14px] font-semibod"
                : "border-transparent text-black hover:text-gray-600 hover:border-gray-300 text-[12px]"
            } flex items-center px-12 py-2 border-b-2 font-md text-[12px]`}
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="mt-4">{tabs[activeTab].content}</div>
    </div>
  );
};

const MyOrders = ({ onClose }) => {
  const { data, isLoading, error } = usePlaceOrder();
  const openOrders = data?.filter((item)=> item.status !== 'completed')
  const completedOrders = data?.filter((item)=> item.status === 'completed')

  
  const tabs = [
    { name: "OPEN ORDERS", content: <OpenOrder data={openOrders} loading={isLoading} /> },
    { name: "CLOSE ORDERS", content: <CloseOder data={completedOrders} loading={isLoading} /> },
  ];

  return <Tab tabs={tabs} onClose={onClose} />; // Passing the tabs prop to the Tab component
};

export default MyOrders;

