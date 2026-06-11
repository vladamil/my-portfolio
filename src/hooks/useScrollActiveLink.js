import { useEffect, useState } from 'react';

export function useScrollActiveLink(sectionIds) {
   const [activeSection, setActiveSection] = useState('');

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            // We use a local variable to find the absolute king of the screen in this frame
            let highestViewportShare = 0;
            let winningSectionId = '';

            // Check every single element currently being tracked
            sectionIds.forEach((id) => {
               const element = document.getElementById(id);
               if (!element) return;

               const rect = element.getBoundingClientRect();
               const viewportHeight = window.innerHeight;

               // Calculate the top and bottom boundaries clamped to the screen edges
               const visibleTop = Math.max(0, rect.top);
               const visibleBottom = Math.min(viewportHeight, rect.bottom);

               // If the element is on the screen, calculate its visible height pixels
               const visibleHeight = Math.max(0, visibleBottom - visibleTop);

               // Calculate what percentage of the TOTAL SCREEN this element takes up
               const viewportShare = visibleHeight / viewportHeight;

               // Track the section that holds the highest share of the screen
               if (viewportShare > highestViewportShare) {
                  highestViewportShare = viewportShare;
                  winningSectionId = id;
               }
            });

            // STRICT GUARD CLAUSE: Only activate if the winner takes up MORE than 50% of the screen
            if (highestViewportShare > 0.5) {
               setActiveSection(winningSectionId);
            }
         },
         {
            rootMargin: '0px',
            // We check the elements frequently as they scroll to keep our calculations pixel-perfect
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
         },
      );

      sectionIds.forEach((id) => {
         const element = document.getElementById(id);
         if (element) observer.observe(element);
      });

      return () => observer.disconnect();
   }, [sectionIds]);

   return activeSection;
}
