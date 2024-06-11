import React, { useEffect, useState } from "react";
import "./upAccount.css";
import useUpdateProfile from "../hooks/useUpdateProfile";
import { Icon } from "@iconify/react";
import { Spinner } from "react-bootstrap";
import back from "../assets/back.png"
import lock from "../assets/lock.png"


const UpAccount = ({ onClose, isMenuOpen }) => {
  const { update, data, isLoading } = useUpdateProfile();

  const handleBack = () => {
  }

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

    if(data){
      setState({
        firstName: data?.first_name,
        lastName: data?.last_name,
        email: data?.email,
        phoneNumber: data?.phone,
        country: data?.address?.country,
        postalCode: data?.address?.postcode,
        address: data?.address?.address_,
        city: data?.address?.city,
    }) }

    
  }, [data]);

  
  return (
    <div className={`update-modal-account w-full -mt-6 md:mt-0 `}>
      <div className="flex items-center gap-4">
        <img src={back} alt="" onClick={onClose} width={25} className="md:hidden -ml-2" />
        <h1 className="mt-2">Profile</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="update-modal-form-container">
          <div className="update-modal-input-container1">
            <div className="relative">
              <label className="text-[#0B0806]/50">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                value={state.firstName}
                onChange={handleState}
                name="firstName"
                readOnly
                className="readonly-input select-none cursor-not-allowed text-[#0B0806]/50"
              />
              <img src={lock} alt="password-lock" width={17} className="absolute top-11 right-4 "  />
            </div>
            <div className="relative">
              <label className="text-[#0B0806]/50">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                value={state.lastName}
                onChange={handleState}
                name="lastName"
                readOnly
                className="readonly-input select-none cursor-not-allowed text-[#0B0806]/50"
              />
              <img src={lock} alt="password-lock" width={17} className="absolute top-11 right-4 "  />
            </div>
          </div>
          <div className="update-modal-input-container relative">
            <label className="text-[#0B0806]/50">Email address</label>
            <input
              type="email"
              placeholder="Email"
              value={state.email}
              onChange={handleState}
              name="email"
              readOnly
              className="readonly-input select-none cursor-not-allowed text-[#0B0806]/50"
            />
            <img src={lock} alt="password-lock" width={17} className="absolute top-11 right-4 "  />
          </div>
          <div className="update-modal-input-container relative">
            <label className="text-[#0B0806]/50">Phone Number</label>
            <input
              type="text"
              placeholder="Phone Number"
              value={state.phoneNumber}
              onChange={handleState}
              name="phoneNumber"
              readOnly
              className="readonly-input select-none text-[#0B0806]/50"
            />
            <img src={lock} alt="password-lock" width={17} className="absolute top-11 right-4 "  />
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
              className="shadow"
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
              className="shadow"
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
              className="shadow"
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
              className="shadow"
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
