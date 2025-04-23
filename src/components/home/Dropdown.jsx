"use client"
import { useState, useRef, useEffect } from "react"

export default function Dropdown({
  label,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    // Add event listener when dropdown is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  // Find the selected option label
  const selectedOption = options.find((option) => option.value === value)
  const displayValue = selectedOption ? selectedOption.label : placeholder

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {label && <div className="text-sm text-gray-500 mb-1">{label}</div>}

      <div
        className="flex items-center justify-between border border-gray-400 p-2 cursor-pointer bg-white"
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
        role="combobox"
        aria-expanded={isOpen}
      >
        <span className={value ? "" : "text-gray-500"}>{displayValue}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>

      {isOpen && (
        <div
          role="listbox"
          className="absolute z-50 w-full border border-gray-400 bg-white shadow-lg max-h-60 overflow-y-auto"
        >
          {options.map((option) => (
            <div
              key={option.value}
              className={`p-2 hover:bg-gray-100 cursor-pointer ${option.value === value ? "bg-blue-600 text-white hover:bg-blue-700" : ""}`}
              onClick={() => {
                onChange(option.value)
                setIsOpen(false)
              }}
              role="option"
              aria-selected={option.value === value}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
