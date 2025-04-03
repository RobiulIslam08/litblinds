import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<div>
			<Navbar></Navbar>
			{/* <ToastContainer position="top-center"></ToastContainer> */}
			<div className="w-[90%] mx-auto">
			<Outlet></Outlet>
			</div>
			{/* <Footer></Footer> */}
		</div>
	);
};

export default MainLayout;