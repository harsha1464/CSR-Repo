import React from 'react';

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
import DummyTDF from '../Images/Telangana development forum.png'; // Dummy image for TDF (repeated twice)
import Sanghamitra from '../Images/Sangha Mitra Society.jpg'; // Sanghamitra

// Community Partners
import BachpanBachao from '../Images/Bachpan bacho.png'; // Bachpan Bachao

// Gifting Partners
import DrWellness from '../Images/Wellness-ion-new.png'; // Dr. Wellness
import DrVed from '../Images/Dr. ved Logo... ( black ).pdf.png'; // Dr. Ved
import Sweetone from '../Images/Sweetone.png'; // Sweetone
import VasudhaFoods from '../Images/Vasudha.png'; // Vasudha Foods
import Gene from '../Images/Jeeni.png'; // Vasudha Foods
import Trulio from '../Images/Trulio.png'; // Trulio
import Srimandiram from '../Images/Srimandiram.png'; // Srimandiram Exports
import Anaganaga from '../Images/Anaganaga.png'; // Anaganaga

// --- Define Sponsor Data ---
const sponsors = {
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
    // { name: 'TDF', logo: DummyTDF }, // repeated if needed
    { name: 'Sanghamitra', logo: Sanghamitra },
  ],
  community: [
    { name: 'Bachpan Bachao', logo: BachpanBachao },
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
  ],
};

// --- Reusable Sponsor Section Component ---
function SponsorSection({ title, sponsors }) {
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

        {/* Gold Sponsors */}
        <SponsorSection title="Our Gold Partners" sponsors={sponsors.gold} />

        {/* Silver Sponsors */}
        <SponsorSection title="Our Silver Partners" sponsors={sponsors.silver} />

        {/* Bronze Sponsors */}
        <SponsorSection title="Our Bronze Partners" sponsors={sponsors.bronze} />

        {/* Community Partners */}
        <SponsorSection title="Our Community Partners" sponsors={sponsors.community} />

        {/* Gifting Partners */}
        <SponsorSection title="Our Gifting Partners" sponsors={sponsors.gifting} />
      </div>
    </div>
  );
}
