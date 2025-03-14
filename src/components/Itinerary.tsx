import React, { useState } from 'react';

const timeline = [
  { time: '10:30 AM - 10:40 AM', event: 'Welcome Address', description: 'Welcome address' },
  { time: '10:40 AM - 10:50 AM', event: 'Dance', description: 'Dance performance' },
  { time: '10:50 AM - 11:30 AM', event: 'Speaker 1, 2, 3, 4', description: 'Presentation by Speakers 1, 2, 3, 4' },
  { time: '11:30 AM - 11:40 AM', event: 'Key Note Speaker - Guest', description: 'Keynote speech by guest speaker' },
  { time: '11:40 AM - 12:10 PM', event: 'Award Ceremony (1st Phase)', description: 'Recognition of awards' },
  { time: '12:10 PM - 12:20 PM', event: 'Dance', description: 'Dance performance' },
  { time: '12:20 PM - 12:50 PM', event: 'Speaker 5, 6, 7', description: 'Presentation by Speakers 5, 6, 7' },
  { time: '12:50 PM - 01:00 PM', event: 'Key Note Speaker - Guest', description: 'Keynote speech by guest speaker' },
  { time: '01:00 PM - 01:30 PM', event: 'Award Ceremony (2nd Phase)', description: 'Recognition of awards' },
  { time: '01:30 PM - 02:40 PM', event: 'Lunch', description: 'Lunch break' },
  { time: '02:40 PM - 03:20 PM', event: 'Speaker 8, 9, 10', description: 'Presentation by Speakers 8, 9, 10' },
  { time: '03:20 PM - 03:40 PM', event: 'Key Note Speaker - Guest', description: 'Keynote speech by guest speaker' },
  { time: '03:40 PM - 04:10 PM', event: 'Award Ceremony (3rd Phase)', description: 'Recognition of awards' },
  { time: '04:10 PM - 05:00 PM', event: 'Hi Tea Break', description: 'Tea break' },
  { time: '05:00 PM - 05:20 PM', event: 'Dance Performance', description: 'Dance performance' },
  { time: '05:20 PM - 06:00 PM', event: 'Speaker 12, 13 , 14, 15', description: 'Presentation by Speakers 12, 13 , 14, 15' },
  { time: '06:00 PM - 06:10 PM', event: 'Key Note Speaker', description: 'Keynote speech' },
  { time: '06:10 PM - 06:40 PM', event: 'Award Ceremony (4th Phase)', description: 'Recognition of awards' },
  { time: '06:40 PM - 06:45 PM', event: 'Team Bow', description: 'Team bow' },
  { time: '06:45 PM - 07:00 PM', event: 'Goodie Bag Collection', description: 'Goodie bag collection' }
];



export function Itinerary() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="content-section">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 section-title text-gradient text-center">Event Schedule</h1>
        
        <div className="space-y-4">
          {timeline.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-4 py-3 focus:outline-none flex justify-between items-center border border-gray-400" 
              >
                <div>
                  <div className="text-xl font-bold text-[#243F83]">{item.time}</div>
                  <div className="text-lg font-semibold">{item.event}</div>
                </div>
                <svg
                  className={`w-6 h-6 transition-transform duration-200 ${
                    activeIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-4 ">
                  <p className="text-gray-600">{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
