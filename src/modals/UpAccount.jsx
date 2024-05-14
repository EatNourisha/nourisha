import React, { useEffect, useState } from "react";
import "./upAccount.css";
import useUpdateProfile from "../hooks/useUpdateProfile";
import { Icon } from "@iconify/react";
import { Spinner } from "react-bootstrap";


const UpAccount = () => {
  const { update, data, isLoading } = useUpdateProfile();


const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  country: "",
  postalCode: "",
  address: "",
  city: "",
}
  const [state, setState] = useState(initialState);

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

  useEffect(() => {
    if(!data) return;

    setState({
      firstName: data?.first_name,
      lastName: data?.last_name,
      email: data?.email,
      phoneNumber: data?.phone,
      country: data?.address?.country,
      postalCode: data?.address?.postcode,
      address: data?.address?.address_,
      city: data?.address?.city,
    })

    const ref_code = data?.ref_code
    localStorage.setItem('referralCode', ref_code)
  }, [data]);

  
  return (
    <div className="update-modal-account w-full">
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
            <button type="submit">
            {isLoading ? (
                    <span className="flex justify-center items-center">
                      <Icon icon="gg:spinner" className="animate-spin h-6 w-8" />
                    </span>
                  ) : (
                    <span>Save</span>
                  )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpAccount;
