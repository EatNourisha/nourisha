import { createContext } from "react";
import { toast } from 'react-toastify';

const SuccessContext = createContext({});


const SuccessContextProvider = (props) => {
    
  
    return (
      <SuccessContext.Provider value={{ toast }}>
        {props.children}
      </SuccessContext.Provider>
    );
  };
  
  export default SuccessContextProvider;