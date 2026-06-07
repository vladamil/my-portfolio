import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
   return (
      <section id="hero" className={styles.hero}>
         <div className={styles.container}>
            <p className={styles.intro}>Hi, my name is</p>
            <h1 className={styles.title}>
               Vladimir Milinic<span>.</span>
            </h1>
            <h2 className={styles.subtitle}>
               I build high-performance full-stack applications.
            </h2>
            <p className={styles.description}>
               A resilient software engineer specializing in{' '}
               <strong>Next.js</strong>,<strong>Node.js</strong>, and{' '}
               <strong>MongoDB</strong>. Currently focused on building
               accessible, human-centered products.
            </p>
            <div className={styles.cta}>
               <Link href="#projects" className={styles.primaryBtn}>
                  View My Work
               </Link>
               <Link href="#contact" className={styles.secondaryBtn}>
                  Get In Touch
               </Link>
            </div>
         </div>
      </section>
   );
}
