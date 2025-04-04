import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/home/Slider';
import Discount from '../components/home/Discount';
import OurProduct from '../components/home/OurProduct';

const Home = () => {
	return (
		<div>

			<Slider></Slider>
			<OurProduct></OurProduct>
		</div>
	);
};

export default Home;