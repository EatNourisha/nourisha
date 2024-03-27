import { createContext } from "react";
import { useToast } from "@chakra-ui/react";

const SuccessContext = createContext({});


const SuccessContextProvider = (props) => {
    
  const toast = useToast();
    return (
      <SuccessContext.Provider value={{ toast }}>
        {props.children}
      </SuccessContext.Provider>
    );
  };
  
  export default SuccessContextProvider;