import React from 'react';
import { ContactInfo } from './Contact';
import { Mail, Clock, Building2, Copy, Check, Phone } from 'lucide-react';


const TIER_DATES = {
  regular: new Date('2025-03-10T23:59:59'),
};

function RegistrationTier({
  title,
  price,
  date,
  isActive,
  isExpired,
}: {
  title: string;
  price: string;
  date: string;
  isActive: boolean;
  isExpired: boolean;
}) {
  return (
    <div className={`enhanced-card p-8 transform transition-all duration-500 hover:scale-105 ${
      isActive ? 'border-2 border-[#BBD921]' : ''
    }`}>
      <div className="text-2xl font-bold mb-4">{title}</div>
      <div className="text-4xl font-bold mb-4 text-[#243F83]">{price}</div>
      <div className="text-gray-600 mb-4">Valid until {date}</div>
      {isExpired ? (
        <div className="block w-full text-center bg-gray-300 text-black px-6 py-3 rounded-md font-semibold">
          Offer Expired
        </div>
      ) : (
        <a
          href="https://www.meraevents.com/event/csr-summit-2025"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-[#BBD921] text-black px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors"
        >
          Reserve Your Spot
        </a>
      )}
    </div>
  );
}

function BulkRegistration() {
  return (
    <div className="enhanced-card p-4 transform transition-all duration-500 hover:scale-105 border-2 border-[#BBD921]">
      <div className="text-2xl font-bold mb-4">Bulk Registrations</div>
      <div className="text-lg mb-4">For bulk registrations, please contact :</div>
      <div className="text-blue-500 mb-2">
        <h2 className="text-xl">Sai Yashwanth Simhadri</h2>
        <br/>
        <a href="tel:+91 9398624615" className="hover:underline text-lg">+91 9398624615</a>
      </div>
      <div className="text-blue-500 text-lg">
        <a href="mailto:saiyashwanth@csrnow.in" className="hover:underline">saiyashwanth@csrnow.in</a>
      </div>
    </div>
  );
}

export function Registrations() {
  const now = new Date();
  const currentTier = now <= TIER_DATES.regular ? 'regular' : 'late';

  return (
    <div className="content-section">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 section-title text-gradient text-center">Registration</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <RegistrationTier
            title="Regular"
            price="₹10,000/-"
            date="March 10, 2025"
            isActive={currentTier === 'regular'}
            isExpired={now > TIER_DATES.regular}
          />
          <RegistrationTier
            title="Change Maker"
            price="₹25,000/-"
            date="March 10, 2025"
            isActive={currentTier === 'regular'}
            isExpired={now > TIER_DATES.regular}
          />
          <BulkRegistration />
        </div>
        
        <ContactDetails />
        <br/>
        <br/>
        <div className="enhanced-card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Terms and Conditions</h2>
          <ol className="space-y-6">
            {[
              'One Successful registration will give an access to one Individual to the event.',
              'Lunch and Hi Tea will be Served at the event. You can choose Veg and Non Veg option at the time of Booking itself.',
              'Goodie Bags will be provided for all the Participants.',
              'Access to all the areas as per the Registration of Tickets is being granted.',
              'All the Participants are requested to Attend on time to the event. Late Comers will not be allowed even you purchase the ticket.',
              'Registration once done, will not be refunded at any circumstances. However a substitute name will be accepted if he/she is from same organization.',
              'The Name of the speakers and the panelists in the website and the Broucher are based on their confirmation. In case, any speaker/panelist could not make it to the event, the organizing committee/organization cannot be held responsible.',
            ].map((item, index) => (
              <li key={index} className="animated-list-item flex items-start">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#BBD921] text-black rounded-full mr-4">
                  {index + 1}
                </span>
                <span className="flex-1">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}



export function ContactDetails() {
  const contactList = [
    { title: 'General Enquiry', name: 'Vinil Reddy', email: 'vinil@csrnow.in', phone: '89776 66266' },
    
    { title: 'Stalls Enquiry', name: 'Sainandhan Jilla', email: 'sainandhan@csrnow.in', phone: '70138 88282' },
    { title: 'Sponsorship Enquiry', name: 'Burra Raaga Samanvita', email: 'raaga@csrnow.in', phone: '86885 83069' },
    { title: 'Awards Enquiry', name: 'Lahari Ramireddy', email: 'awards@csrnow.in', phone: '95023 43555' },
    { title: 'Goodies (For Brand Promotions)', name: 'Kaif Shaik', email: 'logistics@csrnow.in', phone: '79812 52723' },
  ];

  return (
    <div className="enhanced-card p-8 scroll-reveal">
      <h2 className="text-2xl font-semibold mb-6">Contact Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactList.map((contact, index) => (
          <div key={index} className="flex flex-col space-y-2 bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold">{contact.title}</h3>
            <p className="text-lg font-medium">{contact.name}</p>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-gray-500" />
              <span
                className="text-blue-600 underline cursor-pointer"
                onClick={() => navigator.clipboard.writeText(contact.email)}
              >
                {contact.email}
              </span>
              <Check className="w-5 h-5 text-green-500 hidden" />
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-gray-500" />
              <span
                className="text-blue-600 underline cursor-pointer"
                onClick={() => navigator.clipboard.writeText(contact.phone)}
              >
                {contact.phone}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}