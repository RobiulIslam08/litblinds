// import React, { useState } from 'react';
// import headrailImage from '../../assets/images/windowBlindsSinglePage/headrail1.jpg';
// import bgImgae from '../../assets/images/windowBlindsSinglePage/selectBgImage.jpg';

// const Headrail = () => {
//   const options = [
//     { value: 'black', label: 'Black' },
//     { value: 'white', label: 'White' },
//     { value: 'anodized', label: 'Anodized' },
//     { value: 'espresso', label: 'Espresso' },
//     { value: 'alabaster', label: 'Alabaster' }
//   ];

//   // State for each card's selected option
//   const [selectedOptions, setSelectedOptions] = useState(['', '', '', '']);

//   // Handle selection change per index
//   const handleSelectChange = (index, value) => {
//     const newSelections = [...selectedOptions];
//     newSelections[index] = value;
//     setSelectedOptions(newSelections);
//   };

//   return (
//     <div>
//       <p className="text-primary text-sm mt-3 md:mt-4 lg:mt-5">Headrail</p>
//       <hr className="text-gray-400" />
//       <div className="mt-3 md:mt-4 grid grid-cols-2 lg:grid-cols-4 gap-10">
//         {selectedOptions.map((selected, index) => (
//           <div
//             key={index}
//             className={`cursor-pointer border rounded-md p-2 transition duration-300 text-center ${
//               selected
//                 ? 'ring-2 ring-blue-500 bg-blue-50'
//                 : 'hover:ring-1 hover:ring-blue-300'
//             }`}
//           >
//             <img src={headrailImage} alt="Headrail" className="w-full h-auto mb-2" />
//             <p className="text-sm text-primary">Exposed Roll</p>
//             <p className="text-sm text-primary mb-2">$ 1</p>
//             <select
//               value={selected}
//               onChange={(e) => handleSelectChange(index, e.target.value)}
//               style={{
//                 backgroundImage: `url(${bgImgae})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center'
//               }}
//               className="w-full px-3 py-2 text-sm border rounded text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Select a color</option>
//               {options.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Headrail;
import React from 'react';
import headrailImage from '../../assets/images/windowBlindsSinglePage/headrail1.jpg';
import bgImgae from '../../assets/images/windowBlindsSinglePage/selectBgImage.jpg';

const Headrail = ({ selectedHeadrailOptions, setSelectedHeadrailOptions, HEADRAIL_ITEM_PRICE }) => {
  const options = [
    { value: 'black', label: 'Black' },
    { value: 'white', label: 'White' },
    { value: 'anodized', label: 'Anodized' },
    { value: 'espresso', label: 'Espresso' },
    { value: 'alabaster', label: 'Alabaster' }
  ];

  // Handle selection change per index
  const handleSelectChange = (index, value) => {
    const newSelections = [...selectedHeadrailOptions];
    newSelections[index] = value;
    setSelectedHeadrailOptions(newSelections);
  };

  return (
    <div>
      <p className="text-primary text-sm mt-3 md:mt-4 lg:mt-5">Headrail</p>
      <hr className="text-gray-400" />
      <div className="mt-3 md:mt-4 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {selectedHeadrailOptions.map((selected, index) => (
          <div
            key={index}
            className={`cursor-pointer border rounded-md p-2 transition duration-300 text-center ${
              selected // Check if a color is selected for this specific headrail card
                ? 'ring-2 ring-blue-500 bg-blue-50'
                : 'hover:ring-1 hover:ring-blue-300'
            }`}
          >
            <img src={headrailImage} alt="Headrail" className="w-full h-auto mb-2" />
            <p className="text-sm text-primary">Exposed Roll</p>
            <p className="text-sm text-primary mb-2">${HEADRAIL_ITEM_PRICE}</p> {/* Display item price */}
            <select
              value={selected}
              onChange={(e) => handleSelectChange(index, e.target.value)}
              style={{
                backgroundImage: `url(${bgImgae})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              className="w-full px-3 py-2 text-sm border rounded text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a color</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Headrail;
