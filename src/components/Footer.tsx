import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@trueupmedia.com', label: 'Email' },
  ];

  return (
    <footer className="bg-card border-t border-border" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              True Up Media
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transforming brands into digital powerhouses with creative storytelling and data-driven execution.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('about')}
                className="block text-sm text-muted-foreground hover:text-accent transition-colors hover-elevate px-2 py-1 rounded"
                data-testid="footer-link-about"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block text-sm text-muted-foreground hover:text-accent transition-colors hover-elevate px-2 py-1 rounded"
                data-testid="footer-link-services"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="block text-sm text-muted-foreground hover:text-accent transition-colors hover-elevate px-2 py-1 rounded"
                data-testid="footer-link-process"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-sm text-muted-foreground hover:text-accent transition-colors hover-elevate px-2 py-1 rounded"
                data-testid="footer-link-contact"
              >
                Contact
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-background hover-elevate text-muted-foreground hover:text-accent transition-colors"
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="pt-8 border-t border-border text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p>&copy; {new Date().getFullYear()} True Up Media. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
