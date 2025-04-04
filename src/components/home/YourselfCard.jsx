// import React from 'react';
// import { RiRectangleFill } from 'react-icons/ri';

// const YourselfCard = () => {
// 	return (
// 		<div className='flex justify-between items-center px-4 py-10'>
// 			{/* left */}
// 			<div>
// 				<h1 className='text-center text-white font-semibold text-lg lg:text-2xl pb-4'>DO IT YOURSELF</h1>
// 				<div className='grid grid-cols-2'>
// 					<div className='flex items-center gap-1 text-white font-semibold'>

// 						<RiRectangleFill />
// 						<h1>BUYING GUIDES{'>'}{'>'}</h1>
// 					</div>
// 					<div className='flex items-center gap-1 text-white font-semibold'>

// 						<RiRectangleFill />
// 						<h1>MEASURE {'>'}{'>'}</h1>
// 					</div>
// 					<div className='flex items-center gap-1 text-white font-semibold'>

// 						<RiRectangleFill />
// 						<h1>TECH TIPS {'>'}{'>'}</h1>
// 					</div>
// 					<div className='flex items-center gap-1 text-white font-semibold'>

// 						<RiRectangleFill />
// 						<h1>INSTALL {'>'}{'>'}</h1>
// 					</div>
// 				</div>
// 			</div>
// 			{/* right */}
// 			<div>
// 				<h1 className='text-lg lg:text-2xl font-semibold text-white pb-4'>PROFESSIONAL MEASURING & INSTALLATION</h1>
// 				<p className='text-white'>$000 FULL-HOME MEASURING & INSTALLATION PACKAGE {'>'}{'>'}</p>
// 			</div>
// 		</div>
// 	);
// };

// export default YourselfCard;
import React from 'react';
import { RiRectangleFill } from 'react-icons/ri';
import bg from "../../assets/images/windowBlindsInfoBox.png"
const YourselfCard = () => {
	return (
		<div
			className='relative bg-cover bg-center lg:my-10 my-5 mb-5 lg:mb-10'
			style={{
				backgroundImage:`url(${bg})`,
			}}
		>
			{/* overlay */}
			<div className="absolute inset-0 bg-black opacity-50 z-0"></div>

			{/* content */}
			<div className='relative z-10 flex flex-col lg:flex-row gap-5 justify-between items-center lg:px-16 px-8 py-5 lg:py-10'>
				{/* left */}
				<div>
					<h1 className='text-center text-white font-semibold text-lg lg:text-2xl pb-4'>DO IT YOURSELF</h1>
					<div className='grid grid-cols-2 gap-5'>
						<div className='flex items-center gap-1 text-white font-semibold'>
							<RiRectangleFill />
							<h1>BUYING GUIDES{'>'}{'>'}</h1>
						</div>
						<div className='flex items-center gap-1 text-white font-semibold'>
							<RiRectangleFill />
							<h1>MEASURE {'>'}{'>'}</h1>
						</div>
						<div className='flex items-center gap-1 text-white font-semibold'>
							<RiRectangleFill />
							<h1>TECH TIPS {'>'}{'>'}</h1>
						</div>
						<div className='flex items-center gap-1 text-white font-semibold'>
							<RiRectangleFill />
							<h1>INSTALL {'>'}{'>'}</h1>
						</div>
					</div>
				</div>

				{/* right */}
				<div>
					<h1 className='text-lg lg:text-2xl font-semibold text-white pb-4 text-center lg:text-left'>
						PROFESSIONAL MEASURING & INSTALLATION
					</h1>
					<p className='text-white font-semibold text-center lg:text-left lg:text-sm'>$000 FULL-HOME MEASURING & INSTALLATION PACKAGE {'>'}{'>'}</p>
				</div>
			</div>
		</div>
	);
};

export default YourselfCard;
