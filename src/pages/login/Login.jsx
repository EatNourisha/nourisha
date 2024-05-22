import React, { useState, useEffect, useMemo } from "react";
import Footer from "../home/Footer";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [state, setState] = useState({ email: "", password: "" });

  const { login, status, isSignedIn, token, sub } = useAuth();

  const handleState = (newState) => {
    setState({ ...state, ...newState });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(state);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn && token) {
      setTimeout(() => {
        navigate('/dashboard/overview');
      }, 3000);
    }
  }, [isSignedIn, token]);
  const isDisabled = useMemo(
    () => !(state?.email && state?.password) || status === "loading",
    [state, status]
  );
  return (
    <div className="general-register-container">
      <div className="register-header-container">
        <h1>Welcome to Nourisha</h1>
        <p>Enter your email and password to Login</p>
        <div className="register-container">
          <form onSubmit={handleSubmit}>
            <div className="form-container">
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

              <div className="register-buttom-container">
                <button
                  className="btn"
                  type="submit"
                  isLoading={status === "loading"}
                  // disabled={isDisabled} Sign in button disabled
                  // disabled
                >
                  Sign In
                </button>
                <div className="register-buttom-footer">
                  <p>Don't have account?</p>
                  <a href="/register">Create account</a>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div>{/* <button>Sign up with Google</button> */}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
