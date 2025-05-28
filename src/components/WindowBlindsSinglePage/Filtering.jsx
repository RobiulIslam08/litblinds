
import React, { useEffect, useRef, useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

const Filtering = () => {
  const [showColors, setShowColors] = useState(false);
  const [showSizes, setShowSizes] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState({ width: 24, height: 36 });

   const [showDropdown, setShowDropdown] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Lowest Price');
  const dropdownRef = useRef(null);
    const options = ['Most Popular', 'Newest', 'Lowest Price'];

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSelect = (option) => {
    setSelectedSort(option);
    setShowDropdown(false);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const colors = [
    { name: 'Green', class: 'bg-green-700' },
    { name: 'Red', class: 'bg-red-700' },
    { name: 'Blue', class: 'bg-blue-700' },
    { name: 'Pink', class: 'bg-pink-700' },
    { name: 'Yellow', class: 'bg-white-400' },
    { name: 'Orange', class: 'bg-orange-700' },
    { name: 'Lime', class: 'bg-lime-700' },
    { name: 'Rose', class: 'bg-rose-700' },
    { name: 'Emerald', class: 'bg-emerald-700' },
    { name: 'Indigo', class: 'bg-indigo-700' },
    { name: 'Neutral', class: 'bg-neutral-700' },
  ];

  const sizes = [
    { width: 24, height: 36 },
    { width: 30, height: 40 },
    { width: 36, height: 48 },
  ];

  const filterSections = [
    {
      title: 'Blinds Type',
      options: [
        'Honeycomb-Cellular Shades',
        'Roller Blinds (21)',
        'Roman Blinds (34)',
        'Vertical Blinds (16)',
        'Wood Shades (16)',
        'Wood Shutter Blinds (18)',
        'Zebra Blinds (32)',
        'Custom Blinds (26)',
        'Curtains Drapes (6)',
      ],
    },
    {
      title: 'Light Control',
      options: ['Blackout/Room Darkening (16)', 'Light Filtering (19)'],
    },
    {
      title: 'Room Types',
      options: [
        'Nursery/Kids Rooms (10)',
        'Media Rooms (14)',
        'Living Rooms (25)',
        'Bathrooms (3)',
        'Bedrooms (16)',
        'Dining Rooms (20)',
      ],
    },
    {
      title: 'Lift Styles',
      options: ['Cordless Lift (31)', 'Continuous Cord Loop (18)'],
    },
    {
      title: 'Motorization',
      options: ['Motorized w/ Remote (26)', 'Motorized w/ Wand (11)', 'Smart Home Hub (31)'],
    },
    {
      title: 'Upgrades',
      options: ['No-Drill Blinds (15)'],
    },
    {
      title: 'Specialty',
      options: ['Under 24" (24)', '1" Or Less Depth (5)', 'Over 90" (24)'],
    },
  ];

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setShowSizes(false);
  };

  const toggleSection = (title) => {
    setExpandedSection((prev) => (prev === title ? null : title));
  };

  return (
    <div className="md:hidden p-4 relative">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        {/* Size Button */}
        <button
          onClick={() => {
            setShowSizes(!showSizes);
            setShowColors(false);
            setShowDrawer(false);
          }}
          className="flex items-center justify-between px-3 py-[6px] border border-gray-400 rounded bg-white text-sm min-w-[160px]"
        >
          <span>
            W {selectedSize.width}" H {selectedSize.height}" | Size
          </span>
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${showSizes ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Colours Button */}
        <button
          onClick={() => {
            setShowColors(!showColors);
            setShowSizes(false);
            setShowDrawer(false);
          }}
          className="flex items-center justify-between px-3 py-[6px] border border-gray-400 rounded bg-white text-sm"
        >
          Colours
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${showColors ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Filters Button */}
        <button
          onClick={() => {
            setShowDrawer(!showDrawer);
            setShowColors(false);
            setShowSizes(false);
          }}
          className="flex items-center px-3 py-[6px] border border-gray-400 rounded bg-white text-sm"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 14.414V20l-6 2v-7.586L3.293 6.707A1 1 0 013 6V4z" />
          </svg>
          Filters
        </button>

		{/* sort by button */}
		<button
        onClick={toggleDropdown}
        className="px-4 py-2 border border-gray-400 rounded bg-white text-sm font-medium"
      >
        {selectedSort}
      </button>
      </div>

      {/* Size Dropdown */}
      {showSizes && (
        <div className="border border-gray-300 rounded p-2 mb-4 w-48 bg-white">
          {sizes.map((size, index) => (
            <div
              key={index}
              onClick={() => handleSizeSelect(size)}
              className={`cursor-pointer px-2 py-1 rounded hover:bg-gray-100 ${
                selectedSize.width === size.width && selectedSize.height === size.height ? 'bg-gray-200 font-semibold' : ''
              }`}
            >
              W {size.width}" H {size.height}"
            </div>
          ))}
        </div>
      )}

      {/* Color Grid */}
      {showColors && (
        <div className="grid grid-cols-5 gap-2 justify-items-center mt-2">
          {colors.map((color, index) => (
            <div
              key={index}
              onClick={() => handleColorSelect(color.name)}
              className={`w-12 h-10 border rounded cursor-pointer relative hover:scale-105 transition-transform duration-150 ${color.class}`}
            >
              {selectedColor === color.name && (
                <svg className="w-4 h-4 text-white absolute top-1 right-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Drawer */}
      <div className={`fixed top-0 left-0 h-full w-[80%] bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out ${showDrawer ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 overflow-y-auto h-full pb-24">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Filters</h2>
            <button onClick={() => setShowDrawer(false)} className="text-xl font-bold">&times;</button>
          </div>

          {/* Filter Sections */}
          {filterSections.map((section, idx) => (
            <div key={idx} className="mb-4 border-b pb-2">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection(section.title)}
              >
                <h3 className="text-primary font-semibold">{section.title}</h3>
                <FaQuestionCircle />
              </div>
              {expandedSection === section.title && (
                <div className="mt-2 space-y-2">
                  {section.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input type="checkbox" id={`${section.title}-${index}`} className="h-4 w-4" />
                      <label htmlFor={`${section.title}-${index}`} className="text-sm">{option}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {/* {showDrawer && (
        <div
          onClick={() => setShowDrawer(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
        />
      )} */}

	  {/* sort by button */}
	  {showDropdown && (
        <div className="absolute z-10 mt-1 w-[250px] bg-white border border-gray-300 rounded shadow-md">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className={`px-4 py-2  cursor-pointer text-sm hover:bg-blue-500 hover:text-white ${
                selectedSort === option ? 'bg-blue-500 text-white' : ''
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filtering;
