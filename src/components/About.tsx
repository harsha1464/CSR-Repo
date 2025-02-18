import React from 'react';
import { ContactInfo } from './Contact';

export function About() {
  return (
    <div className="bg-[#f5f1eb]">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-0">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg">
            <h2 className="text-4xl font-bold mb-8 text-center">About CSR NOW</h2>
            <p className="text-lg mb-6">
              CSR NOW is a premier platform dedicated to promoting and advancing Corporate Social 
              Responsibility initiatives across industries. We bring together leaders, innovators, 
              and change-makers to create meaningful impact in communities worldwide.
            </p>
            <p className="text-lg mb-6">
              <strong>What is CSR Summit?</strong><br />
              The CSRNOW conference aims to create a networking opportunity for both corporates and companies and not-for-profit organisations to discuss recent insights on socially responsible practices in the not-for-profit sector.
            </p>
            <p className="text-lg mb-6">
              <strong>Vision and Mission ?</strong><br />
              We aim to bridge the gap between the not-for-profit organisations and CSR companies come united. With the CSRNOW conference, we bring them closer on a single platform so that networking happens here in the open session and conferences that are organized by CSRNOW.
            </p>
            <div className="mt-12 text-center">
              {/* <ContactInfo /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
