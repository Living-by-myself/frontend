import useUserStore from "@/store/useUserStore";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { isLogged } = useUserStore();

  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet></Outlet>;
};

export default PrivateRoute;
