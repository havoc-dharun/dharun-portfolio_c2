import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Home() {
  const socialLinks = [
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/dharun-shanmugavel-bb7304315', 
      label: 'LinkedIn' 
    },
    { 
      icon: Github, 
      href: 'https://github.com/havoc-dharun', 
      label: 'GitHub' 
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/_havoc_dharun_/', 
      label: 'Instagram' 
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Hi, I'm{' '}
                <span className="bg-hero-gradient bg-clip-text text-transparent">
                  Dharun S
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-muted-foreground space-y-2"
              >
                <div>MBA Aspirant | Business & Data Explorer</div>
                <div>Marketing Dreamer. Automation Enthusiast.</div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg text-muted-foreground max-w-lg"
              >
                Passionate MBA aspirant with a foundation in business analytics, 
                marketing strategy, and automation. On a mission to bridge data and 
                business to drive strategic growth and innovation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Button size="lg" className="group" asChild>
                  <a href="/contact">
                  <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Get In Touch
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="group" asChild>
                  <a href="/resume">
                  <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Download Resume
                  </a>
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex space-x-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-card hover:shadow-glow"
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative flex justify-center items-center"
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
                <div className="absolute inset-0 bg-hero-gradient rounded-full blur-2xl opacity-30 animate-pulse" />
                <img
                  src="/lovable-uploads/e5a46df2-defc-4f13-8d8e-922e14246791.png"
                  alt="Dharun S"
                  className="relative z-10 object-cover rounded-full shadow-glow"
                  style={{ 
                    objectPosition: 'center 85%',
                    width: '111%',
                    height: '111%',
                    top: '10%',
                    left: '-5.5%'
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '2+', label: 'Years Experience' },
              { number: '25+', label: 'Projects Completed' },
              { number: '10+', label: 'Certifications' },
              { number: '5+', label: 'Business Media Profiles (SMM)' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-card transition-shadow">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}