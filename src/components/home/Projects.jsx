import ProjectsClientContainer from './ProjectsClientContainer';

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
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Cloudinary', 'JWT', 'Resend'],
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
   return (
      <section id="projects" className={styles.projectsSection}>
         <ProjectsClientContainer projectsData={projectsData} />
      </section>
   );
}
