import { Navigate, useOutlet } from 'react-router-dom';
import useAuthStore from './stores/auth';

const ProtectedRoutes = ({ children }) => {
  const isSignedIn = useAuthStore(state => state.isSignedIn);

  if (!isSignedIn) {
    return <Navigate to="/login" replace />; 
  }

  return useOutlet();
};

export default ProtectedRoutes;