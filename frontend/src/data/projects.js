export const NEXORA_CASE_STUDY = {
  id: 'nexora-ai',
  title: 'Nexora AI',
  subtitle: 'AI Customer Engagement & Automation Platform',
  badge: 'Flagship Case Study',
  category: 'AI / SaaS',
  shortDescription:
    'An AI-powered SaaS experience focused on customer conversations, lead management, human handover, voice communication, workflow automation and analytics.',
  liveUrl: null, // Only real live links if available, never fake
  technologies: ['React', 'Node.js', 'Socket.io', 'AI Integrations', 'REST APIs', 'Tailwind CSS'],
  screens: [
    {
      step: '01',
      title: 'Product Overview',
      subtitle: 'Centralized command center for conversations and operational intelligence',
      caption: 'Real-time overview of active chats, conversion signals, and automated routing.',
      screenType: 'overview',
    },
    {
      step: '02',
      title: 'Chatbot Builder',
      subtitle: 'Designing intelligent customer conversations.',
      caption: 'Configure AI behavior, capture qualified leads and hand conversations to a human when needed.',
      screenType: 'builder',
    },
    {
      step: '03',
      title: 'Conversation / Inbox',
      subtitle: 'Turn customer conversations into actionable leads.',
      caption:
        'Manage AI conversations, capture leads and hand customers to your team without losing context.',
      screenType: 'inbox',
    },
    {
      step: '04',
      title: 'Lead Management',
      subtitle: 'Turn conversations into qualified opportunities.',
      caption: 'Capture, qualify and manage leads from AI-powered customer conversations.',
      screenType: 'leads',
    },
    {
      step: '05',
      title: 'Automation',
      subtitle: 'Turn repetitive workflows into intelligent automation.',
      caption: 'Connect customer events to automated actions, follow-ups and team workflows.',
      screenType: 'automation',
    },
    {
      step: '06',
      title: 'Analytics / Voice',
      subtitle: 'Turn conversations into actionable intelligence.',
      caption:
        'Understand customer sentiment, monitor voice interactions and uncover insights from every conversation.',
      screenType: 'analytics',
    },
  ],
  studySections: {
    overview:
      'Nexora AI is an intelligent customer engagement platform designed to bridge the gap between high-volume customer inquiries and human operational workflows. Instead of passive chatbots, it unifies intelligent automated replies, lead extraction, and graceful human handoff.',
    challenge:
      'Businesses frequently struggle with after-hours customer inquiries, repetitive FAQ bottlenecks, and dropped leads during peak operational hours. Traditional rule-based bots frustrate visitors, while fully manual support cannot scale without substantial overhead.',
    solution:
      'A multi-tiered conversational architecture that pairs fast contextual AI inference with instant operator takeover. Inquiries are automatically scored, qualified, and routed into dedicated pipelines while maintaining strict context history.',
    productExperience:
      'The user interface prioritizes clarity and rapid action. Support teams can inspect incoming chat streams, review auto-extracted lead details in one click, and orchestrate custom automation rules without writing complex scripts.',
    myContribution:
      'Architected and implemented the end-to-end full-stack solution: engineered the reactive React frontend, real-time messaging pipeline with Socket.io, backend REST API layer in Node.js, AI contextual prompt parsing, and database schema design.',
    technology: [
      { name: 'Frontend', details: 'React, Tailwind CSS, Component Architecture, Radix UI primitives' },
      { name: 'Backend & Real-Time', details: 'Node.js, Express.js, WebSockets (Socket.io) for live messaging' },
      { name: 'Intelligence Layer', details: 'AI LLM integrations, intent classification, structured prompt chaining' },
      { name: 'Data Architecture', details: 'Relational & Document models for chat threads, leads, and event logs' },
    ],
    keyTakeaways: [
      'Engineered an intuitive interface that makes AI workflows accessible to non-technical business operators.',
      'Optimized real-time socket subscriptions to handle concurrent conversations smoothly.',
      'Designed structured data extraction patterns to turn unstructured customer chats into qualified business leads.',
    ],
  },
}

export const OTHER_PROJECTS = [
  {
    id: 'jobspot',
    title: 'JobSpot',
    subtitle: 'Full-Stack Career & Talent Discovery Platform',
    category: 'Full-Stack',
    categories: ['Full-Stack', 'Business Applications'],
    description:
      'A comprehensive career matching portal featuring structured vacancy listings, role filtering, candidate submission pipelines, and employer applicant review management.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'REST APIs'],
    highlights: [
      'Granular search and filtering across industries, skill tags, and compensation brackets.',
      'Dedicated recruiter workflow for candidate review and application lifecycle tracking.',
      'Responsive design ensuring frictionless browsing for job seekers across mobile and desktop.',
    ],
    liveUrl: 'https://jobspot-om79.onrender.com',
    githubUrl: null,
  },
  {
    id: 'chefnova',
    title: 'ChefNova',
    subtitle: 'AI-Powered Food Ordering Platform',
    category: 'AI / SaaS',
    categories: ['AI / SaaS', 'Full-Stack', 'Business Applications'],
    description:
      'An AI-powered full-stack food ordering platform with secure authentication, food recommendations, cart management, and responsive UI for desktop and mobile users.',
    technologies: ['React', 'TypeScript', 'TanStack Start', 'Supabase', 'Cloudinary', 'Groq AI', 'Tailwind CSS', 'Vercel'],
    highlights: [
      'Engineered scalable frontend and backend integration using React, TypeScript, TanStack Start, and Supabase.',
      'Implemented Groq AI for intelligent food recommendations, auth, and media handling with Cloudinary.',
      'Built reusable components and deployed the app on Vercel, improving maintainability and production readiness.',
    ],
    liveUrl: 'https://chefnova-delight-ai-powered-food-or-zeta.vercel.app/auth/login',
    githubUrl: null,
  },
  {
    id: 'chatrecruit',
    title: 'ChatRecruit',
    subtitle: 'Real-Time Candidate Screening & Messaging Platform',
    category: 'Real-Time',
    categories: ['Real-Time', 'AI / SaaS', 'Full-Stack'],
    description:
      'A real-time hiring communication tool that enables instant candidate interviews, automated screening inquiries, and organized interviewer evaluation feeds.',
    technologies: ['React', 'Socket.io', 'Node.js', 'Express.js', 'MySQL', 'REST APIs'],
    highlights: [
      'Low-latency bidirectional messaging between hiring managers and applicants.',
      'Pre-interview automated screening questionnaires with quick response scoring.',
      'Structured interview audit log and evaluation rating system for hiring teams.',
    ],
    liveUrl: null,
    githubUrl: null,
  },
]

export const PROJECT_FILTERS = [
  'All',
  'AI / SaaS',
  'Full-Stack',
  'Real-Time',
  'Business Applications',
]
