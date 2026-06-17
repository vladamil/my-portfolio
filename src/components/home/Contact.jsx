'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
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
         const response = await fetch(
            'https://formspree.io/f/your_endpoint_id',
            {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({
                  name: formData.name,
                  email: formData.email,
                  message: formData.message,
               }),
            },
         );

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
      <section id="contact" className={styles.contactSection}>
         <div className={styles.container}>
            {/* LEFT SIDE: MY GENERAL INFO  */}
            <div className={styles.infoSide}>
               <div className={styles.statusBadge}>
                  <span className={styles.glowingDot} />
                  <p>Available for new projects</p>
               </div>

               <h2 className={styles.mainTitle}>
                  Let's craft something{' '}
                  <span className={styles.gradientText}>exceptional</span>{' '}
                  together.
               </h2>

               <p className={styles.subText}>
                  Have a project description or a business idea in mind? Reach
                  out directly. No corporate layers, just direct collaboration.
               </p>

               <div className={styles.directChannels}>
                  <a
                     href="mailto:your.email@gmail.com"
                     className={styles.channelLink}
                  >
                     <div className={styles.iconBox}>
                        <svg
                           viewBox="0 0 24 24"
                           width="20"
                           height="20"
                           stroke="currentColor"
                           strokeWidth="2"
                           fill="none"
                        >
                           <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                           <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                     </div>
                     <div className={styles.channelText}>
                        <span>Email directly</span>
                        <strong>your.email@gmail.com</strong>
                     </div>
                  </a>

                  <a href="tel:+381601234567" className={styles.channelLink}>
                     <div className={styles.iconBox}>
                        <svg
                           viewBox="0 0 24 24"
                           width="20"
                           height="20"
                           stroke="currentColor"
                           strokeWidth="2"
                           fill="none"
                        >
                           <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                     </div>
                     <div className={styles.channelText}>
                        <span>Call or Ping</span>
                        <strong>+381 60 123 4567</strong>
                     </div>
                  </a>
               </div>
            </div>

            {/* RIGHT SIDE: CONTACT FORM */}
            <div className={styles.formSide}>
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
                        Thank you for reaching out. I've received your data
                        safely and will respond within 24 hours.
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
                        <label className={styles.floatingLabel}>
                           Your Name
                        </label>
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
                        <label className={styles.floatingLabel}>
                           Email Address
                        </label>
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
            </div>
         </div>
      </section>
   );
}
