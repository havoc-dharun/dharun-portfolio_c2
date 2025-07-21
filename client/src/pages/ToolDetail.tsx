import { motion } from 'framer-motion';
import { useParams, Link } from 'wouter';
import { ArrowLeft, ExternalLink, Star, TrendingUp, Users, Zap, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export default function ToolDetail() {
  const { toolName } = useParams();

  // Tool data with descriptions
  const toolsData: Record<string, any> = {
    'google-ads': {
      name: 'Google Ads',
      category: 'Marketing',
      description: 'Google Ads is a powerful online advertising platform that allows businesses to display ads on Google search results and across the Google network.',
      proficiency: 85,
      experience: '2+ years',
      icon: '🎯',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Campaign Management',
        'Keyword Research',
        'Ad Copy Optimization',
        'Bid Strategy',
        'Performance Analytics',
        'Conversion Tracking'
      ],
      skills: [
        'Search Campaigns',
        'Display Advertising',
        'Shopping Ads',
        'Video Campaigns',
        'App Promotion',
        'Local Campaigns'
      ],
      certifications: [
        'Google Ads Search Certification',
        'Google Ads Display Certification',
        'Google Analytics Certified'
      ]
    },
    'seo-sem': {
      name: 'SEO/SEM',
      category: 'Marketing',
      description: 'Search Engine Optimization and Search Engine Marketing strategies to improve website visibility and drive targeted traffic.',
      proficiency: 80,
      experience: '2+ years',
      icon: '🔍',
      color: 'from-green-500 to-teal-500',
      features: [
        'Keyword Research',
        'On-Page Optimization',
        'Technical SEO',
        'Link Building',
        'Content Strategy',
        'Analytics & Reporting'
      ],
      skills: [
        'Google Search Console',
        'SEMrush',
        'Ahrefs',
        'Keyword Planning',
        'Content Optimization',
        'Local SEO'
      ]
    },
    'mailchimp': {
      name: 'Mailchimp',
      category: 'Marketing',
      description: 'Email marketing platform for creating, sending, and analyzing email campaigns to engage customers and drive conversions.',
      proficiency: 75,
      experience: '1+ years',
      icon: '📧',
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Email Campaign Creation',
        'Audience Segmentation',
        'Automation Workflows',
        'A/B Testing',
        'Analytics Dashboard',
        'Template Design'
      ],
      skills: [
        'Campaign Design',
        'List Management',
        'Automation Setup',
        'Performance Analysis',
        'Integration Setup',
        'Template Customization'
      ]
    },
    'google-analytics': {
      name: 'Google Analytics',
      category: 'Marketing',
      description: 'Web analytics service that tracks and reports website traffic, providing insights into user behavior and marketing performance.',
      proficiency: 85,
      experience: '2+ years',
      icon: '📊',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Traffic Analysis',
        'Conversion Tracking',
        'Audience Insights',
        'Goal Setting',
        'Custom Reports',
        'Real-time Data'
      ],
      skills: [
        'GA4 Setup',
        'Event Tracking',
        'Custom Dimensions',
        'Funnel Analysis',
        'Attribution Modeling',
        'Data Studio Integration'
      ]
    },
    'zoho-crm': {
      name: 'Zoho CRM',
      category: 'Marketing',
      description: 'Customer relationship management platform for managing sales processes, customer interactions, and business relationships.',
      proficiency: 70,
      experience: '1+ years',
      icon: '👥',
      color: 'from-indigo-500 to-purple-500',
      features: [
        'Lead Management',
        'Contact Organization',
        'Sales Pipeline',
        'Workflow Automation',
        'Reporting & Analytics',
        'Email Integration'
      ],
      skills: [
        'Lead Scoring',
        'Pipeline Management',
        'Custom Fields',
        'Automation Rules',
        'Report Generation',
        'Data Import/Export'
      ]
    },
    'hubspot': {
      name: 'HubSpot',
      category: 'Marketing',
      description: 'Comprehensive inbound marketing, sales, and customer service platform with CRM capabilities.',
      proficiency: 75,
      experience: '1+ years',
      icon: '🚀',
      color: 'from-orange-500 to-red-500',
      features: [
        'Inbound Marketing',
        'Lead Nurturing',
        'Content Management',
        'Social Media Tools',
        'Email Marketing',
        'Sales Automation'
      ],
      skills: [
        'Landing Pages',
        'Lead Flows',
        'Email Sequences',
        'Social Publishing',
        'Contact Segmentation',
        'Workflow Creation'
      ]
    },
    'campaign-optimization': {
      name: 'Campaign Optimization',
      category: 'Marketing',
      description: 'Strategic approach to improving marketing campaign performance through data analysis, testing, and continuous refinement.',
      proficiency: 80,
      experience: '2+ years',
      icon: '📈',
      color: 'from-green-500 to-blue-500',
      features: [
        'A/B Testing',
        'Performance Analysis',
        'Budget Optimization',
        'Audience Targeting',
        'Creative Testing',
        'ROI Improvement'
      ],
      skills: [
        'Statistical Analysis',
        'Conversion Rate Optimization',
        'Multi-variate Testing',
        'Attribution Modeling',
        'Budget Allocation',
        'Performance Forecasting'
      ]
    },
    'funnel-design': {
      name: 'Funnel Design',
      category: 'Marketing',
      description: 'Creating optimized customer journey paths from awareness to conversion, maximizing conversion rates at each stage.',
      proficiency: 75,
      experience: '1+ years',
      icon: '🎯',
      color: 'from-purple-500 to-indigo-500',
      features: [
        'Customer Journey Mapping',
        'Conversion Optimization',
        'Landing Page Design',
        'Lead Magnets',
        'Email Sequences',
        'Analytics Tracking'
      ],
      skills: [
        'User Experience Design',
        'Conversion Psychology',
        'Page Optimization',
        'Flow Analysis',
        'Testing Strategies',
        'Performance Metrics'
      ]
    },
    'copywriting': {
      name: 'Copywriting',
      category: 'Marketing',
      description: 'Creating compelling written content that persuades, informs, and drives action across various marketing channels.',
      proficiency: 80,
      experience: '2+ years',
      icon: '✍️',
      color: 'from-pink-500 to-rose-500',
      features: [
        'Persuasive Writing',
        'Brand Voice Development',
        'Content Strategy',
        'A/B Testing Copy',
        'Multi-channel Content',
        'Conversion Optimization'
      ],
      skills: [
        'Sales Copy',
        'Email Marketing',
        'Ad Copy',
        'Landing Pages',
        'Social Media Content',
        'Blog Writing'
      ]
    },
    'lead-generation': {
      name: 'Lead Generation',
      category: 'Marketing',
      description: 'Systematic approach to identifying and attracting potential customers through various digital marketing strategies.',
      proficiency: 85,
      experience: '2+ years',
      icon: '🎣',
      color: 'from-blue-500 to-purple-500',
      features: [
        'Lead Magnets',
        'Landing Pages',
        'Form Optimization',
        'Lead Scoring',
        'Nurture Campaigns',
        'Conversion Tracking'
      ],
      skills: [
        'Content Marketing',
        'Social Media Lead Gen',
        'Paid Advertising',
        'Email Marketing',
        'Webinar Marketing',
        'Referral Programs'
      ]
    },
    'cold-calling': {
      name: 'Cold Calling',
      category: 'Marketing',
      description: 'Direct sales technique involving contacting potential customers who have not previously expressed interest in the product or service.',
      proficiency: 70,
      experience: '1+ years',
      icon: '📞',
      color: 'from-red-500 to-pink-500',
      features: [
        'Script Development',
        'Objection Handling',
        'Prospect Research',
        'Call Planning',
        'Follow-up Strategies',
        'Performance Tracking'
      ],
      skills: [
        'Communication Skills',
        'Active Listening',
        'Persuasion Techniques',
        'Relationship Building',
        'Time Management',
        'CRM Integration'
      ]
    },
    'deal-closing': {
      name: 'Deal Closing',
      category: 'Marketing',
      description: 'Sales techniques and strategies for successfully converting prospects into customers and finalizing business transactions.',
      proficiency: 75,
      experience: '1+ years',
      icon: '🤝',
      color: 'from-green-500 to-emerald-500',
      features: [
        'Closing Techniques',
        'Negotiation Skills',
        'Objection Handling',
        'Value Proposition',
        'Contract Management',
        'Follow-up Processes'
      ],
      skills: [
        'Sales Psychology',
        'Negotiation Tactics',
        'Relationship Management',
        'Proposal Writing',
        'Price Negotiation',
        'Customer Retention'
      ]
    },
    'salesforce': {
      name: 'Salesforce',
      category: 'Marketing',
      description: 'Cloud-based CRM platform for managing customer relationships, sales processes, and business operations.',
      proficiency: 65,
      experience: '6 months',
      icon: '☁️',
      color: 'from-blue-500 to-indigo-500',
      features: [
        'Contact Management',
        'Opportunity Tracking',
        'Sales Forecasting',
        'Workflow Automation',
        'Custom Reports',
        'Integration Capabilities'
      ],
      skills: [
        'Lead Management',
        'Pipeline Tracking',
        'Custom Objects',
        'Process Builder',
        'Dashboard Creation',
        'Data Management'
      ]
    },
    'semrush': {
      name: 'Semrush',
      category: 'Marketing',
      description: 'All-in-one digital marketing toolkit for SEO, PPC, content marketing, and competitive research.',
      proficiency: 75,
      experience: '1+ years',
      icon: '🔧',
      color: 'from-orange-500 to-yellow-500',
      features: [
        'Keyword Research',
        'Competitor Analysis',
        'Site Audit',
        'Backlink Analysis',
        'Content Planning',
        'Rank Tracking'
      ],
      skills: [
        'SEO Analysis',
        'PPC Research',
        'Content Gap Analysis',
        'Technical SEO',
        'Link Building',
        'Market Research'
      ]
    },
    'n8n': {
      name: 'n8n',
      category: 'AI Agents & Automation',
      description: 'Open-source workflow automation tool that connects different services and APIs to create powerful automated processes.',
      proficiency: 80,
      experience: '1+ years',
      icon: '🔗',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Visual Workflow Builder',
        'API Integrations',
        'Conditional Logic',
        'Data Transformation',
        'Scheduling',
        'Error Handling'
      ],
      skills: [
        'Workflow Design',
        'API Connections',
        'Data Mapping',
        'Trigger Setup',
        'Node Configuration',
        'Debugging'
      ]
    },
    'zapier': {
      name: 'Zapier',
      category: 'AI Agents & Automation',
      description: 'Cloud-based automation platform that connects different apps and services to automate repetitive tasks.',
      proficiency: 85,
      experience: '2+ years',
      icon: '⚡',
      color: 'from-orange-500 to-red-500',
      features: [
        'App Integrations',
        'Multi-step Zaps',
        'Filters & Conditions',
        'Data Formatting',
        'Webhooks',
        'Team Collaboration'
      ],
      skills: [
        'Zap Creation',
        'Trigger Configuration',
        'Action Setup',
        'Data Mapping',
        'Testing & Debugging',
        'Workflow Optimization'
      ]
    },
    'make': {
      name: 'Make.com',
      category: 'AI Agents & Automation',
      description: 'Visual platform for creating, building, and automating workflows between apps and services without coding.',
      proficiency: 75,
      experience: '1+ years',
      icon: '🎨',
      color: 'from-blue-500 to-purple-500',
      features: [
        'Visual Scenario Builder',
        'Real-time Execution',
        'Error Handling',
        'Data Stores',
        'Webhooks',
        'Advanced Functions'
      ],
      skills: [
        'Scenario Design',
        'Module Configuration',
        'Data Processing',
        'API Integration',
        'Conditional Logic',
        'Performance Optimization'
      ]
    },
    'claude': {
      name: 'Claude',
      category: 'AI Agents & Automation',
      description: 'Advanced AI assistant by Anthropic for natural language processing, analysis, and automated content generation.',
      proficiency: 90,
      experience: '1+ years',
      icon: '🤖',
      color: 'from-indigo-500 to-purple-500',
      features: [
        'Natural Language Processing',
        'Content Generation',
        'Code Analysis',
        'Data Processing',
        'Reasoning & Logic',
        'Multi-format Output'
      ],
      skills: [
        'Prompt Engineering',
        'Content Creation',
        'Data Analysis',
        'Code Review',
        'Research Assistance',
        'Workflow Integration'
      ]
    },
    'openai': {
      name: 'OpenAI',
      category: 'AI Agents & Automation',
      description: 'AI platform providing powerful language models and APIs for building intelligent applications and automations.',
      proficiency: 85,
      experience: '1+ years',
      icon: '🧠',
      color: 'from-green-500 to-teal-500',
      features: [
        'GPT Models',
        'API Integration',
        'Fine-tuning',
        'Embeddings',
        'Image Generation',
        'Code Generation'
      ],
      skills: [
        'API Implementation',
        'Prompt Design',
        'Model Selection',
        'Response Processing',
        'Cost Optimization',
        'Integration Development'
      ]
    },
    'airtable': {
      name: 'Airtable',
      category: 'AI Agents & Automation',
      description: 'Cloud collaboration platform that combines the simplicity of a spreadsheet with the power of a database.',
      proficiency: 80,
      experience: '1+ years',
      icon: '📋',
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Database Management',
        'Custom Views',
        'Automation Rules',
        'Form Creation',
        'API Access',
        'Collaboration Tools'
      ],
      skills: [
        'Base Design',
        'Field Configuration',
        'View Creation',
        'Formula Writing',
        'Automation Setup',
        'Integration Development'
      ]
    },
    'crm-triggers': {
      name: 'CRM Triggers',
      category: 'AI Agents & Automation',
      description: 'Automated responses and actions triggered by specific events or conditions within customer relationship management systems.',
      proficiency: 75,
      experience: '1+ years',
      icon: '🎯',
      color: 'from-red-500 to-pink-500',
      features: [
        'Event-based Triggers',
        'Conditional Logic',
        'Multi-step Workflows',
        'Data Synchronization',
        'Notification Systems',
        'Performance Tracking'
      ],
      skills: [
        'Trigger Configuration',
        'Workflow Design',
        'Data Mapping',
        'Condition Setup',
        'Testing & Validation',
        'Performance Monitoring'
      ]
    },
    'email-bots': {
      name: 'Email Bots',
      category: 'AI Agents & Automation',
      description: 'Automated email systems that can send, receive, and process emails based on predefined rules and AI logic.',
      proficiency: 80,
      experience: '1+ years',
      icon: '📨',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Automated Responses',
        'Email Parsing',
        'Template Management',
        'Scheduling',
        'Personalization',
        'Analytics Tracking'
      ],
      skills: [
        'Email Automation',
        'Template Design',
        'Response Logic',
        'Data Extraction',
        'Integration Setup',
        'Performance Analysis'
      ]
    },
    'ai-workflows': {
      name: 'AI Workflows',
      category: 'AI Agents & Automation',
      description: 'Intelligent automated processes that use AI to make decisions, process data, and execute complex business logic.',
      proficiency: 85,
      experience: '1+ years',
      icon: '🔄',
      color: 'from-purple-500 to-indigo-500',
      features: [
        'Intelligent Decision Making',
        'Data Processing',
        'Multi-step Automation',
        'Learning Capabilities',
        'Error Recovery',
        'Performance Optimization'
      ],
      skills: [
        'Workflow Architecture',
        'AI Integration',
        'Logic Design',
        'Data Flow Management',
        'Testing & Validation',
        'Continuous Improvement'
      ]
    },
    'html': {
      name: 'HTML',
      category: 'Web Development',
      description: 'HyperText Markup Language - the standard markup language for creating web pages and web applications.',
      proficiency: 90,
      experience: '3+ years',
      icon: '🌐',
      color: 'from-orange-500 to-red-500',
      features: [
        'Semantic Markup',
        'Accessibility',
        'SEO Optimization',
        'Form Creation',
        'Media Integration',
        'Cross-browser Compatibility'
      ],
      skills: [
        'HTML5 Elements',
        'Semantic Structure',
        'Form Validation',
        'Accessibility Standards',
        'Meta Tags',
        'Performance Optimization'
      ]
    },
    'css': {
      name: 'CSS',
      category: 'Web Development',
      description: 'Cascading Style Sheets - stylesheet language used for describing the presentation of HTML documents.',
      proficiency: 85,
      experience: '3+ years',
      icon: '🎨',
      color: 'from-blue-500 to-purple-500',
      features: [
        'Responsive Design',
        'Flexbox & Grid',
        'Animations',
        'Custom Properties',
        'Preprocessors',
        'Modern CSS Features'
      ],
      skills: [
        'Layout Design',
        'Responsive Techniques',
        'CSS Grid',
        'Flexbox',
        'Animations & Transitions',
        'Performance Optimization'
      ]
    },
    'react': {
      name: 'React',
      category: 'Web Development',
      description: 'JavaScript library for building user interfaces, particularly single-page applications with component-based architecture.',
      proficiency: 85,
      experience: '2+ years',
      icon: '⚛️',
      color: 'from-cyan-500 to-blue-500',
      features: [
        'Component Architecture',
        'State Management',
        'Hooks',
        'Virtual DOM',
        'JSX Syntax',
        'Ecosystem Integration'
      ],
      skills: [
        'Functional Components',
        'React Hooks',
        'State Management',
        'Component Lifecycle',
        'Performance Optimization',
        'Testing'
      ]
    },
    'python': {
      name: 'Python',
      category: 'Web Development',
      description: 'High-level programming language known for its simplicity and versatility in web development, data analysis, and automation.',
      proficiency: 80,
      experience: '2+ years',
      icon: '🐍',
      color: 'from-green-500 to-yellow-500',
      features: [
        'Web Frameworks',
        'Data Analysis',
        'Automation Scripts',
        'API Development',
        'Database Integration',
        'Machine Learning'
      ],
      skills: [
        'Django/Flask',
        'Data Manipulation',
        'API Development',
        'Automation',
        'Database Operations',
        'Package Management'
      ]
    },
    'c': {
      name: 'C',
      category: 'Web Development',
      description: 'General-purpose programming language that provides low-level access to memory and efficient performance.',
      proficiency: 70,
      experience: '1+ years',
      icon: '⚙️',
      color: 'from-gray-500 to-blue-500',
      features: [
        'System Programming',
        'Memory Management',
        'Performance Optimization',
        'Hardware Interaction',
        'Algorithm Implementation',
        'Cross-platform Development'
      ],
      skills: [
        'Pointer Management',
        'Memory Allocation',
        'Data Structures',
        'Algorithm Design',
        'System Calls',
        'Debugging'
      ]
    },
    'sql': {
      name: 'SQL',
      category: 'Web Development',
      description: 'Structured Query Language for managing and manipulating relational databases.',
      proficiency: 85,
      experience: '2+ years',
      icon: '🗄️',
      color: 'from-indigo-500 to-purple-500',
      features: [
        'Database Design',
        'Query Optimization',
        'Data Manipulation',
        'Stored Procedures',
        'Indexing',
        'Performance Tuning'
      ],
      skills: [
        'Complex Queries',
        'Database Design',
        'Performance Optimization',
        'Data Analysis',
        'Stored Procedures',
        'Database Administration'
      ]
    },
    'mongodb': {
      name: 'MongoDB',
      category: 'Web Development',
      description: 'NoSQL document database that provides high performance, high availability, and easy scalability.',
      proficiency: 75,
      experience: '1+ years',
      icon: '🍃',
      color: 'from-green-500 to-teal-500',
      features: [
        'Document Storage',
        'Flexible Schema',
        'Horizontal Scaling',
        'Aggregation Pipeline',
        'Indexing',
        'Replication'
      ],
      skills: [
        'Document Modeling',
        'Query Operations',
        'Aggregation',
        'Index Management',
        'Performance Tuning',
        'Data Migration'
      ]
    },
    'firebase': {
      name: 'Firebase',
      category: 'Web Development',
      description: 'Google\'s mobile and web application development platform providing backend services and tools.',
      proficiency: 80,
      experience: '1+ years',
      icon: '🔥',
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Real-time Database',
        'Authentication',
        'Cloud Functions',
        'Hosting',
        'Analytics',
        'Cloud Messaging'
      ],
      skills: [
        'Database Management',
        'User Authentication',
        'Cloud Functions',
        'Real-time Updates',
        'Analytics Integration',
        'Deployment'
      ]
    },
    'supabase': {
      name: 'Supabase',
      category: 'Web Development',
      description: 'Open-source Firebase alternative providing database, authentication, and real-time subscriptions.',
      proficiency: 85,
      experience: '1+ years',
      icon: '⚡',
      color: 'from-green-500 to-blue-500',
      features: [
        'PostgreSQL Database',
        'Real-time Subscriptions',
        'Authentication',
        'Row Level Security',
        'Edge Functions',
        'Storage'
      ],
      skills: [
        'Database Design',
        'Authentication Setup',
        'Real-time Features',
        'Security Configuration',
        'API Development',
        'Performance Optimization'
      ]
    },
    'git': {
      name: 'Git',
      category: 'Web Development',
      description: 'Distributed version control system for tracking changes in source code during software development.',
      proficiency: 85,
      experience: '3+ years',
      icon: '📝',
      color: 'from-red-500 to-orange-500',
      features: [
        'Version Control',
        'Branching & Merging',
        'Collaboration',
        'History Tracking',
        'Conflict Resolution',
        'Remote Repositories'
      ],
      skills: [
        'Branch Management',
        'Merge Strategies',
        'Conflict Resolution',
        'Remote Operations',
        'Workflow Management',
        'Code Review'
      ]
    },
    'github': {
      name: 'GitHub',
      category: 'Web Development',
      description: 'Web-based platform for version control and collaboration using Git, with additional project management features.',
      proficiency: 85,
      experience: '3+ years',
      icon: '🐙',
      color: 'from-gray-700 to-gray-900',
      features: [
        'Repository Management',
        'Pull Requests',
        'Issue Tracking',
        'Actions (CI/CD)',
        'Project Boards',
        'Collaboration Tools'
      ],
      skills: [
        'Repository Management',
        'Pull Request Workflow',
        'Issue Management',
        'CI/CD Setup',
        'Code Review',
        'Project Organization'
      ]
    },
    'netlify': {
      name: 'Netlify',
      category: 'Web Development',
      description: 'Cloud computing company offering hosting and serverless backend services for web applications.',
      proficiency: 80,
      experience: '1+ years',
      icon: '🌐',
      color: 'from-teal-500 to-cyan-500',
      features: [
        'Static Site Hosting',
        'Continuous Deployment',
        'Serverless Functions',
        'Form Handling',
        'CDN',
        'Domain Management'
      ],
      skills: [
        'Deployment Configuration',
        'Build Optimization',
        'Domain Setup',
        'Performance Monitoring',
        'Function Development',
        'Form Integration'
      ]
    },
    'power-bi': {
      name: 'Power BI',
      category: 'Business Analytics',
      description: 'Microsoft\'s business analytics tool for visualizing data and sharing insights across organizations.',
      proficiency: 85,
      experience: '2+ years',
      icon: '📊',
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Data Visualization',
        'Interactive Dashboards',
        'Data Modeling',
        'Real-time Analytics',
        'Collaboration',
        'Mobile Access'
      ],
      skills: [
        'Dashboard Creation',
        'Data Modeling',
        'DAX Formulas',
        'Report Design',
        'Data Connections',
        'Performance Optimization'
      ]
    },
    'tableau': {
      name: 'Tableau',
      category: 'Business Analytics',
      description: 'Data visualization software that helps people see and understand their data through interactive dashboards.',
      proficiency: 75,
      experience: '1+ years',
      icon: '📈',
      color: 'from-blue-500 to-indigo-500',
      features: [
        'Data Visualization',
        'Interactive Dashboards',
        'Data Blending',
        'Statistical Analysis',
        'Mapping',
        'Collaboration'
      ],
      skills: [
        'Visualization Design',
        'Data Preparation',
        'Calculated Fields',
        'Dashboard Optimization',
        'Story Creation',
        'Performance Tuning'
      ]
    },
    'excel': {
      name: 'Excel',
      category: 'Business Analytics',
      description: 'Microsoft\'s spreadsheet application with powerful data analysis, visualization, and automation capabilities.',
      proficiency: 90,
      experience: '5+ years',
      icon: '📋',
      color: 'from-green-500 to-emerald-500',
      features: [
        'Data Analysis',
        'Pivot Tables',
        'Advanced Formulas',
        'Macros & VBA',
        'Data Visualization',
        'Automation'
      ],
      skills: [
        'Advanced Formulas',
        'Pivot Tables',
        'Data Modeling',
        'VBA Programming',
        'Chart Creation',
        'Data Validation'
      ]
    },
    'spss': {
      name: 'SPSS',
      category: 'Business Analytics',
      description: 'Statistical software package used for interactive statistical analysis, data mining, and predictive analytics.',
      proficiency: 70,
      experience: '1+ years',
      icon: '📊',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Statistical Analysis',
        'Data Mining',
        'Predictive Analytics',
        'Survey Research',
        'Advanced Statistics',
        'Report Generation'
      ],
      skills: [
        'Descriptive Statistics',
        'Hypothesis Testing',
        'Regression Analysis',
        'Factor Analysis',
        'Data Preparation',
        'Report Writing'
      ]
    },
    'r': {
      name: 'R',
      category: 'Business Analytics',
      description: 'Programming language and environment for statistical computing and graphics.',
      proficiency: 65,
      experience: '6 months',
      icon: '📈',
      color: 'from-blue-500 to-purple-500',
      features: [
        'Statistical Computing',
        'Data Visualization',
        'Machine Learning',
        'Data Manipulation',
        'Package Ecosystem',
        'Reproducible Research'
      ],
      skills: [
        'Data Analysis',
        'Statistical Modeling',
        'Visualization (ggplot2)',
        'Data Manipulation (dplyr)',
        'Package Development',
        'Report Generation'
      ]
    },
    'pandas': {
      name: 'Pandas',
      category: 'Business Analytics',
      description: 'Python library providing data structures and data analysis tools for handling structured data.',
      proficiency: 80,
      experience: '1+ years',
      icon: '🐼',
      color: 'from-green-500 to-blue-500',
      features: [
        'Data Manipulation',
        'Data Cleaning',
        'Data Analysis',
        'File I/O',
        'Time Series',
        'Grouping Operations'
      ],
      skills: [
        'DataFrame Operations',
        'Data Cleaning',
        'Merging & Joining',
        'Aggregation',
        'Time Series Analysis',
        'Data Export/Import'
      ]
    },
    'matplotlib': {
      name: 'Matplotlib',
      category: 'Business Analytics',
      description: 'Python plotting library for creating static, animated, and interactive visualizations.',
      proficiency: 75,
      experience: '1+ years',
      icon: '📊',
      color: 'from-red-500 to-orange-500',
      features: [
        'Static Plots',
        'Interactive Visualizations',
        'Multiple Plot Types',
        'Customization',
        'Publication Quality',
        'Animation Support'
      ],
      skills: [
        'Plot Creation',
        'Customization',
        'Subplots',
        'Styling',
        'Export Formats',
        'Interactive Features'
      ]
    },
    'seaborn': {
      name: 'Seaborn',
      category: 'Business Analytics',
      description: 'Python data visualization library based on matplotlib, providing high-level statistical graphics.',
      proficiency: 75,
      experience: '1+ years',
      icon: '🌊',
      color: 'from-blue-500 to-teal-500',
      features: [
        'Statistical Plots',
        'Beautiful Defaults',
        'Dataset Integration',
        'Categorical Data',
        'Regression Plots',
        'Matrix Plots'
      ],
      skills: [
        'Statistical Visualization',
        'Distribution Plots',
        'Correlation Analysis',
        'Categorical Plotting',
        'Regression Visualization',
        'Style Customization'
      ]
    },
    'dashboarding': {
      name: 'Dashboarding',
      category: 'Business Analytics',
      description: 'Creating interactive visual displays of key performance indicators and metrics for business monitoring.',
      proficiency: 85,
      experience: '2+ years',
      icon: '📺',
      color: 'from-purple-500 to-indigo-500',
      features: [
        'KPI Visualization',
        'Real-time Updates',
        'Interactive Elements',
        'Multi-source Data',
        'Responsive Design',
        'User Access Control'
      ],
      skills: [
        'Dashboard Design',
        'Data Integration',
        'Visualization Selection',
        'User Experience',
        'Performance Optimization',
        'Stakeholder Communication'
      ]
    },
    'predictive-analytics': {
      name: 'Predictive Analytics',
      category: 'Business Analytics',
      description: 'Using statistical algorithms and machine learning techniques to identify future outcomes based on historical data.',
      proficiency: 70,
      experience: '1+ years',
      icon: '🔮',
      color: 'from-indigo-500 to-purple-500',
      features: [
        'Machine Learning Models',
        'Statistical Forecasting',
        'Pattern Recognition',
        'Risk Assessment',
        'Trend Analysis',
        'Model Validation'
      ],
      skills: [
        'Model Development',
        'Feature Engineering',
        'Model Evaluation',
        'Forecasting',
        'Risk Modeling',
        'Business Application'
      ]
    },
    'data-cleaning': {
      name: 'SQL Data Cleaning',
      category: 'Business Analytics',
      description: 'Process of detecting and correcting corrupt or inaccurate records from databases using SQL techniques.',
      proficiency: 85,
      experience: '2+ years',
      icon: '🧹',
      color: 'from-green-500 to-blue-500',
      features: [
        'Data Quality Assessment',
        'Duplicate Removal',
        'Missing Value Handling',
        'Data Standardization',
        'Outlier Detection',
        'Data Validation'
      ],
      skills: [
        'SQL Queries',
        'Data Profiling',
        'Pattern Matching',
        'Data Transformation',
        'Quality Metrics',
        'Automation Scripts'
      ]
    },
    'lovable': {
      name: 'Lovable AI + vO',
      category: 'Vibe Coding',
      description: 'AI-powered development platform that enables rapid prototyping and full-stack application development through natural language.',
      proficiency: 90,
      experience: '6 months',
      icon: '💖',
      color: 'from-pink-500 to-rose-500',
      features: [
        'AI-Powered Development',
        'Natural Language Coding',
        'Rapid Prototyping',
        'Full-Stack Generation',
        'Real-time Collaboration',
        'Instant Deployment'
      ],
      skills: [
        'Prompt Engineering',
        'Rapid Development',
        'AI Collaboration',
        'Code Generation',
        'Design Systems',
        'Deployment Automation'
      ]
    },
    'bolt': {
      name: 'Bolt',
      category: 'Vibe Coding',
      description: 'AI-powered development environment for building web applications with natural language instructions.',
      proficiency: 85,
      experience: '3 months',
      icon: '⚡',
      color: 'from-yellow-500 to-orange-500',
      features: [
        'AI Code Generation',
        'Interactive Development',
        'Real-time Preview',
        'Component Library',
        'Version Control',
        'Collaborative Editing'
      ],
      skills: [
        'AI-Assisted Coding',
        'Component Development',
        'Rapid Iteration',
        'Code Optimization',
        'Design Implementation',
        'Testing & Debugging'
      ]
    },
    'gpt-4': {
      name: 'GPT-4',
      category: 'Vibe Coding',
      description: 'Advanced language model by OpenAI for code generation, problem-solving, and creative development tasks.',
      proficiency: 90,
      experience: '1+ years',
      icon: '🧠',
      color: 'from-green-500 to-teal-500',
      features: [
        'Code Generation',
        'Problem Solving',
        'Code Review',
        'Documentation',
        'Debugging Assistance',
        'Architecture Planning'
      ],
      skills: [
        'Prompt Engineering',
        'Code Generation',
        'Problem Decomposition',
        'Code Review',
        'Documentation Writing',
        'Technical Communication'
      ]
    },
    'hugging-face': {
      name: 'Hugging Face',
      category: 'Vibe Coding',
      description: 'Platform providing pre-trained models and tools for natural language processing and machine learning.',
      proficiency: 70,
      experience: '6 months',
      icon: '🤗',
      color: 'from-orange-500 to-red-500',
      features: [
        'Pre-trained Models',
        'Model Fine-tuning',
        'Transformers Library',
        'Dataset Hub',
        'Model Deployment',
        'Community Collaboration'
      ],
      skills: [
        'Model Integration',
        'Fine-tuning',
        'API Usage',
        'Model Evaluation',
        'Deployment',
        'Community Contribution'
      ]
    }
  };

  const tool = toolsData[toolName || ''];

  if (!tool) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Tool not found</h1>
          <Link to="/skills">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Skills
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link to="/skills">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Skills
            </Button>
          </Link>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className={`p-4 bg-gradient-to-r ${tool.color} rounded-xl text-white text-3xl`}>
              {tool.icon}
            </div>
            <div>
              <h1 className="text-4xl font-bold">{tool.name}</h1>
              <Badge variant="secondary" className="mt-2">{tool.category}</Badge>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>About {tool.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {tool.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="mr-2 h-5 w-5" />
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3">
                    {tool.features?.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="mr-2 h-5 w-5" />
                    Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tool.skills?.map((skill: string, index: number) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Certifications */}
            {tool.certifications && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="mr-2 h-5 w-5" />
                      Certifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {tool.certifications.map((cert: string, index: number) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="text-sm">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Proficiency */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Proficiency
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Skill Level</span>
                      <span className="text-sm text-muted-foreground">{tool.proficiency}%</span>
                    </div>
                    <Progress value={tool.proficiency} className="h-2" />
                    <div className="text-xs text-muted-foreground">
                      {tool.proficiency >= 90 ? 'Expert' : 
                       tool.proficiency >= 80 ? 'Advanced' : 
                       tool.proficiency >= 70 ? 'Intermediate' : 'Beginner'}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5" />
                    Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">
                      {tool.experience}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Hands-on Experience
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full" asChild>
                    <Link to="/projects">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Related Work
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">
                      <Mail className="mr-2 h-4 w-4" />
                      Discuss This Skill
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}