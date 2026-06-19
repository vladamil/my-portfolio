import styles from './Footer.module.css';

export default function Footer() {
   const currentYear = new Date().getFullYear();

   return (
      <footer className={styles.footerSection}>
         <div className={styles.container}>
            <p className={styles.minimalText}>
               <span>© {currentYear}</span>
               <span className={styles.dot}>•</span>
               <span>Vladimir Milinić</span>
            </p>
         </div>
      </footer>
   );
}
