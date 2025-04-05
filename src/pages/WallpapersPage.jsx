import React from 'react';
import image1 from "../assets/images/wall-and-ceilling/20.png"

const WallpapersPage = () => {
	return (
		<div>
		{/* product */}
				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-2 justify-items-center mx-auto'>
					<div className="relative  lg:w-[220px]  lg:h-[255px] w-[140px] h-[140px] " data-aos="zoom-in"  data-aos-duration="3000">
						{/* Image */}
						<img src={image1} alt="Vertical Blinds" className="w-full h-full object-cover" />
	
						{/* Overlay Text */}
						<p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
					w-full bg-[#1f0f3fb8] bg-opacity-50 text-white text-center 
					py-2 text-sm font-semibold">
							3D Wallpapers
						</p>
					</div>
					<div className="relative  lg:w-[220px]  lg:h-[255px] w-[140px] h-[140px]" data-aos="zoom-in"  data-aos-duration="3000">
						{/* Image */}
						<img src={image1} alt="Vertical Blinds" className="w-full h-full object-cover" />
	
						{/* Overlay Text */}
						<p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
					w-full bg-[#1f0f3fb8] bg-opacity-50 text-white text-center 
					py-2 text-sm font-semibold">
							Custom Wallpapers
						</p>
					</div>
					<div className="relative  lg:w-[220px]  lg:h-[255px] w-[140px] h-[140px]" data-aos="zoom-in"  data-aos-duration="3000">
						{/* Image */}
						<img src={image1} alt="Vertical Blinds" className="w-full h-full object-cover" />
	
						{/* Overlay Text */}
						<p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
					w-full bg-[#1f0f3fb8] bg-opacity-50 text-white text-center 
					py-2 text-sm font-semibold">
							Regular Wallpapers
						</p>
					</div>
					<div className="relative  lg:w-[220px]  lg:h-[255px] w-[140px] h-[140px]" data-aos="zoom-in"  data-aos-duration="3000">
						{/* Image */}
						<img src={image1} alt="Vertical Blinds" className="w-full h-full object-cover" />
	
						{/* Overlay Text */}
						<p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
					w-full bg-[#1f0f3fb8] bg-opacity-50 text-white text-center 
					py-2 text-sm font-semibold">
							Matallic Wallpapers
						</p>
					</div>
	
	
				</div>
		</div>
	);
};

export default WallpapersPage;