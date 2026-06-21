import ContactForm from '../ui/ContactForm/ContactForm';
import ScrollReveal from '../ui/ScrollReveal/ScrollReveal';
import styles from './Contact.module.css';

export default function Contact() {
   return (
      <section id="contact" className={styles.contactSection}>
         <div className={styles.container}>
            {/* LEFT SIDE: MY GENERAL INFO  */}
            <div className={styles.infoSide}>
               <ScrollReveal
                  className={styles.statusBadge}
                  activeClass={styles.active}
               >
                  <span className={styles.glowingDot} />
                  <p>Available for new projects</p>
               </ScrollReveal>

               <ScrollReveal
                  className={styles.mainTitle}
                  activeClass={styles.active}
                  as="h2"
               >
                  Let's craft something{' '}
                  <span className={styles.gradientText}>exceptional</span>{' '}
                  together.
               </ScrollReveal>

               <ScrollReveal
                  className={styles.subText}
                  activeClass={styles.active}
                  as="p"
               >
                  Have a project description or a business idea in mind? Reach
                  out directly. No corporate layers, just direct collaboration.
               </ScrollReveal>

               <ScrollReveal
                  className={styles.directChannels}
                  activeClass={styles.active}
               >
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
                        <strong>vladimir.milinic@gmail.com</strong>
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
                        <strong>+381 64 328 8038</strong>
                     </div>
                  </a>
               </ScrollReveal>
            </div>

            {/* RIGHT SIDE: CONTACT FORM */}
            <ScrollReveal
               className={styles.formSide}
               activeClass={styles.active}
               threshold={0.05}
            >
               {/* CONTACT FORM */}
               <ContactForm />
            </ScrollReveal>
         </div>
      </section>
   );
}
