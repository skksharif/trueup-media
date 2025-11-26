import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Star, Rocket, Heart } from 'lucide-react';

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    { Icon: Trophy, label: '500+ Projects Delivered' },
    { Icon: Star, label: '95% Client Satisfaction' },
    { Icon: Rocket, label: '10+ Years Experience' },
    { Icon: Heart, label: '200+ Happy Clients' },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-chart-1/8 to-accent/10" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary" data-testid="text-achievements-title">
            Our Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proven track record of delivering exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
              data-testid={`achievement-${index}`}
            >
              <div className="inline-flex p-6 rounded-2xl bg-card hover-elevate transition-all duration-300 mb-4 group-hover:scale-110">
                <achievement.Icon className="w-12 h-12 text-accent" />
              </div>
              <p className="text-lg font-semibold" data-testid={`text-achievement-${index}`}>
                {achievement.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
