import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/home/Slider';
import Discount from '../components/home/Discount';
import OurProduct from '../components/home/OurProduct';
import WindowBlinds from '../components/home/WindowBlinds';

const Home = () => {
	return (
		<div>

			<Slider></Slider>
			<OurProduct></OurProduct>
			<WindowBlinds></WindowBlinds>
		</div>
	);
};

export default Home;