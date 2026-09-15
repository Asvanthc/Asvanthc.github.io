import type { Layer } from '../components/ArchDiagram.astro';

/** Digital signage: CMS down to the pixels on the glass. */
export const signageLayers: Layer[] = [
  {
    title: 'Operator',
    edge: 'browser session',
    nodes: [
      {
        label: 'Management client',
        sub: 'Angular · TypeScript',
        note: 'Where content is uploaded, grouped, scheduled and assigned to displays.',
      },
    ],
  },
  {
    title: 'Platform',
    edge: 'REST over HTTPS',
    nodes: [
      {
        label: 'Content & scheduling API',
        sub: 'Java · Play',
        note: 'Resolves what a given display should be showing right now, and why.',
      },
      {
        label: 'Device management API',
        sub: 'commands · state',
        note: 'Remote control, snapshots and live view — each an acknowledged command, not fire-and-forget.',
        accent: 'amber',
      },
      {
        label: 'Identity',
        sub: 'OAuth 2.0 · OIDC',
        note: 'Who may operate which displays. Separate domain, separate trust boundary.',
        accent: 'signal',
      },
    ],
  },
  {
    title: 'Storage',
    edge: 'pull, with cache validation',
    nodes: [
      { label: 'Relational store', sub: 'SQL · MyBatis', note: 'Content metadata, schedules, device records and state.', accent: 'muted' },
      { label: 'Media store', sub: 'files', note: 'The actual video and image assets the players download.', accent: 'muted' },
    ],
  },
  {
    title: 'Device agent',
    edge: 'runs inside the vendor runtime',
    nodes: [
      {
        label: 'Player application',
        sub: 'JavaScript',
        note: 'Syncs its playlist, caches media locally, and keeps playing when the network is gone.',
      },
    ],
  },
  {
    title: 'Hardware',
    nodes: [
      { label: 'Samsung', sub: 'Tizen / SSSP', note: 'Its own browser engine, its own device API surface.', accent: 'rose' },
      { label: 'LG', sub: 'webOS', note: 'Different engine, different API, same application expected to run.', accent: 'rose' },
      { label: 'Android', sub: 'players & displays', note: 'The most conventional runtime of the three, and still not the same.', accent: 'rose' },
    ],
  },
];

/** A language model as one component in a system that still has to be correct. */
export const aiLayers: Layer[] = [
  {
    title: 'Entry',
    edge: 'request',
    nodes: [{ label: 'User request', sub: 'natural language', note: 'Ambiguous by nature — the system has to cope with that, not assume it away.' }],
  },
  {
    title: 'Application',
    edge: 'prompt + tool definitions',
    nodes: [
      {
        label: 'Orchestration',
        sub: 'ordinary backend code',
        note: 'Owns retries, timeouts, auth and the loop. The interesting engineering lives here, not in the prompt.',
      },
    ],
  },
  {
    title: 'Model',
    edge: 'structured output / tool call',
    nodes: [
      {
        label: 'LLM',
        sub: 'non-deterministic',
        note: 'Treat it as an unreliable component: validate what comes back, and have a defined path for when it is wrong.',
        accent: 'amber',
      },
    ],
  },
  {
    title: 'Grounding',
    edge: 'results returned to the model',
    nodes: [
      { label: 'Retrieval', sub: 'embeddings · vector search', note: 'Facts the model was never trained on, fetched at request time.', accent: 'signal' },
      { label: 'Tools', sub: 'functions the model may call', note: 'Each one is an API with a contract — the model is just another caller.', accent: 'signal' },
      { label: 'Backend services', sub: 'the existing system', note: 'The database and services that were already there and still hold the truth.', accent: 'signal' },
    ],
  },
  {
    title: 'Output',
    nodes: [
      { label: 'Validated response', sub: 'schema-checked', note: 'Parsed and validated before anything downstream trusts it.' },
      { label: 'Evaluation', sub: 'offline', note: 'How you find out whether a change made the system better or just different.', accent: 'muted' },
    ],
  },
];

/** Identity as a separate domain from the application it protects. */
export const iamLayers: Layer[] = [
  {
    title: 'Identity domain',
    edge: 'issues signed assertions — never shares its key',
    nodes: [
      { label: 'Authorization endpoint', sub: '/authorize', note: 'Front channel. Where the user authenticates, on the identity provider’s own domain.', accent: 'signal' },
      { label: 'Token endpoint', sub: '/token', note: 'Back channel. Exchanges the code for tokens after verifying the PKCE verifier.', accent: 'signal' },
      { label: 'JWKS', sub: '/.well-known/jwks.json', note: 'Public keys, so verification needs no shared secret and keys can rotate.', accent: 'signal' },
    ],
  },
  {
    title: 'Trust boundary',
    edge: 'tokens cross here — everything past it must be verified',
    nodes: [
      {
        label: 'Token validation',
        sub: 'signature · iss · aud · exp',
        note: 'A valid signature proves who issued the token. The claims decide whether it was issued for you.',
        accent: 'amber',
      },
    ],
  },
  {
    title: 'Application domain',
    nodes: [
      { label: 'Session', sub: 'server-side', note: 'The browser holds a session cookie, not a token. XSS then cannot steal a bearer token.' },
      { label: 'Authorization', sub: 'may they do this?', note: 'A different question from authentication, and the application’s own to answer.' },
      { label: 'Resource APIs', sub: 'the actual product', note: 'Each verifies the token it receives rather than trusting the caller.' },
    ],
  },
];
