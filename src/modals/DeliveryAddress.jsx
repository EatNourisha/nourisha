import { useState } from 'react'
import { useFormik } from "formik";
import * as yup from "yup";

const DeliveryAddress = ({ handleSkip }) => {

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
    
    
      const formik = useFormik({
    //     initialValues: {
    //       address: "",
    //       town_city: "",
    //       country: "",
    //       postcode: ""
    //     },
    //     validationSchema: validationSchema,
    //     onSubmit: async (values, args) => {
        //   const payload = {
        //     current_password: values.oldPassword,
        //     new_password: values.newPassword
        //   }
        //  await changePassword(payload);
    //     }
      });

  return (
    <div>
      <div className='flex justify-between items-center'>
        <p className='text-[18px] font-semibold text-[#303237] '>Delivery Address</p>
        <p className='text-[#FE7E00] text-[14px] cursor-pointer select-none ' onClick={handleSkip}>Skip</p>
     </div>
     <div>
        <p className='text-[#7E8494] text-[14px] font-medium mt-2 mb-5 '>Kindly provide the following information to finish setting up your account</p>
        <form onSubmit={formik.handleSubmit}>
            <div className='mt-6'>
              <label  className='text-[14px] text-[#14013A] font-medium pb-3 '>Address</label><br />
              <input type="text" name='address' placeholder='Enter Your Address'  className='p-3 border border-[#EDEDF3] border-solid w-[350px] rounded-lg outline-none mt-2 shadow ' />
            </div>  

            <div className='mt-4'>
              <label  className='text-[14px] text-[#14013A] font-medium pb-3 '>Town/city</label><br />
              <input type="text" name='town_city' placeholder='Town/city' className='p-3 border border-[#EDEDF3] border-solid w-[350px] rounded-lg outline-none mt-2 shadow ' />
            </div>  

            <div className='mt-4'>
              <label  className='text-[14px] text-[#14013A] font-medium pb-3 '>Country</label><br />
              <input type="text" name='country' placeholder='Country' className='p-3 border border-[#EDEDF3] borde-solid w-[350px] rounded-lg outline-none mt-2 shadow ' />
            </div>  
            
            <div className='mt-4'>
              <label  className='text-[14px] text-[#14013A] font-medium pb-3 '>Postcode</label><br />
              <input type="number" name='postcode' placeholder='Postcode' className='p-3 border border-[#EDEDF3] borde-solid w-[350px] rounded-lg outline-none mt-2 shadow ' />
            </div>  

        </form>
      </div>
    </div>
  )
}

export default DeliveryAddress
