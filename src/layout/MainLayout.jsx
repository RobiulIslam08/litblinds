// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { Outlet } from 'react-router-dom';

// const MainLayout = () => {
// 	return (
// 		<div>
// 			<Navbar></Navbar>
// 			{/* <ToastContainer position="top-center"></ToastContainer> */}
// 			<div className="w-[95%] mx-auto">
// 			<Outlet></Outlet>
// 			</div>
// 			<Footer></Footer>
// 		</div>
// 	);
// };

// export default MainLayout;
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const MainLayout = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/registration';

  return (
    <div>
      <Navbar />
      <div className={isAuthPage ? 'w-full' : 'w-[95%] mx-auto'}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
