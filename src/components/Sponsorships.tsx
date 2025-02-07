import React, { useState } from 'react';
import { ContactInfo } from './Contact';
import GoldSponsor1 from '../Images/Dr Image.jpg';
import GoldSponsor2 from '../Images/Mana-Panta.jpg';
import GoldSponsor3 from '../Images/Dr. ved Logo... ( black ).pdf.png';
import GoldSponsor4 from '../Images/ATMt.jpg';
import GoldSponsor5 from '../Images/MeraEvents.jpg';
import GoldSponsor6 from '../Images/anurag-logo-2.png.webp';
import { Mail, Check, Copy } from 'lucide-react';

const sponsors = {
  gold: [
    { name: 'Gold Sponsor 1', logo: GoldSponsor1 },
    { name: 'Gold Sponsor 2', logo: GoldSponsor2 },
    { name: 'Gold Sponsor 3', logo: GoldSponsor3 },
    { name: 'Gold Sponsor 4', logo: GoldSponsor4 },
    { name: 'Gold Sponsor 5', logo: GoldSponsor5 },
    { name: 'Gold Sponsor 6', logo: GoldSponsor6 },
  ],
};

function CopyableItem({ label, value }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="flex items-center justify-between animated-list-item bg-white bg-opacity-5 p-4 rounded-lg cursor-pointer" onClick={handleCopy}>
      <div>
        <dt className="font-medium text-[#BBD921]">{label}</dt>
        <dd className="mt-1">{value}</dd>
      </div>
      {copied ? (
        <Check className="w-5 h-5 text-green-500" />
      ) : (
        <Copy className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
      )}
    </div>
  );
}

export function Sponsorships() {
  return (
    <div className="content-section">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 section-title text-gradient text-center">Our Partners</h1>
        
        <div className="mb-6 w-full mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sponsors.gold.map((sponsor, index) => (
              <div key={index} className="enhanced-card p-4 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <img src={sponsor.logo} alt={sponsor.name} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Donation Section */}
        <div className="mt-16">
          <div className="enhanced-card p-8 bg-gradient-to-r from-[#243F83] to-[#1a2f61] text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">Support Our Cause</h2>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="font-semibold mb-4 text-center">ACCOUNT DETAILS OF THE PARTNER NGO</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CopyableItem label="ACCOUNT NAME" value="BACHPAN BACHAO" />
                <CopyableItem label="ACCOUNT NUMBER" value="50200099572967" />
                <CopyableItem label="BANK NAME" value="HDFC BANK" />
                <CopyableItem label="IFSC CODE" value="HDFC0004326" />
              </div>
              
              <div className="mt-6 bg-white bg-opacity-5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-[#BBD921]">Important Notes:</h4>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>While Payment "In the Remarks Kindly mention The reason for Donation along with contact number"</li>
                  <li>All the Donations Made to this Organization are TAX Exempted Under 12A, 80G of Income Tax Act</li>
                  <li>CSR Donations can also be made to this organization and be a part of CSR</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
