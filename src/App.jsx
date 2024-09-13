import { Route, Routes } from "react-router-dom";

import OverViewPage from "./pages/OverViewPage";
import ProductsPage from "./pages/ProductsPage";

// import SideBar from "./components/SideBar";
import ProSidebar from "./components/ProSidebar";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";

const App = () => {
  return (
    <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
      {/* Background */}
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-gray-700 via to-gray-900 opacity-80'></div>
        <div className='absolute inset-0 backdrop-blur-sm '></div>
      </div>
      {/* <SideBar /> */}
      <ProSidebar />
      <Routes>
        <Route path='/' element={<OverViewPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/sales' element={<SalesPage />} />
        <Route path='/orders' element={<OrdersPage />} />
        <Route path='/analytics' element={<AnalyticsPage />} />
        <Route path='/settings' element={<SettingsPage />} />
      </Routes>
    </div>
  );
};

export default App;
