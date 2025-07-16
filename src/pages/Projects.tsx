import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Database, Bot } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Projects() {
  const projects = [
    {
      title: 'Business Card Scanner - Pytesseract',
      description: 'A Python-based tool that scans business cards and automatically extracts key contact details to streamline lead generation. Using Pytesseract OCR and OpenCV, the system reads and processes card images to identify names, phone numbers, emails, and company names—making it easy to capture leads from physical business cards and convert them into digital contacts.',
      technologies: ['Python', 'Pytesseract', 'OpenCV', 'OCR', 'Image Processing'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Database,
      category: 'AI & Automation',
      period: 'Jun 2025 - Present',
    },
    {
      title: 'Library Automation System',
      description: 'A comprehensive library management system built for educational institutions. Features include book cataloging, member management, issue/return tracking, and automated fine calculations.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: 'http://smslibrarymanagement.netlify.app/',
      githubUrl: '#',
      icon: Database,
      category: 'Web Development',
    },
    {
      title: 'BIT Student Hub',
      description: 'An interconnected web platform for students featuring academic resources, event management, student portal, and community features. Built to enhance student engagement and academic collaboration.',
      technologies: ['React', 'Firebase', 'CSS3', 'JavaScript'],
      liveUrl: 'https://studenthubbit.netlify.app/',
      githubUrl: '#',
      icon: Code,
      category: 'Web Development',
    },
    {
      title: 'Fabrication System',
      description: 'A web-based billing tool for fabrication companies to manage product costing, customer bills, and material tracking. Includes PDF/Excel exports, customer-wise bill storage, and backend data management via Supabase.',
      technologies: ['React', 'Supabase', 'TailwindCSS', 'Vibe Coding'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Database,
      category: 'Web Development',
    },
    {
      title: 'Ozone STP Control & Monitoring Platform',
      description: 'A tablet-optimized web platform for managing ozone-based sewage treatment systems (STP) in swimming pools. Designed for on-site operators, the system enables real-time monitoring via MQTT, manual control of pumps and dosing units, dynamic sensor threshold configuration, and MQTT topic management—all within a password-protected settings panel. Includes graph-based insights and filtration status tracking, built for reliable field use.',
      technologies: ['React', 'MQTT.js', 'Supabase', 'TailwindCSS', 'Vibe Coding'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Bot,
      category: 'IoT & Development',
    },
    {
      title: 'AI Agents for Business',
      description: 'Automated business workflows using AI agents. Includes CRM triggers, email automation, lead generation, and customer data management using n8n workflows and GitHub integration.',
      technologies: ['n8n', 'GitHub', 'APIs', 'Automation'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Bot,
      category: 'AI & Automation',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-hero-gradient bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work in web development, AI automation, and data analytics. 
            Each project represents a unique challenge and learning opportunity.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <project.icon className="h-8 w-8 text-primary" />
                    </div>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    {project.liveUrl !== '#' && (
                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl !== '#' && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20 p-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl"
        >
          <h2 className="text-3xl font-bold mb-4">
            Interested in <span className="text-primary">Collaborating</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new projects and challenges. 
            Whether it's web development, data analysis, or AI automation, 
            let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/contact">
              Start a Project
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/havoc-dharun" target="_blank" rel="noopener noreferrer">
              View All Work
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}