import React from "react";
import "./upAccount.css";

const UpAccount = () => {
  return (
    <div className="update-modal-account">
      <h1>Profile</h1>

      <form>
        <div className="update-modal-form-container">
          <div className="update-modal-input-container1">
            <div>
              <label>First Name</label>
              <input type="text" placeholder="First Name" />
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="update-modal-input-container">
            <label>Email address</label>
            <input type="email" placeholder="Email" />
          </div>
          <div className="update-modal-input-container">
            <label>Phone Number</label>
            <input type="text" placeholder="Phone Number" />
          </div>
          <div className="update-modal-input-container">
            <label>Country</label>
            <input type="text" placeholder="Country" />
          </div>
          <div className="update-modal-input-container">
            <label>Postal Code</label>
            <input type="text" placeholder="Postal Code" />
          </div>
          <div className="update-modal-input-container">
            <label>Address</label>
            <input type="text" placeholder="Address" />
          </div>
          <div className="update-modal-button-container">
          <button>Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpAccount;
