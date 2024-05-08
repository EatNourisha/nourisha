import { Navigate, useOutlet } from 'react-router-dom';
// import useAuthStore from './stores/auth';

const ProtectedRoutes = () => {
  // const { isSignedIn } = useAuthStore();
  const token = localStorage.getItem("authToken");

  if (!token) {
    return <Navigate to="/login" replace />; 
  }

  return useOutlet();
};

export default ProtectedRoutes;