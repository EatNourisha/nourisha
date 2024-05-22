import { useState } from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import useChangePassword from '../hooks/useChangePassword';
import back from '../assets/back.png'


const ChangePassword = ({ onClose }) => {
  const { changePassword, isLoading } = useChangePassword()
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  const validationSchema = yup.object({
    oldPassword: yup
      .string()
      .required('Old password is required'),
    newPassword: yup
      .string()
      .required('New password is required')
      .min(6, 'Password must be at least 6 characters long'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('newPassword'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });


  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: ""
    },
    validationSchema: validationSchema,
    onSubmit: async (values, args) => {
      const payload = {
        current_password: values.oldPassword,
        new_password: values.newPassword
      }
     await changePassword(payload);
    }
  });

  return (
    <div className='w-full md:w-[520px]'>
      <div className="flex items-center gap-2">
        <img src={back} alt="" onClick={onClose} width={25} className="md:hidden -ml-2 cursor-pointer" />
        <h1 className='text-[18px] font-semibold text-[#14013A]'>Change Password</h1>
      </div>

      <div>
        <form onSubmit={formik.handleSubmit}>
            <div className='mt-6'>
              <label  className='text-[14px] font-medium pb-3 '>Old Password</label><br />
              <input type="password" name='oldPassword' placeholder='Old Password'  className='p-3 border border-[#EDEDF3] border-solid w-[500px] rounded-lg outline-none mt-2 shadow ' value={formik.values.oldPassword} onBlur={formik.handleBlur} onChange={formik.handleChange} />

              <div className="text-red-500 text-[13px]">
                {formik.errors.oldPassword && formik.touched.oldPassword ? (
                  <span>{formik.errors.oldPassword}</span>
                ) : null}
              </div>
            </div>  

            <div className='mt-6'>
              <label  className='text-[14px] font-medium pb-3 '>New Password</label><br />
              <input type="password" name='newPassword' placeholder='New Password' className='p-3 border border-[#EDEDF3] border-solid w-[500px] rounded-lg outline-none mt-2 shadow ' value={formik.values.newPassword} onBlur={formik.handleBlur} onChange={formik.handleChange} />

              <div className="text-red-500 text-[13px] ">
                {formik.errors.newPassword && formik.touched.newPassword ? (
                  <span>{formik.errors.newPassword}</span>
                ) : null}
              </div>
            </div>  

            <div className='mt-6'>
              <label  className='text-[14px] font-medium pb-3 '>Confirm New Password</label><br />
              <input type="password" name='confirmPassword' placeholder='Confirm New Password' className='p-3 border border-[#EDEDF3] borde-solid w-[500px] rounded-lg outline-none mt-2 shadow ' value={formik.values.confirmPassword} onBlur={formik.handleBlur} onChange={formik.handleChange} />

              <div className="text-red-500 text-[13px] ">
                {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                  <span>{formik.errors.confirmPassword}</span>
                ) : null}
              </div>
            </div>  

            <div className='flex justify-end mr-5 mt-5'>
              <button type='submit' className='py-3 px-7 w-[144px] rounded-md bg-[#FE7E00] text-white'  disabled={!(formik.isValid && formik.dirty) || isLoading}>Save</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default ChangePassword
