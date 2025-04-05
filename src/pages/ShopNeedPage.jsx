import React from 'react';
import ProductCard from '../components/dashboard/ProductCard';
import { products } from '../data/products';

const ShopNeedPage = () => {
	  const wallpapers = products.filter(p => p.category === 'shop-by-need');
	return (
		<div>
			 <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-2 justify-items-center mx-auto'>
        {wallpapers.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
		</div>
	);
};

export default ShopNeedPage;