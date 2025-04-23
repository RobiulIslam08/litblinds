

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
    <div className="mb-4">
      <div className="relative group lg:w-[220px] lg:h-[255px] w-[140px] h-[140px]">
       <Link to={product.category === 'window-blinds' ? '/window-blinds-singlepage' : '/all-product-singlepage'}>
       <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
       </Link>
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