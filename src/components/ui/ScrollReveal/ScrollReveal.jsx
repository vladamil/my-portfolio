'use client';

import { useEffect, useState, useRef } from 'react';

export default function ScrollReveal({
   children,
   className = '',
   activeClass = '',
}) {
   const [isVisible, setIsVisible] = useState(false);
   const elementRef = useRef(null);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setIsVisible(true);
               observer.unobserve(entry.target);
            }
         },
         { threshold: 0.2 },
      );

      if (elementRef.current) {
         observer.observe(elementRef.current);
      }

      return () => observer.disconnect();
   }, []);

   return (
      <div
         ref={elementRef}
         className={`${className} ${isVisible ? activeClass : ''}`}
      >
         {children}
      </div>
   );
}
