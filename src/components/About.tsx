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
            {/* <p className="text-lg mb-6">
              Our mission is to facilitate collaboration between corporations and communities, 
              fostering sustainable development and positive social change through effective CSR 
              programs and initiatives.
            </p> */}
            <div className="enhanced-card p-8 scroll-reveal">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            At CSRNOW, our mission is to empower business professionals with the knowledge and 
            skills they need to succeed in the ever-changing world of commerce. Our conference 
            brings together industry experts and thought leaders to share insights, strategies, 
            and best practices.
          </p>
        </div>
            <div className="mt-12 text-center">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
