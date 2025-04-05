import wallpaper1 from '../assets/images/wallpapers/7.png';
import wallpaper2 from '../assets/images/wallpapers/4.png';
import wallpaper3 from '../assets/images/wallpapers/5.png';
import wallpaper4 from '../assets/images/wallpapers/6.png';

import blind1 from '../assets/images/window-blinds/12.png';
import blind2 from '../assets/images/window-blinds/13.png';
import blind3 from '../assets/images/window-blinds/14.png';
import blind4 from '../assets/images/window-blinds/15.png';


import panel1 from '../assets/images/wall-and-ceilling/1.png';
import panel2 from '../assets/images/wall-and-ceilling/2.png';
import panel3 from '../assets/images/wall-and-ceilling/3.png';
import panel4 from '../assets/images/wall-and-ceilling/4.png';

import flooring1 from '../assets/images/pvc-flooring/3.png';
import flooring2 from '../assets/images/pvc-flooring/4.png';
import flooring3 from '../assets/images/pvc-flooring/5.png';
import flooring4 from '../assets/images/pvc-flooring/6.png';


import shopNeed1 from '../assets/images/pvc-flooring/3.png';
import shopNeed2 from '../assets/images/wall-and-ceilling/4.png';
import shopNeed3 from '../assets/images/window-blinds/15.png';
import shopNeed4 from '../assets/images/wallpapers/6.png';

import shopFeatures1 from '../assets/images/wall-and-ceilling/2.png';
import shopFeatures2 from '../assets/images/pvc-flooring/3.png';
import shopFeatures3 from '../assets/images/window-blinds/12.png';
import shopFeatures4 from '../assets/images/wallpapers/7.png';


export const products = [
  // Wallpapers
  {
    id: 101,
    category: 'wallpaper',
    title: '3D Geometric Pattern',
    discount: 15,
    originalPrice: 249,
    discountedPrice: 199,
    rating: 4.5,
    reviews: 28,
    image: wallpaper1,
    tags: ['Modern', 'Peel & Stick', 'Waterproof']
  },
  {
    id: 102,
    category: 'wallpaper',
    title: 'Tropical Leaf Design',
    discount: 20,
    originalPrice: 299,
    discountedPrice: 239,
    rating: 4.8,
    reviews: 45,
    image: wallpaper2,
    tags: ['Removable', 'Eco-Friendly']
  },
  {
    id: 103,
    category: 'wallpaper',
    title: 'Vintage Floral Print',
    discount: 10,
    originalPrice: 179,
    discountedPrice: 149,
    rating: 4.2,
    reviews: 17,
    image: wallpaper3,
    tags: ['Retro', 'Non-Woven']
  },
  {
    id: 104,
    category: 'wallpaper',
    title: 'Marble Texture',
    discount: 25,
    originalPrice: 349,
    discountedPrice: 299,
    rating: 4.7,
    reviews: 63,
    image: wallpaper4,
    tags: ['Luxury', 'PVC']
  },

  // Window Blinds
  {
    id: 201,
    category: 'window-blinds',
    title: 'Blackout Roller Blind',
    discount: 18,
    originalPrice: 899,
    discountedPrice: 749,
    rating: 4.6,
    reviews: 92,
    image: blind1,
    specs: {
      material: 'Polyester',
      lightControl: 'Full Blackout',
      size: 'Custom'
    }
  },
  {
    id: 202,
    category: 'window-blinds',
    title: 'Zebra Day-Night',
    discount: 12,
    originalPrice: 1299,
    discountedPrice: 1149,
    rating: 4.9,
    reviews: 134,
    image: blind2,
    specs: {
      material: 'Sheer Fabric',
      lightControl: 'Adjustable',
      size: 'Standard'
    }
  },
  {
    id: 203,
    category: 'window-blinds',
    title: 'Wooden Venetian',
    discount: 8,
    originalPrice: 1599,
    discountedPrice: 1499,
    rating: 4.4,
    reviews: 78,
    image: blind3,
    specs: {
      material: 'Bamboo',
      lightControl: 'Medium',
      size: 'Custom'
    }
  },
  {
    id: 204,
    category: 'window-blinds',
    title: 'Vertical Blinds',
    discount: 22,
    originalPrice: 799,
    discountedPrice: 649,
    rating: 4.3,
    reviews: 65,
    image: blind4,
    specs: {
      material: 'PVC',
      lightControl: 'Full',
      size: 'Standard'
    }
  },
  // wall and ceilling panel
  {
    id: 301,
    category: 'wall-ceiling-panels',
    title: '3D Acoustic Wall Panel',
    discount: 10,
    originalPrice: 50,
    discountedPrice: 45,
    rating: 4.7,
    reviews: 35,
    image: panel1,
    tags: ['Sound Absorption', 'Fire Retardant', 'PVC']
  },
  {
    id: 302,
    category: 'wall-ceiling-panels',
    title: 'Wooden Ceiling Tiles',
    discount: 15,
    originalPrice: 38,
    discountedPrice: 32,
    rating: 4.5,
    reviews: 42,
    image: panel2,
    tags: ['Engineered Wood', 'Moisture Resistant', 'Interlocking']
  },
  {
    id: 303,
    category: 'wall-ceiling-panels',
    title: 'PVC Bathroom Panels',
    discount: 20,
    originalPrice: 35,
    discountedPrice: 28,
    rating: 4.8,
    reviews: 57,
    image: panel3,
    tags: ['100% Waterproof', 'Mold Resistant', 'Quick Fit']
  },
  {
    id: 304,
    category: 'wall-ceiling-panels',
    title: 'Metal Ceiling Grid',
    discount: 5,
    originalPrice: 68,
    discountedPrice: 65,
    rating: 4.6,
    reviews: 28,
    image: panel4,
    tags: ['Aluminum', 'Commercial Grade', 'Modular Design']
  },

  // PVC Flooring (Updated Structure)
  {
    id: 401,
    category: 'pvc-flooring',
    title: 'Wood Look Vinyl Plank',
    discount: 25,
    originalPrice: 5.32,
    discountedPrice: 3.99,
    rating: 4.9,
    reviews: 89,
    image: flooring1,
    tags: ['Click-Lock', 'Waterproof', '10yr Warranty']
  },
  {
    id: 402,
    category: 'pvc-flooring',
    title: 'Stone Effect Vinyl Tile',
    discount: 30,
    originalPrice: 3.56,
    discountedPrice: 2.49,
    rating: 4.7,
    reviews: 64,
    image: flooring2,
    tags: ['Self-Adhesive', 'Slip Resistant', 'Commercial Use']
  },
  {
    id: 403,
    category: 'pvc-flooring',
    title: 'Luxury Vinyl Roll',
    discount: 15,
    originalPrice: 5.87,
    discountedPrice: 4.99,
    rating: 4.8,
    reviews: 73,
    image: flooring3,
    tags: ['Seamless', 'Anti-Bacterial', 'Hospital Grade']
  },
  {
    id: 404,
    category: 'pvc-flooring',
    title: 'Herringbone Vinyl',
    discount: 10,
    originalPrice: 7.77,
    discountedPrice: 6.99,
    rating: 4.6,
    reviews: 45,
    image: flooring4,
    tags: ['Patterned', 'Underfloor Heating', 'Pet Friendly']
  },


 // Shop By Need/Room (4 Items)
 {
  id: 501,
  category: 'shop-by-need',
  title: 'Living Room Essentials Kit',
  discount: 15,
  originalPrice: 1599,
  discountedPrice: 1359,
  rating: 4.8,
  reviews: 47,
  image: shopNeed1,
  tags: [
    'Acoustic Panels', 
    'Day-Night Blinds',
    'Wooden Flooring',
    'Complete Package'
  ],
  includedProducts: [101, 202, 401, 301]
},
{
  id: 502,
  category: 'shop-by-need',
  title: 'Kitchen Upgrade Bundle',
  discount: 20,
  originalPrice: 899,
  discountedPrice: 719,
  rating: 4.6,
  reviews: 32,
  image: shopNeed2,
  tags: [
    'Waterproof Panels',
    'Slip-Resistant Floor',
    'Easy-Clean Blinds',
    'Stain Protection'
  ],
  includedProducts: [303, 402, 201, 404]
},
{
  id: 503,
  category: 'shop-by-need',
  title: 'Bathroom Renovation Set',
  discount: 25,
  originalPrice: 1299,
  discountedPrice: 974,
  rating: 4.9,
  reviews: 63,
  image: shopNeed3,
  tags: [
    'Mold-Resistant',
    'Vinyl Tiles',
    'Compact Solutions',
    'Ventilation Ready'
  ],
  includedProducts: [303, 402, 204, 601]
},
{
  id: 504,
  category: 'shop-by-need',
  title: 'Bedroom Comfort Package',
  discount: 18,
  originalPrice: 2099,
  discountedPrice: 1721,
  rating: 4.7,
  reviews: 55,
  image: shopNeed4,
  tags: [
    'Blackout Blinds',
    'Soundproof Panels',
    'Luxury Flooring',
    'Thermal Insulation'
  ],
  includedProducts: [104, 204, 403, 304]
},

// Shop By Features (4 Items)
{
  id: 601,
  category: 'shop-by-features',
  title: 'Waterproof Solutions Pack',
  discount: 22,
  originalPrice: 1699,
  discountedPrice: 1325,
  rating: 4.8,
  reviews: 68,
  image: shopFeatures1,
  tags: [
    'Bathroom Panels',
    'Vinyl Flooring',
    'Outdoor Grade',
    '10-Year Warranty'
  ],
  featuredProducts: [303, 401, 403, 602]
},
{
  id: 602,
  category: 'shop-by-features',
  title: 'Eco-Friendly Collection',
  discount: 15,
  originalPrice: 1399,
  discountedPrice: 1189,
  rating: 4.9,
  reviews: 72,
  image: shopFeatures2,
  tags: [
    'Sustainable Materials',
    'Energy Efficient',
    'Recyclable',
    'Low VOC'
  ],
  featuredProducts: [102, 203, 302, 404]
},
{
  id: 603,
  category: 'shop-by-features',
  title: 'Premium Soundproof Bundle',
  discount: 17,
  originalPrice: 2299,
  discountedPrice: 1908,
  rating: 4.7,
  reviews: 41,
  image: shopFeatures3,
  tags: [
    'Acoustic Panels',
    'Noise-Reducing Blinds',
    'Soundproof Flooring',
    'Studio Grade'
  ],
  featuredProducts: [301, 204, 403, 501]
},
{
  id: 604,
  category: 'shop-by-features',
  title: 'Fire-Safe Essentials Kit',
  discount: 12,
  originalPrice: 1499,
  discountedPrice: 1319,
  rating: 4.6,
  reviews: 37,
  image: shopFeatures4,
  tags: [
    'Fire-Retardant',
    'Safety Certified',
    'Non-Toxic',
    'Commercial Grade'
  ],
  featuredProducts: [301, 304, 403, 601]
}
];