import React from 'react';
import wallpaper from '../assets/images/you-may-also-like/wallpaper.png'
import pvc from '../assets/images/you-may-also-like/pvc-floring.png'
import wall_and_ceilling from '../assets/images/you-may-also-like/wall-and-ceilling.png'
import honycomb from "../assets/images/you-may-also-like/honeycomb.png"
import custom_blinds from "../assets/images/you-may-also-like/custom-blinds.png"
import curtains_draps from "../assets/images/you-may-also-like/curtains-draps.png"
import roller_blinds from "../assets/images/you-may-also-like/roller_blinds.png"
import ruman_blind from "../assets/images/you-may-also-like/ruman_blind.png"
import zebra_blinds from "../assets/images/you-may-also-like/zebra_blinds.png"
import wood_shade from "../assets/images/you-may-also-like/wood_shade.png"
import wood_shutter from "../assets/images/you-may-also-like/wood_shutter.png"
const YouMayAlsoLike = () => {
	return (
		<div className='py-5 md:py-8 lg:py-10'>
			<h1 className='text-primary text-lg font-bold md:text-2xl lg:text-3xl text-center pb-4 md:pb-7 lg:pb-9'>You May Also Like</h1>

			{/* 3 product */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-16 mb-5 md:mb-8 lg:mb-10 md:gap-9 lg:gap-8 px-2 '>
				<div className='lg:w-[295px]  lg:h-[295px] w-full h-[140px]  md:w-[280px] md:h-[200px] shadow-2xl shadow-amber-200'>
					<img src={wall_and_ceilling} alt="" className="w-full h-full object-cover" />
					<p className='bg-amber-700 font-semibold  text-white px-5 py-1 h-8 text-center'>Wall and Ceiling Panels</p>
				</div>
				<div className='lg:w-[295px]  lg:h-[295px] w-full h-[140px]  md:w-[280px] md:h-[200px] shadow-2xl shadow-amber-200'>
					<img src={wallpaper} alt="" className="w-full h-full object-cover" />
					<p className='bg-amber-700 font-semibold  text-white px-5 py-1 h-8 text-center'>Wallpaper</p>
				</div>
				<div className='lg:w-[295px]  lg:h-[295px] w-full h-[140px]  md:w-[280px] md:h-[200px] shadow-2xl shadow-amber-200'>
					<img src={pvc} alt="" className="w-full h-full object-cover" />
					<p className='bg-amber-700 font-semibold  text-white px-5 py-1 h-8 text-center'>PVC Flooring (Vinyl flooring)</p>
				</div>

			</div>

			{/* description */}
			<div className='px-5 md:px-3 mt-12 md:mt-14 lg:mt-20 space-y-12'>
				{/* one */}
				<div className='flex flex-col md:flex-row justify-between items-center gap-5'>
					{/* left */}
					<div className='w-full md:w-[75%]'>
						<h1 className='text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2 lg:mb-3'>Honeycomb-Cellular shades</h1>
						{/* pera */}
						<div className='text-sm md:text-md lg:text-lg'>
							<p className='pb-1'><span className='font-semibold'>Description:</span> Honeycomb-Cellular shades are a unique blend of contemporary design and functionality for windows. These shades create a beautiful texture with their cellular design, offering an elegant and efficient solution for controlling light and privacy in your home. They provide insulating properties, enhancing energy efficiency while maintaining a stylish look.</p>
							<p><span className='font-semibold'>Features:</span> Featuring a range of benefits, including light filtering options, excellent insulation, and a sleek appearance. Honeycomb-Cellular shades are a practical and attractive choice for those seeking window coverings that complement their living spaces.</p>
						</div>

					</div>
					{/* right */}
					<div className=' w-full md:w-[20%]'>
						<img src={honycomb} alt="" className=' mx-auto w-[200px]' />
					</div>
				</div>
				{/* two */}
				<div className='flex flex-col md:flex-row justify-between items-center gap-5'>
					{/* left */}
					<div className='w-full md:w-[75%]'>
						<h1 className='text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2 lg:mb-3'>Custom Blinds</h1>
						{/* pera */}
						<div className='text-sm md:text-md lg:text-lg'>
							<p className='pb-1'><span className='font-semibold'>Description:</span> Custom Blinds offer the flexibility to personalize window coverings, enabling users to choose specific designs, materials, and measurements. Tailored to individual preferences, these blinds provide a unique aesthetic to match the interior decor, offering personalized functionality and style.</p>
							<p><span className='font-semibold'>Features:</span> With a diverse array of bespoke designs, color choices, and textures, Custom Blinds allow for personalized dimensions, enabling users to create a distinctive and tailor-made window treatment.</p>
						</div>

					</div>
					{/* right */}
					<div className=' w-full md:w-[20%]'>
						<img src={custom_blinds} alt="" className=' mx-auto w-[200px]' />
					</div>
				</div>
				{/* three */}
				<div className='flex flex-col md:flex-row justify-between items-center gap-5'>
					{/* left */}
					<div className='w-full md:w-[75%]'>
						<h1 className='text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2 lg:mb-3'>Curtains Drapes</h1>
						{/* pera */}
						<div className='text-sm md:text-md lg:text-lg'>
							<p className='pb-1'><span className='font-semibold'>Description:</span>Curtains Drapes are essential elements of interior design, adding elegance and functionality to living spaces. Featuring a diverse range of fabric choices, colors, and styles, these elements provide versatility and aesthetics, enabling users to set the desired ambiance in their rooms. They offer both privacy and light control while enhancing the overall room decor.</p>
							<p><span className='font-semibold'>Features:</span> Known for their diverse design options, Curtains Drapes offer various materials, styles, and lengths. They serve multiple purposes, providing privacy and light control. With their decorative features and functional role, they contribute to the overall visual appeal of a room, allowing for a versatile and personalized touch to interior decor.</p>
						</div>

					</div>
					{/* right */}
					<div className=' w-full md:w-[20%]'>
						<img src={curtains_draps} alt="" className=' mx-auto w-[200px]' />
					</div>
				</div>
				{/* four */}
				<div className='flex flex-col md:flex-row justify-between items-center gap-5'>
					{/* left */}
					<div className='w-full md:w-[75%]'>
						<h1 className='text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2 lg:mb-3'>Rollar Blinds</h1>
						{/* pera */}
						<div className='text-sm md:text-md lg:text-lg'>
							<p className='pb-1'><span className='font-semibold'>Description:</span>Rollar Blinds are designed to provide a versatile and functional solution for window coverings. These blinds offer a diverse range of materials and finishes, serving both practical and aesthetic purposes. Available in different styles, they ensure light control and privacy, while contributing to the overall decor of the room.</p>
							<p><span className='font-semibold'>Features:</span> Known for their practical design, Rollar Blinds offer a variety of materials and finishes. They are highly adaptable to various interior settings and offer ease of installation and maintenance. With a wide spectrum of styles, colors, and textures available, these blinds provide a flexible solution to match diverse room aesthetics.</p>
						</div>

					</div>
					{/* right */}
					<div className=' w-full md:w-[20%]'>
						<img src={roller_blinds} alt="" className=' mx-auto w-[200px]' />
					</div>
				</div>
				{/* five */}
				<div className='flex flex-col md:flex-row justify-between items-center gap-5'>
					{/* left */}
					<div className='w-full md:w-[75%]'>
						<h1 className='text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2 lg:mb-3'>Roman Blinds</h1>
						{/* pera */}
						<div className='text-sm md:text-md lg:text-lg'>
							<p className='pb-1'><span className='font-semibold'>Description:</span> Roman Blinds are a versatile and stylish choice for window coverings. They come in a variety of materials and finishes, designed to serve both practical and aesthetic purposes. With different styles available, they excel in providing light control and privacy while enhancing the overall room decor.</p>
							<p><span className='font-semibold'>Features:</span> Renowned for their practical design, Roman Blinds offer a diverse selection of materials and finishes. They adapt well to various interior settings, offering ease of installation and maintenance. With a broad range of styles, colors, and textures to choose from, these blinds present a flexible solution to complement a wide array of room aesthetics.</p>
						</div>

					</div>
					{/* right */}
					<div className=' w-full md:w-[20%]'>
						<img src={ruman_blind} alt="" className=' mx-auto w-[200px]' />
					</div>
				</div>
				{/* six */}
				<div className='flex flex-col md:flex-row justify-between items-center gap-5'>
					{/* left */}
					<div className='w-full md:w-[75%]'>
						<h1 className='text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2 lg:mb-3'>Vertical Blinds</h1>
						{/* pera */}
						<div className='text-sm md:text-md lg:text-lg'>
							<p className='pb-1'><span className='font-semibold'>Description:</span> Vertical Blinds offer a versatile and elegant window covering solution. Available in various materials and finishes, they balance practical functionality with aesthetic appeal. Their diverse styles ensure excellent light control and privacy while adding a touch of sophistication to the room's decor.</p>
							<p><span className='font-semibold'>Features:</span> Recognized for their versatile design, Vertical Blinds offer an array of materials and finishes. They adapt seamlessly to different interior settings, providing convenient installation and maintenance. Offering an extensive range of styles, colors, and textures, these blinds provide a flexible and fashionable solution to complement various room aesthetics.</p>
						</div>

					</div>
					{/* right */}
					<div className=' w-full md:w-[20%]'>
						<img src={ruman_blind} alt="" className=' mx-auto w-[200px]' />
					</div>
				</div>
				{/* seven */}
				<div className='flex flex-col md:flex-row justify-between items-center gap-5'>
					{/* left */}
					<div className='w-full md:w-[75%]'>
						<h1 className='text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2 lg:mb-3'>Wood shades</h1>
						{/* pera */}
						<div className='text-sm md:text-md lg:text-lg'>
							<p className='pb-1'><span className='font-semibold'>Description:</span>Wood Shades Blinds offer a unique and natural window covering solution. Crafted in various materials and finishes, they provide a harmonious blend of practical functionality and visual appeal. Their versatile styles ensure effective light control and privacy, adding a touch of elegance to the room's ambiance.</p>
							<p><span className='font-semibold'>Features:</span> Admired for their adaptable design, Wood Shades Blinds are available in a wide array of materials and finishes. They seamlessly integrate into diverse interior settings, ensuring effortless installation and upkeep. With a comprehensive selection of styles, colors, and textures, these blinds offer a versatile and stylish solution to enhance varied room aesthetics.</p>
						</div>

					</div>
					{/* right */}
					<div className=' w-full md:w-[20%]'>
						<img src={wood_shade} alt="" className=' mx-auto w-[200px]' />
					</div>
				</div>
				{/* eight */}
				<div className='flex flex-col md:flex-row justify-between items-center gap-5'>
					{/* left */}
					<div className='w-full md:w-[75%]'>
						<h1 className='text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2 lg:mb-3'>Zebra blinds</h1>
						{/* pera */}
						<div className='text-sm md:text-md lg:text-lg'>
							<p className='pb-1'><span className='font-semibold'>Description:</span>Zebra Blinds are a modern and innovative window covering solution. Crafted with a variety of materials and finishes, they offer a seamless combination of practical functionality and visual appeal. Their adaptable styles ensure effective light control and privacy, enhancing the room's ambiance with a contemporary touch.</p>
							<p><span className='font-semibold'>Features:</span> Recognized for their versatile design, Zebra Blinds come in a diverse range of materials and finishes. They effortlessly blend into different interior settings, providing easy installation and maintenance. With an extensive selection of styles, colors, and textures, these blinds offer a chic and adaptable solution to elevate various room aesthetics.</p>
						</div>

					</div>
					{/* right */}
					<div className=' w-full md:w-[20%]'>
						<img src={zebra_blinds} alt="" className=' mx-auto w-[200px]' />
					</div>
				</div>
				{/* nine */}
				<div className='flex flex-col md:flex-row justify-between items-center gap-5'>
					{/* left */}
					<div className='w-full md:w-[75%]'>
						<h1 className='text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2 lg:mb-3'>Wood shutter blinds</h1>
						{/* pera */}
						<div className='text-sm md:text-md lg:text-lg'>
							<p className='pb-1'><span className='font-semibold'>Description:</span>Wood Shutter Blinds provide a classic and elegant window covering solution. Crafted from various materials and finishes, they combine practical functionality with aesthetic appeal. Their versatile styles ensure effective light control and privacy, adding a touch of sophistication to the room's atmosphere.</p>
							<p><span className='font-semibold'>Features:</span>Celebrated for their adaptable design, Wood Shutter Blinds are available in a diverse range of materials and finishes. They seamlessly integrate into different interior settings, offering easy installation and maintenance. With a comprehensive variety of styles, colors, and textures, these blinds provide a flexible and stylish solution to complement diverse room aesthetics.</p>
						</div>

					</div>
					{/* right */}
					<div className=' w-full md:w-[20%]'>
						<img src={wood_shutter} alt="" className=' mx-auto w-[200px]' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default YouMayAlsoLike;