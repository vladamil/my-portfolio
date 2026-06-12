import styles from './Projects.module.css';

const projectData = [
   {
      id: 'instagram-clone',
      title: 'Social Media Platform',
      subtitle: 'Full-Stack Flagship Application',
      description:
         'A high-performance Instagram architecture featuring decoupled client/server infrastructure, secure JWT authentication, and optimized cloud media pipelines.',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Cloudinary', 'JWT'],
      bgClass: 'flagshipCard',
   },
   {
      id: 'beauty-salon',
      title: 'Luxury Salon Web Presence',
      subtitle: 'Commercial Business Solution',
      description:
         'A slick, SEO-optimized presentation platform engineered for ultra-fast loading speeds, high core web vitals, and seamless client conversion paths.',
      tags: ['Next.js', 'CSS Modules', 'SEO Best Practices'],
      bgClass: 'salonCard',
   },
   {
      id: 'shopping-list',
      title: 'SmartCart Utility',
      subtitle: 'Real-World Mobile CRUD App',
      description:
         'A mobile-first shopping utility built to replace paper lists. Features instantaneous CRUD states and an optimized in-store checkbox workflow.',
      tags: ['React', 'State Management', 'Local Storage'],
      bgClass: 'shoppingCard',
   },
];

export default function Projects() {
   return (
      <section id="projects" className={styles.projectsSection}>
         {/* The scroll Track that holds our pinned container */}
         <div className={styles.scrollTrack}>
            {/* The pinned stage that stays locked on screen */}
            <div className={styles.stickyStage}>
               <h2 className={styles.sectionTitle}>
                  Featured Work<span>.</span>
               </h2>

               <div className={styles.deck}>
                  <div className={`${styles.card} ${styles.card1}`}>
                     Project 1
                  </div>
                  <div className={`${styles.card} ${styles.card2}`}>
                     Project 2
                  </div>
                  <div className={`${styles.card} ${styles.card3}`}>
                     Project 3
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
