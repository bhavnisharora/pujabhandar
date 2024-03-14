import React, { useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [user, loading] = useState();
  const location = useLocation();
  if (loading) {
    return <div>loading...</div>;
  }

  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate to="/login" state={{ from: location }} replace></Navigate>
    </div>
  );
};

export default PrivateRoute;
