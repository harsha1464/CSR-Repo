import React, { useState } from 'react';
import { ContactInfo } from './Contact';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const awards = [
  { name: 'Award 1', image: 'https://ik.imagekit.io/nag93ze07/Awards%20and%20Speakers/AWARDEE%20FOR%20WEBSITE%20(1)/1.png?updatedAt=1740145464049' },
  { name: 'Award 2', image: 'https://ik.imagekit.io/nag93ze07/Awards%20and%20Speakers/AWARDEE%20FOR%20WEBSITE%20(1)/2.png?updatedAt=1740145464356' },
  { name: 'Award 3', image: 'https://ik.imagekit.io/nag93ze07/Awards%20and%20Speakers/AWARDEE%20FOR%20WEBSITE%20(1)/3.png?updatedAt=1740145464666' },
  { name: 'Award 4', image: 'https://ik.imagekit.io/nag93ze07/Awards%20and%20Speakers/AWARDEE%20FOR%20WEBSITE%20(1)/4.png?updatedAt=1740145464197' }
];

export function Awards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? awards.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === awards.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="content-section">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 section-title text-gradient">CSR Awards</h1>
        
        <div className="relative w-full flex justify-center items-center">
          <button onClick={prevSlide} className="absolute left-0 p-2 bg-black text-white rounded-full shadow-md bg-opacity-50 z-10">
            <FaChevronLeft size={20} />
          </button>
          <div className="overflow-hidden w-[350px] h-[200px] sm:w-[800px] sm:h-[450px] rounded-lg shadow-lg transform transition-transform duration-500">
            <img 
              src={awards[currentIndex].image} 
              alt={awards[currentIndex].name} 
              className="w-full h-full object-cover"
            />
          </div>
          <button onClick={nextSlide} className="absolute right-0 p-2 bg-black text-white rounded-full bg-opacity-50 shadow-md z-10">
            <FaChevronRight size={20} />
          </button>
        </div>
        
        <br></br>
        <div className="enhanced-card p-8 mb-8 scroll-reveal">
          <div className="space-y-6 text-lg">
            <p className="animated-list-item">
              CSR Awards by CSRNOW have been designed to Recognize the Super Humans in Corporate 
              Social Responsibility and for the Super Humans who are doing tremendous work on the 
              field (From the Organization or Individually).
            </p>
            <p className="animated-list-item">
              CSR Awards is one of the Prestigious awards by CSRNOW to recognize the Industry experts 
              for their work.
            </p>
          </div>
          <div className="text-center scroll-reveal mt-8 space-y-8">
            <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-center">
              <div className="flex-shrink-0">
                <ContactInfo email="awards@csrnow.in" />
              </div>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSf8iiYUDTt80h6kcI9SGbm69k7ouH5jtSUxKBVYSEM-NETZAQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button inline-block bg-black text-white px-3 py-4 sm:px-5 sm:py-4 rounded-md font-semibold text-md sm:text-lg border-2 border-black w-64 max-w-xs sm:max-w-none"
              >
                Register for Awards
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
