import { Navigate, useOutlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const token = localStorage.getItem("authToken")

  if (!token) {
    return <Navigate to="/login" replace />; 
  }

  return useOutlet();
};

export default ProtectedRoutes;