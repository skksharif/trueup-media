import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Briefcase, Award, LineChart, Users, Headphones } from 'lucide-react';

const features = [
  {
    icon: Briefcase,
    title: 'Full-Service Brand Marketing',
    description: 'Comprehensive marketing solutions from strategy to execution, all under one roof.',
  },
  {
    icon: Award,
    title: 'Consistent, High-Quality Content',
    description: 'Premium content that resonates with your audience and drives engagement.',
  },
  {
    icon: LineChart,
    title: 'Data-Driven Strategy',
    description: 'Every decision backed by analytics and insights for maximum ROI.',
  },
  {
    icon: Users,
    title: 'Creative Team with Industry Experience',
    description: 'Seasoned professionals who understand your market and audience.',
  },
  {
    icon: Headphones,
    title: 'End-to-End Support',
    description: 'Dedicated support throughout your entire journey with us.',
  },
];

export default function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background to-chart-1/5" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary" data-testid="text-why-choose-title">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine creativity, strategy, and technology to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
            >
              <Card className="p-6 lg:p-8 h-full hover-elevate transition-all duration-300 group" data-testid={`card-feature-${index}`}>
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-accent/15 text-accent group-hover:bg-accent/25 transition-colors">
                    <feature.icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3" data-testid={`text-feature-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-feature-description-${index}`}>
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
