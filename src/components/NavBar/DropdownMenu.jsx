import React, { useState, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavigationContext } from '../../NavigationContext'; // Import NavigationContext

function DropdownMenu({ title, items, onClose, currentPage }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timerRef = useRef(null);
  const { setCurrentPage } = useContext(NavigationContext); // Use NavigationContext

  const handleMouseEnter = () => {
    clearTimeout(timerRef.current); // Clear timeout to prevent hiding
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 1000); // Hide dropdown after 1 second
  };

  const handleLinkClick = (label) => {
    setCurrentPage(label.toLowerCase());
    setDropdownOpen(false);
    onClose();
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className={`text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500  ${
        currentPage === title.toLowerCase() ? '' : 'shadow-text'
      }
      cursor-pointer ${
        currentPage === title.toLowerCase() ? 'text-[#01b0cd] border-b-4 border-[#01b0cd]' : 'hover:text-[#01b0cd]'
      }`}>
        {title}
      </button>
      <div
        className={`absolute bg-white shadow-lg rounded mt-2 w-48 z-50 transition-transform transform ${
          dropdownOpen ? 'scale-100' : 'scale-0'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className={`block px-4 py-2 hover:bg-[#01b0cd] hover:text-white shadow-text ${
              currentPage === item.label.toLowerCase() ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => handleLinkClick(item.label)} // Pass item.label to handleLinkClick
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DropdownMenu;
