// components/PopupImage.jsx
import React, { useState, useEffect } from 'react';
import GoldSponsor6 from '../Images/CSR POSTER for EVERYTHING-1.png';

export function PopupImage() {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Set popup to open when the page loads
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={closePopup}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
    <button
      className="absolute top-0 right-0 m-4 text-white bg-gray-600 rounded-full pt-2 pb-2 pr-4 pl-4 hover:bg-red-700"
      onClick={closePopup}
    >
    &times;
    </button>
        <img
          src={GoldSponsor6} // Use the imported image variable
          alt="Popup"
          className="w-80 h-80 max-w-full max-h-full"
        />
      </div>
    </div>
  );
}
