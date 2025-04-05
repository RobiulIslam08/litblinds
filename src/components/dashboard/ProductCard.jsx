// import React from 'react';
// import image1 from "../../assets/images/wall-and-ceilling/20.png";
// import { FaEye, FaHeart, FaRandom, FaShoppingCart } from 'react-icons/fa';

// const ProductCard = () => {
// 	return (
// 		<div>
// 			<div
// 				className="relative group lg:w-[220px] lg:h-[255px] w-[140px] h-[140px]"
// 				data-aos="zoom-in"
// 				data-aos-duration="3000"
// 			>
// 				<img
// 					src={image1}
// 					alt="Vertical Blinds"
// 					className="w-full h-full object-cover"
// 				/>
// 				<p className='bg-white text-black p-2 absolute top-2 left-2 rounded-md font-semibold'>12%</p>

// 				<div className="absolute top-8 right-3 space-y-3 text-2xl font-semibold">
// 					{/* Icon 1 - Cart */}
// 					<div className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-full shadow-md
//             opacity-0 translate-x-5 group-hover:translate-x-0 group-hover:opacity-100
//             transition-all duration-200 delay-100 hover:bg-black hover:text-white hover:scale-110">
// 						<FaShoppingCart className='w-5 h-5' />
// 					</div>

// 					{/* Icon 2 - Eye */}
// 					<div className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-full shadow-md
//             opacity-0 translate-x-5 group-hover:translate-x-0 group-hover:opacity-100
//             transition-all duration-200 delay-200 hover:bg-black hover:text-white hover:scale-110">
// 						<FaEye className='w-5 h-5' />
// 					</div>

// 					{/* Icon 3 - Heart */}
// 					<div className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-full shadow-md
//             opacity-0 translate-x-5 group-hover:translate-x-0 group-hover:opacity-100
//             transition-all duration-200 delay-300 hover:bg-black hover:text-white hover:scale-110">
// 						<FaHeart className='w-5 h-5' />
// 					</div>

// 					{/* Icon 4 - Random */}
// 					<div className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-full shadow-md
//             opacity-0 translate-x-5 group-hover:translate-x-0 group-hover:opacity-100
//             transition-all duration-200 delay-400 hover:bg-black hover:text-white hover:scale-110">
// 						<FaRandom className='w-5 h-5' />
// 					</div>
// 				</div>
// 				{/* title */}
// 				<p className='font-bold text-lg text-gray-600'>3D Wallpaper</p>
// 				<p>⭐⭐⭐⭐ (13)</p>
// 				<div className='flex items-center gap-2 font-semibold'>
// 					<p className='line-through text-primary font-semibold'>$200</p>
// 					<p className='text-primary font-semibold'>$120</p>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default ProductCard;

import React from 'react';
import { FaEye, FaHeart, FaRandom, FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const { 
    title, 
    discount, 
    originalPrice, 
    discountedPrice, 
    rating, 
    reviews,
    image 
  } = product;

  // Rating stars generator
  const renderStars = () => {
    return '⭐'.repeat(Math.floor(rating)) + (rating % 1 !== 0 ? '½' : '');
  };

  return (
    <div className="mb-4">
      <div className="relative group lg:w-[220px] lg:h-[255px] w-[140px] h-[140px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {discount > 0 && (
          <p className='bg-white text-black p-2 absolute top-2 left-2 rounded-md font-semibold'>
            {discount}%
          </p>
        )}

        {/* Icons Section */}
        <div className="absolute top-8 right-3 space-y-3 text-2xl font-semibold">
          {/* ... (icons code remains same) */}
        </div>

        {/* Product Info */}
        <p className='font-bold text-lg text-gray-600'>{title}</p>
        <div className='flex items-center'>
          <span className='text-yellow-500'>{renderStars()}</span>
          <span className='text-sm ml-1'>({reviews})</span>
        </div>
        <div className='flex items-center gap-2 font-semibold'>
          {discount > 0 && (
            <p className='line-through text-primary'>${originalPrice}</p>
          )}
          <p className='text-primary'>${discountedPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;