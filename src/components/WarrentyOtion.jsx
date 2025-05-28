import React, { useEffect, useState } from 'react'; // Import useEffect
import warrentyLogo from '../assets/images/windowBlindsSinglePage/warrenty.png';
import imgage1 from '../assets/images/windowBlindsSinglePage/11.png';
import imgage2 from '../assets/images/windowBlindsSinglePage/1.png';
import imgage3 from '../assets/images/windowBlindsSinglePage/111.png';
import imgage4 from '../assets/images/windowBlindsSinglePage/12.png';
import imgage5 from '../assets/images/windowBlindsSinglePage/4.png';

// Receive setWarrantyPrice and quantity as props from the parent
const WarrentyOtion = ({ setWarrantyPrice, quantity }) => {
    const [selectedWarranty, setSelectedWarranty] = useState(''); // Stores the value of the selected radio button

    // Define warranty options with their prices (per unit)
    const warrantyOptions = [
        { label: '3-Year Limited Warranty - Free', value: '3yr-limited', price: 0.00 },
        { label: '5-Year Limited Warranty - $ 6.00', value: '5yr-limited', price: 6.00 },
        { label: '5-Year Unlimited Warranty - $ 12.00', value: '5yr-unlimited', price: 12.00 }
    ];

    // Effect to report the selected warranty's price to the parent component
    useEffect(() => {
        // Find the selected option's price
        const selectedOption = warrantyOptions.find(option => option.value === selectedWarranty);
        const priceToReport = selectedOption ? selectedOption.price : 0;

        // Call the setter function from the parent with the per-unit price
        // The parent (WindowBlindsSinglePage) will handle multiplying by quantity
        setWarrantyPrice(priceToReport);

        // Set an initial default selection (e.g., '3yr-limited' for free warranty)
        // This ensures a price is reported even before the user makes a selection.
        if (!selectedWarranty) {
            setSelectedWarranty('3yr-limited');
        }
    }, [selectedWarranty, setWarrantyPrice]); // Depend on selectedWarranty and setWarrantyPrice

    return (
        <div>
            <button className='md:text-base text-xs py-2 font-semibold text-left w-full text-white bg-[#2c2c2c] px-5'>Select Warranty Options</button>
            
            {/* Logo and Warranty Options */}
            <div className='flex flex-col lg:flex-row items-center gap-10 py-3 lg:py-4'>
                <div>
                    <img src={warrentyLogo} alt="Warranty Logo" className='w-full lg:w-32' />
                </div>
                <div>
                    {warrantyOptions.map((option, index) => (
                        <label
                            key={index}
                            className="flex items-center gap-2 cursor-pointer text-sm text-gray-700"
                        >
                            <input
                                type="radio"
                                name="warranty" // Name attribute groups radio buttons
                                value={option.value}
                                checked={selectedWarranty === option.value}
                                onChange={(e) => setSelectedWarranty(e.target.value)}
                                className="form-radio text-blue-600 focus:ring-blue-500"
                            />
                            {option.label}
                        </label>
                    ))}
                </div>
            </div>
            <hr className='text-gray-400' />

            {/* Similar Item Cards */}
            <div className='border border-gray-400 p-4'>
                <p className='pb-2 font-semibold text-gray-600'>Similar Items:</p>
                <div className='grid grid-cols-2 lg:grid-cols-5 gap-4'>
                    <div className='border p-2 border-gray-400'>
                        <img src={imgage1} alt="Similar Item 1" />
                        <p className='font-semibold text-sm text-primary pb-2 lg:pb-3 pt-1 lg:pt-2'>Wallpaper</p>
                    </div>
                    <div className='border p-2 border-gray-400'>
                        <img src={imgage2} alt="Similar Item 2" />
                        <p className='font-semibold text-sm text-primary pb-2 lg:pb-3 pt-1 lg:pt-2'>Persianas de ventana</p>
                    </div>
                    <div className='border p-2 border-gray-400'>
                        <img src={imgage3} alt="Similar Item 3" />
                        <p className='font-semibold text-sm text-primary pb-2 lg:pb-3 pt-1 lg:pt-2'>Vinyl flooring</p>
                    </div>
                    <div className='border p-2 border-gray-400'>
                        <img src={imgage4} alt="Similar Item 4" />
                        <p className='font-semibold text-sm text-primary pb-2 lg:pb-3 pt-1 lg:pt-2'>PVC panels</p>
                    </div>
                    <div className='border p-2 border-gray-400'>
                        <img src={imgage5} alt="Similar Item 5" />
                        <p className='font-semibold text-sm text-primary pb-2 lg:pb-3 pt-1 lg:pt-2'>Wallpaper</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WarrentyOtion;