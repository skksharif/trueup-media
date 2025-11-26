import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: 'Message Sent!',
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, label: 'Email', value: 'hello@trueupmedia.com', href: 'mailto:hello@trueupmedia.com' },
    { icon: Globe, label: 'Website', value: 'www.trueupmedia.com', href: 'https://trueupmedia.com' },
    { icon: MapPin, label: 'Address', value: '123 Digital Ave, Marketing City, MC 12345', href: null },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-background to-chart-1/8" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary" data-testid="text-contact-title">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your brand? Let's start the conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 hover-elevate p-3 rounded-lg" data-testid={`contact-info-${index}`}>
                    <div className="p-2 rounded-lg bg-accent/15 text-accent">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-medium text-foreground hover:text-accent transition-colors"
                          data-testid={`link-${info.label.toLowerCase()}`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium" data-testid={`text-${info.label.toLowerCase()}`}>
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="mt-2 focus:ring-2 focus:ring-accent transition-all"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                    className="mt-2 focus:ring-2 focus:ring-accent transition-all"
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    required
                    rows={4}
                    className="mt-2 focus:ring-2 focus:ring-accent transition-all resize-none"
                    data-testid="input-message"
                  />
                </div>
                <Button type="submit" className="w-full bg-accent text-accent-foreground shadow-lg shadow-accent/20" size="lg" data-testid="button-submit">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
