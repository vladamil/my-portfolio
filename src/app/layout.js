import { Inter, JetBrains_Mono } from 'next/font/google';
import CursorGlow from '@/components/ui/CursorGlow/CursorGlow';
import Navbar from '@/components/layout/Navbar/Navbar';
import './globals.css';

const inter = Inter({
   variable: '--font-inter',
   subsets: ['latin'],
});

const mono = JetBrains_Mono({
   variable: '--font-jetbrains',
   subsets: ['latin'],
});

export const metadata = {
   title: 'Vladimir Milinić • Web Engineer & Developer',
   description:
      'Crafting high-performance web solutions. Specializing in Next.js architectures, custom UI/UX design, and modern business applications.',
   keywords: [
      'Next.js Developer',
      'Web Developer Novi Sad',
      'Custom UI UX design',
      'Hire freelance web developer',
      'Premium custom website development',
   ],
   themeColor: '#0a0a0c',
};

export default function RootLayout({ children }) {
   return (
      <html lang="en" className={`${inter.variable} ${mono.variable}`}>
         <body>
            <CursorGlow />
            <Navbar />
            {/* Relative position just for z-index, to appear above CursorGlow*/}
            <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
         </body>
      </html>
   );
}
