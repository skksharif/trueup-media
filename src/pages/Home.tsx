import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import Achievements from '@/components/Achievements';
import HowWeWork from '@/components/HowWeWork';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Achievements />
      <HowWeWork />
      <Contact />
      <Footer />
    </div>
  );
}
