import React, { useState } from 'react';
import { ContactInfo } from './Contact';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const speakers = [
  { name: 'Speaker 1', image: 'https://ik.imagekit.io/nag93ze07/Awards%20and%20Speakers/Speaker%20for%20website/1.png?updatedAt=1740145464348' },
  { name: 'Speaker 2', image: 'https://ik.imagekit.io/nag93ze07/Awards%20and%20Speakers/Speaker%20for%20website/2.png?updatedAt=1740145464664' },
  { name: 'Speaker 3', image: 'https://ik.imagekit.io/nag93ze07/Awards%20and%20Speakers/Speaker%20for%20website/3.png?updatedAt=1740145464707' },
  { name: 'Speaker 4', image: 'https://ik.imagekit.io/nag93ze07/Awards%20and%20Speakers/Speaker%20for%20website/4.png?updatedAt=1740145464054' }
];

export function Speakers() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? speakers.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === speakers.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="content-section">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 section-title text-gradient">Speakers</h1>
        
        <div className="relative w-full flex justify-center items-center">
          <button onClick={prevSlide} className="absolute left-0 p-2 bg-black text-white rounded-full shadow-md bg-opacity-50 z-10">
            <FaChevronLeft size={20} />
          </button>
          <div className="overflow-hidden w-[350px] h-[200px] sm:w-[800px] sm:h-[450px] rounded-lg shadow-lg transform transition-transform duration-500">
            <img 
              src={speakers[currentIndex].image} 
              alt={speakers[currentIndex].name} 
              className="w-full h-full object-cover"
            />
          </div>
          <button onClick={nextSlide} className="absolute right-0 p-2 bg-black text-white rounded-full bg-opacity-50 shadow-md z-10">
            <FaChevronRight size={20} />
          </button>
        </div>
        
        {/* <div className="text-lg mt-4 text-center font-semibold">{speakers[currentIndex].name}</div> */}
        <br></br>
        <h3 className="text-3xl font-bold mb-8 section-title text-gradient">Suggest a Speaker</h3>
        <div className="enhanced-card p-8 mb-8 scroll-reveal">
          <div className="space-y-6 text-lg">
            <p className="animated-list-item">
              You can nominate a speaker or self-nomination is entertained If you feel that you could 
              share content related to the theme of CSRNOW Summit 2025 from the below Link. Our Speaker 
              Jury will review all the Nominations and will finalize the Selection. Once the Name is 
              selected, our Jury team will be contacting the mentioned contact details for further process.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Note:</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li className="animated-list-item">The Nominations should be based with the Theme of the current event.</li>
                <li className="animated-list-item">All the required documents are to be enclosed along with the application.</li>
              </ol>
            </div>
            <div className="text-center scroll-reveal mt-8 space-y-8">
              <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-center">
                <ContactInfo email="speakercuration@csrnow.in"/>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdmZMBxaMTNTXXP3ytikbU9-fTM9C9MXvxjNlyUoQhqbcrHGA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button inline-block bg-black text-white px-3 py-4 sm:px-5 sm:py-4 rounded-md font-semibold text-md sm:text-lg border-2 border-black w-64 max-w-xs sm:max-w-none"
                >
                  Nominate Speaker
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
