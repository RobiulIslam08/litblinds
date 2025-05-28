/* eslint-disable react-hooks/exhaustive-deps */
// // import React, { useState } from 'react';
// // import reverseRoll from '../../assets/images/windowBlindsSinglePage/reverse-roll-12_thumb.jpg';
// // import standardRoll from '../../assets/images/windowBlindsSinglePage/standard-roll-12_thumb.jpg';

// // const RollPositon = () => {
// //   const [selectedRoll, setSelectedRoll] = useState('');

// //   const rollOptions = [
// //     {
// //       id: 1,
// //       title: 'Standard Roll',
// //       price: '$ 1',
// //       image: standardRoll,
// //     },
// //     {
// //       id: 2,
// //       title: 'Reverse Roll',
// //       price: '$ 1',
// //       image: reverseRoll,
// //     },
// //   ];

// //   return (
// //     <div className='mt-3 lg:mt-4'>
// //       <p className='text-primary text-sm mt-3 md:mt-4 lg:mt-5'>Roll Position</p>
// //       <hr className='text-gray-400 ' />
// //       <div className='flex items-center gap-4 mt-3'>
// //         {rollOptions.map((item) => (
// //           <div
// //             key={item.id}
// //             onClick={() => setSelectedRoll(item.title)}
// //             className={`cursor-pointer border rounded-md p-2 transition duration-300 text-center ${
// //               selectedRoll === item.title
// //                 ? 'ring-2 ring-blue-500 bg-blue-50'
// //                 : 'hover:ring-1 hover:ring-blue-300'
// //             }`}
// //           >
// //             <img src={item.image} alt={item.title} className='w-36 h-auto mx-auto' />
// //             <p className='text-sm text-primary mt-1 font-semibold'>{item.title}</p>
// //             <p className='text-sm text-primary'>{item.price}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default RollPositon;

// import React from 'react';
// import reverseRoll from '../../assets/images/windowBlindsSinglePage/reverse-roll-12_thumb.jpg';
// import standardRoll from '../../assets/images/windowBlindsSinglePage/standard-roll-12_thumb.jpg';

// const RollPositon = ({ selectedRoll, setSelectedRoll, ROLL_POSITION_PRICE }) => {
//   const rollOptions = [
//     {
//       id: 1,
//       title: 'Standard Roll',
//       price: ROLL_POSITION_PRICE, // Use the passed price
//       image: standardRoll,
//     },
//     {
//       id: 2,
//       title: 'Reverse Roll',
//       price: ROLL_POSITION_PRICE, // Use the passed price
//       image: reverseRoll,
//     },
//   ];

//   return (
//     <div className='mt-3 lg:mt-4'>
//       <p className='text-primary text-sm mt-3 md:mt-4 lg:mt-5'>Roll Position</p>
//       <hr className='text-gray-400 ' />
//       <div className='flex items-center gap-4 mt-3'>
//         {rollOptions.map((item) => (
//           <div
//             key={item.id}
//             onClick={() => setSelectedRoll(item.title)}
//             className={`cursor-pointer border rounded-md p-2 transition duration-300 text-center ${
//               selectedRoll === item.title
//                 ? 'ring-2 ring-blue-500 bg-blue-50'
//                 : 'hover:ring-1 hover:ring-blue-300'
//             }`}
//           >
//             <img src={item.image} alt={item.title} className='w-36 h-auto mx-auto' />
//             <p className='text-sm text-primary mt-1 font-semibold'>{item.title}</p>
//             <p className='text-sm text-primary'>${item.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RollPositon;
import React, {  useEffect } from 'react';
import insideImage from '../../assets/images/windowBlindsSinglePage/inside.jpg'; // Assuming these images are relevant
import reverseRoll from '../../assets/images/windowBlindsSinglePage/reversRoll.jpg';

// Receive selectedRoll, setSelectedRoll, ROLL_POSITION_PRICE, and setRollPositionPrice as props
const RollPositon = ({ selectedRoll, setSelectedRoll, ROLL_POSITION_PRICE, setRollPositionPrice }) => {
    // Define options with their prices (per unit). Assuming ROLL_POSITION_PRICE is a constant.
    // If Standard/Reverse have *different* prices, define them in this array.
    const rollOptions = [
        { label: 'Standard Roll', value: 'standard', image: insideImage, price: 0.00 }, // Assuming standard is free or base
        { label: 'Reverse Roll', value: 'reverse', image: reverseRoll, price: ROLL_POSITION_PRICE }, // Price from parent
    ];

    // Effect to report the selected roll position's price to the parent component
    useEffect(() => {
        const selectedOptionData = rollOptions.find(option => option.value === selectedRoll);
        const priceToReport = selectedOptionData ? selectedOptionData.price : 0;
        setRollPositionPrice(priceToReport);

        // Set an initial default selection if none is picked
        if (!selectedRoll) {
            setSelectedRoll('standard'); // Default to standard roll on mount
        }
    }, [selectedRoll, setRollPositionPrice, rollOptions]); // Dependencies

    return (
        <div>
            <p className='text-primary text-sm mt-3 md:mt-4 lg:mt-5'>Roll Position</p>
            <hr className='text-gray-400 mb-3 lg:mb-4' />
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
                {rollOptions.map((option) => (
                    <div
                        key={option.value}
                        onClick={() => setSelectedRoll(option.value)}
                        className={`cursor-pointer border p-2 rounded ${selectedRoll === option.value ? 'ring-2 ring-blue-600' : ''}`}
                    >
                        <img src={option.image} alt={option.label} />
                        <p className='text-primary text-sm mt-1'>{option.label}</p>
                        <p className='text-primary text-sm'>${option.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RollPositon;