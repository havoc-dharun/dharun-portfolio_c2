import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Star, Users, Calendar, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const tools = {
  'google-ads': {
    title: 'Google Ads',
    description: 'Google\'s comprehensive advertising platform for creating, managing, and optimizing online advertising campaigns across search, display, and video networks.',
    category: 'Marketing',
    features: ['Campaign Management', 'Keyword Bidding & Optimization', 'Ad Creation & Testing', 'Performance Analytics', 'Audience Targeting', 'Conversion Tracking'],
    website: 'https://ads.google.com',
    logo: 'https://cdn.worldvectorlogo.com/logos/google-ads-1.svg',
    proficiency: 90,
    experience: '2+ years',
    projects: 20,
    description_long: 'Google Ads is central to my digital advertising strategy. I create and manage high-performing campaigns that drive qualified traffic and conversions. My expertise includes keyword research, ad copy optimization, bid management, and performance analysis.',
    use_cases: [
      'Search campaign optimization for lead generation',
      'Display advertising for brand awareness',
      'Shopping campaigns for e-commerce',
      'Video advertising on YouTube',
      'Conversion tracking and attribution modeling'
    ]
  },
  'seo-sem': {
    title: 'SEO/SEM',
    description: 'Search Engine Optimization and Search Engine Marketing strategies for improving organic visibility and paid search performance.',
    category: 'Marketing',
    features: ['Keyword Research', 'On-Page Optimization', 'Technical SEO', 'Link Building', 'Content Strategy', 'Performance Tracking'],
    website: 'https://developers.google.com/search',
    logo: 'https://cdn.worldvectorlogo.com/logos/google-2015.svg',
    proficiency: 85,
    experience: '2+ years',
    projects: 18,
    description_long: 'I specialize in both organic and paid search strategies, helping businesses improve their search visibility and drive qualified traffic through comprehensive SEO and SEM approaches.',
    use_cases: [
      'Organic search ranking improvements',
      'Technical SEO audits and fixes',
      'Content optimization for search',
      'Local SEO for business visibility',
      'Paid search campaign management'
    ]
  },
  'mailchimp': {
    title: 'Mailchimp',
    description: 'All-in-one marketing platform for email marketing, automation, and audience management with powerful segmentation and analytics.',
    category: 'Marketing',
    features: ['Email Campaigns', 'Marketing Automation', 'Audience Segmentation', 'A/B Testing', 'Analytics & Reporting', 'Landing Pages'],
    website: 'https://mailchimp.com',
    logo: 'https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon.svg',
    proficiency: 80,
    experience: '2+ years',
    projects: 15,
    description_long: 'Mailchimp is my go-to platform for email marketing and automation. I create targeted campaigns, automated workflows, and detailed audience segments to drive engagement and conversions.',
    use_cases: [
      'Email newsletter campaigns and automation',
      'Customer onboarding sequences',
      'Abandoned cart recovery workflows',
      'Audience segmentation and targeting',
      'Campaign performance analysis and optimization'
    ]
  },
  'google-analytics': {
    title: 'Google Analytics',
    description: 'Comprehensive web analytics platform for tracking website performance, user behavior, and conversion optimization.',
    category: 'Marketing',
    features: ['Traffic Analysis', 'Conversion Tracking', 'Audience Insights', 'Custom Reports', 'Goal Setting', 'E-commerce Tracking'],
    website: 'https://analytics.google.com',
    logo: 'https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg',
    proficiency: 85,
    experience: '2+ years',
    projects: 22,
    description_long: 'Google Analytics is essential for understanding website performance and user behavior. I use it to track conversions, analyze traffic patterns, and optimize digital marketing strategies.',
    use_cases: [
      'Website traffic analysis and reporting',
      'Conversion funnel optimization',
      'User behavior tracking and insights',
      'Campaign performance measurement',
      'E-commerce analytics and reporting'
    ]
  },
  'zoho-crm': {
    title: 'Zoho CRM',
    description: 'Customer relationship management platform for sales automation, lead management, and customer engagement.',
    category: 'Marketing',
    features: ['Lead Management', 'Sales Automation', 'Contact Management', 'Pipeline Tracking', 'Reporting & Analytics', 'Integration Capabilities'],
    website: 'https://www.zoho.com/crm/',
    logo: 'https://cdn.worldvectorlogo.com/logos/zoho.svg',
    proficiency: 75,
    experience: '1.5+ years',
    projects: 12,
    description_long: 'Zoho CRM helps me manage customer relationships and sales processes effectively. I use it for lead tracking, sales automation, and customer engagement strategies.',
    use_cases: [
      'Lead qualification and management',
      'Sales pipeline tracking',
      'Customer communication automation',
      'Sales performance reporting',
      'Integration with marketing tools'
    ]
  },
  'hubspot': {
    title: 'HubSpot',
    description: 'Comprehensive inbound marketing and sales platform for lead generation, customer relationship management, and marketing automation.',
    category: 'Marketing',
    features: ['CRM Integration', 'Lead Scoring', 'Marketing Automation', 'Content Management', 'Social Media Tools', 'Analytics Dashboard'],
    website: 'https://hubspot.com',
    logo: 'https://cdn.worldvectorlogo.com/logos/hubspot-2.svg',
    proficiency: 75,
    experience: '1.5+ years',
    projects: 12,
    description_long: 'HubSpot serves as my central hub for inbound marketing and sales operations. I leverage its comprehensive tools to attract, engage, and delight customers throughout their journey.',
    use_cases: [
      'Inbound marketing campaign management',
      'Lead nurturing and scoring workflows',
      'Content marketing and SEO optimization',
      'Sales pipeline management and forecasting',
      'Customer service and support automation'
    ]
  },
  'campaign-optimization': {
    title: 'Campaign Optimization',
    description: 'Strategic approach to improving marketing campaign performance through data analysis, testing, and continuous refinement.',
    category: 'Marketing',
    features: ['A/B Testing', 'Performance Analysis', 'Audience Targeting', 'Budget Optimization', 'Creative Testing', 'ROI Improvement'],
    website: '#',
    logo: 'https://cdn.worldvectorlogo.com/logos/facebook-ads.svg',
    proficiency: 85,
    experience: '2+ years',
    projects: 25,
    description_long: 'Campaign optimization is at the core of my marketing strategy. I continuously test, analyze, and refine campaigns to maximize performance and ROI across all channels.',
    use_cases: [
      'A/B testing ad creatives and copy',
      'Audience segmentation and targeting',
      'Budget allocation optimization',
      'Landing page conversion optimization',
      'Multi-channel campaign coordination'
    ]
  },
  'funnel-design': {
    title: 'Funnel Design',
    description: 'Strategic design and optimization of customer journey funnels to maximize conversions and customer lifetime value.',
    category: 'Marketing',
    features: ['Customer Journey Mapping', 'Conversion Optimization', 'Landing Page Design', 'Email Sequences', 'Retargeting Strategies', 'Analytics Integration'],
    website: '#',
    logo: 'https://cdn.worldvectorlogo.com/logos/clickfunnels-1.svg',
    proficiency: 80,
    experience: '2+ years',
    projects: 18,
    description_long: 'I design and optimize sales funnels that guide prospects through the customer journey, from awareness to conversion and retention.',
    use_cases: [
      'Lead generation funnel creation',
      'E-commerce sales funnel optimization',
      'Webinar registration and attendance funnels',
      'Product launch sequence design',
      'Customer onboarding flow optimization'
    ]
  },
  'copywriting': {
    title: 'Copywriting',
    description: 'Persuasive writing for marketing materials, advertisements, and digital content that drives action and engagement.',
    category: 'Marketing',
    features: ['Ad Copy Creation', 'Email Marketing Copy', 'Landing Page Content', 'Social Media Copy', 'Sales Letters', 'Content Strategy'],
    website: '#',
    logo: 'https://cdn.worldvectorlogo.com/logos/grammarly-1.svg',
    proficiency: 85,
    experience: '2+ years',
    projects: 30,
    description_long: 'Effective copywriting is essential for converting prospects into customers. I create compelling, persuasive content that resonates with target audiences and drives action.',
    use_cases: [
      'Google Ads and Facebook ad copy',
      'Email marketing campaigns',
      'Landing page headlines and content',
      'Social media post creation',
      'Sales page and product descriptions'
    ]
  },
  'lead-generation': {
    title: 'Lead Generation',
    description: 'Strategic processes and tactics for identifying, attracting, and converting potential customers into qualified leads.',
    category: 'Marketing',
    features: ['Lead Magnets', 'Landing Pages', 'Form Optimization', 'Lead Scoring', 'Nurture Campaigns', 'Qualification Processes'],
    website: '#',
    logo: 'https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg',
    proficiency: 90,
    experience: '2+ years',
    projects: 35,
    description_long: 'Lead generation is fundamental to business growth. I develop comprehensive strategies to attract, capture, and nurture leads through multiple channels and touchpoints.',
    use_cases: [
      'Content marketing lead magnets',
      'Social media lead generation campaigns',
      'Webinar and event lead capture',
      'LinkedIn outreach and networking',
      'Referral program development'
    ]
  },
  'cold-calling': {
    title: 'Cold Calling',
    description: 'Direct sales approach for reaching potential customers through strategic phone outreach and conversation techniques.',
    category: 'Marketing',
    features: ['Script Development', 'Objection Handling', 'Prospect Research', 'Call Tracking', 'Follow-up Strategies', 'Conversion Optimization'],
    website: '#',
    logo: 'https://cdn.worldvectorlogo.com/logos/aircall.svg',
    proficiency: 75,
    experience: '1.5+ years',
    projects: 20,
    description_long: 'Cold calling remains an effective sales technique when done strategically. I develop targeted calling campaigns with personalized approaches to generate qualified leads.',
    use_cases: [
      'B2B prospect outreach campaigns',
      'Appointment setting for sales teams',
      'Market research and validation calls',
      'Customer feedback collection',
      'Reactivation campaigns for dormant leads'
    ]
  },
  'deal-closing': {
    title: 'Deal Closing',
    description: 'Sales techniques and strategies for converting qualified prospects into paying customers through effective negotiation and relationship building.',
    category: 'Marketing',
    features: ['Negotiation Techniques', 'Objection Handling', 'Proposal Creation', 'Contract Management', 'Relationship Building', 'Follow-up Systems'],
    website: '#',
    logo: 'https://cdn.worldvectorlogo.com/logos/pipedrive.svg',
    proficiency: 80,
    experience: '2+ years',
    projects: 25,
    description_long: 'Closing deals requires a combination of relationship building, value demonstration, and strategic negotiation. I focus on understanding customer needs and presenting solutions that drive decisions.',
    use_cases: [
      'B2B software sales closing',
      'Service contract negotiations',
      'Proposal presentation and follow-up',
      'Objection handling and resolution',
      'Long-term relationship development'
    ]
  },
  'salesforce': {
    title: 'Salesforce',
    description: 'World\'s leading CRM platform for sales funnels, lead management, customer retention workflows, and comprehensive business process automation.',
    category: 'Marketing',
    features: ['Lead Management & Scoring', 'Sales Pipeline Automation', 'Customer Relationship Management', 'Workflow Automation', 'Analytics & Reporting', 'Integration Capabilities'],
    website: 'https://salesforce.com',
    logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg',
    proficiency: 80,
    experience: '1.5+ years',
    projects: 8,
    description_long: 'Salesforce serves as the backbone of my CRM and sales automation strategies. I leverage its powerful features to design efficient sales funnels, manage leads effectively, and create automated workflows that enhance customer retention and drive business growth.',
    use_cases: [
      'Lead scoring and qualification automation',
      'Sales pipeline management and forecasting',
      'Customer journey mapping and optimization',
      'Email marketing automation and nurturing',
      'Performance analytics and reporting'
    ]
  },
  'semrush': {
    title: 'Semrush',
    description: 'Comprehensive SEO/SEM platform used for keyword research, content planning, competitor analysis, and digital marketing strategy optimization.',
    category: 'Marketing',
    features: ['Keyword Research & Analysis', 'Competitor Intelligence', 'Content Planning & Optimization', 'Backlink Analysis & Building', 'Rank Tracking', 'Site Audit & Technical SEO'],
    website: 'https://semrush.com',
    logo: 'https://cdn.worldvectorlogo.com/logos/semrush-1.svg',
    proficiency: 85,
    experience: '2+ years',
    projects: 15,
    description_long: 'Semrush is my go-to platform for comprehensive SEO and digital marketing analysis. I use it extensively for keyword research, competitor analysis, and content strategy development. The platform helps me identify high-value keywords, analyze competitor strategies, and optimize content for better search engine rankings.',
    use_cases: [
      'Keyword research for content marketing campaigns',
      'Competitor analysis and market intelligence',
      'Technical SEO audits and optimization',
      'Content gap analysis and planning',
      'Backlink profile analysis and link building'
    ]
  },
  'n8n': {
    title: 'n8n',
    description: 'Open-source workflow automation tool for connecting different services, APIs, and creating sophisticated business process automations without coding.',
    category: 'AI Agents & Automation',
    features: ['Visual Workflow Editor', 'API Integration', 'Custom Nodes', 'Webhook Support', 'Conditional Logic', 'Data Transformation'],
    website: 'https://n8n.io',
    logo: 'https://cdn.worldvectorlogo.com/logos/n8n.svg',
    proficiency: 80,
    experience: '1+ years',
    projects: 15,
    description_long: 'n8n is my preferred automation platform for creating complex workflows that connect various business tools and services. I use it to automate repetitive tasks, integrate different systems, and create intelligent business processes.',
    use_cases: [
      'CRM automation and lead nurturing workflows',
      'Social media posting and content distribution',
      'Data synchronization between platforms',
      'Email marketing automation sequences',
      'Customer support ticket routing and management'
    ]
  },
  'zapier': {
    title: 'Zapier',
    description: 'Popular automation platform that connects different apps and services to create automated workflows without coding.',
    category: 'AI Agents & Automation',
    features: ['App Integration', 'Workflow Automation', 'Trigger-Based Actions', 'Multi-Step Zaps', 'Data Formatting', 'Error Handling'],
    website: 'https://zapier.com',
    logo: 'https://cdn.worldvectorlogo.com/logos/zapier.svg',
    proficiency: 85,
    experience: '2+ years',
    projects: 20,
    description_long: 'Zapier enables me to create powerful automations that connect different business tools and streamline workflows. I use it to eliminate manual tasks and improve operational efficiency.',
    use_cases: [
      'Lead data synchronization between platforms',
      'Automated social media posting and content distribution',
      'Customer onboarding and follow-up sequences',
      'Data backup and synchronization workflows',
      'Notification and alert systems'
    ]
  },
  'make': {
    title: 'Make.com',
    description: 'Visual automation platform for creating complex workflows and integrations between apps and services.',
    category: 'AI Agents & Automation',
    features: ['Visual Scenario Builder', 'Advanced Logic', 'Error Handling', 'Data Processing', 'API Connections', 'Scheduling'],
    website: 'https://make.com',
    logo: 'https://www.make.com/en/help/image/uuid-e8b0b9b0-7b1a-4b0a-8b0a-8b0a8b0a8b0a.png',
    proficiency: 75,
    experience: '1+ years',
    projects: 10,
    description_long: 'Make.com provides advanced automation capabilities with visual workflow building. I use it for complex integrations that require sophisticated logic and data processing.',
    use_cases: [
      'Complex data transformation workflows',
      'Multi-step business process automation',
      'Advanced API integrations',
      'Conditional workflow execution',
      'Real-time data synchronization'
    ]
  },
  'claude': {
    title: 'Claude',
    description: 'Advanced AI assistant for content creation, analysis, and automation tasks with sophisticated reasoning capabilities.',
    category: 'AI Agents & Automation',
    features: ['Content Generation', 'Data Analysis', 'Code Assistance', 'Research Support', 'Creative Writing', 'Problem Solving'],
    website: 'https://claude.ai',
    logo: 'https://claude.ai/favicon.ico',
    proficiency: 85,
    experience: '1+ years',
    projects: 25,
    description_long: 'Claude is my go-to AI assistant for content creation, analysis, and complex problem-solving tasks. I leverage its advanced reasoning capabilities for various business and creative applications.',
    use_cases: [
      'Content creation and copywriting',
      'Data analysis and insights generation',
      'Code review and optimization',
      'Research and information synthesis',
      'Creative brainstorming and ideation'
    ]
  },
  'openai': {
    title: 'OpenAI',
    description: 'Leading AI platform providing GPT models and tools for natural language processing, content generation, and automation.',
    category: 'AI Agents & Automation',
    features: ['GPT Models', 'API Integration', 'Content Generation', 'Language Processing', 'Code Generation', 'Fine-tuning'],
    website: 'https://openai.com',
    logo: 'https://cdn.worldvectorlogo.com/logos/openai-2.svg',
    proficiency: 80,
    experience: '1.5+ years',
    projects: 20,
    description_long: 'OpenAI\'s GPT models power many of my AI-driven solutions. I integrate these models into applications for content generation, analysis, and intelligent automation.',
    use_cases: [
      'Automated content generation systems',
      'Chatbot and virtual assistant development',
      'Text analysis and summarization',
      'Code generation and optimization',
      'Creative writing and ideation tools'
    ]
  },
  'airtable': {
    title: 'Airtable',
    description: 'Flexible database platform that combines spreadsheet functionality with database power for project management and data organization.',
    category: 'AI Agents & Automation',
    features: ['Database Management', 'Project Tracking', 'Collaboration Tools', 'API Integration', 'Custom Views', 'Automation Rules'],
    website: 'https://airtable.com',
    logo: 'https://cdn.worldvectorlogo.com/logos/airtable.svg',
    proficiency: 75,
    experience: '1.5+ years',
    projects: 12,
    description_long: 'Airtable serves as my flexible database solution for project management, data organization, and workflow automation. I use it to create structured data systems that integrate with other tools.',
    use_cases: [
      'Project and task management systems',
      'Customer and lead database management',
      'Content calendar and planning',
      'Inventory and resource tracking',
      'Team collaboration and workflow management'
    ]
  },
  'html': {
    title: 'HTML',
    description: 'Hypertext Markup Language - the standard markup language for creating web pages and web applications.',
    category: 'Web Development',
    features: ['Semantic Markup', 'Forms & Input', 'Media Elements', 'Accessibility', 'SEO Optimization', 'Modern HTML5'],
    website: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    logo: 'https://cdn.worldvectorlogo.com/logos/html-1.svg',
    proficiency: 90,
    experience: '3+ years',
    projects: 40,
    description_long: 'HTML is the foundation of all web development. I write semantic, accessible HTML that provides a solid structure for web applications and ensures optimal SEO performance.',
    use_cases: [
      'Semantic web page structure creation',
      'Form design and validation',
      'Accessibility-compliant markup',
      'SEO-optimized content structure',
      'Progressive web app development'
    ]
  },
  'css': {
    title: 'CSS',
    description: 'Cascading Style Sheets for styling and layout of web pages with modern features like Grid, Flexbox, and animations.',
    category: 'Web Development',
    features: ['Responsive Design', 'CSS Grid & Flexbox', 'Animations', 'Custom Properties', 'Modern Layouts', 'Performance Optimization'],
    website: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    logo: 'https://cdn.worldvectorlogo.com/logos/css-3.svg',
    proficiency: 85,
    experience: '3+ years',
    projects: 35,
    description_long: 'CSS is essential for creating beautiful, responsive web interfaces. I use modern CSS features to create engaging user experiences with smooth animations and optimal performance.',
    use_cases: [
      'Responsive web design implementation',
      'Custom animation and interaction design',
      'Component-based styling systems',
      'Performance-optimized stylesheets',
      'Cross-browser compatibility solutions'
    ]
  },
  'javascript': {
    title: 'JavaScript',
    description: 'Dynamic programming language for web development, enabling interactive user interfaces and full-stack applications.',
    category: 'Web Development',
    features: ['DOM Manipulation', 'Event Handling', 'Async Programming', 'ES6+ Features', 'API Integration', 'Framework Integration'],
    website: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    logo: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg',
    proficiency: 80,
    experience: '2.5+ years',
    projects: 30,
    description_long: 'JavaScript powers the interactive elements of modern web applications. I use it to create dynamic user interfaces, handle user interactions, and integrate with APIs and services.',
    use_cases: [
      'Interactive web application development',
      'API integration and data handling',
      'User interface enhancement and interactivity',
      'Form validation and user input processing',
      'Single-page application development'
    ]
  },
  'react': {
    title: 'React',
    description: 'A powerful JavaScript library for building modern, interactive user interfaces with component-based architecture and efficient state management.',
    category: 'Web Development',
    features: ['Component-Based Architecture', 'Virtual DOM', 'JSX Syntax', 'State Management', 'Hooks', 'Ecosystem Integration'],
    website: 'https://reactjs.org',
    logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
    proficiency: 75,
    experience: '1.5+ years',
    projects: 10,
    description_long: 'React is my framework of choice for building modern web applications. I leverage its component-based architecture to create reusable, maintainable code and build interactive user interfaces that provide excellent user experiences.',
    use_cases: [
      'Single Page Applications (SPAs)',
      'Interactive dashboards and admin panels',
      'E-commerce platforms and product catalogs',
      'Portfolio websites and landing pages',
      'Progressive Web Applications (PWAs)'
    ]
  },
  'python': {
    title: 'Python',
    description: 'Versatile programming language used for data analysis, automation, web development, and AI/ML applications with extensive library ecosystem.',
    category: 'Web Development',
    features: ['Data Analysis', 'Automation Scripts', 'Web Development', 'Machine Learning', 'API Development', 'Database Integration'],
    website: 'https://python.org',
    logo: 'https://cdn.worldvectorlogo.com/logos/python-5.svg',
    proficiency: 75,
    experience: '2+ years',
    projects: 18,
    description_long: 'Python is my go-to language for data analysis, automation, and backend development. Its simplicity and powerful libraries make it perfect for everything from data processing to building web applications and automation scripts.',
    use_cases: [
      'Data analysis and visualization with pandas/matplotlib',
      'Web scraping and data collection automation',
      'API development with Flask/FastAPI',
      'Business process automation scripts',
      'Machine learning model development'
    ]
  },
  'sql': {
    title: 'SQL',
    description: 'Structured Query Language for managing and manipulating relational databases, enabling efficient data retrieval, analysis, and reporting.',
    category: 'Web Development',
    features: ['Data Querying', 'Database Design', 'Data Analysis', 'Stored Procedures', 'Performance Optimization', 'Data Integrity'],
    website: 'https://www.w3schools.com/sql/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.svg',
    proficiency: 80,
    experience: '2+ years',
    projects: 20,
    description_long: 'SQL is fundamental to my data management and analysis work. I use it to design efficient database schemas, write complex queries for data analysis, and optimize database performance for web applications.',
    use_cases: [
      'Database design and schema creation',
      'Complex data analysis and reporting queries',
      'Data migration and transformation scripts',
      'Performance optimization and indexing',
      'Stored procedure development for business logic'
    ]
  },
  'supabase': {
    title: 'Supabase',
    description: 'Open-source Firebase alternative providing real-time database, authentication, and API services with PostgreSQL backend.',
    category: 'Web Development',
    features: ['Real-time Database', 'Authentication', 'API Generation', 'Storage', 'Edge Functions', 'Row Level Security'],
    website: 'https://supabase.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Supabase_Logo.svg',
    proficiency: 75,
    experience: '1.5+ years',
    projects: 12,
    description_long: 'Supabase is my preferred backend-as-a-service platform for modern web applications. I leverage its PostgreSQL database, real-time subscriptions, and built-in authentication to build scalable, secure applications quickly.',
    use_cases: [
      'Real-time web application backends',
      'User authentication and authorization systems',
      'API development with auto-generated endpoints',
      'File storage and media management',
      'Database management with PostgreSQL'
    ]
  },
  'firebase': {
    title: 'Firebase',
    description: 'Google\'s comprehensive app development platform providing backend services, databases, authentication, and hosting solutions.',
    category: 'Web Development',
    features: ['Realtime Database', 'Cloud Firestore', 'Authentication', 'Cloud Functions', 'Hosting', 'Analytics'],
    website: 'https://firebase.google.com',
    logo: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg',
    proficiency: 70,
    experience: '1.5+ years',
    projects: 10,
    description_long: 'Firebase provides a complete backend infrastructure for web and mobile applications. I use it for rapid prototyping and building scalable applications with real-time features and robust authentication.',
    use_cases: [
      'Real-time chat and collaboration features',
      'User authentication and profile management',
      'Cloud function development for serverless logic',
      'Static website hosting and deployment',
      'Analytics and performance monitoring'
    ]
  },
  'git': {
    title: 'Git',
    description: 'Distributed version control system for tracking changes in source code during software development and enabling team collaboration.',
    category: 'Web Development',
    features: ['Version Control', 'Branching & Merging', 'Collaboration', 'History Tracking', 'Conflict Resolution', 'Remote Repositories'],
    website: 'https://git-scm.com',
    logo: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg',
    proficiency: 85,
    experience: '2.5+ years',
    projects: 35,
    description_long: 'Git is essential for all my development work, enabling version control, collaboration, and code management. I use advanced Git workflows for team collaboration and maintain clean, organized project histories.',
    use_cases: [
      'Source code version control and history tracking',
      'Team collaboration and code review workflows',
      'Feature branch development and merging',
      'Release management and tagging',
      'Conflict resolution and code integration'
    ]
  },
  'github': {
    title: 'GitHub',
    description: 'Web-based Git repository hosting service providing collaboration tools, project management, and CI/CD capabilities for software development.',
    category: 'Web Development',
    features: ['Repository Hosting', 'Pull Requests', 'Issue Tracking', 'Actions (CI/CD)', 'Project Management', 'Code Review'],
    website: 'https://github.com',
    logo: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
    proficiency: 80,
    experience: '2.5+ years',
    projects: 30,
    description_long: 'GitHub is my primary platform for code hosting, collaboration, and project management. I use it for version control, code reviews, issue tracking, and automated deployment workflows.',
    use_cases: [
      'Code repository hosting and management',
      'Collaborative development with pull requests',
      'Issue tracking and project management',
      'Automated testing and deployment with Actions',
      'Open source contribution and portfolio showcase'
    ]
  },
  'netlify': {
    title: 'Netlify',
    description: 'Modern web development platform offering continuous deployment, serverless functions, and global CDN for static sites and web applications.',
    category: 'Web Development',
    features: ['Continuous Deployment', 'Global CDN', 'Serverless Functions', 'Form Handling', 'Domain Management', 'Analytics'],
    website: 'https://netlify.com',
    logo: 'https://cdn.worldvectorlogo.com/logos/netlify.svg',
    proficiency: 75,
    experience: '2+ years',
    projects: 15,
    description_long: 'Netlify is my go-to platform for deploying static sites and JAMstack applications. I use it for continuous deployment, form handling, and serverless functions to create fast, scalable web applications.',
    use_cases: [
      'Static site deployment and hosting',
      'Continuous deployment from Git repositories',
      'Form handling and data collection',
      'Serverless function development',
      'Domain management and SSL certificates'
    ]
  },
  'mongodb': {
    title: 'MongoDB',
    description: 'NoSQL document database providing flexible, scalable data storage with JSON-like documents and powerful querying capabilities.',
    category: 'Web Development',
    features: ['Document Storage', 'Flexible Schema', 'Scalability', 'Aggregation Framework', 'Indexing', 'Replication'],
    website: 'https://mongodb.com',
    logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
    proficiency: 70,
    experience: '1.5+ years',
    projects: 8,
    description_long: 'MongoDB provides flexible, document-based data storage for modern applications. I use it for projects requiring dynamic schemas, complex data structures, and scalable database solutions.',
    use_cases: [
      'Content management system backends',
      'User profile and preference storage',
      'Product catalog and inventory management',
      'Analytics data collection and processing',
      'Real-time application data storage'
    ]
  },
  'c': {
    title: 'C Programming',
    description: 'Foundational programming language providing low-level control, system programming capabilities, and the basis for many modern languages.',
    category: 'Web Development',
    features: ['System Programming', 'Memory Management', 'Performance Optimization', 'Hardware Interaction', 'Algorithm Implementation', 'Cross-Platform Development'],
    website: 'https://en.cppreference.com/w/c',
    logo: 'https://cdn.worldvectorlogo.com/logos/c-1.svg',
    proficiency: 65,
    experience: '2+ years',
    projects: 12,
    description_long: 'C programming provides fundamental understanding of computer systems and memory management. I use it for system-level programming, algorithm implementation, and understanding the underlying principles of software development.',
    use_cases: [
      'System programming and utility development',
      'Algorithm implementation and optimization',
      'Embedded system programming',
      'Performance-critical application development',
      'Understanding of memory management and pointers'
    ]
  },
  'power-bi': {
    title: 'Power BI',
    description: 'Microsoft\'s leading business analytics tool for visualizing data, creating interactive dashboards, and sharing actionable business insights across organizations.',
    category: 'Business Analytics',
    features: ['Data Visualization', 'Interactive Dashboards', 'Report Generation', 'Data Modeling', 'Real-time Analytics', 'Collaboration Tools'],
    website: 'https://powerbi.microsoft.com',
    logo: 'https://cdn.worldvectorlogo.com/logos/power-bi.svg',
    proficiency: 85,
    experience: '2+ years',
    projects: 12,
    description_long: 'Power BI is my primary tool for business intelligence and data visualization. I create comprehensive dashboards that transform raw data into actionable insights, helping stakeholders make informed decisions based on real-time analytics.',
    use_cases: [
      'Executive dashboards for KPI monitoring',
      'Sales performance analytics and forecasting',
      'Marketing campaign ROI analysis',
      'Customer behavior and segmentation analysis',
      'Financial reporting and budget tracking'
    ]
  },
  'tableau': {
    title: 'Tableau',
    description: 'Leading data visualization platform for creating interactive dashboards, advanced analytics, and compelling data stories for business intelligence.',
    category: 'Business Analytics',
    features: ['Interactive Dashboards', 'Advanced Visualizations', 'Data Blending', 'Statistical Analysis', 'Real-time Analytics', 'Story Telling'],
    website: 'https://tableau.com',
    logo: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg',
    proficiency: 70,
    experience: '1+ years',
    projects: 8,
    description_long: 'Tableau helps me create stunning visualizations that tell compelling data stories. I use it to build interactive dashboards that make complex data accessible and actionable for business stakeholders.',
    use_cases: [
      'Executive dashboard creation',
      'Sales and marketing performance visualization',
      'Customer analytics and segmentation',
      'Financial reporting and KPI tracking',
      'Operational efficiency analysis'
    ]
  },
  'excel': {
    title: 'Microsoft Excel',
    description: 'Advanced spreadsheet application for data analysis, financial modeling, reporting, and business intelligence with powerful formula and visualization capabilities.',
    category: 'Business Analytics',
    features: ['Advanced Formulas', 'Pivot Tables', 'Data Visualization', 'VBA Automation', 'Financial Modeling', 'Statistical Analysis'],
    website: 'https://microsoft.com/excel',
    logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-excel-2013.svg',
    proficiency: 90,
    experience: '3+ years',
    projects: 25,
    description_long: 'Excel remains one of my most powerful tools for data analysis and business modeling. I use advanced features like pivot tables, complex formulas, and VBA automation to create sophisticated analytical solutions.',
    use_cases: [
      'Financial modeling and forecasting',
      'Data analysis and statistical calculations',
      'Business reporting and dashboard creation',
      'Budget planning and variance analysis',
      'Automated data processing with VBA'
    ]
  },
  'lovable': {
    title: 'Lovable (V0)',
    description: 'AI-powered development platform for rapid prototyping, application building, and collaborative development with intelligent code generation.',
    category: 'Vibe Coding',
    features: ['AI-Powered Development', 'Rapid Prototyping', 'Code Generation', 'Visual Development', 'Collaboration Tools', 'Deployment Integration'],
    website: 'https://lovable.dev',
    logo: 'https://lovable.dev/favicon.ico',
    proficiency: 70,
    experience: '6+ months',
    projects: 5,
    description_long: 'Lovable represents the future of development for me - combining AI assistance with traditional coding to accelerate the development process. I use it for rapid prototyping and building applications with intelligent code suggestions.',
    use_cases: [
      'Rapid MVP development and prototyping',
      'AI-assisted code generation and optimization',
      'Collaborative development projects',
      'Quick landing page and website creation',
      'Experimental feature development'
    ]
  },
  'bolt': {
    title: 'Bolt',
    description: 'AI-powered development environment for building full-stack applications with intelligent code assistance and rapid deployment.',
    category: 'Vibe Coding',
    features: ['Full-Stack Development', 'AI Code Assistance', 'Rapid Deployment', 'Real-time Collaboration', 'Integrated Tools', 'Cloud Integration'],
    website: 'https://bolt.new',
    logo: 'https://bolt.new/favicon.ico',
    proficiency: 75,
    experience: '6+ months',
    projects: 8,
    description_long: 'Bolt enables rapid full-stack development with AI assistance. I use it to quickly build and deploy applications with intelligent code suggestions and integrated development tools.',
    use_cases: [
      'Full-stack application development',
      'Rapid prototyping and testing',
      'AI-assisted debugging and optimization',
      'Quick deployment and hosting',
      'Collaborative development workflows'
    ]
  },
  'gpt-4': {
    title: 'GPT-4',
    description: 'Advanced language model for content creation, analysis, coding assistance, and complex problem-solving tasks.',
    category: 'Vibe Coding',
    features: ['Natural Language Processing', 'Code Generation', 'Content Creation', 'Problem Solving', 'Analysis & Research', 'Creative Writing'],
    website: 'https://openai.com/gpt-4',
    logo: 'https://cdn.worldvectorlogo.com/logos/openai-2.svg',
    proficiency: 85,
    experience: '1+ years',
    projects: 30,
    description_long: 'GPT-4 is integral to my development and content creation workflow. I use it for code generation, problem-solving, content creation, and complex analysis tasks.',
    use_cases: [
      'Code generation and debugging assistance',
      'Content creation and copywriting',
      'Complex problem analysis and solutions',
      'Research and information synthesis',
      'Creative brainstorming and ideation'
    ]
  },
  'hugging-face': {
    title: 'Hugging Face',
    description: 'Open-source platform for machine learning models, datasets, and tools for natural language processing and AI development.',
    category: 'Vibe Coding',
    features: ['Pre-trained Models', 'Model Fine-tuning', 'Dataset Management', 'Transformers Library', 'Model Deployment', 'Community Collaboration'],
    website: 'https://huggingface.co',
    logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
    proficiency: 65,
    experience: '8+ months',
    projects: 6,
    description_long: 'Hugging Face provides access to state-of-the-art machine learning models and tools. I use it for NLP tasks, model fine-tuning, and integrating AI capabilities into applications.',
    use_cases: [
      'Natural language processing tasks',
      'Sentiment analysis and text classification',
      'Model fine-tuning for specific use cases',
      'Text generation and summarization',
      'AI model integration in applications'
    ]
  }
};

export default function ToolDetail() {
  const { toolName } = useParams();
  const tool = tools[toolName as keyof typeof tools];

  if (!tool) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Tool Not Found</h1>
          <p className="text-muted-foreground mb-8">The tool you're looking for doesn't exist.</p>
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
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link to="/skills">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Skills
            </Button>
          </Link>
        </motion.div>

        {/* Tool Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-2xl shadow-lg flex items-center justify-center p-4">
            {tool.logo ? (
              <img 
                src={tool.logo} 
                alt={`${tool.title} logo`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
            ) : null}
            <div className="w-full h-full bg-primary/10 rounded-xl flex items-center justify-center" style={{ display: 'none' }}>
              <span className="text-3xl font-bold text-primary">
                {tool.title.charAt(0)}
              </span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{tool.title}</h1>
          <Badge variant="secondary" className="mb-4">{tool.category}</Badge>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {tool.description}
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
        >
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="text-2xl font-bold">{tool.proficiency}%</span>
              </div>
              <p className="text-sm text-muted-foreground">Proficiency</p>
              <Progress value={tool.proficiency} className="mt-2" />
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-2xl font-bold">{tool.experience}</span>
              </div>
              <p className="text-sm text-muted-foreground">Experience</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-2xl font-bold">{tool.projects}+</span>
              </div>
              <p className="text-sm text-muted-foreground">Projects</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Detailed Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>About {tool.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {tool.description_long}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {tool.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Use Cases & Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>How I Use {tool.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tool.use_cases.map((useCase, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">{index + 1}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{useCase}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Learn More</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Explore {tool.title} and discover how it can enhance your workflow and productivity.
                </p>
                {tool.website !== '#' && (
                  <Button asChild className="w-full">
                    <a href={tool.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Official Website
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Related Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Related Tools in {tool.category}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {Object.entries(tools)
              .filter(([key, t]) => t.category === tool.category && key !== toolName)
              .slice(0, 3)
              .map(([key, relatedTool]) => (
                <Link key={key} to={`/tools/${key}`}>
                  <Card className="hover:shadow-card transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl shadow-md flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                        {relatedTool.logo ? (
                          <img 
                            src={relatedTool.logo} 
                            alt={`${relatedTool.title} logo`}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const fallback = target.nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div className="w-full h-full bg-primary/10 rounded-lg flex items-center justify-center" style={{ display: 'none' }}>
                          <span className="text-lg font-bold text-primary">
                            {relatedTool.title.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2">{relatedTool.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {relatedTool.description.slice(0, 80)}...
                      </p>
                      <div className="mt-3">
                        <Badge variant="outline" className="text-xs">
                          {relatedTool.proficiency}% Proficiency
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}