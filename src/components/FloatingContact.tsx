import React from 'react';
import { MapPin, Phone } from 'lucide-react';

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col space-y-4">
      {/* Map Pin Button */}
      <div className="relative group">
        <a
          href="https://www.google.com/maps/search/shilpa+kala+vedika/@17.451111,78.3770239,17z/data=!3m1!4b1?entry=ttu&x=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black p-5 rounded-full   transition-all duration-300 transform hover:scale-110 "
        >
          <MapPin className="w-8 h-8" />
          <span className="absolute left-0 -translate-x-full top-1/2 transform -translate-y-1/2 bg-black text-white text-sm py-2 px-4 rounded opacity-0 group-hover:opacity-0 transition-opacity duration-300">
            Shilpa Kala Vedika, Hi-tech City
          </span>
        </a>
      </div>

      {/* Phone Button */}
      <div className="relative group">
        <a
          href="tel:+918328382486"
          className="text-black p-5 rounded-full   transition-all duration-300 transform hover:scale-110 "
        >
          <Phone className="w-8 h-8" />
          <span className="absolute left-0 -translate-x-full top-1/2 transform -translate-y-1/2 bg-black text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Call Us: +91 8328382486
          </span>
        </a>
      </div>
    </div>
  );
}
