'use client';
import { useState } from 'react';

import styles from './Projects.module.css';

const projectsData = [
   {
      id: 'instagram-clone',
      num: '01',
      title: 'Social Media Platform',
      subtitle: 'Full-Stack Flagship Application',
      short: 'Full-stack development',
      description:
         'A high-performance Instagram architecture featuring decoupled client/server infrastructure, secure JWT authentication, and optimized cloud media pipelines.',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Cloudinary', 'JWT'],
      bgClass: 'flagshipCard',
   },
   {
      id: 'beauty-salon',
      num: '02',
      title: 'Luxury Salon Web Presence',
      subtitle: 'Commercial Business Solution',
      short: 'Commercial solution',
      description:
         'A slick, SEO-optimized presentation platform engineered for ultra-fast loading speeds, high core web vitals, and seamless client conversion paths.',
      tags: ['Next.js', 'CSS Modules', 'SEO Best Practices'],
      bgClass: 'salonCard',
   },
   {
      id: 'shopping-list',
      num: '03',
      title: 'SmartCart Utility',
      subtitle: 'Real-World Mobile CRUD App',
      short: 'Mobile CRUD application',
      description:
         'A mobile-first shopping utility built to replace paper lists. Features instantaneous CRUD states and an optimized in-store checkbox workflow.',
      tags: ['React', 'State Management', 'Local Storage'],
      bgClass: 'shoppingCard',
   },
];

export default function Projects() {
   const [activeCard, setActiveCard] = useState(0);

   return (
      <section id="projects" className={styles.projectsSection}>
         <div className={styles.container}>
            {/* PREMIUM CONTROLS: Left Sidebar Navigation */}
            <div className={styles.navigationSidebar}>
               {/* Visual Sliding Indicator Pill */}
               <div
                  className={styles.indicatorPill}
                  style={{ transform: `translateY(${activeCard * 100}%)` }}
               />

               {projectsData.map((project, index) => (
                  <button
                     key={project.id}
                     className={`${styles.navItem} ${activeCard === index ? styles.activeNav : ''}`}
                     onClick={() => setActiveCard(index)}
                     aria-label={`View ${project.title}`}
                  >
                     <span className={styles.navNumber}>{project.num}</span>
                     <div className={styles.navText}>
                        <h4>{project.title}</h4>
                        <p>{project.short}</p>
                     </div>
                  </button>
               ))}
            </div>

            {/* STACKED CARDS VIEWPORT: Right Side */}
            <div className={styles.deckWrapper}>
               <div className={styles.deck} data-active-card={activeCard}>
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

// return (
//    <section id="projects" className={styles.projectsSection}>
//       {/* The scroll Track that holds our pinned container */}

//       <div className={styles.scrollTrack}>
//          <div className={styles.stepTrack}>
//             <div data-index="0" ref={step0Ref} className={styles.step1} />
//             <div data-index="1" ref={step1Ref} className={styles.step2} />
//             <div data-index="2" ref={step2Ref} className={styles.step3} />
//          </div>
//          {/* The pinned stage that stays locked on screen */}
//          <div className={styles.stickyStage}>
//             <h2 className={styles.sectionTitle}>
//                Featured Work<span>.</span>
//             </h2>

//             <div className={styles.deck}>
//                <div className={`${styles.card} ${styles.card1}`}>
//                   Project 1
//                </div>
//                <div className={`${styles.card} ${styles.card2}`}>
//                   Project 2
//                </div>
//                <div className={`${styles.card} ${styles.card3}`}>
//                   Project 3
//                </div>
//             </div>
//          </div>
//       </div>
//    </section>
// );
