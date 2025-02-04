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

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f1eb]">
      <Navigation />
      <main>
        <section id="home">
          <Slideshow />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="registrations">
          <Registrations />
        </section>
        <br/>
        <br/>
        <section id="awards">
          <Awards />
        </section>
        <br/>
        <section id="speakers">
          <Speakers />
        </section>
        <br/>
        <section id="team">
          <Team />
        </section>
        <br/>
        <br/>
        <section id="sponsorships">
          <Sponsorships />
        </section>
        <br/>
        <br/>
        <section id="itinerary">
          <Itinerary />
        </section>
        <br/>
        <br/>
        <section id="faqs">
          <FAQ />
        </section>
        <br/>
        <br/>
        <section id="contact">
          <Contact />
        </section>
        <br/>
        <br/>
        {/* <ContactForm /> */}
        <CookieConsent />
        <FloatingContact />
      </main>
      <Footer />
    </div>
  );
}