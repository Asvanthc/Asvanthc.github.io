/**
 * Work experience.
 *
 * Deliberate constraints on the copy in this file:
 *  - No invented metrics (no "improved X by 40%", no user counts, no scale numbers).
 *  - Verbs are scoped to what was actually done: worked on, built, contributed to,
 *    debugged, integrated. Never "owned the architecture of" or "led".
 *  - Product specifics stay at the level a public case study can go: no customer
 *    names, internal URLs, proprietary algorithms or unreleased features.
 */

export type Role = {
  company: string;
  title: string;
  start: string;
  end: string;
  period: string;
  location: string;
  summary: string;
  /** Grouped so the page can render themes rather than a flat bullet dump. */
  areas: { title: string; points: string[] }[];
  stack: string[];
};

export const roles: Role[] = [
  {
    company: 'Zeetaminds',
    title: 'Software Engineer',
    start: '2024-08',
    end: 'present',
    period: 'August 2024 — Present',
    location: 'Coimbatore, India',
    summary:
      'Zeetaminds builds a digital signage platform: a content management system that schedules and delivers media to displays running in shops, offices, campuses and public spaces. I work across the backend that serves those displays, the identity layer that guards it, and the device-side code that has to behave the same on hardware from three different vendors.',
    areas: [
      {
        title: 'Backend & APIs',
        points: [
          'Work on server-side features in Java on the Play Framework, with Guice for dependency injection and MyBatis for the SQL layer.',
          'Build and extend REST endpoints consumed by both the web client and the device agents, which means two very different clients with different tolerance for change.',
          'Write and review SQL against the relational schema behind content, scheduling and device state.',
          'Investigate production issues from logs and reproduction rather than guesswork, and fix the cause instead of the symptom where the change is safe to make.',
        ],
      },
      {
        title: 'Identity & access management',
        points: [
          'Worked on identity and access management, including OAuth 2.0 and OpenID Connect flows — Authorization Code with PKCE, token exchange, and single sign-on between applications.',
          'Worked with JWT-based tokens: RS256 signatures, JWKS-based key distribution, claim and audience validation, and the practical differences between access tokens, ID tokens and refresh tokens.',
          'Handled the parts of login that are easy to get wrong: state and nonce, login CSRF protection, redirect URI handling, session lifetime and token refresh.',
        ],
      },
      {
        title: 'Device & platform engineering',
        points: [
          'Built and debugged the player-side web application that runs on Samsung Tizen (SSSP), LG webOS and Android signage devices.',
          'Worked around the constraints of embedded browser engines: older runtimes, missing or partial web APIs, and vendor-specific device APIs that have no cross-platform equivalent.',
          'Worked on media playback across these platforms — container and codec support, hardware decoder limits, and the failure modes where the same file plays on one device and silently does not on another.',
          'Worked on device-management features including remote control, snapshots and live view, where the device, the network and the server all have to agree on state.',
        ],
      },
      {
        title: 'Web client & integrations',
        points: [
          'Contributed features to the Angular + TypeScript management client used to operate displays, content and schedules.',
          'Worked on integrations between the platform and external systems, including the compatibility work that legacy integrations demand.',
          'Kept backward compatibility in mind as a hard constraint: devices in the field are not all on the latest build, and cannot be assumed to update on command.',
        ],
      },
    ],
    stack: [
      'Java',
      'Play Framework',
      'Guice',
      'MyBatis',
      'SQL',
      'REST APIs',
      'OAuth 2.0',
      'OpenID Connect',
      'JWT / JWKS',
      'Angular',
      'TypeScript',
      'JavaScript',
      'Samsung Tizen',
      'LG webOS',
      'Android',
      'Linux',
    ],
  },
];

/** Career timeline. Only dates that are actually known. */
export const timeline = [
  {
    when: '2020 — 2024',
    title: 'B.Tech, Computer Science and Engineering',
    org: 'Amrita Vishwa Vidyapeetham, Coimbatore',
    body: 'Data structures and algorithms, operating systems, DBMS, computer networks, distributed computing, computer architecture, cryptography and network security.',
    kind: 'education' as const,
  },
  {
    when: 'August 2024',
    title: 'Joined Zeetaminds as a Software Engineer',
    org: 'Zeetaminds',
    body: 'Moved from coursework into production software: code that other people depend on, running on hardware I cannot reach.',
    kind: 'work' as const,
  },
  {
    when: '2024 — now',
    title: 'Production engineering across backend, identity and devices',
    org: 'Zeetaminds',
    body: 'Backend services in Java and Play, IAM with OAuth 2.0 and OpenID Connect, and device-side work across Samsung Tizen, LG webOS and Android.',
    kind: 'work' as const,
  },
  {
    when: 'Now →',
    title: 'Going deeper: AI engineering, distributed systems, system design',
    org: 'Ongoing',
    body: 'Building LLM-backed applications and studying the failure modes of distributed systems, with the same bias toward understanding the layer underneath.',
    kind: 'future' as const,
  },
];

export const education = {
  degree: 'B.Tech, Computer Science and Engineering',
  school: 'Amrita Vishwa Vidyapeetham',
  location: 'Coimbatore, Tamil Nadu',
  period: '2020 — 2024',
  coursework: [
    'Data Structures & Algorithms',
    'Operating Systems',
    'Database Management Systems',
    'Computer Networks',
    'Distributed Computing',
    'Computer Architecture',
    'Cryptography & Network Security',
    'Object Oriented Programming',
  ],
};
