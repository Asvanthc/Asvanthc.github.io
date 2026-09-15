/**
 * Capability map — no percentages, no star ratings.
 *
 * Every entry carries an honest level instead:
 *   production — used in work that shipped and that I have had to debug in production
 *   working    — used enough to be productive; not the thing I'd claim deep expertise in
 *   learning   — actively building competence right now; would not claim it in an interview
 */

export type Level = 'production' | 'working' | 'learning';

export const levels: Record<Level, { label: string; blurb: string }> = {
  production: {
    label: 'Production',
    blurb: 'Used in software that shipped, and that I have had to debug when it broke.',
  },
  working: {
    label: 'Working knowledge',
    blurb: 'Enough to be productive and read other people’s code, short of deep expertise.',
  },
  learning: {
    label: 'Currently learning',
    blurb: 'Actively building competence. Listed because it is honest, not because it is finished.',
  },
};

export type SkillGroup = {
  title: string;
  note?: string;
  items: { name: string; level: Level }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: [
      { name: 'Java', level: 'production' },
      { name: 'JavaScript', level: 'production' },
      { name: 'TypeScript', level: 'production' },
      { name: 'SQL', level: 'production' },
      { name: 'Python', level: 'working' },
      { name: 'C / C++', level: 'working' },
    ],
  },
  {
    title: 'Backend',
    note: 'Where most of my day goes.',
    items: [
      { name: 'Play Framework', level: 'production' },
      { name: 'REST API design', level: 'production' },
      { name: 'MyBatis', level: 'production' },
      { name: 'Guice / DI', level: 'production' },
      { name: 'Service architecture', level: 'working' },
      { name: 'Node.js / Express', level: 'working' },
    ],
  },
  {
    title: 'Identity & security',
    note: 'The area I have gone deepest on, and the subject of most of my writing.',
    items: [
      { name: 'OAuth 2.0', level: 'production' },
      { name: 'OpenID Connect', level: 'production' },
      { name: 'Authorization Code + PKCE', level: 'production' },
      { name: 'JWT / RS256 / JWKS', level: 'production' },
      { name: 'Single sign-on', level: 'production' },
      { name: 'Session & token lifecycle', level: 'production' },
      { name: 'Threat modelling', level: 'learning' },
    ],
  },
  {
    title: 'Web',
    items: [
      { name: 'Angular', level: 'production' },
      { name: 'Browser APIs', level: 'production' },
      { name: 'HTML / CSS', level: 'production' },
      { name: 'Embedded web runtimes', level: 'production' },
      { name: 'React', level: 'working' },
      { name: 'Astro', level: 'working' },
    ],
  },
  {
    title: 'Devices & platforms',
    note: 'Signage hardware: three vendors, three sets of rules.',
    items: [
      { name: 'Samsung Tizen (SSSP)', level: 'production' },
      { name: 'LG webOS', level: 'production' },
      { name: 'Android', level: 'production' },
      { name: 'Linux', level: 'production' },
      { name: 'Media containers & codecs', level: 'working' },
      { name: 'Device management / MDM', level: 'working' },
    ],
  },
  {
    title: 'Data',
    items: [
      { name: 'MySQL', level: 'production' },
      { name: 'Schema & query design', level: 'production' },
      { name: 'MongoDB', level: 'working' },
      { name: 'Caching strategy', level: 'working' },
      { name: 'Vector databases', level: 'learning' },
    ],
  },
  {
    title: 'AI engineering',
    note: 'The newest area for me. Listed at the level I actually hold it, not the level it would be useful to claim.',
    items: [
      { name: 'LLM APIs', level: 'working' },
      { name: 'Prompt design', level: 'working' },
      { name: 'Structured outputs', level: 'working' },
      { name: 'Tool calling', level: 'working' },
      { name: 'RAG & embeddings', level: 'learning' },
      { name: 'Agent orchestration', level: 'learning' },
      { name: 'Evaluation', level: 'learning' },
    ],
  },
  {
    title: 'Tooling & infrastructure',
    items: [
      { name: 'Git', level: 'production' },
      { name: 'Gradle / Maven', level: 'production' },
      { name: 'Production debugging', level: 'production' },
      { name: 'Nginx', level: 'working' },
      { name: 'Docker', level: 'learning' },
      { name: 'CI/CD pipelines', level: 'learning' },
      { name: 'Cloud architecture', level: 'learning' },
    ],
  },
];

/** "Currently learning" — where I am heading, stated as direction, not achievement. */
export const learning = [
  {
    title: 'AI engineering',
    body: 'Treating an LLM as an unreliable component inside an otherwise ordinary system: where to put retries, how to validate structured output, when retrieval beats a bigger prompt, and how to evaluate any of it without fooling myself.',
    items: ['LLM application architecture', 'Tool calling', 'RAG', 'Vector databases', 'Evaluation', 'Agent workflows'],
  },
  {
    title: 'Distributed systems',
    body: 'I already work on a system where thousands of clients hold their own state and the network is unreliable by default. I want the vocabulary and the theory behind the problems I keep meeting in practice.',
    items: ['Consistency models', 'Messaging & queues', 'Caching', 'Backpressure', 'Reliability', 'Observability'],
  },
  {
    title: 'Cloud & infrastructure',
    body: 'Less clicking in consoles, more understanding of what the platform is actually doing. Containers, reproducible builds, and pipelines that make a deploy boring.',
    items: ['Containers', 'CI/CD', 'Infrastructure as code', 'Cloud architecture'],
  },
  {
    title: 'Advanced backend engineering',
    body: 'The parts that only show up under load or under attack: concurrency, performance work backed by measurement, and API design that survives its second and third consumer.',
    items: ['System design', 'Concurrency', 'Performance profiling', 'API evolution', 'Security engineering'],
  },
];
