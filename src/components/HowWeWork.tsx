import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Lightbulb, Rocket, TrendingUp, Target } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Understand the Brand',
    description: 'Deep dive into your business, goals, and target audience.',
  },
  {
    icon: Lightbulb,
    title: 'Strategy Planning',
    description: 'Develop a comprehensive roadmap aligned with your objectives.',
  },
  {
    icon: Rocket,
    title: 'Creative Execution',
    description: 'Bring the strategy to life with compelling content and campaigns.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Tracking',
    description: 'Monitor metrics and optimize for continuous improvement.',
  },
  {
    icon: Target,
    title: 'Growth & Optimization',
    description: 'Scale what works and refine strategies for sustained success.',
  },
];

export default function HowWeWork() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="process" className="py-20 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary" data-testid="text-process-title">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven 5-step process ensures your success at every stage.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="hidden lg:block relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-chart-1 via-accent to-chart-1 transform -translate-y-1/2" />
            <div className="grid grid-cols-5 gap-8 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + index * 0.15, duration: 0.6 }}
                  data-testid={`step-${index}`}
                >
                  <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl mb-4 relative z-10 hover-elevate border-4 border-background shadow-lg shadow-accent/20">
                    {index + 1}
                  </div>
                  <div className="bg-card p-4 rounded-xl hover-elevate text-center">
                    <step.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                    <h3 className="font-semibold mb-2 text-sm" data-testid={`text-step-title-${index}`}>
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground" data-testid={`text-step-description-${index}`}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex gap-4"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
                data-testid={`mobile-step-${index}`}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold shadow-md shadow-accent/20">
                    {index + 1}
                  </div>
                </div>
                <div className="bg-card p-4 rounded-xl hover-elevate flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <step.icon className="w-5 h-5 text-accent" />
                    <h3 className="font-semibold" data-testid={`text-mobile-step-title-${index}`}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground" data-testid={`text-mobile-step-description-${index}`}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
