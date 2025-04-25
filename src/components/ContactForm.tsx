  import React, { useState } from 'react';

  interface FormState {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

  interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }

  const ContactForm: React.FC = () => {
    const [formState, setFormState] = useState<FormState>({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    const [errors, setErrors] = useState<FormErrors>({});
    const [focused, setFocused] = useState<string | null>(null);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormState(prev => ({ ...prev, [name]: value }));
      
      // Clear error when user starts typing
      if (errors[name as keyof FormErrors]) {
        setErrors(prev => ({ ...prev, [name]: undefined }));
      }
    };

    const handleFocus = (name: string) => {
      setFocused(name);
    };

    const handleBlur = () => {
      setFocused(null);
    };

    const validateForm = () => {
      const newErrors: FormErrors = {};
      
      if (!formState.name.trim()) {
        newErrors.name = 'Name is required';
      }
      
      if (!formState.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
        newErrors.email = 'Email is invalid';
      }
      
      if (!formState.message.trim()) {
        newErrors.message = 'Message is required';
      }
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      
      if (validateForm()) {
        // Simulate form submission
        console.log('Form submitted:', formState);
        setSubmitted(true);
        
        // Reset form after submission
        setTimeout(() => {
          setFormState({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          setSubmitted(false);
        }, 3000);
      }
    };

    return (
      <div className="contact-form-container">
        {submitted ? (
          <div className="contact-success">
            <div className="contact-success-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
            <p className="text-gray-300">
              Your message has been sent successfully. We'll get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <h3 className="text-2xl font-bold text-white mb-8">Send Message</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`form-group ${focused === 'name' ? 'focused' : ''} ${errors.name ? 'error' : ''}`}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  className="form-input"
                  placeholder=" "
                />
                <label htmlFor="name" className="form-label text-white">Name</label>
                {errors.name && <p className="error-message">{errors.name}</p>}
              </div>
              
              <div className={`form-group ${focused === 'email' ? 'focused' : ''} ${errors.email ? 'error' : ''}`}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  className="form-input"
                  placeholder=" "
                />
                <label htmlFor="email" className="form-label text-white">Email</label>
                {errors.email && <p className="error-message">{errors.email}</p>}
              </div>
            </div>
            
            <div className={`form-group ${focused === 'subject' ? 'focused' : ''} ${errors.subject ? 'error' : ''}`}>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                onFocus={() => handleFocus('subject')}
                onBlur={handleBlur}
                className="form-input"
                placeholder=" "
              />
              <label htmlFor="subject" className="form-label text-white">Subject</label>
              {errors.subject && <p className="error-message">{errors.subject}</p>}
            </div>
            
            <div className={`form-group ${focused === 'message' ? 'focused' : ''} ${errors.message ? 'error' : ''}`}>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formState.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={handleBlur}
                className="form-input"
                placeholder=" "
              ></textarea>
              <label htmlFor="message" className="form-label text-white">Message</label>
              {errors.message && <p className="error-message">{errors.message}</p>}
            </div>
            
            <button type="submit" className="contact-submit-button">
              <span className="button-text">Send Message</span>
              <span className="button-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </span>
            </button>
          </form>
        )}
      </div>
    );
  };

  export default ContactForm;