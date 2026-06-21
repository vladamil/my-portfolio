'use client';

import { useState } from 'react';

import styles from '@/components/home/Contact.module.css';

export default function ContactForm() {
   // Keeping our single source of truth state ready for later
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
      subject: '', // honeypot field
   });
   const [status, setStatus] = useState('idle');

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (formData.subject) {
         setStatus('success');
         return;
      }

      setStatus('loading');

      try {
         const response = await fetch('https://formspree.io/f/maqgwlyz', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
               name: formData.name,
               email: formData.email,
               message: formData.message,
            }),
         });

         if (response.ok) {
            setStatus('success');
            setFormData({ name: '', email: '', message: '', subject: '' });
         } else {
            setStatus('error');
         }
      } catch (error) {
         setStatus('error');
      }
   };

   return (
      <>
         {status === 'success' ? (
            <div className={styles.successScreen}>
               <div className={styles.successIcon}>
                  <svg
                     viewBox="0 0 24 24"
                     width="32"
                     height="32"
                     stroke="currentColor"
                     strokeWidth="2.5"
                     fill="none"
                  >
                     <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
               </div>
               <h3>Message Sent!</h3>
               <p>
                  Thank you for reaching out. I've received your data safely and
                  will respond within 24 hours.
               </p>
               <button
                  onClick={() => setStatus('idle')}
                  className={styles.resetButton}
               >
                  Send another message
               </button>
            </div>
         ) : (
            <form onSubmit={handleSubmit} className={styles.contactForm}>
               {/* Invisible Security Guard Field */}
               <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={styles.honeypot}
                  tabIndex="-1"
                  autoComplete="off"
               />

               <div className={styles.inputGroup}>
                  <input
                     type="text"
                     name="name"
                     required
                     value={formData.name}
                     onChange={handleChange}
                     placeholder=" " /* Crucial blank space for label tracking math */
                     className={styles.minimalInput}
                     autoComplete="off"
                     spellCheck="false"
                  />
                  <label className={styles.floatingLabel}>Your Name</label>
               </div>

               <div className={styles.inputGroup}>
                  <input
                     type="email"
                     name="email"
                     required
                     value={formData.email}
                     onChange={handleChange}
                     placeholder=" "
                     className={styles.minimalInput}
                     autoComplete="off"
                     spellCheck="false"
                  />
                  <label className={styles.floatingLabel}>Email Address</label>
               </div>

               <div className={styles.inputGroup}>
                  <textarea
                     name="message"
                     required
                     rows="5"
                     value={formData.message}
                     onChange={handleChange}
                     placeholder=" "
                     className={styles.minimalTextArea}
                     autoComplete="off"
                     spellCheck="false"
                  />
                  <label className={styles.floatingLabel}>
                     Tell me about your project
                  </label>
               </div>

               <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={status === 'loading'}
               >
                  {/* Button style */}
                  {status === 'loading' ? (
                     <span className={styles.spinner} />
                  ) : (
                     <>
                        <span>Send Message</span>
                        <svg
                           viewBox="0 0 24 24"
                           width="16"
                           height="16"
                           stroke="currentColor"
                           strokeWidth="2.5"
                           fill="none"
                        >
                           <line x1="5" y1="12" x2="19" y2="12"></line>
                           <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                     </>
                  )}
               </button>

               {/* Error message feedback */}
               {status === 'error' && (
                  <p className={styles.errorMessage}>
                     Something went wrong. Please try calling or emailing
                     directly!
                  </p>
               )}
            </form>
         )}
      </>
   );
}
