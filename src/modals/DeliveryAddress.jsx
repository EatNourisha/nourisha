import React, { useState, useEffect } from 'react';

const DeliveryAddress = ({ handleSkip, handleAddressChange, handleValidationStatus }) => {
  const [formValues, setFormValues] = useState({
    address: '',
    town_city: '',
    country: '',
    postcode: ''
  });

  const [touched, setTouched] = useState({
    address: false,
    town_city: false,
    country: false,
    postcode: false
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    handleAddressChange(formValues);
    // Check if there are any errors
    const isValid = Object.keys(errors).length === 0;
    // Passing the validation status to the parent component
    handleValidationStatus(isValid);
  }, [formValues, handleAddressChange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true
    });
    setErrors(validate({ ...formValues, [name]: formValues[name] }));
  };

  const validate = (values) => {
    const errors = {};
    if (!values.address) errors.address = 'Address is required';
    if (!values.town_city) errors.town_city = 'Town/city is required';
    if (!values.country) errors.country = 'Country is required';
    if (!values.postcode) errors.postcode = 'Postcode is required';
    return errors;
  };

  useEffect(() => {
    setErrors(validate(formValues));
  }, [formValues]);

  return (
    <div>
      <div className='flex justify-between items-center'>
        <p className='text-[18px] font-semibold text-[#303237]'>Delivery Address</p>
        <p className='text-[#FE7E00] text-[14px] cursor-pointer select-none' onClick={handleSkip}>
          Skip
        </p>
      </div>
      <div>
        <p className='text-[#7E8494] text-[14px] font-medium mt-2 mb-5'>
          Kindly provide the following information to finish setting up your account
        </p>
        <div>
          <div className='mt-6'>
            <label className='text-[14px] text-[#14013A] font-medium pb-3'>Address</label>
            <br />
            <input
              type='text'
              name='address'
              value={formValues.address}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Enter Your Address'
              className='p-3 border border-[#EDEDF3] border-solid w-[350px] rounded-lg outline-none mt-2 shadow select-none'
            />
            {touched.address && errors.address && (
              <div className='text-red-500 text-xs mt-1'>{errors.address}</div>
            )}
          </div>

          <div className='mt-4'>
            <label className='text-[14px] text-[#14013A] font-medium pb-3'>Town/city</label>
            <br />
            <input
              type='text'
              name='town_city'
              value={formValues.town_city}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Town/city'
              className='p-3 border border-[#EDEDF3] border-solid w-[350px] rounded-lg outline-none mt-2 shadow select-none'
            />
            {touched.town_city && errors.town_city && (
              <div className='text-red-500 text-xs mt-1'>{errors.town_city}</div>
            )}
          </div>

          <div className='mt-4'>
            <label className='text-[14px] text-[#14013A] font-medium pb-3'>Country</label>
            <br />
            <input
              type='text'
              name='country'
              value={formValues.country}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Country'
              className='p-3 border border-[#EDEDF3] border-solid w-[350px] rounded-lg outline-none mt-2 shadow select-none'
            />
            {touched.country && errors.country && (
              <div className='text-red-500 text-xs mt-1'>{errors.country}</div>
            )}
          </div>

          <div className='mt-4'>
            <label className='text-[14px] text-[#14013A] font-medium pb-3'>Postcode</label>
            <br />
            <input
              type='number'
              name='postcode'
              value={formValues.postcode}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Postcode'
              className='p-3 border border-[#EDEDF3] border-solid w-[350px] rounded-lg outline-none mt-2 shadow select-none'
            />
            {touched.postcode && errors.postcode && (
              <div className='text-red-500 text-xs mt-1'>{errors.postcode}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddress;






// import { useState } from 'react';
// import { useFormik } from 'formik';
// import * as yup from 'yup';

// const validationSchema = yup.object({
//   address: yup.string().required('Address is required'),
//   town_city: yup.string().required('Town/city is required'),
//   country: yup.string().required('Country is required'),
//   postcode: yup.string().required('Postcode is required'),
// });

// const DeliveryAddress = ({ handleSkip, handleAddressChange }) => {
//   const formik = useFormik({
//     initialValues: {
//       address: '',
//       town_city: '',
//       country: '',
//       postcode: '',
//     },
//     validationSchema,
//     onSubmit: (values, { setSubmitting }) => {
//       console.log(values, 'onSubmit value')
//       handleAddressChange(values);
//       setSubmitting(false); // Form submission complete
//     },
//   });

//   // console.log('Input values:', formik.values); // Log values on change

//   return (
//     <div>
//       <div className='flex justify-between items-center'>
//         <p className='text-[18px] font-semibold text-[#303237]'>Delivery Address</p>
//         <p className='text-[#FE7E00] text-[14px] cursor-pointer select-none' onClick={handleSkip}>
//           Skip
//         </p>
//       </div>
//       <div>
//         <p className='text-[#7E8494] text-[14px] font-medium mt-2 mb-5'>
//           Kindly provide the following information to finish setting up your account
//         </p>
//         <form onSubmit={formik.handleSubmit}>
//           <div className='mt-6'>
//             <label className='text-[14px] text-[#14013A] font-medium pb-3'>Address</label>
//             <br />
//             <input
//               type='text'
//               name='address'
//               value={formik.values.address}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               placeholder='Enter Your Address'
//               className='p-3 border border-[#EDEDF3] border-solid w-[350px] rounded-lg outline-none mt-2 shadow'
//             />
//             {formik.touched.address && formik.errors.address && (
//               <div className='text-red-500 text-xs mt-1'>{formik.errors.address}</div>
//             )}
//           </div>

//           <div className='mt-4'>
//             <label className='text-[14px] text-[#14013A] font-medium pb-3'>Town/city</label>
//             <br />
//             <input
//               type='text'
//               name='town_city'
//               value={formik.values.town_city}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               placeholder='Town/city'
//               className='p-3 border border-[#EDEDF3] border-solid w-[350px] rounded-lg outline-none mt-2 shadow'
//             />
//             {formik.touched.town_city && formik.errors.town_city && (
//               <div className='text-red-500 text-xs mt-1'>{formik.errors.town_city}</div>
//             )}
//           </div>

//           <div className='mt-4'>
//             <label className='text-[14px] text-[#14013A] font-medium pb-3'>Country</label>
//             <br />
//             <input
//               type='text'
//               name='country'
//               value={formik.values.country}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               placeholder='Country'
//               className='p-3 border border-[#EDEDF3] border-solid w-[350px] rounded-lg outline-none mt-2 shadow'
//             />
//             {formik.touched.country && formik.errors.country && (
//               <div className='text-red-500 text-xs mt-1'>{formik.errors.country}</div>
//             )}
//           </div>

//           <div className='mt-4'>
//             <label className='text-[14px] text-[#14013A] font-medium pb-3'>Postcode</label>
//             <br />
//             <input
//               type='number'
//               name='postcode'
//               value={formik.values.postcode}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               placeholder='Postcode'
//               className='p-3 border border-[#EDEDF3] border-solid w-[350px] rounded-lg outline-none mt-2 shadow'
//             />
//             {formik.touched.postcode && formik.errors.postcode && (
//               <div className='text-red-500 text-xs mt-1'>{formik.errors.postcode}</div>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DeliveryAddress;










// import { useState } from 'react'
// import { useFormik } from "formik";
// import * as yup from "yup";



// const validationSchema = yup.object({
//     address: yup
//       .string()
//       .required('address is required'),
//     town_city: yup
//       .string()
//       .required('town/city is required'),
//     country: yup
//       .string()
//       .required('country is required'),
//     postcode: yup
//       .string()
//       .required('postcode is required'),
//   });


// const DeliveryAddress = ({ handleSkip, handleAddressChange }) => {

//   const formik = useFormik({
//     initialValues: {
//       address: "",
//       town_city: "",
//       country: "",
//       postcode: ""
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values, { setSubmitting }) => {
//       handleAddressChange(values);
//       setSubmitting(false)
//     }
//   });


//   return (
//     <div>
//       <div className='flex justify-between items-center'>
//         <p className='text-[18px] font-semibold text-[#303237] '>Delivery Address</p>
//         <p className='text-[#FE7E00] text-[14px] cursor-pointer select-none ' onClick={handleSkip}>Skip</p>
//      </div>
//      <div>
//         <p className='text-[#7E8494] text-[14px] font-medium mt-2 mb-5 '>Kindly provide the following information to finish setting up your account</p>
//         <form onSubmit={formik.handleSubmit}>
//             <div className='mt-6'>
//               <label  className='text-[14px] text-[#14013A] font-medium pb-3 '>Address</label><br />
//               <input type="text" name='address' value={formik.values.address} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter Your Address'  className='p-3 border border-[#EDEDF3] border-solid w-[350px] rounded-lg outline-none mt-2 shadow ' />
//             </div>  

//             <div className='mt-4'>
//               <label  className='text-[14px] text-[#14013A] font-medium pb-3 '>Town/city</label><br />
//               <input type="text" name='town_city' value={formik.values.town_city} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Town/city' className='p-3 border border-[#EDEDF3] border-solid w-[350px] rounded-lg outline-none mt-2 shadow ' />
//             </div>  

//             <div className='mt-4'>
//               <label  className='text-[14px] text-[#14013A] font-medium pb-3 '>Country</label><br />
//               <input type="text" name='country' value={formik.values.country} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Country' className='p-3 border border-[#EDEDF3] borde-solid w-[350px] rounded-lg outline-none mt-2 shadow ' />
//             </div>  
            
//             <div className='mt-4'>
//               <label  className='text-[14px] text-[#14013A] font-medium pb-3 '>Postcode</label><br />
//               <input type="number" name='postcode' value={formik.values.postcode} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Postcode' className='p-3 border border-[#EDEDF3] borde-solid w-[350px] rounded-lg outline-none mt-2 shadow ' />
//             </div>  

//         </form>
//       </div>
//     </div>
//   )
// }

// export default DeliveryAddress
