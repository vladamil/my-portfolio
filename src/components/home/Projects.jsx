'use client';
import { useState } from 'react';
import ScrollReveal from '../ui/ScrollReveal/ScrollReveal';

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
      liveUrl: 'https://instaclone.vladimir-milinic.com/',
      githubUrl: 'https://github.com/vladamil/insta-clone',
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
      liveUrl: 'https://bellca-studio.vladimir-milinic.com/',
      githubUrl: 'https://github.com/vladamil/bellca-nextjs',
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
      liveUrl: 'https://shopping-list-bata.netlify.app/',
      githubUrl: 'https://github.com/vladamil/shopping-list',
   },
];

export default function Projects() {
   const [activeCard, setActiveCard] = useState(0);

   return (
      <section id="projects" className={styles.projectsSection}>
         <div className={styles.container}>
            {/* PREMIUM CONTROLS: Left Sidebar Navigation */}
            <ScrollReveal
               className={styles.navigationSidebar}
               activeClass={styles.active}
            >
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
            </ScrollReveal>

            {/* STACKED CARDS VIEWPORT: Right Side */}
            <ScrollReveal
               className={styles.deckWrapper}
               activeClass={styles.active}
               threshold={0.05}
            >
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
                           {/* NEW FOOTER LAYER: Separates tags and action paths cleanly */}
                           <div className={styles.cardFooter}>
                              <div className={styles.tagContainer}>
                                 {project.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className={styles.tag}>
                                       {tag}
                                    </span>
                                 ))}
                              </div>

                              <div className={styles.actionLinks}>
                                 <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.iconLink}
                                    title="View Source Code"
                                 >
                                    {/* Simple minimal SVG representation of GitHub */}
                                    <svg
                                       viewBox="0 0 24 24"
                                       width="20"
                                       height="20"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                       fill="none"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                    >
                                       <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                 </a>
                                 <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.iconLink}
                                    title="Launch Live Application"
                                 >
                                    {/* Simple minimal SVG representation of External Link */}
                                    <svg
                                       viewBox="0 0 24 24"
                                       width="20"
                                       height="20"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                       fill="none"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                    >
                                       <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                       <polyline points="15 3 21 3 21 9"></polyline>
                                       <line
                                          x1="10"
                                          y1="14"
                                          x2="21"
                                          y2="3"
                                       ></line>
                                    </svg>
                                 </a>
                              </div>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </ScrollReveal>
         </div>
      </section>
   );
}
