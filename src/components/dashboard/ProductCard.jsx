

// import React from 'react';
// import { FaEye, FaHeart, FaRandom, FaShoppingCart } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const ProductCard = ({ product }) => {
//   const { 
//     title, 
//     discount, 
//     originalPrice, 
//     discountedPrice, 
//     rating, 
//     reviews,
//     image 
//   } = product;

//   // Rating stars generator
//   const renderStars = () => {
//     return '⭐'.repeat(Math.floor(rating)) + (rating % 1 !== 0 ? '½' : '');
//   };

//   return (
//     <div className="mb-4">
//       <div className="relative group lg:w-[220px] lg:h-[255px] w-[140px] h-[140px]">
//        <Link  to={
//     product.category === 'window-blinds'
//       ? '/window-blinds-singlepage'
//       : product.category === 'wallpaper'
//       ? '/wallpaper-details-page'
//       : '/all-product-singlepage'
//   }>
//        <img
//           src={image}
//           alt={title}
//           className="w-full h-full object-cover"
//         />
//        </Link>
//         {discount > 0 && (
//           <p className='bg-white text-black p-2 absolute top-2 left-2 rounded-md font-semibold'>
//             {discount}%
//           </p>
//         )}

//         {/* Icons Section */}
//         <div className="absolute top-8 right-3 space-y-3 text-2xl font-semibold">
//           {/* ... (icons code remains same) */}
//         </div>

//         {/* Product Info */}
//         <p className='font-bold text-lg text-gray-600'>{title}</p>
//         <div className='flex items-center'>
//           <span className='text-yellow-500'>{renderStars()}</span>
//           <span className='text-sm ml-1'>({reviews})</span>
//         </div>
//         <div className='flex items-center gap-2 font-semibold'>
//           {discount > 0 && (
//             <p className='line-through text-primary'>${originalPrice}</p>
//           )}
//           <p className='text-primary'>${discountedPrice}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
import React from 'react';
import { FaEye, FaHeart, FaRandom, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
    <div className="mb-4 ">
      {/* The main product card container */}
      {/* 'group' class remains on the outermost container for global hover effects if desired */}
      <div className="group">
        {/* This div is now the relative container for the image and absolute icons */}
        <div className="relative lg:w-[220px] lg:h-[255px] w-[140px] h-[140px] overflow-hidden">
          <Link to={
            product.category === 'window-blinds'
              ? '/window-blinds-singlepage'
              : product.category === 'wallpaper'
              ? '/wallpaper-details-page'
              : '/all-product-singlepage' // Fallback or generic page
          }>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" // Added scale for image hover effect
            />
          </Link>

          {discount > 0 && (
            <p className='bg-white text-black p-2 absolute top-2 left-2 rounded-md font-semibold z-10'>
              {discount}%
            </p>
          )}

          {/* Icons Section: Now correctly positioned absolutely OVER the image */}
          {/* 'group-hover:opacity-100' makes them appear on hover of the parent 'group' div */}
          {/* 'transition-opacity' adds a smooth fade effect */}
          <div className="absolute top-3 right-3 space-y-2 text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <button className="block p-2 bg-white rounded-full shadow-md text-gray-700 hover:text-blue-500 transition-colors duration-200">
              <FaHeart />
            </button>
            <button className="block p-2 bg-white rounded-full shadow-md text-gray-700 hover:text-blue-500 transition-colors duration-200">
              <FaEye />
            </button>
            <button className="block p-2 bg-white rounded-full shadow-md text-gray-700 hover:text-blue-500 transition-colors duration-200">
              <FaRandom />
            </button>
            <button className="block p-2 bg-white rounded-full shadow-md text-gray-700 hover:text-blue-500 transition-colors duration-200">
              <FaShoppingCart />
            </button>
          </div>
        </div>

        {/* Product Info (remains below the image container) */}
        <p className='font-bold text-lg text-gray-600 mt-2'>{title}</p>
        <div className='flex items-center'>
          <span className='text-yellow-500'>{renderStars()}</span>
          <span className='text-sm ml-1'>({reviews})</span>
        </div>
        <div className='flex items-center gap-2 font-semibold'>
          {discount > 0 && (
            <p className='line-through text-gray-500'>${originalPrice}</p> 
          )}
          <p className='text-blue-600'>${discountedPrice}</p> {/* Changed text-primary to text-blue-600 for better visibility */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;