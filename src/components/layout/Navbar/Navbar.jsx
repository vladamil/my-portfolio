'use client';
import { useState } from 'react';
import scrollToSection from '@/utils/ScrollToSection';
import { useScrollActiveLink } from '@/hooks/useScrollActiveLink';

import styles from './Navbar.module.css';

const navItems = [
   { label: 'Home', id: 'hero' },
   { label: 'About', id: 'about' },
   { label: 'Projects', id: 'projects' },
   { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);

   const sectionIds = navItems.map((section) => section.id);

   const activeLink = useScrollActiveLink(sectionIds);

   return (
      <nav className={styles.nav}>
         <div className={styles.container}>
            {/* Logo */}
            <button
               className={styles.logo}
               onClick={() => {
                  scrollToSection('hero');
               }}
            >
               DEV<span>.</span>PORTFOLIO
            </button>

            {/* Desktop Links */}
            <ul className={`${styles.links} ${isOpen ? styles.active : ''}`}>
               {navItems.map((item) => (
                  <li key={item.id}>
                     <button
                        className={`${styles.navButton} ${
                           activeLink === item.id ? styles.activeLink : ''
                        }`}
                        onClick={() => {
                           scrollToSection(item.id);
                           setIsOpen(false);
                        }}
                     >
                        {item.label}
                     </button>
                  </li>
               ))}
            </ul>

            {/* Hamburger - Only visible on mobile */}
            <button
               className={styles.hamburger}
               onClick={() => setIsOpen(!isOpen)}
               aria-label="Toggle menu"
            >
               <div className={isOpen ? styles.line1Open : styles.line1}></div>
               <div className={isOpen ? styles.line2Open : styles.line2}></div>
            </button>
         </div>
      </nav>
   );
}
