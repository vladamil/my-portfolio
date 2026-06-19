import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Projects from '@/components/home/Projects';
import Contact from '@/components/home/Contact';
import Footer from '@/components/layout/Footer/Footer';

export default function Home() {
   return (
      <>
         <Hero />
         <About />
         <Projects />
         <Contact />
         <Footer />
      </>
   );
}
