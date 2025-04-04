import React from 'react';
import wallpaper from "../../assets/images/ourProducts/wallpaper.png"
import persina from "../../assets/images/ourProducts/persina-de-ventana.png"
import ceiling from "../../assets/images/ourProducts/wall-and-ceiling.png"
import pvc from "../../assets/images/ourProducts/pvc-floring.png"
const OurProduct = () => {
	return (
		<div className='pt-6 lg:pt-12  pb-6 lg:pb-12'>
			{/* heading */}
			<div className='text-center pb-9'>
				<h1 className='text-lg lg:text-3xl font-bold text-[#222222]'>Explore Our Products</h1>
				<p className='text-gray-600 font-semibold text-sm lg:text-base pt-1'>Discover our range of high-quality products for your home interior needs.</p>
			</div>
			{/* products */}
			<div className='flex flex-col lg:flex-row gap-10 justify-between items-center'>
				<div className='w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] '>
					<img src={wallpaper} alt="" className='lg:w-[250px] lg:h-[250px]   rounded-full border-8 border-gray-500 hover:scale-105 transition duration-300  ease-in-out hover:shadow-md hover:shadow-gray-500' />
					<p className='text-center pt-2 font-bold text-gray-500 text-xs lg:text-lg'>Wallpapers</p>
				</div>
				<div className='w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] '>
					<img src={ceiling} alt="" className='lg:w-[250px] lg:h-[250px]   rounded-full border-8 border-gray-500 hover:scale-105 transition duration-300  ease-in-out hover:shadow-md hover:shadow-gray-500' />
					<p className='text-center pt-2 font-bold text-gray-500 text-xs lg:text-lg'>Wall and Ceiling Panels</p>
				</div>
				<div className='w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] '>
					<img src={pvc} alt="" className='lg:w-[250px] lg:h-[250px]   rounded-full border-8 border-gray-500 hover:scale-105 transition duration-300  ease-in-out hover:shadow-md hover:shadow-gray-500' />
					<p className='text-center pt-2 font-bold text-gray-500 text-xs lg:text-lg'>PVC Flooring (Vinyl flooring)</p>
				</div>
				<div className='w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] '>
					<img src={persina} alt="" className='lg:w-[250px] lg:h-[250px]   rounded-full border-8 border-gray-500 hover:scale-105 transition duration-300  ease-in-out hover:shadow-md hover:shadow-gray-500' />
					<p className='text-center pt-2 font-bold text-gray-500 text-xs lg:text-lg'>Persianas de ventana</p>
				</div>

			</div>
		</div>
	);
};

export default OurProduct;