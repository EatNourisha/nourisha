import { createContext, useCallback, useEffect } from "react";
// import { toast } from 'react-toastify';
import { useToast } from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";
import useErrorStore from "../stores/error";
import toLower from "lodash/toLower";

const ErrorContext = createContext({});

const ErrorContextProvider = (props) => {
  const toast = useToast();
  const { logout } = useAuth();
  const { actions, next } = useErrorStore();

  const autoLogOut = useCallback(() => {
    if (
      (next?.message &&
        toLower(next.message).includes("authorization failed")) ||
      (next?.status && next?.status === 401)
    )
      logout();
  }, [next, logout]);

  useEffect(() => {
    if (next.id !== null && next.message !== null && next.showUser && true) {
      autoLogOut();

      toast({
       
        title: "Error",
        description: next.message,
      
      });
    }
  }, [next, toast, autoLogOut, actions]);

  return (
    <ErrorContext.Provider value={{ toast }}>
      {props.children}
    </ErrorContext.Provider>
  );
};

export default ErrorContextProvider;
