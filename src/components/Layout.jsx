import { Outlet } from "react-router-dom";
import ProSidebar from "./ProSidebar";

const Layout = () => {
  return (
    <>
      <ProSidebar />
      <div className='flex-1'>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
