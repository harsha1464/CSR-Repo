import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const teamMembers = [
  { name: 'Vinil Reddy', role: 'Licensee', image: 'https://ik.imagekit.io/nag93ze07/Formal%20Photos%20mine/7.jpg?updatedAt=1738682807223', linkedin: 'https://linkedin.com', instagram: 'https://instagram.com' },
  { name: 'Sai Yashwanth Simhadri', role: 'Director', image: 'https://ik.imagekit.io/nag93ze07/Formal%20Photos%20mine/6.jpg?updatedAt=1738682807258', linkedin: 'https://linkedin.com', instagram: 'https://instagram.com' },
  { name: 'Jilla Sai Nandhan', role: 'Director-Strategy & Event Operations', image: 'https://ik.imagekit.io/nag93ze07/5.jpg?updatedAt=1738681011962', linkedin: 'https://www.linkedin.com/in/sainandhan-jilla-21a816224/', instagram: 'https://instagram.com' },
  { name: 'Raaga Samanvita', role: 'Sponsorship Relations ', image: 'https://ik.imagekit.io/nag93ze07/Formal%20Photos%20mine/9.jpg?updatedAt=1738682807331', linkedin: 'https://www.linkedin.com/in/burra-raaga-samanvita/', instagram: 'https://instagram.com' },
  { name: 'Pranav Kothapalli', role: 'Branding and Communications Manager', image: 'https://ik.imagekit.io/nag93ze07/Formal%20Photos%20mine/10.jpg?updatedAt=1738682807228', linkedin: 'https://www.linkedin.com/in/pranavkothapalli/', instagram: 'https://instagram.com' },
  { name: 'Aishwarya Alechalla', role: 'Content Lead & Program Manager', image: 'https://ik.imagekit.io/nag93ze07/Formal%20Photos%20mine/8.jpg?updatedAt=1738682807326', linkedin: 'https://www.linkedin.com/in/aishwaryaalechalla/', instagram: 'https://instagram.com' }
];

const additionalPhotos = Array.from({ length: 24 }, (_, index) => ({
  image: `https://dummyimage.com/150x150/000/fff&text=Photo+${index + 1}`,
  name: `Member ${index + 1}`
}));

export function Team() {
  return (
    <div className="content-section">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 section-title text-gradient text-center">Our Core Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member-card rounded-xl overflow-hidden">
              <div className="relative">
                <div className="flex">
                  <img src={member.image} alt={member.name} className="w-5/6 h-80 object-cover" />
                  <div className="w-1/6 bg-white flex flex-col items-center justify-center space-y-4">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[#BBD921] rounded-full transition-colors duration-300 group">
                      <Linkedin className="w-6 h-6 group-hover:text-white" />
                    </a>
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[#BBD921] rounded-full transition-colors duration-300 group">
                      <Instagram className="w-6 h-6 group-hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="content p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
        <br /><br />
        <h3 className="text-3xl font-bold mb-12 section-title text-gradient text-center">Our Other Team Members</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {additionalPhotos.map((photo, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={photo.image} alt={photo.name} className="w-28 h-28 object-cover rounded-lg" />
              <p className="mt-2 text-sm text-gray-700">{photo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
