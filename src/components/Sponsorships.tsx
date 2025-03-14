import  { useState } from 'react';
import { FaCheck, FaCopy } from 'react-icons/fa';

// CopyableItem Component
function CopyableItem({ label, value }: { label: string; value: string }) {
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
    <div
      className="flex items-center justify-between animated-list-item bg-white bg-opacity-5 p-4 rounded-lg cursor-pointer"
      onClick={handleCopy}
    >
      <div>
        <div className="font-medium text-[#BBD921]">{label}</div>
        <div className="mt-1">{value}</div>
      </div>
      {copied ? (
        <FaCheck className="w-5 h-5 text-green-500" />
      ) : (
        <FaCopy className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
      )}
    </div>
  );
}

// --- Import Sponsor Images ---
// Gold Partners
import ManaPanta from '../Images/Mana-Panta-New.png'; // Mana Panta
import VinduIT from '../Images/Vindu it sols.png'; // Dummy image for Vindu IT

// Silver Partners
import VvFoods from '../Images/V&v foods.png'; // V&V
import VinMedia from '../Images/VinMedia.jpg'; // Vinmedia
import Sampradayam from '../Images/Sampradaayam.png'; // Sampradayam

// Bronze Partners
import Subishi from '../Images/Subishi.png'; // Subishi
import DummyTDF from '../Images/Telangana development forum.png'; // TDF
import Sanghamitra from '../Images/Sangha Mitra Society.jpg'; // Sanghamitra
import Ganadaksha from '../Images/Ganadaksha.jpg';

// Community Partners
import BachpanBachao from '../Images/Bachpan bacho.png'; // Bachpan Bachao

// Gifting Partners
import DrWellness from '../Images/Wellness-ion-new.png'; // Dr. Wellness
import DrVed from '../Images/Dr. ved Logo... ( black ).pdf.png'; // Dr. Ved
import Sweetone from '../Images/Sweetone.png'; // Sweetone
import VasudhaFoods from '../Images/Vasudha.png'; // Vasudha Foods
import Gene from '../Images/Jeeni.png'; // Gene
import Trulio from '../Images/Trulio.png'; // Trulio
import Srimandiram from '../Images/Srimandiram.png'; // Srimandiram Exports
import Anaganaga from '../Images/Anaganaga.png'; // Anaganaga
import Qcity from '../Images/Qcropped-Logo-black.png';

// Gifting Partners
import AU from '../Images/AU Logo.png'; 

// Entertainment Partners
import Specdam from '../Images/SPECDAM logo.png';


// Experience Zone
import aashri from '../Images/Experience Zone/aashri.png';
import allama from '../Images/Experience Zone/Allama Iqbal Educational Society.png';
import atmt from '../Images/Experience Zone/atmt.png'
import auisc from '../Images/Experience Zone/AUISC Logo.png';
import csa from '../Images/Experience Zone/CSA.png';
import cadets from '../Images/Experience Zone/cadets-2.jpg';
import drwellness from '../Images/Experience Zone/DR WellnessON TM final log.png';
import drved from '../Images/Experience Zone/Dr.ved logo.png';
import hestur from '../Images/Experience Zone/Hestur.png';
import jeeni from '../Images/Experience Zone/Jeeni.png';
import keats from '../Images/Experience Zone/Keats.jpg';
import medicover from '../Images/Experience Zone/Medicover.png';
import nihasa from '../Images/Experience Zone/Nihasa Aviation and Chopper Hub.jpg';
import nirmalaya from '../Images/Experience Zone/Nirmalaya.png';
import pure from '../Images/Experience Zone/PURE.png';
import rohini from '../Images/Experience Zone/Rohini Foundation.jpeg';
import shadow from '../Images/Experience Zone/Shadow Puppet Films Logo Final.png';
import sharamaanvi from '../Images/Experience Zone/SHARAMAANVI Pvt. Ltd..png'
import specdam from '../Images/Experience Zone/SPECDAM.png';


// --- Define Sponsor Data ---
const sponsors = {
  community: [{ name: 'Bachpan Bachao', logo: BachpanBachao }],
  gold: [
    { name: 'Mana Panta', logo: ManaPanta },
    { name: 'Vindu IT', logo: VinduIT },
  ],
  silver: [
    { name: 'V&V', logo: VvFoods },
    { name: 'Vinmedia', logo: VinMedia },
    { name: 'Sampradayam', logo: Sampradayam },
  ],
  bronze: [
    { name: 'Subishi', logo: Subishi },
    { name: 'TDF', logo: DummyTDF },
    { name: 'Sanghamitra', logo: Sanghamitra },
    { name: 'Ganadaksha', logo: Ganadaksha },
  ],
  gifting: [
    { name: 'Dr. Wellness', logo: DrWellness },
    { name: 'Dr. Ved', logo: DrVed },
    { name: 'Sweetone', logo: Sweetone },
    { name: 'jene', logo: Gene },
    { name: 'Vasudha Foods', logo: VasudhaFoods },
    { name: 'Trulio', logo: Trulio },
    { name: 'Srimandiram Exports', logo: Srimandiram },
    { name: 'Anaganaga', logo: Anaganaga },
    { name: 'Qcity', logo: Qcity },
  ],
  engagement: [
    { name: 'AU', logo: AU },
  ],
  Entertainment:[
    { name: 'Specdam', logo: Specdam },
  ],
  experienceZone: [
    { name: 'Aashri', logo: aashri },
    { name: 'Allama Iqbal Educational Society', logo: allama },
    { name: 'ATMT', logo: atmt },
    { name: 'AU', logo: AU },
    { name: 'AUISC', logo: auisc },
    { name: 'CSA', logo: csa },
    { name: 'clickcadets', logo: cadets },
    { name: 'DR Wellness', logo: drwellness },
    { name: 'Dr. Ved', logo: drved },
    { name: 'Hestur', logo: hestur },
    { name: 'Jeeni', logo: jeeni },
    { name: 'Keats', logo: keats },
    { name: 'Medicover', logo: medicover },
    { name: 'Nihasa Aviation and Chopper Hub', logo: nihasa },
    { name: 'Nirmalaya', logo: nirmalaya },
    { name: 'PURE', logo: pure },
    { name: 'Rohini Foundation', logo: rohini },
    { name: 'Sanghamitra', logo: Sanghamitra },
    { name: 'Shadow Puppet Films', logo: shadow },
    { name: 'SHARAMAANVI Pvt. Ltd.', logo: sharamaanvi },
    { name: 'SPECDAM', logo: specdam },
    { name: 'Sweetone', logo: Sweetone },
    { name: 'Trulio', logo: Trulio },
  ],
};

// --- Reusable Sponsor Section Component ---
function SponsorSection({ title, sponsors }: { title: string; sponsors: any[] }) {
  const count = sponsors.length;
  // Mobile: one column if only one, or two columns if more.
  const mobileCols = count === 1 ? "grid-cols-1" : "grid-cols-2";

  // Desktop: if there are 4 or more items use 4 columns, or use as many as available.
  const desktopCols =
    count >= 4
      ? "lg:grid-cols-4"
      : count === 1
      ? "lg:grid-cols-1"
      : count === 2
      ? "lg:grid-cols-2"
      : "lg:grid-cols-3";

  // For sections with fewer than 4 items, constrain the grid's width to fit its content and center it.
  const containerClass = count >= 4 ? "grid" : "grid max-w-fit mx-auto";

  return (
    <div className="mb-10">
      <h2 className="text-3xl font-semibold text-center mb-6">{title}</h2>
      <div className={`${containerClass} ${mobileCols} ${desktopCols} gap-6`}>
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="enhanced-card p-4 flex items-center justify-center bg-white shadow-md rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="h-32 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Main Sponsorships Component ---
export function Sponsorships() {
  return (
    <div className="content-section">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 section-title text-center text-gradient">
          Our Partners
        </h1>
        {/* Community Partners */}
        <SponsorSection
          title="Our Community Partner"
          sponsors={sponsors.community}
        />

        {/* Gold Sponsors */}
        <SponsorSection title="Our Gold Partners" sponsors={sponsors.gold} />

        {/* Silver Sponsors */}
        <SponsorSection title="Our Silver Partners" sponsors={sponsors.silver} />

        {/* Bronze Sponsors */}
        <SponsorSection title="Our Bronze Partners" sponsors={sponsors.bronze} />

        

        {/* Gifting Partners */}
        <SponsorSection title="Our Gifting Partners" sponsors={sponsors.gifting} />

        {/* Enperience Zone */}
        <SponsorSection title="Experience Zone" sponsors={sponsors.experienceZone} />


        {/* Engagement Partners */}
        <SponsorSection title="Our Engagement Partner" sponsors={sponsors.engagement} />

        {/* Entertainment Partners */}
        <SponsorSection title="Our Entertainment Partner" sponsors={sponsors.Entertainment} />

      </div>

      {/* Donation Section */}
      <div className="mt-8">
        <div className="enhanced-card lg:max-w-6xl lg:h-160 mx-auto md:border-10 p-4 bg-gradient-to-r from-[#243F83] to-[#1a2f61] text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Support Our Cause
          </h2>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="font-semibold mb-4 text-center">
              ACCOUNT DETAILS OF THE PARTNER NGO
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CopyableItem label="ACCOUNT NAME" value="BACHPAN BACHAO" />
              <CopyableItem label="ACCOUNT NUMBER" value="50200099572967" />
              <CopyableItem label="BANK NAME" value="HDFC BANK" />
              <CopyableItem label="IFSC CODE" value="HDFC0004326" />
            </div>

            <div className="mt-6 bg-white bg-opacity-5 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-[#BBD921]">
                Important Notes:
              </h4>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  While Payment "In the Remarks Kindly mention The reason for
                  Donation along with contact number"
                </li>
                <li>
                  All the Donations Made to this Organization are TAX Exempted
                  Under 12A, 80G of Income Tax Act
                </li>
                <li>
                  CSR Donations can also be made to this organization and be a
                  part of CSR
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
