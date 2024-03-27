import { useCallback } from "react";
import { post } from "../utils/makeRequest";
import useAuthStore from "../stores/auth";
import useErrorStore from "../stores/error";
import { useNavigate } from 'react-router-dom';
import ls from '../utils/secureStorage';

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

  // const login = useCallback(
  //   async (data) => {
  //     setStatus("loading");
  //     try {
  //       const res = (await post("/auth/login", data)).data;
  //       if (res)
  //         persist({
  //           ...res.payload,
  //           sub: res?.payload.sub,
  //           isVerified: res?.payload.is_verified,
  //           token: res.token,
  //         });
  //     } catch (error) {
  //       console.log("Login Error", error);
  //       actions?.setError({
  //         action: { type: "auth/login", payload: data },
  //         message: error?.message,
  //         status: error?.statusCode,
  //         showUser: true,
  //       });
  //     }
  //     setStatus("success");
  //   },
  //   [setStatus, persist, actions]
  // );

  const login = useCallback(
    async (data) => {
      setStatus('loading');
      try {
        const response = await post('/auth/login', data);
        const res = response.data; // Assuming the response from 'post' directly contains the data
  
        if (res && res.token) {
          // Assuming 'res' contains 'token' and 'payload' directly
          ls.set('authToken', res.token); // Securely store the token for later use
  
          persist({
            ...res.payload,
            sub: res.payload.sub, // This seems redundant unless there's additional logic
            isVerified: res.payload.is_verified,
            token: res.token,
          });
          setStatus('success');
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
      }
    },
    [setStatus, persist, actions] // Ensure these dependencies are correctly managed in your component
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
      } catch (error) {
        actions.setError({
          actions: { type: "auth/register", payload: data },
          message: error?.message,
          status: error?.statusCode,
          showUser: true,
        });
      }
      setStatus("success");
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
