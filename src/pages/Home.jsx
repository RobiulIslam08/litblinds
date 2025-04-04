import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/home/Slider';
import Discount from '../components/home/Discount';
import OurProduct from '../components/home/OurProduct';
import WindowBlinds from '../components/home/WindowBlinds';
import Wallpaper from '../components/home/Wallpaper';
import WallAndCeiling from '../components/home/WallAndCeiling';
import PvcFloring from '../components/home/PvcFloring';
import CustomerReview from '../components/home/CustomerReview';

const Home = () => {
	return (
		<div>

			<Slider></Slider>
			<OurProduct></OurProduct>
			<WindowBlinds></WindowBlinds>
			<Wallpaper></Wallpaper>
			<WallAndCeiling></WallAndCeiling>
			<PvcFloring></PvcFloring>
			<CustomerReview></CustomerReview>
		</div>
	);
};

export default Home;