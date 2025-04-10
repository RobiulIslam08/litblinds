import React, { useState } from 'react';
import headrailImage from '../../assets/images/windowBlindsSinglePage/headrail1.jpg';
import bgImgae from '../../assets/images/windowBlindsSinglePage/selectBgImage.jpg';

const Headrail = () => {
  const options = [
    { value: 'black', label: 'Black' },
    { value: 'white', label: 'White' },
    { value: 'anodized', label: 'Anodized' },
    { value: 'espresso', label: 'Espresso' },
    { value: 'alabaster', label: 'Alabaster' }
  ];

  // Set initial state for 4 items
  const [selectedOptions, setSelectedOptions] = useState(['', '', '', '']);

  const handleSelectChange = (index, value) => {
    const newSelections = [...selectedOptions];
    newSelections[index] = value;
    setSelectedOptions(newSelections);
  };

  return (
    <div>
      <p className='text-primary text-sm mt-3 md:mt-4 lg:mt-5'>Roll Position</p>
      <hr className='text-gray-400 ' />
      <div className='mt-3 md:mt-4 grid grid-cols-2 lg:grid-cols-4 gap-10'>
        {selectedOptions.map((selected, index) => (
          <div key={index}>
            <img src={headrailImage} alt="" className='' />
            <p className='text-sm text-primary'>Exposed Roll</p>
            <p className='text-sm text-primary'>$ 1</p>
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
