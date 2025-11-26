import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Target, Share2, Pencil, Video, Megaphone, BarChart3, Globe, Palette } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Brand Strategy & Consultation',
    description: 'Strategic planning and brand positioning to make your business stand out.',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Engaging content and community management across all platforms.',
  },
  {
    icon: Pencil,
    title: 'Content Creation',
    description: 'Compelling stories and content that connect with your audience.',
  },
  {
    icon: Video,
    title: 'Video Editing & Creative Editing',
    description: 'Professional video production and editing for maximum impact.',
  },
  {
    icon: Megaphone,
    title: 'Paid Advertising',
    description: 'Data-driven ad campaigns that deliver measurable results.',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics & Reporting',
    description: 'Comprehensive insights and reporting to track your growth.',
  },
  {
    icon: Globe,
    title: 'Website / Landing Page Design',
    description: 'Beautiful, conversion-optimized websites that drive results.',
  },
  {
    icon: Palette,
    title: 'Branding & Creative Design',
    description: 'Distinctive visual identity and creative assets for your brand.',
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 lg:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary" data-testid="text-services-title">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 + index * 0.05, duration: 0.6 }}
            >
              <Card className="p-6 h-full hover-elevate transition-all duration-300 group relative overflow-visible" data-testid={`card-service-${index}`}>
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-chart-1/10 to-accent/15 text-accent group-hover:from-chart-1/15 group-hover:to-accent/25 transition-all">
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-service-description-${index}`}>
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
