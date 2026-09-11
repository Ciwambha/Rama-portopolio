// ---------------------------------------------------------------------------
// Central content source for the portfolio.
// Edit values here to update the site — UI components read from this file.
// ---------------------------------------------------------------------------

export const profile = {
  fullName: 'Ciwambha Raidah Zaki Rama',
  firstName: 'Ciwambha Raidah',
  lastName: 'Zaki Rama',
  preferredName: 'Rama',
  role: 'Industrial Engineering Student',
  tagline: 'Process Engineering × Manufacturing × Data × Digitalization',
  statement:
    'I turn manufacturing problems into measurable, visual, and practical solutions.',
  location: 'Cikarang, Indonesia',
  email: 'ciwambharaidahzakirama@gmail.com',
  linkedin:
    'https://www.linkedin.com/in/ciwambha-raidah-zaki-rama-54510228b/',
  github: 'https://github.com/Ciwambha',
  status: 'Currently Process Engineering Intern @ Schlemmer',
  portrait: '/rama-portrait.png',
  // Replace with the real file at /public/cv/rama-zaki-rama-cv.pdf
  resumeHref: '/cv/rama-zaki-rama-cv.pdf',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Academic', href: '#academic' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const orbitItems = [
  { icon: 'GraduationCap', label: 'Industrial Engineering' },
  { icon: 'Cog', label: 'Process Engineering' },
  { icon: 'MonitorSmartphone', label: 'Digitalization' },
  { icon: 'BarChart3', label: 'Data' },
]

export const floatingCards = [
  { title: 'President University', subtitle: 'Industrial Engineering' },
  { title: 'Process Engineering', subtitle: 'Schlemmer' },
  { title: 'Trial Digitalization', subtitle: 'Indoprima Gemilang' },
]

export const careerPath = [
  'Industrial Engineering Student',
  'Trial Engineering',
  'Digitalization & Trial Monitoring',
  'Process Engineering',
  'Process Improvement',
]

export const aboutConcepts = [
  {
    icon: 'Cog',
    title: 'Process',
    text: 'Understanding how manufacturing operations actually flow — step by step.',
  },
  {
    icon: 'BarChart3',
    title: 'Data',
    text: 'Turning messy operational information into something structured and measurable.',
  },
  {
    icon: 'Cpu',
    title: 'Technology',
    text: 'Using digital tools to make monitoring, reporting, and decisions easier.',
  },
]

export type Experience = {
  id: string
  company: string
  position: string
  period: string
  ongoing?: boolean
  description: string
  bullets: string[]
  tools?: string[]
  flow?: string[]
}

export const experiences: Experience[] = [
  {
    id: 'exp-01',
    company: 'PT Indoprima Gemilang',
    position: 'Trial Engineering Intern',
    period: 'January 2026 – May 2026',
    description:
      'Developed a digital trial monitoring dashboard to track each part number throughout the trial process.',
    bullets: [
      'Analyzed the trial monitoring workflow and data requirements.',
      'Developed a dashboard to monitor the status of each part number throughout the trial process.',
      'Structured trial data to improve visibility of trial status.',
      'Contributed to the development of a digital Trial Controlling System.',
    ],
    tools: ['VS Code', 'SQL Server', 'Laragon', 'PHP Native'],
    flow: ['Part Number', 'Trial Data', 'Database', 'Dashboard'],
  },
  {
    id: 'exp-02',
    company: 'Schlemmer',
    position: 'Process Engineering Intern',
    period: 'August 2026 – December 2026',
    ongoing: true,
    description:
      'Currently supporting the Process Engineering team through data collection and process documentation activities.',
    bullets: [
      'Collecting and organizing process-related data.',
      'Supporting initial data preparation for process analysis.',
      'Learning and documenting existing manufacturing processes.',
    ],
  },
]

export const featuredProject = {
  title: 'Trial Controlling System',
  category: 'New Product Development · Manufacturing',
  description:
    "A digitalized system designed to improve visibility and monitoring of NPD trial processes, including Pre Assembly, Assembly & Inspection.",
  workflow: [
    'Part Number',
    'Pre Assembly',
    'Assembly & Inspection',
    'Trial Data',
    'Database',
    'Monitoring',
    'Dashboard',
  ],
  tools: ['SQL Server', 'VS Code', 'Web Technologies', 'Dashboard / Data Visualization'],
  caseStudy: [
    {
      label: 'Problem',
      text: 'Trial progress for each part number during New Product Development was tracked manually, making it hard to see real-time status across Pre Assembly, Assembly, and Inspection stages.',
    },
    {
      label: 'Process',
      text: 'Mapped the trial workflow end-to-end, identified the key data points at each stage, and structured them into a relational database that could be queried and updated as trials progressed.',
    },
    {
      label: 'Solution',
      text: 'Built a digital Trial Controlling System with a monitoring dashboard that shows the live status of every part number, replacing manual tracking with a single structured source of truth.',
    },
    {
      label: 'Technology',
      text: 'SQL Server for data storage, developed and tested in VS Code, with a web-based dashboard for visualizing trial status and progress.',
    },
  ],
}

// Set `src` to a real image path (e.g. "/gallery/photo-01.jpg") to replace a slot.
export type GallerySlot = {
  id: string
  label: string
  caption: string
  src?: string
}

export const projectGallery: GallerySlot[] = [
  {
    id: 'g1',
    label: 'Login Screen',
    caption: 'Engineering Portal — role-based login for the Trial Engineering team',
    src: '/projects/trial-controlling-system/01-login.png',
  },
  {
    id: 'g2',
    label: 'Dashboard',
    caption: 'Live dashboard — project status, segment breakdown, and trial progress',
    src: '/projects/trial-controlling-system/02-dashboard.png',
  },
  {
    id: 'g3',
    label: 'Event Management',
    caption: 'Event management — tracking each part number from plan to delivery',
    src: '/projects/trial-controlling-system/03-event-management.png',
  },
  {
    id: 'g4',
    label: 'Progress Management',
    caption: 'Progress management — trial stage tracking from Cutting to Delivery',
    src: '/projects/trial-controlling-system/04-progress-management.png',
  },
  {
    id: 'g5',
    label: 'Trial Engineering Team',
    caption: 'PT Indoprima Gemilang, Plant 1 — Wiring Harness team',
    src: '/projects/trial-controlling-system/05-team.jpeg',
  },
]

export type AcademicProject = {
  id: string
  index: string
  title: string
  description: string
  tags: string[]
  image?: string
  gallery?: { src: string; caption: string }[]
}

export const academicProjects: AcademicProject[] = [
  {
    id: 'ac-1',
    index: '01',
    title: 'Facility Layout Optimization',
    description:
      'Academic project exploring facility layout alternatives and material flow using industrial engineering methods.',
    tags: ['CRAFT', 'ALDEP', 'CORELAP', 'Layout Analysis'],
  },
  {
    id: 'ac-2',
    index: '02',
    title: 'MRP & Inventory Analysis',
    description:
      'Analyzed material requirements and inventory planning to understand production needs, demand, and material availability.',
    tags: ['MRP', 'Inventory', 'Excel'],
  },
  {
    id: 'ac-3',
    index: '03',
    title: 'Ciwambha Store — Inventory Management System',
    description:
      'Course project for Information System Analysis & Design: designed the ERD and system flow for an inventory management app, then built it with login, stock master data, stock-in/stock-out transaction logs, and an executive dashboard for real-time stock and restock-priority monitoring.',
    tags: ['System Analysis', 'ERD', 'Dashboard', 'Inventory System'],
    image: '/projects/ciwambha-store/05-dashboard.png',
    gallery: [
      {
        src: '/projects/ciwambha-store/01-login.png',
        caption: 'Login screen',
      },
      {
        src: '/projects/ciwambha-store/02-erd.png',
        caption: 'Entity Relationship Diagram (ERD)',
      },
      {
        src: '/projects/ciwambha-store/05-dashboard.png',
        caption: 'Executive dashboard — stock overview & restock priority',
      },
      {
        src: '/projects/ciwambha-store/06-stock-barang.png',
        caption: 'Stock master data',
      },
      {
        src: '/projects/ciwambha-store/03-barang-masuk.png',
        caption: 'Stock-in transaction log',
      },
      {
        src: '/projects/ciwambha-store/04-barang-keluar.png',
        caption: 'Stock-out transaction log',
      },
    ],
  },
  {
    id: 'ac-4',
    index: '04',
    title: 'PeelMate — Portable Fruit Peeler (PDD Group Project)',
    description:
      'Product Design & Development group project (Group 4): designed PeelMate, a portable, ergonomic fruit peeler with a rotating blade mechanism and a transparent safety cover. My contribution covered product testing, Design for Environment, Design for Manufacturing (DFM) & Design for Assembly (DfA), and assisting on the 3D CAD orthographic views (top, front, side, bottom) shown below.',
    tags: ['Product Design', 'DFM/DfA', 'Autodesk Fusion', 'Prototype'],
    image: '/projects/peelmate-pdd/02-front-view.png',
    gallery: [
      {
        src: '/projects/peelmate-pdd/01-top-view.png',
        caption: 'Top view — assembly drawing (FP-001)',
      },
      {
        src: '/projects/peelmate-pdd/02-front-view.png',
        caption: 'Front view — assembly drawing (FP-002)',
      },
      {
        src: '/projects/peelmate-pdd/03-side-view.png',
        caption: 'Side view — assembly drawing (FP-003)',
      },
      {
        src: '/projects/peelmate-pdd/04-bottom-view.png',
        caption: 'Bottom view — assembly drawing (FP-004)',
      },
    ],
  },
]

export const skillGroups = [
  {
    icon: 'Wrench',
    title: 'Engineering',
    skills: [
      'Process Engineering',
      'Trial Engineering',
      'Process Analysis',
      'Problem Solving',
      'Manufacturing',
    ],
  },
  {
    icon: 'Database',
    title: 'Data & Digital',
    skills: [
      'Dashboard Development',
      'Data Monitoring',
      'Data Structuring',
      'Digitalization',
    ],
  },
  {
    icon: 'Terminal',
    title: 'Development Tools',
    skills: ['VS Code', 'SQL Server', 'Laragon', 'PHP Native'],
  },
]

export const education = {
  institution: 'President University',
  degree: 'Bachelor of Industrial Engineering',
  period: '2023 – 2027',
  gpa: '3.07 / 4.00',
  timeline: [
    { year: '2023', label: 'Started Industrial Engineering' },
    { year: '2026', label: 'Trial Engineering @ Indoprima Gemilang' },
    { year: '2026', label: 'Process Engineering @ Schlemmer' },
    { year: '2027', label: 'Expected Graduation' },
  ],
}

export const stats = [
  { value: 2, suffix: '', label: 'Internships' },
  { value: 4, suffix: '', label: 'Academic Projects' },
  { value: 3.07, suffix: '', label: 'Current GPA', decimals: 2 },
  { value: 2027, suffix: '', label: 'Graduation Year' },
]