import React, { useState } from 'react';

const timeline = [
  { time: '10:00 AM - 10:35 AM', event: 'Opening Ceremony', description: 'Welcome address and keynote speech' },
  { time: '10:35 AM - 11:05 AM', event: 'Speakers 1, 2, 3', description: 'Presentations by Speakers 1, 2, 3' },
  { time: '11:05 AM - 11:40 AM', event: 'Awards', description: 'Recognition of outstanding contributions' },
  { time: '11:40 AM - 12:20 PM', event: 'Speakers 4, 5, 6', description: 'Presentations by Speakers 4, 5, 6' },
  { time: '12:20 PM - 01:00 PM', event: 'Awards', description: 'Recognition of outstanding achievements' },
  { time: '01:00 PM - 02:00 PM', event: 'Lunch', description: 'Lunch break and networking opportunity' },
  { time: '02:00 PM - 02:20 PM', event: 'Performance', description: 'Performance by guest artists' },
  { time: '02:20 PM - 02:50 PM', event: 'Speakers 7, 8, 9', description: 'Presentations by Speakers 7, 8, 9' },
  { time: '02:50 PM - 04:00 PM', event: 'Awards', description: 'Recognition of outstanding contributions' },
  { time: '04:00 PM - 04:30 PM', event: 'Hi Tea Break', description: 'Tea break and informal discussions' },
  { time: '04:30 PM - 05:00 PM', event: 'Speakers 10, 11, 12', description: 'Presentations by Speakers 10, 11, 12' },
  { time: '05:00 PM - 05:20 PM', event: 'Performance', description: 'Performance by guest artists' },
  { time: '05:20 PM - 06:30 PM', event: 'Awards', description: 'Recognition of outstanding achievements' },
  { time: '06:30 PM - 06:50 PM', event: 'Team Bow and Valedictory', description: 'Concluding remarks and farewell' }
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
