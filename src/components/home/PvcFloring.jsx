import React from 'react';
import image1 from "../../assets/images/wall-and-ceilling/20.png"
import image2 from "../../assets/images/wall-and-ceilling/354d004.png"
import image3 from "../../assets/images/wall-and-ceilling/742f5b.png"
import YourselfCard from './YourselfCard';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const PvcFloring = () => {
	return (
		<div className='mt-12 lg:mt-20   lg:mb-10 bg-[#BCA9CC] rounded-3xl pb-5'>
			<h1 className='lg:text-4xl text-xl font-bold text-shadow-xl drop-shadow-[4px_4px_5px_rgba(0,0,0,0.7)] text-center pt-12 pb-8'>PVC Flooring (Vinyl flooring)
			</h1>

			{/* product */}
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 p-2 justify-items-center mx-auto'>
				<div className="relative  lg:w-[340px]  lg:h-[340px] w-[140px] h-[140px] "   data-aos="zoom-in"  data-aos-duration="3000">
					{/* Image */}
					<img src={image1} alt="Vertical Blinds" className="w-full h-full object-cover" />

					{/* Overlay Text */}
					<p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                w-full bg-[#1f0f3fb8] bg-opacity-50 text-white text-center 
                py-2 text-sm font-semibold">
					PVC Flooring Carpet Pattern
					</p>
				</div>
				<div className="relative  lg:w-[340px]  lg:h-[340px] w-[140px] h-[140px]" data-aos="zoom-in"  data-aos-duration="3000">
					{/* Image */}
					<img src={image2} alt="Vertical Blinds" className="w-full h-full object-cover" />

					{/* Overlay Text */}
					<p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                w-full bg-[#1f0f3fb8] bg-opacity-50 text-white text-center 
                py-2 text-sm font-semibold">
					PVC Flooring Marbel Pattern
					</p>
				</div>
				<div className="relative  lg:w-[340px]  lg:h-[340px] hidden lg:flex flex-col" data-aos="zoom-in"  data-aos-duration="3000">
					{/* Image */}
					<img src={image3} alt="Vertical Blinds" className="w-full h-full object-cover" />

					{/* Overlay Text */}
					<p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                w-full bg-[#1f0f3fb8] bg-opacity-50 text-white text-center 
                py-2 text-sm font-semibold">
						PVC Flooring Wooden Pattern
					</p>
				</div>
			


			</div>
			<div className="relative  lg:w-[340px]  lg:h-[340px] h-[140px]  md:hidden">
					{/* Image */}
					<img src={image3} alt="Vertical Blinds" className="w-full h-full object-fill" />

					{/* Overlay Text */}
					<p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                w-full bg-[#1f0f3fb8] bg-opacity-50 text-white text-center 
                py-2 text-sm font-semibold">
						Flat PVC Wall and Ceiling Panels
					</p>
				</div>
			
			<YourselfCard></YourselfCard>

		</div>
	);
};

export default PvcFloring;