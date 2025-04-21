import React from 'react';
import ContactHeader from './ContactHeader';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import './Contact.css';

const ContactPage: React.FC = () => {
  return (
    <section className="contact-page">
      <div className="contact-background">
        <div className="contact-gradient"></div>
        <div className="contact-stars"></div>
      </div>
      <div className="container mx-auto px-4 py-16 max-w-6xl relative z-10">
        <ContactHeader />
        
        <div className="contact-content">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;