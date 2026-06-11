// import styles from './Projects.module.css';

// const projectData = [
//    {
//       id: 'instagram-clone',
//       title: 'Social Media Platform',
//       subtitle: 'Full-Stack Flagship Application',
//       description:
//          'A high-performance Instagram architecture featuring decoupled client/server infrastructure, secure JWT authentication, and optimized cloud media pipelines.',
//       tags: ['Next.js', 'Node.js', 'MongoDB', 'Cloudinary', 'JWT'],
//       bgClass: 'flagshipCard', // We will use these for unique backgrounds
//    },
//    {
//       id: 'beauty-salon',
//       title: 'Luxury Salon Web Presence',
//       subtitle: 'Commercial Business Solution',
//       description:
//          'A slick, SEO-optimized presentation platform engineered for ultra-fast loading speeds, high core web vitals, and seamless client conversion paths.',
//       tags: ['Next.js', 'CSS Modules', 'SEO Best Practices'],
//       bgClass: 'salonCard',
//    },
//    {
//       id: 'shopping-list',
//       title: 'SmartCart Utility',
//       subtitle: 'Real-World Mobile CRUD App',
//       description:
//          'A mobile-first shopping utility built to replace paper lists. Features instantaneous CRUD states and an optimized in-store checkbox workflow.',
//       tags: ['React', 'State Management', 'Local Storage / Database'],
//       bgClass: 'shoppingCard',
//    },
// ];

// export default function Projects() {
//    return (
//       <section id="projects" className={styles.projectsSection}>
//          <div className={styles.container}>
//             <h2 className={styles.sectionTitle}>
//                Featured Work<span>.</span>
//             </h2>

//             <div className={styles.stackContainer}>
//                {projectData.map((project, index) => (
//                   <div
//                      key={project.id}
//                      className={`${styles.projectCard} ${styles[project.bgClass]}`}
//                      /* Dynamic style inline to offset each card slightly from the top */
//                      style={{
//                         top: `calc(var(--nav-height) + 2rem + ${index * 1.5}rem)`,
//                      }}
//                   >
//                      <div className={styles.cardContent}>
//                         <span className={styles.subtitle}>
//                            {project.subtitle}
//                         </span>
//                         <h3 className={styles.title}>{project.title}</h3>
//                         <p className={styles.description}>
//                            {project.description}
//                         </p>

//                         <div className={styles.tagGrid}>
//                            {project.tags.map((tag) => (
//                               <span key={tag} className={styles.tagPill}>
//                                  {tag}
//                               </span>
//                            ))}
//                         </div>
//                      </div>

//                      {/* This placeholder acts as your project preview image/mockup slot */}
//                      <div className={styles.cardVisual}>
//                         <div className={styles.mockupWindow}>
//                            {/* Image or interactive elements go here later */}
//                         </div>
//                      </div>
//                   </div>
//                ))}
//             </div>
//          </div>
//       </section>
//    );
// }

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
