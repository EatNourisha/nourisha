import React, { useState } from "react";
import "./upAccount.css";
import useUpdateProfile from "../hooks/useUpdateProfile";

const UpAccount = () => {
  const { update, isLoading, error } = useUpdateProfile();
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    postalCode: "",
    address: "",
    city: "",
  });

  const handleState = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const updatedProfileData = {
      first_name: state.firstName,
      last_name: state.lastName,
      phone: state.phoneNumber,
      email: state.email,
      address: {
        address_: state.address,
        city: state.city,
        country: state.country,
        postcode: state.postalCode,
      },
    };
    console.log("Submitting updatedProfileData", updatedProfileData);
    // Use the update function here to submit the form data
    await update(updatedProfileData);
  };
  return (
    <div className="update-modal-account">
      <h1>Profile</h1>

      <form onSubmit={handleSubmit}>
        <div className="update-modal-form-container">
          <div className="update-modal-input-container1">
            <div>
              <label>First Name</label>
              <input
                type="text"
                placeholder="First Name"
                value={state.firstName}
                onChange={handleState}
                name="firstName"
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                value={state.lastName}
                onChange={handleState}
                name="lastName"
              />
            </div>
          </div>
          <div className="update-modal-input-container">
            <label>Email address</label>
            <input
              type="email"
              placeholder="Email"
              value={state.email}
              onChange={handleState}
              name="email"
            />
          </div>
          <div className="update-modal-input-container">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="Phone Number"
              value={state.phoneNumber}
              onChange={handleState}
              name="phoneNumber"
            />
          </div>
          <div className="update-modal-input-container1">
            <div>

            <label>Country</label>
            <input
              type="text"
              placeholder="Country"
              value={state.country}
              onChange={handleState}
              name="country"
            />
            </div>
            <div>
            <label>City</label>
            <input
              type="text"
              placeholder="City"
              value={state.city}
              onChange={handleState}
              name="city"
              />
            </div>
          </div>
          <div className="update-modal-input-container">
            <label>Postal Code</label>
            <input
              type="text"
              placeholder="Postal Code"
              value={state.postalCode}
              onChange={handleState}
              name="postalCode"
            />
          </div>
          <div className="update-modal-input-container">
            <label>Address</label>
            <input
              type="text"
              placeholder="Address"
              value={state.address}
              onChange={handleState}
              name="address"
            />
          </div>
          <div className="update-modal-button-container">
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpAccount;
