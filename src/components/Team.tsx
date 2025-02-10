import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const teamMembers = [
  { name: 'Vinil Reddy', role: 'Licensee', image: 'https://ik.imagekit.io/nag93ze07/Formal%20Photos%20mine/7.jpg?updatedAt=1738682807223', linkedin: 'https://www.linkedin.com/in/vinil-reddy-adudodla-37bb67329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', instagram: 'https://www.instagram.com/csrsouthnow/' },
  { name: 'Shivanth R', role: 'Chief Executive Officer', image: 'https://ik.imagekit.io/nag93ze07/Formal%20Photos%20mine/35.jpg?updatedAt=1739191728566', linkedin: 'https://www.linkedin.com/', instagram: 'https://www.instagram.com/' },
  { name: 'Pranayy V Vora', role: 'Director, Planning and Execution', image: 'https://ik.imagekit.io/nag93ze07/Formal%20Photos%20mine/34.jpg?updatedAt=1739191728541', linkedin: 'https://www.linkedin.com/', instagram: 'https://www.instagram.com/' },
  { name: 'Sai Yashwanth Simhadri', role: 'Director', image: 'https://ik.imagekit.io/nag93ze07/Formal%20Photos%20mine/6.jpg?updatedAt=1738682807258', linkedin: 'https://linkedin.com', instagram: 'https://instagram.com' },
  { name: 'Jilla Sai Nandhan', role: 'Director-Strategy & Event Operations', image: 'https://ik.imagekit.io/nag93ze07/5.jpg?updatedAt=1738681011962', linkedin: 'https://www.linkedin.com/in/sainandhan-jilla-21a816224/', instagram: 'https://instagram.com' },
  { name: 'Burra Raaga Samanvita', role: 'Sponsorship Relations Lead', image: 'https://ik.imagekit.io/nag93ze07/Formal%20Photos%20mine/9.jpg?updatedAt=1738682807331', linkedin: 'https://www.linkedin.com/in/burra-raaga-samanvita/', instagram: 'https://instagram.com' },
  { name: 'Aishwarya Alechalla', role: 'Program Manager & Content Lead', image: 'https://ik.imagekit.io/nag93ze07/Formal%20Photos%20mine/8.jpg?updatedAt=1738682807326', linkedin: 'https://www.linkedin.com/in/aishwaryaalechalla/', instagram: 'https://instagram.com' },
  { name: 'Pranav Kothapalli', role: 'Design Lead', image: 'https://ik.imagekit.io/nag93ze07/Formal%20Photos%20mine/10.jpg?updatedAt=1738682807228', linkedin: 'https://www.linkedin.com/in/pranavkothapalli/', instagram: 'https://instagram.com' }
  
];

const otherTeamMembers = Array.from({ length: 20 }, (_, index) => ({
  name: `Team Member ${index + 1}`,
  role: 'Team Role',
  image: 'https://via.placeholder.com/150', // Dummy image URL
  linkedin: 'https://linkedin.com',        // Dummy LinkedIn URL
}));


export function Team() {
  return (
    <div className="content-section">
      <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 section-title text-gradient text-center">Our Core Team</h1>
<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {teamMembers.map((member, index) => (
    <div key={index} className="team-member-card rounded-xl overflow-hidden flex flex-col">
      <div className="relative flex-1">
        <div className="flex">
          <img src={member.image} alt={member.name} className="w-5/6 h-50 object-cover" />
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
      <div className="content p-6 bg-white flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
        <p className="text-gray-600">{member.role}</p>
      </div>
    </div>
  ))}
</div>


          {/* Other Team Members Section
        <h2 className="text-3xl font-bold mt-16 mb-8 text-center">Meet Our Other Team Members</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex items-center animate-scroll">
              {otherTeamMembers.concat(otherTeamMembers).map((member, index) => (
                <div key={index} className="w-1/5 md:w-1/5 sm:w-1/3 p-2 flex-shrink-0">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <img src={member.image} alt={member.name} className="w-full h-40 object-cover" />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      <p className="text-gray-600">{member.role}</p>
                      <div className="flex mt-2 space-x-2">
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                          <Linkedin />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}





      </div>
    </div>
  );
}
