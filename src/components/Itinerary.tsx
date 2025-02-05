import React from 'react';

const timeline = [
  {
    time: '10:00 AM - 10:35 AM',
    event: 'Opening Ceremony',
    description: 'Welcome address and keynote speech'
  },
  {
    time: '10:35 AM - 10:45 AM',
    event: 'Speaker 1',
    description: 'Presentation by Speaker 1'
  },
  {
    time: '10:45 AM - 10:55 AM',
    event: 'Speaker 2',
    description: 'Presentation by Speaker 2'
  },
  {
    time: '10:55 AM - 11:05 AM',
    event: 'Speaker 3',
    description: 'Presentation by Speaker 3'
  },
  {
    time: '11:05 AM - 11:40 AM',
    event: 'Awards',
    description: 'Recognition of outstanding contributions'
  },
  {
    time: '11:40 AM - 11:50 AM',
    event: 'Speaker 4',
    description: 'Presentation by Speaker 4'
  },
  {
    time: '11:50 AM - 12:00 PM',
    event: 'Speaker 5',
    description: 'Presentation by Speaker 5'
  },
  {
    time: '12:10 PM - 12:20 PM',
    event: 'Speaker 6',
    description: 'Presentation by Speaker 6'
  },
  {
    time: '12:20 PM - 01:00 PM',
    event: 'Awards',
    description: 'Recognition of outstanding achievements'
  },
  {
    time: '01:00 PM - 02:00 PM',
    event: 'Lunch',
    description: 'Lunch break and networking opportunity'
  },
  {
    time: '02:00 PM - 02:20 PM',
    event: 'Performance',
    description: 'Performance by guest artists'
  },
  {
    time: '02:20 PM - 02:30 PM',
    event: 'Speaker 7',
    description: 'Presentation by Speaker 7'
  },
  {
    time: '02:30 PM - 02:40 PM',
    event: 'Speaker 8',
    description: 'Presentation by Speaker 8'
  },
  {
    time: '02:40 PM - 02:50 PM',
    event: 'Speaker 9',
    description: 'Presentation by Speaker 9'
  },
  {
    time: '02:50 PM - 04:00 PM',
    event: 'Awards',
    description: 'Recognition of outstanding contributions'
  },
  {
    time: '04:00 PM - 04:30 PM',
    event: 'Hi Tea Break',
    description: 'Tea break and informal discussions'
  },
  {
    time: '04:30 PM - 04:40 PM',
    event: 'Speaker 10',
    description: 'Presentation by Speaker 10'
  },
  {
    time: '04:40 PM - 04:50 PM',
    event: 'Speaker 11',
    description: 'Presentation by Speaker 11'
  },
  {
    time: '04:50 PM - 05:00 PM',
    event: 'Speaker 12',
    description: 'Presentation by Speaker 12'
  },
  {
    time: '05:00 PM - 05:20 PM',
    event: 'Performance',
    description: 'Performance by guest artists'
  },
  {
    time: '05:20 PM - 06:30 PM',
    event: 'Awards',
    description: 'Recognition of outstanding achievements'
  },
  {
    time: '06:30 PM - 06:50 PM',
    event: 'Team Bow and Valedictory',
    description: 'Concluding remarks and farewell'
  }
];


export function Itinerary() {
  return (
    <div className="content-section">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 section-title text-gradient text-center">Event Schedule</h1>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-[#243F83]" />
          
          {/* Timeline events */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#BBD921] rounded-full z-10">
                  <div className="absolute w-8 h-8 bg-[#BBD921] rounded-full -left-2 -top-2 animate-ping opacity-20" />
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="enhanced-card p-6 hover:scale-105 transition-transform duration-300">
                    <div className="text-xl font-bold text-[#243F83] mb-2">{item.time}</div>
                    <div className="text-lg font-semibold mb-2">{item.event}</div>
                    <div className="text-gray-600">{item.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}