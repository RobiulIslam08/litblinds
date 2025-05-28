
import React, { useEffect, useState } from 'react';
import img1 from '../assets/images/windowBlindsSinglePage/82_0.jpg';
import img2 from '../assets/images/windowBlindsSinglePage/82_1.jpg';
import { FaFacebook, FaHeart, FaInstagram, FaLinkedin, FaShareAlt, FaStar, FaCheck, FaTimes, FaTwitter } from 'react-icons/fa'; // Added FaCheck, FaTimes
import { CiHeart } from 'react-icons/ci';
import defaultWidth from '../assets/images/windowBlindsSinglePage/Default_Width.jpg';
import defaultHeight from '../assets/images/windowBlindsSinglePage/Default_Height.jpg';
import QuantityCounter from '../components/QuantityCounter';
import WarrentyOtion from '../components/WarrentyOtion';
import ProductTabs from '../components/ProductTabs';

import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';


const ALLProductSinglePage = () => {
    // --- Price Constants ---
    const BASE_UNIT_PRICE = 130;
    const BASE_YOU_SAVE = 70;
    const BASE_SHIPPING_FEE = 10;

    // --- State Variables ---
    const [selectedImg, setSelectedImg] = useState(img1);
    const [productTitle] = useState('Persianas De Ventana'); // Added for modal display
    const [quantity, setQuantity] = useState(1);

    // Measurement States (for width and height input)
    const [wholeInches, setWholeInches] = useState(15);
    const [fraction, setFraction] = useState(0);
    const [totalCm, setTotalCm] = useState('');

    const [wholeInchesHeight, setWholeInchesHeight] = useState(15);
    const [fractionHeight, setFractionHeight] = useState(0);
    const [totalCmHeight, setTotalCmHeight] = useState('');

    // Dynamic Pricing States
    const [sizeAdjustmentPrice, setSizeAdjustmentPrice] = useState(0);
    // const [calculatedSalePrice, setCalculatedSalePrice] = useState(0);
       const [totalAmount, setTotalAmount] = useState(0);
    const [warrantyPricePerUnit, setWarrantyPricePerUnit] = useState(0);

    // Share button states
    const [isOpen, setIsOpen] = useState(false);
    const handleShareClick = () => {
        setIsOpen(!isOpen);
    };
    const urlToShare = "https://litblinds.com/singleproduct_window.php?p_id=82";

    // Modal state
    const [showOrderConfirmationModal, setShowOrderConfirmationModal] = useState(false); // New modal state


    // --- useEffect Hooks for Calculations ---

    // Effect to convert selected width (inches) to centimeters
    useEffect(() => {
        const totalInches = wholeInches + fraction;
        const cm = (totalInches * 2.54).toFixed(1);
        setTotalCm(cm);
    }, [wholeInches, fraction]);

    // Effect to convert selected height (inches) to centimeters
    useEffect(() => {
        const totalInches = wholeInchesHeight + fractionHeight;
        const cm = (totalInches * 2.54).toFixed(1);
        setTotalCmHeight(cm);
    }, [wholeInchesHeight, fractionHeight]);

    // Effect to calculate size-based price adjustment
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
        setSizeAdjustmentPrice(currentSizeAdjustment);
    }, [wholeInches, wholeInchesHeight]);

    // Effect to calculate the final total Sale Price
    useEffect(() => {
        let currentTotalPerUnit = BASE_UNIT_PRICE - BASE_YOU_SAVE + sizeAdjustmentPrice + warrantyPricePerUnit;
        const finalTotal = (currentTotalPerUnit * quantity) + (BASE_SHIPPING_FEE * quantity);
        setTotalAmount(finalTotal);
    }, [
        quantity, BASE_UNIT_PRICE, BASE_YOU_SAVE, BASE_SHIPPING_FEE,
        sizeAdjustmentPrice, warrantyPricePerUnit
    ]);

    // --- Handlers for Modal ---
    const handleAddToCartClick = () => {
        setShowOrderConfirmationModal(true);
    };

    const handleConfirmOrder = () => {
        console.log("Order Confirmed!", {
            product: productTitle,
            image: selectedImg,
            quantity: quantity,
            totalPrice: totalAmount.toFixed(2),
            selectedWarrantyPrice: warrantyPricePerUnit,
            wholeInches: wholeInches,
            fraction: fraction,
            wholeInchesHeight: wholeInchesHeight,
            fractionHeight: fractionHeight,
        });
        setShowOrderConfirmationModal(false);
    };

    const handleCancelOrder = () => {
        setShowOrderConfirmationModal(false);
    };

    return (
        <div className=''>
            <div className='flex flex-col lg:flex-row gap-8 my-3 lg:my-5'>
                {/* Left Side: Main Product Image and Thumbnails */}
                <div className='w-full lg:w-[30%] mt-6'>
                    <InnerImageZoom
                        src={selectedImg}
                        className='rounded-md w-full h-auto'
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

                {/* Right Side: Product Details, Pricing, and Measurements */}
                <div className='w-full lg:w-[70%] '>
                    {/* Main Price & Quantity Section */}
                    <div className='border border-gray-400 rounded-md flex flex-col lg:flex-row gap-10 p-4'>
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
                            <p className='text-base text-gray-400 font-bold '>$40</p>
                            <p className='bg-red-600 text-base rounded-md lg:text-lg font-bold text-white w-fit px-2'>5% OFF</p>
                            <p className='text-xl font-bold text-primary mb-3 lg:mb-4'>$35</p>

                            {/* Quantity Counter */}
                            <div className='mb-4'>
                                <p>Quantity</p>
                                <QuantityCounter quantity={quantity} setQuantity={setQuantity}></QuantityCounter>
                            </div>

                            {/* Action Buttons: Add to Cart, Buy, Heart, Share */}
                            <div className='flex flex-wrap items-center gap-2 relative'>
                                <button
                                    onClick={handleAddToCartClick} // Attached modal handler
                                    className='border border-blue-500 px-3 py-1 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition ease-in-outrounded-md'>Add To Cart</button>
                                <button className='border border-blue-500 px-3 py-1 hover:text-blue-500 hover:bg-white font-semibold bg-blue-500 text-white transition ease-in-outrounded-md'>Buy it Now</button>
                                <FaHeart className="border border-blue-500 px-3 py-1 hover:text-blue-500 hover:bg-white font-semibold bg-blue-500 transition ease-in-out h-9 w-9 cursor-pointer text-white rounded-md" />

                                <FaShareAlt onClick={handleShareClick} className="relative border border-blue-500 px-3 py-1 hover:text-blue-500 hover:bg-white font-semibold bg-blue-500 transition ease-in-out h-9 w-9 rounded-md cursor-pointer text-white " />

                                {/* Share Options Dropdown */}
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

                            {/* Color Display (Static for this simplified page) */}
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

                            {/* Enter Measurements Section */}
                            <div>
                                <p className='text-primary text-base mt-1 lg:mt-2 font-semibold'>Size: <span className='font-bold text-black'>15"X15"</span></p>
                                <hr className='text-gray-400 ' />
                                <p className='font-bold transition ease-in-out hover:text-blue-600 mt-3 lg:mt-4 cursor-pointer duration-300'>Custom Size</p>
                                <div className='flex justify-between items-center gap-10'>
                                    {/* Width Input Section */}
                                    <div className='flex flex-col lg:flex-row gap-2 items-center justify-between'>
                                        <div><img src={defaultWidth} alt="Default Width" className='lg:w-[200px] w-full' /></div>
                                        <div className="ml-4">
                                            <div className="flex flex-col gap-2">
                                                <p className='text-sm text-primary'>Width (inches)</p>
                                                <select
                                                    value={wholeInches} onChange={(e) => setWholeInches(Number(e.target.value))}
                                                    className="border p-1 rounded-md w-20 lg:w-20">
                                                    {Array.from({ length: 129 }, (_, i) => 15 + i).map((num) => (<option key={num} value={num}>{num}"</option>))}
                                                </select>
                                                <select
                                                    value={fraction} onChange={(e) => setFraction(Number(e.target.value))}
                                                    className="border p-1 rounded-md w-20 lg:w-20">
                                                    {[0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875].map((frac) => (
                                                        <option key={frac} value={frac}>{frac === 0 ? '0' : `${(frac * 8).toFixed(0)}/8`}</option>
                                                    ))}
                                                </select>
                                                <span className="text-sm font-bold text-primary">Size CM: {totalCm}</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Height Input Section */}
                                    <div className='flex flex-col lg:flex-row gap-2 items-center justify-between'>
                                        <div><img src={defaultHeight} alt="Default Height" className='lg:w-[200px] md:w-full' /></div>
                                        <div className="ml-4">
                                            <div className="flex flex-col gap-2">
                                                <p className='text-sm text-primary'>Height (inches)</p>
                                                <select
                                                    value={wholeInchesHeight} onChange={(e) => setWholeInchesHeight(Number(e.target.value))}
                                                    className="border p-1 rounded-md w-20 lg:w-20">
                                                    {Array.from({ length: 129 }, (_, i) => 15 + i).map((num) => (<option key={num} value={num}>{num}"</option>))}
                                                </select>
                                                <select
                                                    value={fractionHeight} onChange={(e) => setFractionHeight(Number(e.target.value))}
                                                    className="border p-1 rounded-md w-20 lg:w-20">
                                                    {[0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875].map((frac) => (
                                                        <option key={frac} value={frac}>{frac === 0 ? '0' : `${(frac * 8).toFixed(0)}/8`}</option>
                                                    ))}
                                                </select>
                                                <span className="text-sm font-bold text-primary">Size CM: {totalCmHeight}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

                        {/* Right Column: Dynamic Price Summary Box */}
                        <div className='w-full lg:w-[40%]'>
                            <div className='bg-[#d4d4d4] p-4 rounded-md'>
                                {/* Display Unit Price */}
                                <div className='flex justify-between items-center'>
                                    <p className='text-red font-bold text-[17px]'>Unit Price:</p>
                                    <p className='text-orange font-bold text-[17px]'>${(BASE_UNIT_PRICE * quantity).toFixed(2)}</p>
                                </div>
                                {/* Display You Save */}
                                <div className='flex justify-between items-center my-5'>
                                    <p className='text-red font-bold text-[17px]'>You Save:</p>
                                    <p className='text-orange font-bold text-[17px]'>${(BASE_YOU_SAVE * quantity).toFixed(2)}</p>
                                </div>
                                {/* Display Shipping Fee */}
                                <div className='flex justify-between items-center mb-6'>
                                    <p className='text-red font-bold text-[17px]'>Shipping Fee:</p>
                                    <p className='text-orange font-bold text-[17px]'>${(BASE_SHIPPING_FEE * quantity).toFixed(2)}</p>
                                </div>
                                {/* Display Dynamic Size Adjustment Price */}
                                <div className='flex justify-between items-center mb-6'>
                                    <p className='text-red font-bold text-[17px]'>Size Adj. Price:</p>
                                    <p className='text-orange font-bold text-[17px]'>${(sizeAdjustmentPrice * quantity).toFixed(2)}</p>
                                </div>
                                {/* Warranty Price (scaled by quantity) */}
                                {warrantyPricePerUnit > 0 && (
                                    <div className='flex justify-between items-center mb-6'>
                                        <p className='text-red font-bold text-[17px]'>Warranty Price:</p>
                                        <p className='text-orange font-bold text-[17px]'>${(warrantyPricePerUnit * quantity).toFixed(2)}</p>
                                    </div>
                                )}
                                <hr className='text-gray-400 mb-4' />
                                {/* Display Final Calculated Sale Price */}
                                <div className='flex justify-between items-center mb-4'>
                                    <p className='text-red font-bold text-[17px]'>Sale Price:</p>
                                    <p className='text-orange font-bold text-[17px]'>${totalAmount.toFixed(2)}</p>
                                </div>
                            </div>
                            <button className='bg-red-500 hover:bg-red-600 w-full rounded-md my-3 text-white font-bold py-2'>Customize & Buy</button>
                        </div>
                    </div>

                    {/* Warranty Option */}
                    <div className='border border-gray-400 p-4 mt-1 lg:mt-2'>
                        {/* Room Name Input */}
                        <div className='mb-3 lg:mb-4'>
                            <p className='text-primary text-sm mt-2 md:mt-3'>Room Name</p>
                            <hr className='text-gray-400 ' />
                            <input type="text" className='border border-gray-400 rounded-md outline-none px-3 py-1 mt-1 md:mt-2 ' />
                        </div>
                        <WarrentyOtion setWarrantyPrice={setWarrantyPricePerUnit} quantity={quantity}></WarrentyOtion>
                    </div>
                </div>
            </div>
            {/* Product Tabs */}
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
                <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
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

export default ALLProductSinglePage;