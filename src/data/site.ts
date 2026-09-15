export const site = {
  name: 'Asvanth C',
  shortName: 'Asvanth',
  role: 'Software Engineer',
  company: 'Zeetaminds',
  url: 'https://asvanthc.github.io',
  locale: 'en_IN',
  title: 'Asvanth C — Software Engineer',
  description:
    'Software Engineer at Zeetaminds working across backend systems, identity and access management, digital signage device platforms and web applications — currently going deeper on AI engineering and distributed systems.',
  keywords: [
    'Asvanth C',
    'Software Engineer',
    'Backend Engineer',
    'Java',
    'Play Framework',
    'OAuth 2.0',
    'OpenID Connect',
    'Identity and Access Management',
    'Digital Signage',
    'Samsung Tizen',
    'LG webOS',
    'Angular',
    'AI Engineering',
  ],
  email: 'asvanthc@gmail.com',
  resume: '/asv_c/resume.pdf',
} as const;

export const socials = [
  { label: 'GitHub', href: 'https://github.com/asvanthc', handle: '@asvanthc', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/asvanth/', handle: 'in/asvanth', icon: 'linkedin' },
  { label: 'Email', href: `mailto:${site.email}`, handle: site.email, icon: 'mail' },
] as const;

export const nav = [
  { label: 'Work', href: '/#experience' },
  { label: 'Engineering', href: '/#engineering' },
  { label: 'Writing', href: '/writing' },
  { label: 'Skills', href: '/#skills' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
] as const;
