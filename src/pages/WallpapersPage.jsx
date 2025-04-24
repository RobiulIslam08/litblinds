

import React from 'react';
import ProductCard from '../components/dashboard/ProductCard';
import { products } from '../data/products';

const WallpapersPage = () => {
  const wallpapers = products.filter(p => p.category === 'wallpaper');

  return (
    <div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-[600px] md::h-0  p-2 justify-items-center mx-auto'>
        {wallpapers.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default WallpapersPage;