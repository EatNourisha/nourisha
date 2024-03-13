import React, {useState} from 'react';
import Footer from '../home/Footer';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="general-register-container">
    <div className="register-header-container">
      <h1>Welcome to Nourisha</h1>
      <p>Enter your email and password to Login</p>
      <div className="register-container">
        <form>
          <div className="form-container">
            <div className="input-container">
                <label>Email</label>
                <input type="text" />
              </div>
              <div className="input-container">
                <label>Password</label>
                <input  type={showPassword ? "text" : "password"} />
                <span type="button" onClick={toggleShowPassword}>
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
            
              <div className="register-buttom-container">
                  <button className='btn'>Sign In</button>
                  <div className='register-buttom-footer'>     
                  <p>Don't have account?</p><a href="/register">Create account</a>
                  </div>
              </div>
          </div>
        </form>
      </div>
      <div>
        {/* <button>Sign up with Google</button> */}
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Login