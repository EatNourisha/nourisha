import React from 'react';
import pic from "../../../assets/4.png";
import "./dashboardParty.css";

const DashboardParty = () => {
  return (
    <div className='dashboardParty-container'>
      <img src={pic} />
      <div className='dashboardPary-second-container'>
        <p>Please provide us with some details to get started. Fill out the form below, and we'll be in touch with a menu proposal that suits your event perfectly.</p>
        <div>
        <form>
        <div className="dashboardParty-form-container">
          <div className="dashboardParty-input-container1">
            <div>
              <label>First Name</label>
              <input type="text" placeholder="First Name" />
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="dashboardParty-input-container">
            <label>Email address</label>
            <input type="email" placeholder="Email" />
          </div>
          <div className="dashboardParty-input-container">
            <label>Phone Number</label>
            <input type="text" placeholder="Phone Number" />
          </div>
          <div className="dashboardParty-input-container">
            <label>Event date</label>
            <input type="text" placeholder="dd/mm/year" />
          </div>
          <div className="dashboardParty-input-container">
            <label>Event Type</label>
            <input type="text" placeholder="party" />
          </div>
          <div className="dashboardParty-input-container">
            <label>Number of Guests</label>
            <input type="text" placeholder="0" />
          </div>
          <div className="dashboardParty-input-container">
            <label>Address</label>
            <input type="text" placeholder="Address" />
          </div>
          <div className="dashboardParty-input-container2">
            <label>Enter the meals you want</label>
            <input type="text" placeholder="list of meal you will want" />
          </div>
          <div className="dashboardParty-button-container">
          <button>Submit</button>
          </div>
        </div>
      </form>
        </div>
      </div>
    </div>
  )
}

export default DashboardParty