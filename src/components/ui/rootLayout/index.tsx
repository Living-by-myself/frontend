import { Outlet } from "react-router-dom";
import Header from "../header";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
