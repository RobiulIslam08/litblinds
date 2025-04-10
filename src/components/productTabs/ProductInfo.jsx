import React from 'react';

const ProductInfo = () => {
	return (
		<div>
			<div className='bg-light-gray border border-gray-400 rounded-lg p-4'>
						<h1 className='text-primary font-semibold'>Product Description</h1>
						<p className='pb-3 lg:pb-4'>Diverse window blind designs for any window size Unique wallpaper patterns and textures Innovative wall and ceiling panels for modern aesthetics Durable and stylish PVC flooring options</p>
						<div>
							<div className="space-y-1">
								{/* List Item 1 */}
								<div className="flex items-start">
									<span className="text-gray-800 text-sm mr-3">•</span>
									<p className="text-gray-700 text-sm">
										Diverse Window Blind Designs For Any Window Size
									</p>
								</div>

								{/* List Item 2 */}
								<div className="flex items-start">
									<span className="text-gray-800 text-sm mr-3">•</span>
									<p className="text-gray-700 text-sm">
										Unique Wallpaper Patterns And Textures
									</p>
								</div>

								{/* List Item 3 */}
								<div className="flex items-start">
									<span className="text-gray-800 text-sm mr-3">•</span>
									<p className="text-gray-700 text-sm">
										Innovative Wall And Ceiling Panels For Modern Aesthetics
									</p>
								</div>

								{/* List Item 4 */}
								<div className="flex items-start">
									<span className="text-gray-800 text-sm mr-3">•</span>
									<p className="text-gray-700 text-sm">
										Durable And Stylish PVC Flooring Options
									</p>
								</div>
							</div>
						</div>
					</div>
		</div>
	);
};

export default ProductInfo;