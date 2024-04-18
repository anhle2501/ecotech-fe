import { useNavigate } from "react-router-dom";

export const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
    let navigate = useNavigate();

    return isAuthenticated ? children :  navigate("/login")
  };

