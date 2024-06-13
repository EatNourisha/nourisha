import React, { useState } from "react";
import pic from "../../../assets/4.png";
import "./dashboardParty.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { Icon } from "@iconify/react";
import usePartyMeals from "../../../hooks/usePartyMeals";

const validateDateInput = (value) => {
  const datePattern = /^\d{4}-\d{2}-\d{2}$/; // Regex to match YYYY-MM-DD format
  if (!datePattern.test(value)) {
    return "Please enter a valid date in the format.";
  } else {
    const enteredDate = new Date(value);
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  }
  return true;
};

const DashboardParty = () => {
  // const [isLoading, setIsLoading] = useState(false)

  const { partyPlan, isLoading } = usePartyMeals();

  const validationSchema = yup.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
      .string()
      .email("Must be a valid email format")
      .required("Email is required"),
    phoneNumber: yup.string().required("Phone number is required"),
    eventDate: yup
      .string()
      .required("Event date is required")
      .test(
        "is-valid-date",
        "Please enter a valid date in the format",
        (value) => validateDateInput(value) === true
      ),
    eventType: yup.string().required("Event type is required"),
    numberOfGuest: yup.string().required("Number of guests is required"),
    address: yup.string().required("Address is required"),
    city: yup.string().required("City is required"),
    country: yup.string().required("Country is required"),
    postcode: yup.string().required("Postcode is required"),
    meals: yup.string().required("Meals are required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      eventDate: "",
      eventType: "",
      numberOfGuest: "",
      address: "",
      city: "",
      country: "",
      postcode: "",
      meals: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const partyMeals = {
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        number_of_guests: values.numberOfGuest,
        event_date: values.eventDate,
        meals: values.meals,
        event_type: values.eventType,
        phone_number: values.phoneNumber,
        address: {
          address_: values.address,
          city: values.city,
          country: values.country,
          postcode: values.postcode,
        },
        is_guest: true,
      };

      // sending data to an API
      try {
        const res = await partyPlan(partyMeals);
        resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  const getTomorrowDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const year = tomorrow.getFullYear();
    const month = (tomorrow.getMonth() + 1).toString().padStart(2, "0");
    const day = tomorrow.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="dashboardParty-container md:mt-16 lg:mt-0">
    <div className="grid justify-center lg:grid-cols-3 -ml-2 gap-4 mt-16 pl-4 pt-4 md:-ml-0 mb-14 md:mt-2" >
      <div className="col-span-2 md:col-span-1">
        <img src={pic} className="" alt="Event" />
      </div>

      <div className="bg-white -ml-6 md:-ml-0 md:w-[630px] p-5 md:p-10 rounded-lg">
      <div className="col-span-2 gap-4 xxs:w-[100%] md:w-[500px]">
        <p className="">
          Please provide us with some details to get started. Fill out the form
          below, and we'll be in touch with a menu proposal that suits your
          event perfectly.
        </p>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className="md:flex justify-between items-center md:gap-4">
              <div className="mt-6">
                <label className="text-[14px] text-[#14013A] font-medium pb-3">
                  First Name
                </label>
                <br />
                <input
                  type="text"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter Your First Name"
                  className="p-3 border border-[#EDEDF3] border-solid w-[350px] md:w-[265px] rounded-lg outline-none mt-2 shadow select-none"
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.firstName}
                  </div>
                )}
              </div>

              <div className="mt-6">
                <label className="text-[14px] text-[#14013A] font-medium pb-3">
                  Last Name
                </label>
                <br />
                <input
                  type="text"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter Your Last Name"
                  className="p-3 border border-[#EDEDF3] border-solid w-[350px] md:w-[265px] rounded-lg outline-none mt-2 shadow select-none"
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.lastName}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label className="text-[14px] text-[#14013A] font-medium pb-3">
                Email Address
              </label>
              <br />
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Email"
                className="p-3 border border-[#EDEDF3] border-solid w-[350px] md:w-[550px] rounded-lg outline-none mt-2 shadow select-none"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </div>
              )}
            </div>

            <div className="mt-4">
              <label className="text-[14px] text-[#14013A] font-medium pb-3">
                Phone Number
              </label>
              <br />
              <input
                type="text"
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Phone Number"
                className="p-3 border border-[#EDEDF3] border-solid w-[350px] md:w-[550px] rounded-lg outline-none mt-2 shadow select-none"
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.phoneNumber}
                </div>
              )}
            </div>

            <div className="mt-4">
              <label className="text-[14px] text-[#14013A] font-medium pb-3">
                Event Date
              </label>
              <br />
              <input
                type="date"
                name="eventDate"
                min={getTomorrowDate()}
                value={formik.values.eventDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter Event Date"
                className="p-3 border border-[#EDEDF3] border-solid w-[350px] md:w-[550px] rounded-lg outline-none mt-2 shadow select-none"
              />
              {formik.touched.eventDate && formik.errors.eventDate && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.eventDate}
                </div>
              )}
            </div>

            <div className="mt-4">
              <label className="text-[14px] text-[#14013A] font-medium pb-3">
                Event Type
              </label>
              <br />
              <input
                type="text"
                name="eventType"
                value={formik.values.eventType}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Event Type"
                className="p-3 border border-[#EDEDF3] border-solid w-[350px] md:w-[550px] rounded-lg outline-none mt-2 shadow select-none"
              />
              {formik.touched.eventType && formik.errors.eventType && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.eventType}
                </div>
              )}
            </div>

            <div className="mt-4">
              <label className="text-[14px] text-[#14013A] font-medium pb-3">
                Number Of Guest
              </label>
              <br />
              <input
                type="number"
                name="numberOfGuest"
                value={formik.values.numberOfGuest}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Number of Guests"
                className="p-3 border border-[#EDEDF3] border-solid w-[350px] md:w-[550px] rounded-lg outline-none mt-2 shadow select-none"
              />
              {formik.touched.numberOfGuest && formik.errors.numberOfGuest && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.numberOfGuest}
                </div>
              )}
            </div>

            <div className="mt-4">
              <label className="text-[14px] text-[#14013A] font-medium pb-3">
                Address
              </label>
              <br />
              <input
                type="text"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Address"
                className="p-3 border border-[#EDEDF3] border-solid w-[350px] md:w-[550px] rounded-lg outline-none mt-2 shadow select-none"
              />
              {formik.touched.address && formik.errors.address && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.address}
                </div>
              )}
            </div>

            <div className="mt-4">
              <label className="text-[14px] text-[#14013A] font-medium pb-3">
                City
              </label>
              <br />
              <input
                type="text"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="City"
                className="p-3 border border-[#EDEDF3] border-solid w-[350px] md:w-[550px] rounded-lg outline-none mt-2 shadow select-none"
              />
              {formik.touched.city && formik.errors.city && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.city}
                </div>
              )}
            </div>

            <div className="mt-4">
              <label className="text-[14px] text-[#14013A] font-medium pb-3">
                Country
              </label>
              <br />
              <input
                type="text"
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Country"
                className="p-3 border border-[#EDEDF3] border-solid w-[350px] md:w-[550px] rounded-lg outline-none mt-2 shadow select-none"
              />
              {formik.touched.country && formik.errors.country && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.country}
                </div>
              )}
            </div>

            <div className="mt-4">
              <label className="text-[14px] text-[#14013A] font-medium pb-3">
                Postcode
              </label>
              <br />
              <input
                type="number"
                name="postcode"
                value={formik.values.postcode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Postcode"
                className="p-3 border border-[#EDEDF3] border-solid w-[350px] md:w-[550px] rounded-lg outline-none mt-2 shadow select-none"
              />
              {formik.touched.postcode && formik.errors.postcode && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.postcode}
                </div>
              )}
            </div>

            <div className="mt-4">
              <label className="text-[14px] text-[#14013A] font-medium pb-3">
                Enter The Meals You Want
              </label>
              <br />
              <textarea
                type="text"
                name="meals"
                value={formik.values.meals}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Meals"
                className="p-3 border border-[#EDEDF3] border-solid w-[350px] md:w-[550px] rounded-lg outline-none mt-2 shadow select-none"
              />
              {formik.touched.meals && formik.errors.meals && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.meals}
                </div>
              )}
            </div>

            <div className=" md:flex md:justify-end md:-mr-10 mt-10 md:mt-5 ">
              <button
                type="submit"
                className="py-3 px-7 w-[350px] md:w-[144px] rounded-md bg-[#FE7E00] text-white"
                disabled={!(formik.isValid && formik.dirty) || isLoading}
              >
                {isLoading ? (
                  <span className="flex justify-center items-center">
                    <Icon
                      icon="gg:spinner"
                      className="animate-spin h-6 w-12 "
                    />
                  </span>
                ) : (
                  <span>Submit</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
</div>
  );
};

export default DashboardParty;
