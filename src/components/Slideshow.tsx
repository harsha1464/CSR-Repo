import React, { useState, useEffect } from 'react';

const EVENT_DATE = new Date('2025-03-16T00:00:00');

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80',
    title: 'Transforming Business Through CSR',
  },
  {
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=2000&q=80',
    title: 'Building Sustainable Future',
  },
  {
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80',
    title: 'Empowering Communities',
  },
];

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = EVENT_DATE.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex space-x-4 justify-center mb-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm hover:bg-opacity-30 transition-all transform hover:scale-105">
            <div className="text-4xl font-bold text-white mb-1">{value}</div>
            <div className="text-sm text-white uppercase">{unit}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-center px-2 sm:px-4">
            <div className="w-full lg:max-w-4xl">
              <CountdownTimer />
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-8 animate-fade-in">
                {slide.title}
              </h1>
              
              <div className="flex flex-wrap justify-center gap-4">
                {/* Buttons */}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdmZMBxaMTNTXXP3ytikbU9-fTM9C9MXvxjNlyUoQhqbcrHGA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#808080] text-black px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
                >
                  Nominate Speaker
                </a>
                <a
                  href="https://www.meraevents.com/event/csr-summit-2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#BBD921] text-black px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
                >
                  Reserve your Spot
                </a>
                <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf8iiYUDTt80h6kcI9SGbm69k7ouH5jtSUxKBVYSEM-NETZAQ/viewform"
                target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#808080] text-black px-8 py-3 rounded-md font-semibold hover:bg-opacity-50 transition-all transform hover:scale-105"
                >
                  Register for Awards
                </a>
                <a
                  href="mailto:Connect@csrnow.in"
                  className="inline-block bg-[#BBD921] text-black px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
                >
                  Connect with Us
                </a>
                
                
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all transform hover:scale-125 ${
              index === currentSlide ? 'bg-[#BBD921]' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
