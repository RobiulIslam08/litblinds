import { useState } from 'react';
import ProductInfo from './productTabs/ProductInfo';
import ReviewSections from './productTabs/ReviewSections';
import ShippingSection from './productTabs/ShippingSection';



const ProductTabs = () => {
	const [activeTab, setActiveTab] = useState('reviews');

	return (
		<div className="border border-gray-400 mb-5 p-4">
			{/* ট্যাব বাটনসমূহ */}
			<div className="flex gap-2 mb-6 overflow-x-auto">
				{['productInfo', 'reviews', 'shipping', 'guide', 'samples',].map((tab) => (
					<button
						key={tab}
						onClick={() => setActiveTab(tab)}
						className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${activeTab === tab
								? 'bg-blue-500 text-white'
								: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
							}`}
					>
						{tab === 'productInfo' && 'Product Info'}
						{tab === 'reviews' && 'Reviews '}
						{tab === 'shipping' && 'Shipping & Production '}
						{tab === 'guide' && 'Measure & Install Guide'}
						{tab === 'samples' && 'Order Fee Sample - Window Blind'}

					</button>
				))}
			</div>

			{/* কনটেন্ট সেকশনসমূহ */}
			<div className="space-y-6">
				{/* রিভিউ সেকশন (ডিফল্ট ভিসিবল) */}
				{activeTab === 'reviews' && (
					<ReviewSections></ReviewSections>
					
				)}

				{/* অন্যান্য সেকশনসমূহ */}
				{activeTab === 'productInfo' && (
					<ProductInfo></ProductInfo>
				)}

				{activeTab === 'guide' && (
					<div>
						<h2 className="text-xl font-bold mb-4">Measurement Guide</h2>
						<p>Step-by-step installation instructions...</p>
					</div>
				)}

				{activeTab === 'samples' && (
					<div>
						<h2 className="text-xl font-bold mb-4">Free Samples</h2>
						<button className="bg-orange-500 text-white px-4 py-2 rounded">
							Order Free Samples
						</button>
					</div>
				)}

				{activeTab === 'shipping' && (
					<ShippingSection></ShippingSection>
				)}
			</div>
		</div>
	);
};

export default ProductTabs;