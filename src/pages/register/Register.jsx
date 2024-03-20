import "./register.css";
import React, { useState, useEffect } from "react";
import Footer from "../home/Footer";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone: "",
  });
  const { register, token } = useAuth();
  const handleState = (newState) => {
    setState({ ...state, ...newState });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(state);
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      setTimeout(() => {
        navigate("/dashboard/overview");
      }, 0);
    }
  }, [token]);
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
                  <input
                    type="text"
                    name="first_name"
                    placeholder="John"
                    value={state.first_name ?? ""}
                    required
                    onChange={(e) =>
                      handleState({ first_name: e.target.value })
                    }
                  />
                </div>
                <div className="input-container">
                  <label>Last name</label>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Doe"
                    value={state.last_name ?? ""}
                    required
                    onChange={(e) => handleState({ last_name: e.target.value })}
                  />
                </div>
              </div>
              <div className="input-container">
                <label>Email</label>
                <input
                  type="email"
                  value={state.email ?? ""}
                  onChange={(e) => handleState({ email: e.target.value })}
                  name="email"
                  placeholder="Enter Email address"
                  required
                />
              </div>
              <div className="input-container">
                <label>Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={state.password ?? ""}
                  onChange={(e) => handleState({ password: e.target.value })}
                  name="password"
                  placeholder="Password"
                  required
                />
                <span type="button" onClick={toggleShowPassword}>
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
              <div className="input-container">
              <label>Phone Number</label>
                <PhoneInput
                  defaultCountry="gb"
                  value={state.phone ?? ""}
                  onChange={(phone) => handleState({ phone })}
                  style={{ width: '100%', border: "2px solid #EDEDF3" }}
                />
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
