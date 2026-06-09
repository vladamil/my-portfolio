import { useEffect, useState } from 'react';

export function useScrollActiveLink(sectionIds) {
   const [activeSection, setActiveSection] = useState('');

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               // If the section occupies more than 60% of the screen
               if (entry.isIntersecting) {
                  setActiveSection(entry.target.id);
               }
            });
         },
         {
            rootMargin: '0px',
            threshold: 0.6,
         },
      );

      // Look up the actual DOM elements for our IDs and watch them
      sectionIds.forEach((id) => {
         const element = document.getElementById(id);
         if (element) observer.observe(element);
      });

      return () => observer.disconnect();
   }, [sectionIds]);

   return activeSection;
}
