
/**
 * KARTHIK V - PERSONAL PORTFOLIO
 * Customised using the information in the supplied resume.
 */

/* ───────────── 1. BASIC INFO ───────────── */
export const SITE = {
  name: 'Karthik V',
  pageTitle: 'Karthik V – QA Analyst | Aspiring SDET',
  role: 'Application Tester | Quality Assurance Analyst',
  email: 'karthikvenkateshm21@gmail.com',
  phone: '919360264950',
  whatsappMessage: 'Hi Karthik, I visited your portfolio and would like to connect.',
  available: true,
};

/* ───────────── 2. HERO ───────────── */
export const HERO = {
  eyebrow: 'QUALITY ASSURANCE • SOFTWARE TESTING',
  headline: 'KARTHIK V',
  roles: ['QA ANALYST', 'ASPIRING SDET'] as [string, string],
  tagline:
    'Quality Assurance professional with 2.5+ years of experience in software testing, API validation and backend testing, focused on building reliable software.',
  primaryButton: 'EXPLORE MY WORK',
  secondaryButton: 'GET IN TOUCH',
  image: '/assets/hero-red-bg.jpg',
  imageAlt: 'Professional portrait of Karthik V',
  imagePosition: '69% center',
};

/* ───────────── 3. LOADING SCREEN ───────────── */
export const LOADER = {
  statement: 'QUALITY THROUGH TESTING. RELIABILITY THROUGH VALIDATION.',
  redWords: ['TESTING', 'VALIDATION'],
};

/* ───────────── 4. ABOUT ───────────── */
export const ABOUT = {
  eyebrow: 'QA ANALYST · SOFTWARE TESTING · QUALITY ENGINEERING',
  portrait: '/media/profile.webp',
  portraitAlt: 'Karthik V - Quality Assurance Analyst',
  portraitCaption: 'QA ANALYST | ASPIRING SDET',

  paragraphs: [
    'I am Karthik V, a Quality Assurance Analyst with 2.5+ years of experience at Tata Consultancy Services. My experience includes functional, regression, system, API and backend testing, along with SQL validation, XML verification and defect lifecycle management.',

    'I have experience validating automated data-processing workflows across DEV, QA and UAT environments using Postman, SQL and JIRA. I also have a foundation in Java, Python and web development. Currently, I am developing my Playwright automation skills and working towards growing into an SDET / Automation Testing role.',
  ],

  technologies: [
    'Java',
    'Python',
    'SQL',
    'Postman',
    'XML',
    'JIRA',
    'Playwright'
  ],

  focus: [
    'Functional & Regression Testing',
    'API & Backend Validation',
    'Automation Testing',
  ],
};

/* ───────────── 5. SOCIAL LINKS ───────────── */
export const SOCIALS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/Karthikoffical',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/karthik-venkatesh-63382a201?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
] as const;

/* ───────────── 6. TECHNICAL SKILLS ───────────── */
export const SKILL_CARDS: {
  name: string;
  category: string;
  level: string;
}[] = [
  {
    name: 'Manual & Functional Testing',
    category: 'Functional · Regression · System',
    level: 'Experienced',
  },
  {
    name: 'API Testing',
    category: 'Postman · REST APIs · XML · JSON',
    level: 'Experienced',
  },
  {
    name: 'Database Testing',
    category: 'SQL · Oracle DB · MS Access',
    level: 'Proficient',
  },
  {
    name: 'Programming',
    category: 'Java · Python Basics · C#',
    level: 'Foundational',
  },
  {
    name: 'Backend Validation',
    category: 'XML · SQL · Data Integrity',
    level: 'Proficient',
  },
  {
    name: 'Automation Learning',
    category: 'Playwright · Test Automation',
    level: 'Currently Learning',
  },
];

/* ───────────── 6b. TECH STACK ───────────── */
export const TECH_STACK: string[] = [
  'Java',
  'JavaScript',
  'Python',
  'C#',
  'Postman',
  'SQL',
];

/* ───────────── 7. PROJECTS ───────────── */
export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  videoUrl?: string;
  embedUrl?: string;
  driveUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  kind?: 'video' | 'software';
  poster?: string;
  description?: string;
  tags?: string[];
}

export const PORTFOLIO_PROJECTS: Project[] = [

  {
    id: 'expense-tracker',
    kind: 'software',
    title: 'Personal Expense Tracker',
    subtitle: 'Full-Stack Web Application',
    category: 'Full Stack Development',
    poster: '/assets/thumbnails/project-1-1.jpg',

    description:
      'Developed and deployed a full-stack expense management application with secure authentication, expense and budget management, CRUD operations, filtering, search, pagination and dashboard insights. Implemented the application using JavaScript, Node.js, Express.js, MongoDB and REST APIs.',

    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST API',
      'Postman',
      'Vercel',
      'Render',
    ],
  },

  {
    id: 'sign-language-detection',
    kind: 'software',
    title: 'Sign Language Detection',
    subtitle: 'Deep Learning Academic Project',
    category: 'Machine Learning',
    poster: '/assets/thumbnails/project-2-1.jpg',

    description:
      'Contributed to an academic deep-learning project for sign language detection using SSD MobileNet FPN-Lite (640x640) in Jupyter Notebook. Worked on image collection and labelling, TensorFlow SSD model installation from TensorFlow Model Zoo, and model training and testing.',

    tags: [
      'Python',
      'Deep Learning',
      'TensorFlow',
      'SSD MobileNet',
      'Jupyter Notebook',
      'Image Labelling',
    ],
  },

  {
    id: 'carpooling',
    kind: 'software',
    title: 'CarPooling Application',
    subtitle: 'Ride-Sharing Web Application',
    category: 'Web Development',
    poster: '/assets/thumbnails/project-3-1.jpg',

    description:
      'Designed and developed a ride-sharing application using C# and .NET Framework with MS Access as the relational database. Implemented separate login modules for car owners to post rides and ride partners to search and book available rides, with CRUD operations and form validation.',

    tags: [
      'C#',
      '.NET Framework',
      'Visual Studio',
      'MS Access',
      'CRUD',
      'Form Validation',
    ],
  },

];

/* ───────────── 8. PROFESSIONAL FOCUS ─────────────
 * Reusing the original template's services data structure.
 * These are career focus areas, not paid freelance services.
 */
export const SERVICES_PRICING = [
  {
    id: 'service-1',
    title: 'Functional & Regression Testing',
    priceLabel: 'Focus Area',
    price: 'Software Quality',
    featured: true,
  },
  {
    id: 'service-2',
    title: 'API Testing & Validation',
    priceLabel: 'Focus Area',
    price: 'Postman · REST APIs',
    featured: false,
  },
  {
    id: 'service-3',
    title: 'Database & Backend Testing',
    priceLabel: 'Focus Area',
    price: 'SQL · XML Validation',
    featured: false,
  },
  {
    id: 'service-4',
    title: 'Defect Management',
    priceLabel: 'Focus Area',
    price: 'JIRA · RCA · STLC',
    featured: false,
  },
  {
    id: 'service-5',
    title: 'Automation Upskilling',
    priceLabel: 'Learning Focus',
    price: 'Playwright',
    featured: false,
  },
] as const;

/* ───────────── 9. HEADLINE NUMBERS ───────────── */
export const CLIENT_STATS = [
  {
    id: 'stat-1',
    value: 2.5,
    suffix: '+',
    label: 'Years Experience',
  },
  {
    id: 'stat-2',
    value: 3,
    suffix: '',
    label: 'Academic & Personal Projects',
  },
  {
    id: 'stat-3',
    value: 4,
    suffix: '',
    label: 'Certifications',
  },
] as const;

/* ───────────── DERIVED - DO NOT EDIT ───────────── */
export const WHATSAPP_URL =
  `https://wa.me/${SITE.phone}?text=${encodeURIComponent(SITE.whatsappMessage)}`;