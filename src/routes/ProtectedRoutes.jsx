import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children, home }) => {
  if (home) {
    return children;
  } else {
    return <Navigate to="/home" />;
  }
};

export default ProtectedRoutes;
