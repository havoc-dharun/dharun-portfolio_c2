import { motion } from 'framer-motion';
import { useState } from 'react';
import { Download, FileText, BarChart, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Resume() {
  const [activeTab, setActiveTab] = useState('analytics');

  const resumeVersions = [
    {
      id: 'analytics',
      title: 'Business Analytics & Marketing',
      icon: BarChart,
      description: 'Focused on data analysis, business intelligence, and marketing analytics',
      image: '/lovable-uploads/6d0569c8-5863-4491-870b-25731be1f7e7.png',
      downloadUrl: '#',
    },
    {
      id: 'marketing',
      title: 'MBA - Marketing',
      icon: FileText,
      description: 'Emphasizing marketing strategy, digital marketing, and business development',
      image: '/lovable-uploads/99fce85c-ea80-405a-9e60-ba10192faa2a.png',
      downloadUrl: '#',
    },
    {
      id: 'hr',
      title: 'HR & Business Analytics',
      icon: Users,
      description: 'Combining human resources expertise with analytical capabilities',
      image: '/lovable-uploads/fa5a9da3-17db-45ef-8d6c-ac6ae3f22a8b.png',
      downloadUrl: '#',
    },
  ];

  const highlights = [
    {
      title: 'Education',
      items: [
        'MBA in HR & Marketing - Bannari Amman Institute of Technology',
        'B.Com (Computer Applications) - NGM College, Pollachi',
        'HSC Science - RKR Gnanodhaya Matriculation School',
      ],
    },
    {
      title: 'Key Skills',
      items: [
        'Data Analysis & Visualization',
        'Digital Marketing & SEO/SEM',
        'AI Automation & Workflow Design',
        'Web Development (React, Python)',
        'Business Intelligence Tools',
      ],
    },
    {
      title: 'Experience',
      items: [
        'Marketing Analyst Intern - Faraday Ozone (Current)',
        'Technical Support Engineer - ServerCake India',
        'Freelance Web Developer & Data Analyst',
      ],
    },
    {
      title: 'Achievements',
      items: [
        'India Book of Records - Teen Explorer',
        'National Level Best Management Team (2nd Prize)',
        'Handball Zonal Championship (3rd Position)',
      ],
    },
  ];

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
            My <span className="bg-hero-gradient bg-clip-text text-transparent">Resume</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from specialized sresume versions tailored for different career paths. 
            Each version highlights relevant skills and experiences for specific roles.
          </p>
        </motion.div>

        {/* Resume Versions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {resumeVersions.map((version) => (
                <TabsTrigger 
                  key={version.id} 
                  value={version.id}
                  className="flex items-center space-x-2"
                >
                  <version.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{version.title}</span>
                  <span className="sm:hidden">{version.title.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {resumeVersions.map((version) => (
              <TabsContent key={version.id} value={version.id}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center space-x-3">
                          <version.icon className="h-6 w-6 text-primary" />
                          <span>{version.title}</span>
                        </CardTitle>
                        <p className="text-muted-foreground mt-2">{version.description}</p>
                      </div>
                      <Button className="flex items-center space-x-2">
                        <Download className="h-4 w-4" />
                        <span>Download PDF</span>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Resume Preview */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="relative"
                      >
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                          <img
                            src={version.image}
                            alt={`${version.title} Resume`}
                            className="w-full h-auto"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
                      </motion.div>

                      {/* Resume Highlights */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-6"
                      >
                        <h3 className="text-2xl font-semibold">Resume Highlights</h3>
                        <div className="space-y-6">
                          {highlights.map((section, index) => (
                            <div key={index}>
                              <h4 className="font-semibold text-lg mb-3 text-primary">
                                {section.title}
                              </h4>
                              <ul className="space-y-2">
                                {section.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-muted-foreground text-sm">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* PDF Download Function */}
        <div className="hidden">
          <a 
            id="resume-download-link" 
            href="/lovable-uploads/6d0569c8-5863-4491-870b-25731be1f7e7.png" 
            download="Dharun_S_Resume.pdf"
          />
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {resumeVersions.map((version, index) => (
            <Card key={index} className="text-center hover:shadow-card transition-shadow">
              <CardContent className="p-6">
                <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <version.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{version.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{version.description}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    const link = document.getElementById('resume-download-link') as HTMLAnchorElement;
                    if (link) link.click();
                  }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-center mt-20 p-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to <span className="text-primary">Collaborate</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Download my resume and let's discuss how my skills and experience 
            can contribute to your team's success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/contact">
                Contact Me
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/projects">
                View Portfolio
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}