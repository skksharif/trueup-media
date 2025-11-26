import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Zap, Users, TrendingUp } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const icons = [
    { Icon: Target, color: 'text-accent' },
    { Icon: Zap, color: 'text-accent' },
    { Icon: Users, color: 'text-accent' },
    { Icon: TrendingUp, color: 'text-accent' },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary" data-testid="text-about-title">
            About True Up Media
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed" data-testid="text-about-description">
            True Up Media is a full-service brand marketing and digital growth agency helping businesses build a strong, memorable, and impactful online presence. With creative storytelling, strategy, and data-driven execution, we elevate brands across all digital platforms.
          </p>

          <div className="flex justify-center gap-8 flex-wrap">
            {icons.map(({ Icon, color }, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <div className={`p-4 rounded-2xl bg-card hover-elevate ${color}`}>
                  <Icon className="w-8 h-8 md:w-10 md:h-10" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
