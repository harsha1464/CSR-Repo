import React from 'react';
import { Navigation } from './components/Navigation';
import { Slideshow } from './components/Slideshow';
import { About } from './components/About';
import { Registrations } from './components/Registrations';
import { Awards } from './components/Awards';
import { Speakers } from './components/Speakers';
import { Team } from './components/Team';
import { Sponsorships } from './components/Sponsorships';
import { Itinerary } from './components/Itinerary';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { ContactForm } from './components/ContactForm';
import { CookieConsent } from './components/CookieConsent';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { PopupImage } from './components/PopupImage';
import { Demographics } from './components/Demographics';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#f5f1eb] overflow-x-hidden">
      <PopupImage />
      <Navigation />
      <main className="container mx-auto">
        <section id="home" className="w-full">
          <Slideshow />
        </section>
        <section id="demographics" className="w-full">
          <Demographics />
        </section>
        <section id="about" className="w-full">
          <About />
        </section>
        <section id="registrations" className="w-full">
          <Registrations />
        </section>
        <br />
        <br />
        <section id="awards" className="w-full">
          <Awards />
        </section>
        <br />
        <section id="speakers" className="w-full">
          <Speakers />
        </section>
        <br />
        <section id="team" className="w-full">
          <Team />
        </section>
        <br />
        <br />
        <section id="sponsorships" className="w-full">
          <Sponsorships />
        </section>
        <br />
        <br />
        <section id="itinerary" className="w-full">
          <Itinerary />
        </section>
        <br />
        <br />
        <section id="faqs" className="w-full">
          <FAQ />
        </section>
        <br />
        <br />
        <section id="contact" className="w-full">
          <Contact />
        </section>
        <br />
        <br />
        <CookieConsent />
        <FloatingContact />
      </main>
      <Footer />
    </div>
  );
}

