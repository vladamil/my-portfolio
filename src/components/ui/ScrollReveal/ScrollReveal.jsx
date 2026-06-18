'use client';

import { useEffect, useState, useRef } from 'react';

export default function ScrollReveal({
   children,
   className = '',
   activeClass = '',
   threshold = 0.2,
   as: Component = 'div',
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
         { threshold },
      );

      if (elementRef.current) {
         observer.observe(elementRef.current);
      }

      return () => observer.disconnect();
   }, [threshold]);

   return (
      <Component
         ref={elementRef}
         className={`${className} ${isVisible ? activeClass : ''}`}
      >
         {children}
      </Component>
   );
}
