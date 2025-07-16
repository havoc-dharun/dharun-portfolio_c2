import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { 
  Target, Bot, Code, BarChart, Heart
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Marketing',
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { 
          name: 'Google Ads', 
          route: 'google-ads',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg'
        },
        { 
          name: 'SEO/SEM', 
          route: 'seo-sem',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
        },
        { 
          name: 'Mailchimp', 
          route: 'mailchimp',
          logo: 'https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon.svg'
        },
        { 
          name: 'Google Analytics', 
          route: 'google-analytics',
          logo: 'https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg'
        },
        { 
          name: 'Zoho CRM', 
          route: 'zoho-crm',
          logo: 'https://cdn.worldvectorlogo.com/logos/zoho.svg'
        },
        { 
          name: 'HubSpot', 
          route: 'hubspot',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg'
        },
        { 
          name: 'Campaign Optimization', 
          route: 'campaign-optimization',
          logo: 'https://cdn.worldvectorlogo.com/logos/facebook-ads.svg'
        },
        { 
          name: 'Funnel Design', 
          route: 'funnel-design',
          logo: 'https://cdn.worldvectorlogo.com/logos/clickfunnels-1.svg'
        },
        { 
          name: 'Copywriting', 
          route: 'copywriting',
          logo: 'https://cdn.worldvectorlogo.com/logos/grammarly-1.svg'
        },
        { 
          name: 'Lead Generation', 
          route: 'lead-generation',
          logo: 'https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg'
        },
        { 
          name: 'Cold Calling', 
          route: 'cold-calling',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.svg'
        },
        { 
          name: 'Deal Closing', 
          route: 'deal-closing',
          logo: 'https://cdn.worldvectorlogo.com/logos/pipedrive.svg'
        },
        { 
          name: 'Salesforce', 
          route: 'salesforce',
          logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg'
        },
        { 
          name: 'Semrush', 
          route: 'semrush',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Semrush_logo.svg'
        },
      ],
    },
    {
      title: 'AI Agents & Automation',
      icon: Bot,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { 
          name: 'n8n', 
          route: 'n8n',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/N8n_Logo.svg'
        },
        { 
          name: 'Zapier', 
          route: 'zapier',
          logo: 'https://cdn.worldvectorlogo.com/logos/zapier.svg'
        },
        { 
          name: 'Make.com', 
          route: 'make',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Make_Logo.svg'
        },
        { 
          name: 'Claude', 
          route: 'claude',
          logo: 'https://claude.ai/favicon.ico'
        },
        { 
          name: 'OpenAI', 
          route: 'openai',
          logo: 'https://cdn.worldvectorlogo.com/logos/openai-2.svg'
        },
        { 
          name: 'Airtable', 
          route: 'airtable',
          logo: 'https://cdn.worldvectorlogo.com/logos/airtable.svg'
        },
        { 
          name: 'CRM Triggers', 
          route: 'crm-triggers',
          logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg'
        },
        { 
          name: 'Email Bots', 
          route: 'email-bots',
          logo: 'https://cdn.worldvectorlogo.com/logos/gmail-icon.svg'
        },
        { 
          name: 'AI Workflows', 
          route: 'ai-workflows',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Artificial_Intelligence_AI_icon.svg'
        },
      ],
    },
    {
      title: 'Web Development',
      icon: Code,
      color: 'from-green-500 to-teal-500',
      skills: [
        { 
          name: 'HTML', 
          route: 'html',
          logo: 'https://cdn.worldvectorlogo.com/logos/html-1.svg'
        },
        { 
          name: 'CSS', 
          route: 'css',
          logo: 'https://cdn.worldvectorlogo.com/logos/css-3.svg'
        },
        { 
          name: 'React', 
          route: 'react',
          logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg'
        },
        { 
          name: 'Python', 
          route: 'python',
          logo: 'https://cdn.worldvectorlogo.com/logos/python-5.svg'
        },
        { 
          name: 'C', 
          route: 'c',
          logo: 'https://cdn.worldvectorlogo.com/logos/c-1.svg'
        },
        { 
          name: 'SQL', 
          route: 'sql',
          logo: 'https://cdn.worldvectorlogo.com/logos/mysql-6.svg'
        },
        { 
          name: 'MongoDB', 
          route: 'mongodb',
          logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg'
        },
        { 
          name: 'Firebase', 
          route: 'firebase',
          logo: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg'
        },
        { 
          name: 'Supabase', 
          route: 'supabase',
          logo: 'https://cdn.worldvectorlogo.com/logos/supabase-logo.svg'
        },
        { 
          name: 'Git', 
          route: 'git',
          logo: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg'
        },
        { 
          name: 'GitHub', 
          route: 'github',
          logo: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg'
        },
        { 
          name: 'Netlify', 
          route: 'netlify',
          logo: 'https://cdn.worldvectorlogo.com/logos/netlify.svg'
        },
      ],
    },
    {
      title: 'Business Analytics',
      icon: BarChart,
      color: 'from-orange-500 to-red-500',
      skills: [
        { 
          name: 'Power BI', 
          route: 'power-bi',
          logo: 'https://cdn.worldvectorlogo.com/logos/power-bi.svg'
        },
        { 
          name: 'Tableau', 
          route: 'tableau',
          logo: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg'
        },
        { 
          name: 'Excel', 
          route: 'excel',
          logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-excel-2013.svg'
        },
        { 
          name: 'SPSS', 
          route: 'spss',
          logo: 'https://cdn.worldvectorlogo.com/logos/spss.svg'
        },
        { 
          name: 'SQL', 
          route: 'sql',
          logo: 'https://cdn.worldvectorlogo.com/logos/mysql-6.svg'
        },
        { 
          name: 'R', 
          route: 'r',
          logo: 'https://cdn.worldvectorlogo.com/logos/r-lang.svg'
        },
        { 
          name: 'Python', 
          route: 'python',
          logo: 'https://cdn.worldvectorlogo.com/logos/python-5.svg'
        },
        { 
          name: 'Pandas', 
          route: 'pandas',
          logo: 'https://cdn.worldvectorlogo.com/logos/pandas.svg'
        },
        { 
          name: 'Matplotlib', 
          route: 'matplotlib',
          logo: 'https://matplotlib.org/_static/images/logo2.svg'
        },
        { 
          name: 'Seaborn', 
          route: 'seaborn',
          logo: 'https://seaborn.pydata.org/_static/logo-wide-lightbg.svg'
        },
        { 
          name: 'Dashboarding', 
          route: 'dashboarding',
          logo: 'https://cdn.worldvectorlogo.com/logos/grafana.svg'
        },
        { 
          name: 'Predictive Analytics', 
          route: 'predictive-analytics',
          logo: 'https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg'
        },
        { 
          name: 'Data Cleaning', 
          route: 'data-cleaning',
          logo: 'https://cdn.worldvectorlogo.com/logos/alteryx.svg'
        },
      ],
    },
    {
      title: 'Vibe Coding',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      skills: [
        { 
          name: 'Lovable (V0)', 
          route: 'lovable',
          logo: 'https://lovable.dev/favicon.ico'
        },
        { 
          name: 'Bolt', 
          route: 'bolt',
          logo: 'https://bolt.new/favicon.ico'
        },
        { 
          name: 'Claude', 
          route: 'claude',
          logo: 'https://claude.ai/favicon.ico'
        },
        { 
          name: 'GPT-4', 
          route: 'gpt-4',
          logo: 'https://cdn.worldvectorlogo.com/logos/openai-2.svg'
        },
        { 
          name: 'Hugging Face', 
          route: 'hugging-face',
          logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg'
        },
      ],
    },
  ];

  const quote = {
    text: "Code like it loves the user. Build like it knows the pain.",
    author: "Dharun S"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
            My <span className="bg-hero-gradient bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning marketing, AI automation, web development, 
            and business analytics. Each skill represents countless hours of learning and practical application.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants}>
              <Card className="overflow-hidden">
                <CardHeader className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-10`} />
                  <div className="relative flex items-center space-x-4">
                    <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg`}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="group"
                      >
                        <Link to={`/tools/${skill.route}`}>
                          <div className="flex flex-col items-center space-y-3 p-4 bg-white dark:bg-card rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer border border-border/50 hover:border-primary/30">
                            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                              <img 
                                src={skill.logo} 
                                alt={`${skill.name} logo`}
                                className="w-8 h-8 object-contain"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  const fallback = target.nextElementSibling as HTMLElement;
                                  if (fallback) fallback.style.display = 'flex';
                                }}
                              />
                              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center" style={{ display: 'none' }}>
                                <span className="text-sm font-bold text-primary">
                                  {skill.name.charAt(0)}
                                </span>
                              </div>
                            </div>
                            <span className="font-medium text-sm text-center leading-tight">{skill.name}</span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-12">
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
                <blockquote className="text-2xl md:text-3xl font-bold text-foreground mb-6 italic">
                  "{quote.text}"
                </blockquote>
                <cite className="text-lg text-muted-foreground">
                  — {quote.author}
                </cite>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skill Proficiency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-20"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl">Expertise Levels</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { level: 'Expert', skills: ['Marketing', 'Excel'], color: 'bg-green-500', percentage: 90 },
                  { level: 'Advanced', skills: ['Business Analytics', 'AI Automation'], color: 'bg-blue-500', percentage: 75 },
                  { level: 'Intermediate', skills: ['Python', 'Data Science'], color: 'bg-yellow-500', percentage: 60 },
                  { level: 'Learning', skills: ['Machine Learning', 'DevOps'], color: 'bg-purple-500', percentage: 40 },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 ${item.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg`}>
                      {item.percentage}%
                    </div>
                    <h3 className="font-semibold mb-2">{item.level}</h3>
                    <div className="space-y-1">
                      {item.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}