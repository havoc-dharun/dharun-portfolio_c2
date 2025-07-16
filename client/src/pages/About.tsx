import { motion } from 'framer-motion';
import { GraduationCap, Award, Globe, Trophy, Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function About() {
  const education = [
    {
      degree: 'Master of Business Administration',
      field: 'HR & Marketing',
      institution: 'Bannari Amman Institute of Technology',
      period: '2024-2026',
    },
    {
      degree: 'Bachelor of Commerce',
      field: 'Computer Applications',
      institution: 'Nallamuthugounder Mahalingam College',
      period: '2021-2024',
    },
  ];

  const certifications = [
    'AI in Marketing Course (NPTEL)',
    'Digital Marketing Course',
    'Spoken Tutorial (Computers)',
    'Business Analytics Course',
    'Introduction to Computer Course',
  ];

  const achievements = [
    {
      icon: Trophy,
      title: 'India Book of Records',
      description: 'Teen Explorer - Explored 12 north states in 27 days at age 19',
      year: '2024',
    },
    {
      icon: Award,
      title: 'National Level Best Management Team',
      description: 'Secured 2nd prize at SIIMS Business School',
      year: '2025',
    },
    {
      icon: Trophy,
      title: 'Handball Zonal Medal',
      description: 'Secured 3rd Position under Bharathiar University',
      year: '2022',
    },
  ];

  const languages = ['English', 'Tamil'];

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
            About <span className="bg-hero-gradient bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate business enthusiast with an MBA background, dedicated to turning 
            complex data into actionable business insights.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Profile & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="p-6">
              <div className="text-center mb-6">
                <div className="w-40 h-40 mx-auto mb-6 relative">
                  <div className="absolute inset-0 bg-hero-gradient rounded-full blur-xl opacity-30" />
                  <img
                    src="/lovable-uploads/e5a46df2-defc-4f13-8d8e-922e14246791.png"
                    alt="Dharun S"
                    className="relative z-10 w-full h-full object-cover rounded-full shadow-lg"
                    style={{ objectPosition: 'center 85%', transform: 'scale(1)' }}
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2">Dharun S</h2>
                <p className="text-muted-foreground mb-4">
                  Business Analyst | Marketing Enthusiast
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Globe className="mr-2 h-4 w-4" />
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((lang) => (
                      <Badge key={lang} variant="secondary">{lang}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Contact</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Mail className="mr-2 h-4 w-4" />
                      dharunshanmugavel12@gmail.com
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Phone className="mr-2 h-4 w-4" />
                      8870981415
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-2 h-4 w-4" />
                      Coimbatore, India
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    As an MBA aspirant (2024–2026) with a focus on HR, Marketing, and Analytics, 
                    I bring a well-rounded understanding of business functions and data-driven strategy. 
                    I'm passionate about bridging analytics and operations to unlock business growth. 
                    With my background in business analytics and marketing, I understand both the 
                    technical and strategic aspects of data-driven solutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-primary pl-4">
                        <h3 className="font-semibold text-lg">{edu.degree}</h3>
                        <p className="text-primary">{edu.field}</p>
                        <p className="text-muted-foreground">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="mr-2 h-5 w-5" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center p-3 bg-muted/50 rounded-lg">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        <span className="text-sm">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <achievement.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{achievement.title}</h3>
                          <p className="text-muted-foreground text-sm">{achievement.description}</p>
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {achievement.year}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}