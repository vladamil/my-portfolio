'use client';
import { useState } from 'react';
import Link from 'next/link';

import styles from './Navbar.module.css';

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <nav className={styles.nav}>
         <div className={styles.container}>
            <Link href="/" className={styles.logo}>
               DEV<span>.</span>PORTFOLIO
            </Link>

            {/* Desktop Links */}
            <ul className={`${styles.links} ${isOpen ? styles.active : ''}`}>
               <li>
                  <Link href="#about" onClick={() => setIsOpen(false)}>
                     About
                  </Link>
               </li>
               <li>
                  <Link href="#projects" onClick={() => setIsOpen(false)}>
                     Projects
                  </Link>
               </li>
               <li>
                  <Link href="#contact" onClick={() => setIsOpen(false)}>
                     Contact
                  </Link>
               </li>
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
