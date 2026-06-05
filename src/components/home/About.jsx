import { HiDownload } from 'react-icons/hi';
import ScrollReveal from '../ui/ScrollReveal/ScrollReveal';
import styles from './About.module.css';

export default function About() {
   const skills = [
      'JavaScript (ES6+)',
      'Next.js',
      'React',
      'Node.js',
      'MongoDB',
      'CSS Modules',
      'Git/GitHub',
   ];

   return (
      <section id="about" className={styles.about}>
         <div className={styles.container}>
            <div className={styles.bentoGrid}>
               {/* CARD 1: THE STORY */}
               <ScrollReveal
                  className={`${styles.card} ${styles.storyCard}`}
                  activeClass={styles.active}
               >
                  <h3 className={styles.sectionTitle}>About Me</h3>
                  <p>
                     My path to engineering was built on{' '}
                     <strong>resilience</strong>. Coming from a non-traditional
                     background, I taught myself to bridge the gap between
                     creative logic and technical execution.
                  </p>
                  <p>
                     I don't just write code; I solve problems with a focus on
                     performance and user experience.
                  </p>
                  <p>
                     My path to engineering was built on{' '}
                     <strong>resilience</strong>. Coming from a non-traditional
                     background, I taught myself to bridge the gap between
                     creative logic and technical execution.
                  </p>
               </ScrollReveal>

               {/* CARD 2: THE TECH STACK */}
               <ScrollReveal
                  className={`${styles.card} ${styles.skillsCard}`}
                  activeClass={styles.active}
               >
                  <h4 className={styles.cardLabel}>Tech Stack</h4>
                  <div className={styles.skillList}>
                     {skills.map((skill, i) => (
                        <span key={i} className={styles.skillTag}>
                           {skill}
                        </span>
                     ))}
                  </div>
               </ScrollReveal>

               {/* CARD 3: THE CV ACTION */}
               <ScrollReveal
                  activeClass={styles.active}
                  className={`${styles.card} ${styles.cvCard}`}
               >
                  <h4 className={styles.cardLabel}>Resume</h4>
                  <a href="/resume.pdf" download>
                     <div className={styles.cvContent}>
                        <HiDownload className={styles.cvIcon} />
                        <p>Download CV</p>
                     </div>
                  </a>
               </ScrollReveal>

               {/* CARD 4: THE LOCATION */}
               <ScrollReveal
                  className={`${styles.card} ${styles.locationCard}`}
                  activeClass={styles.active}
               >
                  <h4 className={styles.cardLabel}>Location</h4>
                  <div className={styles.locationContent}>
                     <span className={styles.pulseDot}></span>
                     <p>Novi Sad, Serbia</p>
                  </div>
               </ScrollReveal>
            </div>
         </div>
      </section>
   );
}
