import useUserStore from "@/store/useUserStore";
import { Navigate, Outlet } from "react-router-dom";

const OnlyNotLoggedRoute = () => {
  const { isLogged } = useUserStore();

  if (isLogged) {
    return <Navigate to="/" replace />;
  }
  return <Outlet></Outlet>;
};

export default OnlyNotLoggedRoute;
