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
                  {projectsData.map((project, index) => {
                     // Dynamically fetch the card class (e.g., styles.card1, styles.card2)
                     const specificCardClass = styles[`card${index + 1}`];

                     return (
                        <div
                           key={project.id}
                           className={`${styles.card} ${specificCardClass}`}
                        >
                           <div className={styles.cardHeader}>
                              <span className={styles.cardNum}>
                                 {project.num}
                              </span>
                              <span className={styles.cardSubtitle}>
                                 {project.subtitle}
                              </span>
                           </div>

                           <h3 className={styles.cardTitle}>{project.title}</h3>
                           <p className={styles.cardDescription}>
                              {project.description}
                           </p>

                           <div className={styles.tagContainer}>
                              {project.tags.map((tag, tIdx) => (
                                 <span key={tIdx} className={styles.tag}>
                                    {tag}
                                 </span>
                              ))}
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      </section>
   );
}
