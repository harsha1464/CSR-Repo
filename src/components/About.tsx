import React from 'react';
import { ContactInfo } from './Contact';

export function About() {
  return (
    <div className="bg-[#f5f1eb]">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg">
            <h2 className="text-4xl font-bold mb-8 text-center">About CSR NOW</h2>
            <p className="text-lg mb-6">
              CSR NOW is a premier platform dedicated to promoting and advancing Corporate Social 
              Responsibility initiatives across industries. We bring together leaders, innovators, 
              and change-makers to create meaningful impact in communities worldwide.
            </p>
            <p className="text-lg mb-6">
              Our mission is to facilitate collaboration between corporations and communities, 
              fostering sustainable development and positive social change through effective CSR 
              programs and initiatives.
            </p>
            <div className="mt-12 text-center">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
