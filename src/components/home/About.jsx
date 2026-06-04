import { HiDownload } from 'react-icons/hi';
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
               <div className={`${styles.card} ${styles.storyCard}`}>
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
               </div>

               {/* CARD 2: THE TECH STACK */}
               <div className={`${styles.card} ${styles.skillsCard}`}>
                  <h4 className={styles.cardLabel}>Tech Stack</h4>
                  <div className={styles.skillList}>
                     {skills.map((skill, i) => (
                        <span key={i} className={styles.skillTag}>
                           {skill}
                        </span>
                     ))}
                  </div>
               </div>

               {/* CARD 3: THE CV ACTION */}
               <a
                  href="/resume.pdf"
                  download
                  className={`${styles.card} ${styles.cvCard}`}
               >
                  <h4 className={styles.cardLabel}>Resume</h4>
                  <div className={styles.cvContent}>
                     <HiDownload className={styles.cvIcon} />
                     <p>Download CV</p>
                  </div>
               </a>

               {/* CARD 4: LOCATION */}
               <div className={`${styles.card} ${styles.locationCard}`}>
                  <h4 className={styles.cardLabel}>Location</h4>
                  <div className={styles.locationContent}>
                     <span className={styles.pulseDot}></span>
                     <p>Novi Sad, Serbia</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
