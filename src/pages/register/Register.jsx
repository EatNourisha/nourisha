import "./register.css";
import React, { useState } from "react";
import Footer from "../home/Footer";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="general-register-container">
      <div className="register-header-container">
        <h1>Create Account</h1>
        <p>Register to create a new account</p>
        <div className="register-container">
          <form>
            <div className="form-container">
              <div className="register-first-input">
                <div className="input-container">
                  <label>First name</label>
                  <input type="text" />
                </div>
                <div className="input-container">
                  <label>Last name</label>
                  <input type="text" />
                </div>
              </div>
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
              <p>
                By Creating account you are agreeing to our terms and condition{" "}
              </p>
              <div className="register-buttom-container">
                <button className="btn">Create account</button>
                <div className="register-buttom-footer">
                  <p>Already have an account?</p>
                  <a href="/login">Sign in</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
