import { Navigate, useLocation } from 'react-router-dom';


interface PrivateRouteProps {
    children: React.ReactNode
    path: string;
  }

export function PrivateRoute({ children, ...rest }: PrivateRouteProps) {
  const location = useLocation();
  const isAuthenticated = 
  if (!isAuthenticated) {
    
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}