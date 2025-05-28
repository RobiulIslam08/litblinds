

import React, { useEffect, useState } from 'react';
import img1 from '../assets/images/windowBlindsSinglePage/82_0.jpg';
import img2 from '../assets/images/windowBlindsSinglePage/82_1.jpg';
import { FaFacebook, FaHeart, FaInstagram, FaLinkedin, FaPlayCircle, FaShareAlt, FaStar, FaCheck, FaTimes, FaPlus, FaMinus, FaTwitter } from 'react-icons/fa'; // Added FaCheck, FaTimes, FaPlus, FaMinus for modal buttons
import { CiHeart } from 'react-icons/ci'; // Keeping as per your original file
import insideImage from '../assets/images/windowBlindsSinglePage/inside.jpg';
import defaultWidth from '../assets/images/windowBlindsSinglePage/Default_Width.jpg';
import defaultHeight from '../assets/images/windowBlindsSinglePage/Default_Height.jpg';
import QuantityCounter from '../components/QuantityCounter';
import lifeStyleimage1 from '../assets/images/windowBlindsSinglePage/lifeStyle1.jpg';
import lifeStyleimage2 from '../assets/images/windowBlindsSinglePage/lifeStyle2.jpg';
import lifeStyleimage3 from '../assets/images/windowBlindsSinglePage/lifeStyle3.jpg';

import HeadrailOption from '../components/WindowBlindsSinglePage/HeadrailOption'; // This component will be updated below
import RollPositon from '../components/WindowBlindsSinglePage/RollPositon';
import Headrail from '../components/WindowBlindsSinglePage/Headrail'; // This component will be updated below
import WarrentyOtion from '../components/WarrentyOtion'; // This component was updated in your previous request
import ProductTabs from '../components/ProductTabs';

import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';


const WindowBlindsSinglePage = () => {
    // --- Base prices and additional option prices (PER UNIT, unless specified) ---
    const BASE_UNIT_PRICE = 130;
    const BASE_YOU_SAVE = 70;
    const SHIPPING_FEE_PER_ORDER_PER_UNIT = 10; // This will be multiplied by quantity

    const LIFESTYLE_CHAIN_GUARD_PRICE = 2; // (PER UNIT)
    const LIFESTYLE_CORDLESS_LIFT_PRICE = 2; // (PER UNIT)
    const LIFESTYLE_MOTORIZATION_PRICE = 3; // (PER UNIT)
    const ROLL_POSITION_PRICE = 1; // (PER UNIT) - this is price if *any* roll position is selected, or if 'standard'/'reverse' has a cost
    const HEADRAIL_ITEM_PRICE_PER_OPTION = 1; // (PER UNIT) - this will be added for EACH *selected* headrail option

    // --- State Variables ---
    const [totalAmount, setTotalAmount] = useState(0); // This is the final calculated price for ALL quantities
    const [sizeAdjustmentPricePerUnit, setSizeAdjustmentPricePerUnit] = useState(0); // Price added for size (PER UNIT)
    const [warrantyPricePerUnit, setWarrantyPricePerUnit] = useState(0); // Price from warranty option (PER UNIT)

    const [selectedImg, setSelectedImg] = useState(img1);
    const [productTitle] = useState('Persianas De Ventana'); // Static product title for the modal

    // Measurement States
    const [wholeInches, setWholeInches] = useState(15);
    const [fraction, setFraction] = useState(0);
    const [totalCm, setTotalCm] = useState('');

    const [wholeInchesHeight, setWholeInchesHeight] = useState(15);
    const [fractionHeight, setFractionHeight] = useState(0);
    const [totalCmHeight, setTotalCmHeight] = useState('');

    // Quantity state
    const [quantity, setQuantity] = useState(1);

    // Share button state
    const [isOpen, setIsOpen] = useState(false);
    const urlToShare = "https://litblinds.com/singleproduct_window.php?p_id=82";

    // Color selection states
    const [selectedColor, setSelectedColor] = useState(null); // Stores the 'id' of the selected color item
    const [selectedColorPricePerUnit, setSelectedColorPricePerUnit] = useState(0); // Stores the price of the selected color (PER UNIT)

    // Mount type state
    const [selectedMount, setSelectedMount] = useState('inside');

    // Lifestyle option state
    const [selectedLifestyle, setSelectedLifestyle] = useState('');

    // Roll position state
    const [selectedRoll, setSelectedRoll] = useState(null); // State for RollPositon (e.g., 'standard', 'reverse')
    const [rollPositionPricePerUnit, setRollPositionPricePerUnit] = useState(0); // Price for selected roll position (per unit)

    // Headrail options states
    const [selectedHeadrailOptions, setSelectedHeadrailOptions] = useState(Array(4).fill('')); // Stores array of selected headrail options (e.g., ['Left Top', '', 'Right Bottom', ''])
    const [headrailOptionsPricePerUnit, setHeadrailOptionsPricePerUnit] = useState(0); // Total price for selected headrail options (per unit)


    // Modal state
    const [showOrderConfirmationModal, setShowOrderConfirmationModal] = useState(false);


    // --- Data for Options (with individual prices for colors) ---
    // Example prices for each color item (adjust as needed)
    const colorItemsForClassic = [
        { id: 'white-horse', name: 'White horse', color: '#f5f5f0', collection: 'classic', price: 1 },
        { id: 'polar-bear', name: 'Polar Bear', color: '#d1cbb8', collection: 'classic', price: 1.50 },
        { id: 'seal-gray', name: 'Seal Gray', color: '#6b707a', collection: 'classic', price: 2 },
        { id: 'white-gray', name: 'White Gray', color: '#54565a', collection: 'classic', price: 2.50 },
        { id: 'black', name: 'Black', color: '#454449', collection: 'classic', price: 3 },
        { id: 'beaver-tail', name: 'Beaver Tail', color: '#4d423f', collection: 'classic', price: 3.50 },
    ];

    const colorItemsForDeluxe = [
        { id: 'sea-salt', name: 'Sea Salt', color: '#cfcbc8', collection: 'deluxe', price: 6 },
        { id: 'gray-salt', name: 'Gray Salt', color: '#b2a7a6', collection: 'deluxe', price: 6.50 },
        { id: 'pabble', name: 'Pabble', color: '#bdb7b3', collection: 'deluxe', price: 7 },
        { id: 'grabbel', name: 'Grabbel', color: '#89817d', collection: 'deluxe', price: 7.50 },
        { id: 'stone', name: 'Stone', color: '#88807a', collection: 'deluxe', price: 8 },
        { id: 'rock-salt', 'name': 'Rock Salt', color: '#6e6362', collection: 'deluxe', price: 8.50 },
    ];

    const lifestyleData = [
        {
            id: 1,
            title: 'Chain Guard',
            price: LIFESTYLE_CHAIN_GUARD_PRICE,
            image: lifeStyleimage1,
        },
        {
            id: 2,
            title: 'Cordless Lift',
            price: LIFESTYLE_CORDLESS_LIFT_PRICE,
            image: lifeStyleimage2,
        },
        {
            id: 3,
            title: 'Motorization',
            price: LIFESTYLE_MOTORIZATION_PRICE,
            image: lifeStyleimage3,
        },
    ];

    // --- Price Calculation Effects ---

    // 1. Effect for width conversion (inches to cm)
    useEffect(() => {
        const totalInches = wholeInches + fraction;
        const cm = (totalInches * 2.54).toFixed(1);
        setTotalCm(cm);
    }, [wholeInches, fraction]);

    // 2. Effect for height conversion (inches to cm)
    useEffect(() => {
        const totalInches = wholeInchesHeight + fractionHeight;
        const cm = (totalInches * 2.54).toFixed(1);
        setTotalCmHeight(cm);
    }, [wholeInchesHeight, fractionHeight]);

    // 3. Effect to calculate size-based adjustment price (PER UNIT)
    useEffect(() => {
        let currentSizeAdjustment = 0;
        if (wholeInches >= 15 && wholeInches <= 21) {
            currentSizeAdjustment += 5;
        } else if (wholeInches >= 22 && wholeInches <= 27) {
            currentSizeAdjustment += 10;
        }
        if (wholeInchesHeight >= 15 && wholeInchesHeight <= 21) {
            currentSizeAdjustment += 5;
        } else if (wholeInchesHeight >= 22 && wholeInchesHeight <= 27) {
            currentSizeAdjustment += 10;
        }
        setSizeAdjustmentPricePerUnit(currentSizeAdjustment);
    }, [wholeInches, wholeInchesHeight]);

    // 4. Effect to determine selected color price per unit
    useEffect(() => {
        let price = 0;
        if (selectedColor) {
            const allColors = [...colorItemsForClassic, ...colorItemsForDeluxe];
            const foundColor = allColors.find(item => item.id === selectedColor);
            if (foundColor) {
                price = foundColor.price;
            }
        }
        setSelectedColorPricePerUnit(price);
    }, [selectedColor, colorItemsForClassic, colorItemsForDeluxe]);

    // 5. Effect to calculate Headrail Options Price Per Unit
    useEffect(() => {
        let price = 0;
        // Count how many headrail options are selected
        const numberOfSelectedHeadrailOptions = selectedHeadrailOptions.filter(option => option !== '').length;
        price = numberOfSelectedHeadrailOptions * HEADRAIL_ITEM_PRICE_PER_OPTION;
        setHeadrailOptionsPricePerUnit(price);
    }, [selectedHeadrailOptions, HEADRAIL_ITEM_PRICE_PER_OPTION]);

    // 6. Main Effect to calculate total amount based on ALL selected options and QUANTITY
    useEffect(() => {
        // Calculate the base price for a single unit first
        let currentTotalPerUnit = BASE_UNIT_PRICE;

        // Deduct savings per unit
        currentTotalPerUnit -= BASE_YOU_SAVE;

        // Add per-unit add-ons
        currentTotalPerUnit += sizeAdjustmentPricePerUnit;
        currentTotalPerUnit += selectedColorPricePerUnit;

        if (selectedLifestyle) {
            const selectedLifestyleItem = lifestyleData.find(item => item.title === selectedLifestyle);
            if (selectedLifestyleItem) {
                currentTotalPerUnit += selectedLifestyleItem.price;
            }
        }
        // Roll position price is now driven by RollPositon component setting rollPositionPricePerUnit
        currentTotalPerUnit += rollPositionPricePerUnit;

        currentTotalPerUnit += headrailOptionsPricePerUnit; // Add the calculated headrail options price per unit
        currentTotalPerUnit += warrantyPricePerUnit; // Add the per-unit warranty price

        // Now, multiply the per-unit total by the quantity and add the fixed shipping fee per order
        // Based on previous instruction, shipping fee also scales by quantity.
        const finalTotal = (currentTotalPerUnit * quantity) + (SHIPPING_FEE_PER_ORDER_PER_UNIT * quantity);
        
        setTotalAmount(finalTotal);

    }, [
        selectedColorPricePerUnit,
        selectedLifestyle,
        rollPositionPricePerUnit, // Updated dependency to use the state from RollPositon
        headrailOptionsPricePerUnit, // New dependency
        warrantyPricePerUnit,
        quantity,
        BASE_UNIT_PRICE,
        BASE_YOU_SAVE,
        SHIPPING_FEE_PER_ORDER_PER_UNIT,
        HEADRAIL_ITEM_PRICE_PER_OPTION, // New dependency
        lifestyleData,
        sizeAdjustmentPricePerUnit,
    ]);


    // --- Handlers ---
    const handleShareClick = () => {
        setIsOpen(!isOpen);
    };

    const handleAddToCartClick = () => {
        setShowOrderConfirmationModal(true);
    };

    const handleConfirmOrder = () => {
        // Here you would typically send the order details to your backend
        console.log("Order Confirmed!", {
            product: productTitle,
            image: selectedImg,
            quantity: quantity,
            totalPrice: totalAmount.toFixed(2),
            // Add other selected options here for the actual order details
            selectedColor: selectedColor,
            selectedMount: selectedMount,
            selectedLifestyle: selectedLifestyle,
            selectedRoll: selectedRoll,
            selectedHeadrailOptions: selectedHeadrailOptions,
            selectedWarrantyPrice: warrantyPricePerUnit,
            wholeInches: wholeInches,
            fraction: fraction,
            wholeInchesHeight: wholeInchesHeight,
            fractionHeight: fractionHeight,
        });
        setShowOrderConfirmationModal(false); // Close the modal
        // Optionally, redirect to checkout page or show a success message
    };

    const handleCancelOrder = () => {
        setShowOrderConfirmationModal(false); // Close the modal
    };


    const mountInfo = {
        inside: `Important: Inside mounted blinds & shades are installed inside the window casing. Please provide the exact measurements of the inside of the window frame. The factory will make the necessary deductions to ensure the correct fit. Please also check the minimum depth requirements for this product in the Product Info tab below to ensure you have enough window depth for installation.`,
        outside: `Important: Outside mounted blinds & shades are installed above the window opening on brackets attached to the wall or window frame. We recommend adding at least 4” to both the width and height to reduce light gaps on the sides of the windows.`,
    };

    return (
        <div>
            <div className='flex flex-col lg:flex-row gap-8 my-3 lg:my-5'>
                {/* Left Side: Main Product Image and Thumbnails */}
                <div className='w-full lg:w-[30%] mt-6'>
                    <InnerImageZoom
                        src={selectedImg}
                        className='rounded-md w-full h-auto '
                        zoomSrc={selectedImg}
                        moveType="pan"
                        fadeDuration={200}
                        fullscreenOnMobile={true}
                        mobileBreakpoint={640}
                        hasSpacer={true}
                    />
                    <div className='flex gap-3 mt-5'>
                        <img
                            src={img1}
                            alt="thumb1"
                            onClick={() => setSelectedImg(img1)}
                            className={`w-[60px] h-[60px] object-cover rounded-md cursor-pointer border-2 ${selectedImg === img1 ? 'border-blue-500' : 'border-transparent'}`}
                        />
                        <img
                            src={img2}
                            alt="thumb2"
                            onClick={() => setSelectedImg(img2)}
                            className={`w-[60px] h-[60px] object-cover rounded-md cursor-pointer border-2 ${selectedImg === img2 ? 'border-blue-500' : 'border-transparent'}`}
                        />
                    </div>
                </div>

                {/* Right Side: Product Details, Pricing, and Customization */}
                <div className='w-full lg:w-[70%] '>
                    {/* Price & Quantity Section */}
                    <div className='border border-gray-400 rounded-md flex flex-col lg:flex-row items-center gap-10 p-4'>
                        <div className='w-full lg:w-[60%]'>
                            {/* Star Rating & Product Title */}
                            <div className='flex items-center gap-1 text-xs'>
                                <FaStar className='text-yellow-400'></FaStar>
                                <FaStar className='text-yellow-400'></FaStar>
                                <FaStar className='text-yellow-400'></FaStar>
                                <FaStar className='text-yellow-400'></FaStar>
                                <FaStar className='text-yellow-400'></FaStar>
                                <p className='text-lg font-semibold text-gray-500'>5.0</p>
                            </div>
                            <h1 className='text-primary font-bold '>{productTitle}</h1>
                            {/* Static initial prices (as per original, consider if these should also be dynamic or removed) */}
                            <p className='text-base text-gray-400 font-bold '>$40</p>
                            <p className='bg-red-600 text-base rounded-md lg:text-lg font-bold text-white w-fit px-2'>5% OFF</p>
                            <p className='text-xl font-bold text-primary mb-3 lg:mb-4'>$35</p>

                            {/* Quantity Selector */}
                            <div className='mb-4'>
                                <p>Quantity</p>
                                <QuantityCounter quantity={quantity} setQuantity={setQuantity}></QuantityCounter>
                            </div>

                            {/* Action Buttons (Add to Cart, Buy, Heart, Share) */}
                            <div className='flex flex-wrap items-center gap-2 mt-3 md:mt-4 lg:mt-5 relative'>
                                {/* Attach handleAddToCartClick to the "Add To Cart" button */}
                                <button
                                    onClick={handleAddToCartClick}
                                    className='border border-blue-500 px-3 py-1 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition ease-in-outrounded-md'
                                >
                                    Add To Cart
                                </button>
                                <button className='border border-blue-500 px-3 py-1 hover:text-blue-500 hover:bg-white font-semibold bg-blue-500 text-white transition ease-in-outrounded-md'>Buy it Now</button>
                                <FaHeart className="border border-blue-500 px-3 py-1 hover:text-blue-500 hover:bg-white font-semibold bg-blue-500 transition ease-in-out h-9 w-9 cursor-pointer text-white rounded-md" />

                                <FaShareAlt onClick={handleShareClick} className="relative border border-blue-500 px-3 py-1 hover:text-blue-500 hover:bg-white font-semibold bg-blue-500 transition ease-in-out h-9 w-9 rounded-md cursor-pointer text-white " />

                                {/* Share Options */}
                                {isOpen && (
                                    <div className="absolute left-36 -top-12 flex gap-3 bg-white p-2 rounded-md shadow-md z-50 transition-all duration-300">
                                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:scale-110 transition-transform">
                                            <FaFacebook size={24} />
                                        </a>
                                        <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(urlToShare)}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:scale-110 transition-transform">
                                            <FaTwitter size={24} />
                                        </a>
                                        <a href={`https://www.instagram.com/`} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:scale-110 transition-transform">
                                            <FaInstagram size={24} />
                                        </a>
                                        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(urlToShare)}`} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:scale-110 transition-transform">
                                            <FaLinkedin size={24} />
                                        </a>
                                    </div>
                                )}
                            </div>
                            <hr className='text-gray-300 mt-4 mb-5' />

                            {/* Static Color Swatches (as per original) */}
                            <div className='mb-4'>
                                <h1 className='text-primary font-semibold mb-2'>Colors</h1>
                                <div className='flex items-center gap-1'>
                                    <div className='h-6 w-6 rounded bg-[#ff0000]'></div>
                                    <div className='h-6 w-6 rounded bg-[#fb0b0b]'></div>
                                    <div className='h-6 w-6 rounded bg-blue-700'></div>
                                    <div className='h-6 w-6 rounded bg-green-700'></div>
                                    <div className='h-6 w-6 rounded bg-black'></div>
                                </div>
                            </div>
                            <p className='text-primary font-semibold'>Delivery in Canada 7-14 days</p>

                            {/* Product Description */}
                            <div className='mt-3 lg:mt-4'>
                                <div className='flex items-center'>
                                    <p className='w-[130px] lg:w-[160px] text-base font-bold text-[#212529]'>Material</p>
                                    <p className='font-semibold text-gray-700'>Paper</p>
                                </div>
                                <div className='flex items-center'>
                                    <p className='w-[130px] lg:w-[160px] text-base font-bold text-[#212529]'>Colour</p>
                                    <p className='font-semibold text-gray-700'>Tea</p>
                                </div>
                                <div className='flex items-center'>
                                    <p className='w-[130px] lg:w-[160px] text-base font-bold text-[#212529]'>Brand</p>
                                    <p className='font-semibold text-gray-700'>yoncup</p>
                                </div>
                                <div className='flex items-center'>
                                    <p className='w-[130px] lg:w-[160px] text-base font-bold text-[#212529]'>Style</p>
                                    <p className='font-semibold text-gray-700'>Solid</p>
                                </div>
                                <div className='flex items-center'>
                                    <p className='w-[130px] lg:w-[160px] text-base font-bold text-[#212529]'>Item Weight</p>
                                    <p className='font-semibold text-gray-700'>0.5 Pound</p>
                                </div>
                                <p className='text-base font-bold text-[#212529]'>About this item</p>
                                <p className='font-semibold text-gray-700 ml-3 lg:ml-5'>Example description of the product.</p>
                            </div>
                        </div>

                        {/* Right Column: Price Summary */}
                        <div className='w-full lg:w-[40%]'>
                            <div className='bg-[#d4d4d4] p-4 rounded-md'>
                                {/* Unit Price (scaled by quantity) */}
                                <div className='flex justify-between items-center'>
                                    <p className='text-red font-bold text-[17px]'>Unit Price:</p>
                                    <p className='text-orange font-bold text-[17px]'>${(BASE_UNIT_PRICE * quantity).toFixed(2)}</p>
                                </div>
                                {/* You Save (scaled by quantity) */}
                                <div className='flex justify-between items-center my-5'>
                                    <p className='text-red font-bold text-[17px]'>You Save:</p>
                                    <p className='text-orange font-bold text-[17px]'>${(BASE_YOU_SAVE * quantity).toFixed(2)}</p>
                                </div>
                                {/* Shipping Fee (scaled by quantity) */}
                                <div className='flex justify-between items-center mb-6'>
                                    <p className='text-red font-bold text-[17px]'>Shipping Fee:</p>
                                    <p className='text-orange font-bold text-[17px]'>${(SHIPPING_FEE_PER_ORDER_PER_UNIT * quantity).toFixed(2)}</p>
                                </div>
                                {/* Size Adjustment Price (scaled by quantity) */}
                                <div className='flex justify-between items-center mb-6'>
                                    <p className='text-red font-bold text-[17px]'>Size Adj. Price:</p>
                                    <p className='text-orange font-bold text-[17px]'>${(sizeAdjustmentPricePerUnit * quantity).toFixed(2)}</p>
                                </div>
                                {/* Selected Color Price (scaled by quantity) */}
                                {selectedColorPricePerUnit > 0 && (
                                    <div className='flex justify-between items-center mb-6'>
                                        <p className='text-red font-bold text-[17px]'>Color Option Price:</p>
                                        <p className='text-orange font-bold text-[17px]'>${(selectedColorPricePerUnit * quantity).toFixed(2)}</p>
                                    </div>
                                )}
                                {/* Selected Lifestyle Price (scaled by quantity) */}
                                {selectedLifestyle && lifestyleData.find(item => item.title === selectedLifestyle) && (
                                    <div className='flex justify-between items-center mb-6'>
                                        <p className='text-red font-bold text-[17px]'>Lifestyle Price:</p>
                                        <p className='text-orange font-bold text-[17px]'>${(lifestyleData.find(item => item.title === selectedLifestyle).price * quantity).toFixed(2)}</p>
                                    </div>
                                )}
                                {/* Selected Roll Position Price (scaled by quantity) */}
                                {selectedRoll && (
                                    <div className='flex justify-between items-center mb-6'>
                                        <p className='text-red font-bold text-[17px]'>Roll Position Price:</p>
                                        <p className='text-orange font-bold text-[17px]'>${(rollPositionPricePerUnit * quantity).toFixed(2)}</p>
                                    </div>
                                )}
                                {/* Selected Headrail Options Price (scaled by quantity) */}
                                {headrailOptionsPricePerUnit > 0 && ( // Changed condition to check headrailOptionsPricePerUnit
                                    <div className='flex justify-between items-center mb-6'>
                                        <p className='text-red font-bold text-[17px]'>Headrail Options Price:</p>
                                        <p className='text-orange font-bold text-[17px]'>${(headrailOptionsPricePerUnit * quantity).toFixed(2)}</p>
                                    </div>
                                )}
                                {/* Warranty Price (scaled by quantity) */}
                                {warrantyPricePerUnit > 0 && (
                                    <div className='flex justify-between items-center mb-6'>
                                        <p className='text-red font-bold text-[17px]'>Warranty Price:</p>
                                        <p className='text-orange font-bold text-[17px]'>${(warrantyPricePerUnit * quantity).toFixed(2)}</p>
                                    </div>
                                )}

                                <hr className='text-gray-400 mb-4' />
                                {/* Total Sale Price */}
                                <div className='flex justify-between items-center mb-4'>
                                    <p className='text-red font-bold text-[17px]'>Sale Price:</p>
                                    <p className='text-orange font-bold text-[17px]'>${totalAmount.toFixed(2)}</p>
                                </div>
                            </div>
                            <button className='bg-red-500 hover:bg-red-600 w-full rounded-md my-3 text-white font-bold py-2'>Customize & Buy</button>
                        </div>
                    </div>

                    {/* --- Additional Customization Options Section --- */}
                    <div className='border p-4 border-gray-400 mt-3'>
                        {/* Select Color Options */}
                        <div>
                            <button className='md:text-base text-xs py-2 font-semibold text-left w-full text-white bg-[#2c2c2c] px-5'>Select Color</button>
                            <p className='text-sm py-3'>Classic Collection | Each option has its own price</p>
                            <hr className='text-gray-400 pb-3' />
                            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-items-center gap-y-8 mb-10'>
                                {colorItemsForClassic.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => {
                                            setSelectedColor(item.id);
                                            // The collection property is important for price lookup
                                            // We need to store this in state as well
                                            setSelectedCollection(item.collection);
                                        }}
                                        className={`cursor-pointer w-[100px] h-[130px] md:w-28 md:h-[130px] p-1 rounded ${selectedColor === item.id ? 'ring-2 ring-[#fd5d00]' : ''
                                            }`}
                                    >
                                        <div className="w-full h-[100px] border border-gray-300" style={{ backgroundColor: item.color }}></div>
                                        <p className='text-xs text-primary font-semibold mt-1 mb-2 text-center'>
                                            {item.name} (${item.price.toFixed(2)})
                                        </p>
                                        <button className='text-[#fd5d00] px-3 text-xs py-[2px] border border-gray-400 w-full'>Free Sample</button>
                                    </div>
                                ))}
                            </div>

                            <p className='text-sm py-3'>Deluxe Collection | Each option has its own price</p>
                            <hr className='text-gray-400 pb-3' />
                            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-items-center gap-y-8 mb-10'>
                                {colorItemsForDeluxe.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => {
                                            setSelectedColor(item.id);
                                            // Store collection for deluxe colors too
                                            setSelectedCollection(item.collection);
                                        }}
                                        className={`cursor-pointer w-[100px] h-[130px] md:w-28 md:h-[130px] p-1 rounded ${selectedColor === item.id ? 'ring-2 ring-[#fd5d00]' : ''
                                            }`}
                                    >
                                        <div className="w-full h-[100px] border border-gray-300" style={{ backgroundColor: item.color }}></div>
                                        <p className='text-xs text-primary font-semibold mt-1 mb-2 text-center'>
                                            {item.name} (${item.price.toFixed(2)})
                                        </p>
                                        <button className='text-[#fd5d00] px-3 text-xs py-[2px] border border-gray-400 w-full'>Free Sample</button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Select Size, Mount Type & Quality */}
                        <div>
                            <div className='flex items-center justify-between py-2 font-semibold text-left w-full text-white bg-[#2c2c2c] px-5'>
                                <p className='text-xs md:text-lg'>Select Size, Mount Type & Quality</p>
                                <div className='flex items-center gap-1 justify-center'>
                                    <p className='text-xs md:text-lg'>W:{wholeInches}"</p>
                                    <p className='text-xs md:text-lg'>H:{wholeInchesHeight}"</p>
                                </div>
                            </div>

                            {/* Mount Type Selector */}
                            <p className='text-primary text-sm mt-3 md:mt-4 lg:mt-5'>Mount Type</p>
                            <hr className='text-gray-400 ' />
                            <div className='flex flex-col lg:flex-row justify-center gap-2 lg:gap-7 mt-2 lg:mt-3'>
                                <div className='flex items-center justify-center gap-4 w-full lg:w-[50%]'>
                                    <div
                                        onClick={() => setSelectedMount('inside')}
                                        className={`cursor-pointer p-2 border ${selectedMount === 'inside' ? 'ring-2 ring-[#fd5d00]' : ''
                                            }`}
                                    >
                                        <img src={insideImage} alt='Inside Mount' className='w-24 h-auto' />
                                        <p className='text-center text-primary text-sm mt-1'>Inside</p>
                                    </div>
                                    <div
                                        onClick={() => setSelectedMount('outside')}
                                        className={`cursor-pointer p-2 border ${selectedMount === 'outside' ? 'ring-2 ring-[#fd5d00]' : ''
                                            }`}
                                    >
                                        <img src={insideImage} alt='Outside Mount' className='w-24 h-auto' />
                                        <p className='text-center text-primary text-sm mt-1'>Outside</p>
                                    </div>
                                </div>
                                <p className='w-full lg:w-[50%] text-sm text-justify'>
                                    <span className='font-bold text-xs'>NOTE:</span> {mountInfo[selectedMount]}
                                </p>
                            </div>

                            {/* Enter Measurements (Width and Height Selectors) */}
                            <p className='text-primary text-sm mt-5 md:mt-7 lg:mt-9'>Enter Measurements</p>
                            <hr className='text-gray-400 ' />
                            <p className='font-bold transition ease-in-out hover:text-blue-600 mt-3 lg:mt-4 cursor-pointer duration-300'>Tip: Measure & Install</p>
                            <div className='flex justify-between items-center gap-10'>
                                {/* Width Input */}
                                <div className='flex flex-col lg:flex-row gap-2 items-center justify-between'>
                                    <div>
                                        <img src={defaultWidth} alt="" className='lg:w-[200px] w-full' />
                                    </div>
                                    <div className="ml-4">
                                        <div className="flex flex-col gap-2">
                                            <p className='text-sm text-primary'>Width (inches)</p>
                                            <select
                                                value={wholeInches}
                                                onChange={(e) => setWholeInches(Number(e.target.value))}
                                                className="border p-1 rounded-md w-24 lg:w-40"
                                            >
                                                {Array.from({ length: 129 }, (_, i) => 15 + i).map((num) => (
                                                    <option key={num} value={num}>{num}"</option>
                                                ))}
                                            </select>
                                            <select
                                                value={fraction}
                                                onChange={(e) => setFraction(Number(e.target.value))}
                                                className="border p-1 rounded-md w-24 lg:w-40"
                                            >
                                                {[0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875].map((frac) => (
                                                    <option key={frac} value={frac}>
                                                        {frac === 0 ? '0' : `${(frac * 8).toFixed(0)}/8`}
                                                    </option>
                                                ))}
                                            </select>
                                            <span className="text-sm font-bold text-primary">Size CM: {totalCm}</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Height Input */}
                                <div className='flex flex-col lg:flex-row gap-2 items-center justify-between'>
                                    <div>
                                        <img src={defaultHeight} alt="" className='lg:w-[200px] md:w-full' />
                                    </div>
                                    <div className="ml-4">
                                        <div className="flex flex-col gap-2">
                                            <p className='text-sm text-primary'>Height (inches)</p>
                                            <select
                                                value={wholeInchesHeight}
                                                onChange={(e) => setWholeInchesHeight(Number(e.target.value))}
                                                className="border p-1 rounded-md w-24 lg:w-40"
                                            >
                                                {Array.from({ length: 129 }, (_, i) => 15 + i).map((num) => (
                                                    <option key={num} value={num}>{num}"</option>
                                                ))}
                                            </select>
                                            <select
                                                value={fractionHeight}
                                                onChange={(e) => setFractionHeight(Number(e.target.value))}
                                                className="border p-1 rounded-md w-24 lg:w-40"
                                            >
                                                {[0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875].map((frac) => (
                                                    <option key={frac} value={frac}>
                                                        {frac === 0 ? '0' : `${(frac * 8).toFixed(0)}/8`}
                                                    </option>
                                                ))}
                                            </select>
                                            <span className="text-sm font-bold text-primary">Size CM: {totalCmHeight}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Room Name Input */}
                        <div>
                            <p className='text-primary text-sm mt-3 md:mt-4 lg:mt-5'>Room Name</p>
                            <hr className='text-gray-400 ' />
                            <input type="text" className='border border-gray-400 rounded-md outline-none px-3 py-1 mt-2 md:mt-3' />
                        </div>

                        {/* Select Features */}
                        <div>
                            <button className='text-xs md:text-base py-2 font-semibold text-left w-full text-white bg-[#2c2c2c] px-5 mt-3 md:mt-4'>Select Features</button>
                            {/* Life Style Options */}
                            <p className='text-primary text-sm mt-3 md:mt-4 lg:mt-5'>Life Style</p>
                            <hr className='text-gray-400 ' />
                            <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 mt-3 md:mt-4'>
                                {lifestyleData.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => setSelectedLifestyle(item.title)}
                                        className={`cursor-pointer border rounded-md p-1 transition duration-300 ${selectedLifestyle === item.title
                                            ? 'ring-2 ring-blue-500 bg-blue-50'
                                            : 'hover:ring-1 hover:ring-blue-300'
                                            }`}
                                    >
                                        <img src={item.image} alt={item.title} className='w-full rounded' />
                                        <div className='flex justify-between items-center mt-2'>
                                            <div className='flex flex-col'>
                                                <p className='font-semibold'>{item.title}</p>
                                                <p>${item.price}</p>
                                            </div>
                                            <FaPlayCircle
                                                className={`border border-blue-500 px-1 py-1 font-semibold h-7 w-7 text-white rounded-md transition ${selectedLifestyle === item.title
                                                    ? 'bg-blue-500'
                                                    : 'bg-blue-500 hover:bg-white hover:text-blue-500'
                                                    }`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Headrail Option Component - Needs to communicate selections to parent */}
                        <HeadrailOption setHeadrailOptionsPrice={setHeadrailOptionsPricePerUnit} />

                        {/* Roll Position Component */}
                        <RollPositon selectedRoll={selectedRoll} setSelectedRoll={setSelectedRoll} ROLL_POSITION_PRICE={ROLL_POSITION_PRICE} setRollPositionPrice={setRollPositionPricePerUnit} />

                        {/* Headrail Component - Takes selection state from parent */}
                        {/* Note: This Headrail component likely renders the actual selectable options from HeadrailOption if they are separate parts of the same feature. */}
                        {/* If this component is for visual display of selected headrail options, ensure it correctly uses selectedHeadrailOptions */}
                        <Headrail selectedHeadrailOptions={selectedHeadrailOptions} setSelectedHeadrailOptions={setSelectedHeadrailOptions} HEADRAIL_ITEM_PRICE={HEADRAIL_ITEM_PRICE_PER_OPTION} />

                        {/* Note */}
                        <p className='text-xs text-primary py-4 md:py-6'>NOTE: Blackout shades with exposed roll may have a light gap at the top of the headrail when the shades are down. We recommend ordering a valance to cover the exposed roll if you prefer a higher level of blackout.</p>

                        {/* Warranty Option Component - Pass quantity to it */}
                        <WarrentyOtion setWarrantyPrice={setWarrantyPricePerUnit} quantity={quantity}></WarrentyOtion>
                    </div>

                </div>
            </div>
            {/* Product Tabs Component */}
            <ProductTabs></ProductTabs>
               {/* fixed bar for payment */}
            <div className='flex justify-between items-center shadow-md fixed bottom-0 left-0 w-full bg-gray-400 py-[2px] px-4 z-40 '>
                <div>
                    <p className='text-gray-800 font-semibold text-base md:text-xl'>Your Price:</p>
                    <p className='text-gray-800 font-bold text-base md:text-xl'>${totalAmount.toFixed(2)}</p>
                </div>
                <button
                    onClick={handleAddToCartClick} // Attached modal handler
                    className='border border-gray-500 px-3 py-1 text-white font-semibold hover:bg-gray-800 bg-gray-700 hover:text-white transition ease-in-outrounded-md'>Add To Cart</button>
            </div>

            {/* --- Order Confirmation Modal --- */}
            {showOrderConfirmationModal && (
                <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl text-center w-full max-w-sm mx-4">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Are You Sure You Want To Order?</h2>
                        <div className="mb-6">
                            <img src={selectedImg} alt={productTitle} className="w-32 h-auto mx-auto rounded-md mb-2" />
                            <p className="font-semibold text-lg text-gray-700">{productTitle}</p>
                            <p className="text-xl font-bold text-blue-700 mt-2">
                                {/* Display Unit Price * Quantity = Total Price */}
                                ${BASE_UNIT_PRICE.toFixed(2)} * {quantity} = ${totalAmount.toFixed(2)}
                            </p>
                        </div>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={handleConfirmOrder}
                                className="flex-1 bg-[#2C2C2C] text-white py-2 px-4 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                            >
                                <FaCheck className="h-4 w-4" /> Yes
                            </button>
                            <button
                                onClick={handleCancelOrder}
                                className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-gray-600 transition-colors"
                            >
                                <FaTimes className="h-4 w-4" /> No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WindowBlindsSinglePage;