import { useCallback } from "react";
import { post } from "../utils/makeRequest";
import useAuthStore from "../stores/auth";
import useErrorStore from "../stores/error";
import { useNavigate } from 'react-router-dom';
import ls from '../utils/secureStorage';
import { showToast } from "../utils/toast";

export default function useAuth() {
  const {
    setStatus,
    setPasswordResetStatus,
    status,
    passwordReset,
    persist,
    exp,
    isVerified,
    isSignedIn,
    token,
    sub,
    hydrate,
    dehydrate,
  } = useAuthStore();

  const { actions } = useErrorStore();
  const navigate = useNavigate();


  const login = useCallback(
    async (data) => {
      setStatus('loading');
      try {
        const response = await post('/auth/login', data);
        const res = response.data;
    
        if (res && res.token) {
         
          ls.set('authToken', res.token);
    
          persist({
            ...res.payload,
            sub: res.payload.sub, 
            isVerified: res.payload.is_verified,
            token: res.token,
          });
          setStatus('success'); 
          showToast({
            title: "Login Successful",
            description: "You have successfully logged in.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        } else {
         
          throw new Error('Login failed: No token received');
        }
      } catch (error) {
        console.error('Login Error', error);
        setStatus('error'); 
        actions?.setError({
          action: { type: 'auth/login', payload: data },
          message: error.message || 'An unknown error occurred',
          status: error.statusCode || 500,
          showUser: true,
        });
        showToast({
          title: "Login Failed",
          description: error.message || "Invalid email or password. Please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    },
    [setStatus, persist, actions]
  );
  

  
  const register = useCallback(
    async (data) => {
      setStatus("loading");
      try {
        const res = (await post("/auth/register", data)).data;
        if (res)
          persist({
            ...res.payload,
            sub: res?.payload.sub,
            isVerified: res?.payload.is_verified,
            token: res.token,
          });
          setStatus('success'); 
          showToast({
            title: "Register Successful",
            description: "You have successfully Registered",
            status: "success",
            duration: 5000,
            isClosable: true,
          })
      } catch (error) {
        actions.setError({
          actions: { type: "auth/register", payload: data },
          message: error?.message,
          status: error?.statusCode,
          showUser: true,
        });
        showToast({
          title: "Registration Failed",
          description: error.message || "An error occurred while registering. Please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    
    },
    [setStatus, persist, actions]
  );

  const forgotPassword = useCallback(
    async (data) => {
      setPasswordResetStatus("loading");
      try {
        (await post("/auth/request/reset", data)).data;
      } catch (error) {
        actions?.setError({
          action: { type: "auth/forgotPassword", payload: data },
          message: error?.message,
          status: error?.statusCode,
          showUser: true,
        });
      }
      setPasswordResetStatus("success");
    },
    [setPasswordResetStatus, actions]
  );

  const resetPassword = useCallback(
    async (data) => {
      setPasswordResetStatus("loading");
      try {
        (await post("/auth/reset", data)).data;
      } catch (error) {
        actions?.setError({
          action: { type: "auth/resetPassword", payload: data },
          message: error?.message,
          status: error?.statusCode,
          showUser: true,
        });
      }
      setPasswordResetStatus("success");
    },
    [setPasswordResetStatus, actions]
  );

  const logout = useCallback(() => {
    dehydrate();
    navigate("/login");
  }, [dehydrate]);

  return {
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
    status,
    isSignedIn,
    token,
    sub,
    exp,
    isVerified,
    passwordReset,
    dehydrate,
    hydrate,
    persist,
  };
}
