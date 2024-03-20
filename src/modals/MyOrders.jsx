import React from 'react';
import "./myOrders.css";

const MyOrders = () => {
  return (
    <div className='myorders-modal-container'>
        <h1>My Orders</h1>
        <div className='myorders-modal-center-container'>
            <button>OPEN ORDERS</button>
            <button>CLOSED ORDERS</button>
        </div>
        <div></div>
    </div>
  )
}

export default MyOrders;