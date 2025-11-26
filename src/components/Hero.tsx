import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-chart-1/8 to-chart-3/5">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-chart-1/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ type: 'spring', stiffness: 50 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/25 rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x,
            y: -mousePosition.y,
          }}
          transition={{ type: 'spring', stiffness: 50 }}
        />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/15 backdrop-blur-sm rounded-full mb-6 border border-accent/30"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary">Digital Marketing Excellence</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-chart-1 to-chart-3 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            data-testid="text-hero-title"
          >
            We Transform Brands Into Digital Powerhouses
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            data-testid="text-hero-subtitle"
          >
            True Up Media is a full-service brand marketing and digital growth agency helping businesses build a strong, memorable, and impactful online presence.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-accent text-accent-foreground hover-elevate group px-8 shadow-lg shadow-accent/20"
              data-testid="button-get-started"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="bg-background/50 backdrop-blur-sm border-primary/40 text-primary hover:border-accent"
              data-testid="button-book-consultation"
            >
              Book Consultation
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
