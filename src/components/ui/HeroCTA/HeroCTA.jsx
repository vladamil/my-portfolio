'use client';
import scrollToSection from '@/utils/ScrollToSection';
import styles from '@/components/home/Hero.module.css';

export default function HeroCTA() {
   return (
      <div className={styles.cta}>
         <button
            className={styles.primaryBtn}
            onClick={() => scrollToSection('projects')}
         >
            View My Work
         </button>
         <button
            className={styles.secondaryBtn}
            onClick={() => scrollToSection('contact')}
         >
            Get In Touch
         </button>
      </div>
   );
}
