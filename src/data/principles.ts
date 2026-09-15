/**
 * How I think about engineering.
 * First person, specific, and each one earned from something that actually went wrong.
 */

export const principles = [
  {
    n: '01',
    title: 'Understand the system before changing it.',
    body: 'The fastest way to cause an outage is to fix a symptom in a part of the system you have not read yet. Before I change code I try to answer three questions: who calls this, what does it assume, and what breaks if it returns something different. If I cannot answer them, I am not ready to edit the file.',
  },
  {
    n: '02',
    title: 'Prefer simple architecture over clever architecture.',
    body: 'Every layer of indirection is a thing the next person has to hold in their head at 2am. I would rather write a boring service with an obvious call path than an elegant one that needs a diagram to explain. Complexity should have to justify itself; simplicity gets the benefit of the doubt.',
  },
  {
    n: '03',
    title: 'Production behaviour beats theoretical correctness.',
    body: 'A spec tells you what should happen. A device in a shop tells you what does. I have shipped code that was correct by the standard and still wrong in the field, because a runtime three years out of date disagreed. The real system is the source of truth, and the spec is a strong hypothesis about it.',
  },
  {
    n: '04',
    title: 'Debug from evidence, not from intuition.',
    body: 'When something fails I want a log line, a network capture, a reproduction — something that constrains the search space. Intuition is useful for choosing which evidence to collect first, and dangerous as a substitute for collecting it. The question I keep asking is: what would I expect to see if I were right?',
  },
  {
    n: '05',
    title: 'Security is a property of architecture, not a feature you add.',
    body: 'Working on IAM taught me that authentication decisions leak into everything: where state lives, how long a session survives, which service is allowed to trust which token. You cannot bolt that on at the end. Decide the trust boundaries first, and most of the individual security bugs stop being possible.',
  },
  {
    n: '06',
    title: 'An API is a contract, and someone already depends on it.',
    body: 'Once a response shape is out there, a client is parsing it — possibly a device in the field that will not be updated this quarter. Adding a field is cheap, changing the meaning of one is expensive, and removing one is a decision, not a cleanup. I try to design endpoints as if I will never get to change them.',
  },
  {
    n: '07',
    title: 'Compatibility is an engineering constraint, not an annoyance.',
    body: 'I write code that has to run on browser engines several years behind current, on hardware I cannot physically reach. That is not a bug in the plan; it is the plan. Treating old runtimes as a design input — rather than complaining about them — is most of what makes device work tractable.',
  },
  {
    n: '08',
    title: 'Observability beats guessing.',
    body: 'The difference between a ten-minute fix and a two-day one is usually whether the system said anything useful before it fell over. Logging the input that caused the branch, not just the fact that the branch was taken, is the cheapest investment I know of.',
  },
  {
    n: '09',
    title: 'Build for failure, not just the happy path.',
    body: 'Networks partition, devices reboot mid-download, tokens expire in the middle of a request, and a media file that worked yesterday hits a decoder that will not take it. The interesting part of the design is what happens then. Retries, timeouts and a safe fallback state are features, not defensive padding.',
  },
  {
    n: '10',
    title: 'AI should augment engineering, not replace the fundamentals.',
    body: 'I use LLMs daily and they have genuinely changed how fast I work. They have not changed what it means for code to be correct. A model can produce a plausible integration in seconds; knowing whether it handles the expired-token case is still the job. I treat AI as a fast, confident junior collaborator whose work I am accountable for.',
  },
];

/** Engineering identity — the layers I actually work across. */
export const identity = [
  {
    key: 'backend',
    title: 'Backend engineering',
    body: 'APIs, business logic and services in Java on the Play Framework, with Guice and MyBatis over a relational schema. The work that decides whether everything above it can be simple.',
    tags: ['Java', 'Play', 'MyBatis', 'REST', 'SQL'],
    accent: 'accent',
  },
  {
    key: 'identity',
    title: 'Identity & security',
    body: 'OAuth 2.0 and OpenID Connect in practice: Authorization Code with PKCE, JWT validation against JWKS, refresh and session lifetime, SSO, and the difference between proving who someone is and deciding what they may do.',
    tags: ['OAuth 2.0', 'OIDC', 'PKCE', 'JWT', 'SSO'],
    accent: 'signal',
  },
  {
    key: 'product',
    title: 'Product engineering',
    body: 'Customer-facing software rather than exercises. Features that have to work for operators who did not read the release notes, on the day they need them.',
    tags: ['Angular', 'TypeScript', 'CMS', 'Scheduling'],
    accent: 'amber',
  },
  {
    key: 'devices',
    title: 'Device & platform engineering',
    body: 'Signage players on Samsung Tizen, LG webOS and Android: media playback, remote control, snapshots and live view, on embedded runtimes with their own rules about what a browser is.',
    tags: ['Tizen', 'webOS', 'Android', 'Media'],
    accent: 'rose',
  },
  {
    key: 'ai',
    title: 'AI engineering',
    body: 'Learning to build applications where a language model is one component in a system that still has to be correct: structured outputs, tool calling, retrieval, and evaluation that does not flatter itself. The newest of these five, and the one I am least expert in.',
    tags: ['LLM APIs', 'Tool calling', 'RAG', 'Evaluation'],
    accent: 'accent',
  },
];
