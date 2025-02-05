import React from 'react';
import { MapPin, Phone } from 'lucide-react';

export function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col space-y-4">
      {/* Map Pin Button */}
      <div className="relative group">
        <a
          href="https://www.google.com/maps/search/shilpa+kala+vedika/@17.451111,78.3770239,17z/data=!3m1!4b1?entry=ttu&x=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#BBD921] w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 transform hover:bg-[#BBD921] hover:scale-110"
        >
          <MapPin className="w-6 h-6 text-black" />
        </a>
        {/* Hover Text */}
        <span className="absolute left-[-450%] top-1/2 -translate-y-1/2 bg-black text-white text-sm py-2 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Shilpa Kala Vedika, Hi-tech City
        </span>
      </div>

      {/* Phone Button */}
      <div className="relative group">
        <a
          href="tel:+918328382486"
          className="bg-[#BBD921] w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 transform hover:bg-[#BBD921] hover:scale-110"
        >
          <Phone className="w-6 h-6 text-black" />
        </a>
        {/* Hover Text */}
        <span className="absolute left-[-375%] top-1/2 -translate-y-1/2 bg-black text-white text-sm py-2 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Call Us: +91 8328382486
        </span>
      </div>
    </div>
  );
}
