import React from 'react';
import { Mail, Phone, MapPin, Clock, Globe } from 'lucide-react';



const ContactInfo: React.FC = () => {
  return (
    <div className="contact-info-card">
      <div className="contact-info-content">
        <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
        
        <div className="space-y-8">
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <Mail strokeWidth={1.5} />
            </div>
            <div className="contact-info-details">
              <h4 className="contact-info-title">Email</h4>
              <a href="mailto:info@millenniumai.in" className="contact-info-text hover:text-indigo-400 transition-colors">
                info@millenniumai.in
              </a>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <Phone strokeWidth={1.5} />
            </div>
            <div className="contact-info-details">
              <h4 className="contact-info-title">Phone</h4>
              <a href="tel:+919319410265" className="contact-info-text hover:text-indigo-400 transition-colors">
                +91-9319410265
              </a>
              <a href="tel:+917053171752" className="contact-info-text hover:text-indigo-400 transition-colors">
                +91-7053171752
              </a>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <MapPin strokeWidth={1.5} />
            </div>
            <div className="contact-info-details">
              <h4 className="contact-info-title">Location</h4>
              <p className="contact-info-text">
                UGF-02 Krishna Enclave<br />
                Govindpuram, Ghaziabad<br />
                201002, India
              </p>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <Clock strokeWidth={1.5} />
            </div>
            <div className="contact-info-details">
              <h4 className="contact-info-title">Business Hours</h4>
              <p className="contact-info-text">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 2:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
        
        <div className="contact-social mt-10">
          <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="contact-social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="contact-social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="contact-social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" className="contact-social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;