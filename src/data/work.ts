/**
 * Selected engineering work.
 *
 * The two Zeetaminds entries are written as anonymised case studies: the shape of
 * the problem and the reasoning, never proprietary code, internal endpoints,
 * customer names, schemas, credentials or unreleased work. Anything a reader can
 * take away here is either a public standard (RFC 6749, RFC 7636, OIDC Core) or a
 * generic property of the device platforms involved.
 *
 * `status: 'placeholder'` entries are scaffolding for Asvanth to fill in — they are
 * rendered as visibly unfinished rather than dressed up as accomplishments.
 */

export type Work = {
  slug: string;
  kind: 'case-study' | 'project' | 'placeholder';
  category: 'Production engineering' | 'Systems engineering' | 'AI engineering' | 'Developer tools';
  title: string;
  tagline: string;
  context: string;
  /** The interesting engineering, stated as problems rather than features. */
  problems: { title: string; body: string }[];
  stack: string[];
  /** Optional link out. Case studies at work deliberately have none. */
  links?: { label: string; href: string }[];
  /** Which interactive diagram to render alongside, if any. */
  diagram?: 'oidc' | 'signage' | 'ai';
  status?: 'placeholder';
  featured?: boolean;
};

export const work: Work[] = [
  {
    slug: 'digital-signage-platform',
    kind: 'case-study',
    category: 'Production engineering',
    title: 'Digital signage: one CMS, three device ecosystems',
    tagline:
      'Getting the right media onto displays that run on hardware from three vendors, over networks nobody controls.',
    context:
      'A digital signage platform is deceptively simple to describe: an operator uploads content, assigns it to displays, and the displays play it. The complexity is in every word of that sentence. The displays are televisions and media players from different manufacturers, sitting in shops and lobbies on whatever network the venue happens to have, running embedded browser engines that are often several years behind anything you would target on the desktop. They are expected to keep playing when the server is unreachable, and to be correct again when it comes back.',
    problems: [
      {
        title: 'Three platforms, three definitions of "the web"',
        body: 'Samsung Tizen (SSSP), LG webOS and Android devices each ship their own browser engine and their own device APIs. The same player application has to run on all of them. Feature detection beats user-agent sniffing almost every time, but device APIs — the ones that control power state, capture a snapshot, or read hardware info — have no common interface at all, so the honest answer is a thin platform abstraction with a genuinely separate implementation per vendor behind it.',
      },
      {
        title: 'Media that plays on one device and silently fails on another',
        body: 'The most common report is "the video does not play", and it almost never means one thing. A file is a container holding streams in particular codecs at a particular profile and level, and playback depends on the hardware decoder, not on whether the file is technically valid. A device can accept the container, report no error, and still show black. Debugging this means separating container from codec from profile from decoder — and then deciding, at the platform level, what the supported set actually is.',
      },
      {
        title: 'Remote operations against devices you cannot reach',
        body: 'Remote control, snapshots and live view all share the same hard part: the device, the network and the server have to agree on state that is constantly drifting. A command issued to a display that rebooted thirty seconds ago has to fail in a way the operator understands, rather than hanging. That pushes you toward acknowledged commands, explicit timeouts, and a device state model that admits "I do not currently know".',
      },
      {
        title: 'Backward compatibility as a hard constraint',
        body: 'A device in the field is not on the latest build and cannot be assumed to update on command. That makes the API between server and device the most conservative interface in the system: new fields are additive, old behaviour keeps working, and a change that requires every device to update at once is not a change you can make. Most of the design discipline in this work comes from that single constraint.',
      },
    ],
    stack: ['Java', 'Play Framework', 'MyBatis', 'SQL', 'Angular', 'TypeScript', 'Samsung Tizen', 'LG webOS', 'Android'],
    diagram: 'signage',
    featured: true,
  },
  {
    slug: 'identity-and-access',
    kind: 'case-study',
    category: 'Production engineering',
    title: 'Identity as its own domain',
    tagline:
      'OAuth 2.0 and OpenID Connect in production — Authorization Code with PKCE, JWT validation against JWKS, and SSO between applications.',
    context:
      'Authentication is the one part of an application where a plausible-looking implementation and a correct one are hard to tell apart from the outside. Both let the right user in. Only one of them keeps the wrong user out. Working on identity and access management is what turned OAuth from a set of terms I could define into a set of decisions I could defend — and taught me that most of the difficulty is not the cryptography but the trust boundaries.',
    problems: [
      {
        title: 'Why the authorization code exists at all',
        body: 'The first thing worth understanding is that the authorization server cannot talk to the application directly — it can only redirect the browser. Everything in the Authorization Code flow follows from that: the code is a short-lived, single-use reference handed through an untrusted channel (the URL bar, the history, the referer header), which the client then exchanges for tokens over a direct back-channel call that an attacker cannot observe. Tokens never travel through the browser’s address bar.',
      },
      {
        title: 'PKCE, and the attack it actually stops',
        body: 'PKCE exists because a redirect URI is not a secret. If a malicious application on the same device can register or intercept the redirect, it can steal the authorization code in transit. PKCE binds the code to the client that started the flow: the client sends a hash of a random verifier up front, and must present the original verifier at the token endpoint. Intercepting the code is then useless without the verifier, which never left the legitimate client.',
      },
      {
        title: 'Validating a token means more than checking the signature',
        body: 'An RS256 JWT is signed, not encrypted — anyone can read the claims; only the holder of the private key could have produced the signature. Verification means fetching the right public key from the JWKS endpoint by key ID, checking the signature, and then checking the claims that actually scope the token: issuer, audience, expiry, and nonce where the flow requires it. A token that verifies cryptographically but was issued for a different audience is not a valid token for you.',
      },
      {
        title: 'Authentication and authorization are different questions',
        body: 'Authentication answers "who is this", authorization answers "may they do this", and conflating them produces systems where being logged in is accidentally the same as being permitted. Keeping identity as its own domain with its own boundary — the identity provider issues assertions, the application decides what those assertions entitle you to — is what makes permissions reasonable to change later.',
      },
    ],
    stack: ['OAuth 2.0', 'OpenID Connect', 'PKCE', 'JWT', 'RS256', 'JWKS', 'SSO', 'Java'],
    diagram: 'oidc',
    featured: true,
  },
  {
    slug: 'portfolio-dashboard',
    kind: 'project',
    category: 'Systems engineering',
    title: 'Portfolio dashboard',
    tagline:
      'A personal finance dashboard that replaced a spreadsheet — and turned into an exercise in how to fetch data from providers that do not want to be fetched from.',
    context:
      'This started as a way to stop maintaining a portfolio spreadsheet by hand: a Node/Express API reading the workbook and exposing JSON, with a React and Vite frontend over it. The interesting part was not the charts. It was pricing.',
    problems: [
      {
        title: 'The naive version got rate-limited into failing',
        body: 'The first implementation raced three price providers per ticker. With a few dozen holdings that is hundreds of outbound requests in a burst, and the providers responded exactly as you would expect. The rewrite is bulk-first: ask each source for many symbols in one request where the API allows it, so the same portfolio costs a handful of requests instead of hundreds.',
      },
      {
        title: 'A fallback chain, ordered by cost rather than preference',
        body: 'Sources are tried in a defined order, batched where possible, falling back to per-symbol lookups and finally to whole-market end-of-day files that answer for every symbol in a single request. Each tier is cheaper to the provider and slower or staler for the user, which is the right trade to make explicitly rather than accidentally.',
      },
      {
        title: 'Caching by how fast the underlying data actually changes',
        body: 'Quotes are cached for minutes, bulk market files for longer, and symbol-to-identifier lookups for a week, because those three things change at completely different rates. Picking one cache TTL for everything would have been simpler to write and wrong for at least two of the three.',
      },
      {
        title: 'The deployed environment is not the dev environment',
        body: 'Some providers are reachable from a home connection and blocked from a cloud datacenter IP. That is not something you can test locally, so the app exposes a diagnostic endpoint that reports which providers *this* instance can actually reach — observability for a failure that only exists in production.',
      },
    ],
    stack: ['Node.js', 'Express', 'React', 'Vite', 'REST'],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/asvanthc/financial-portfolio' }],
  },
  {
    slug: 'ai-project-placeholder',
    kind: 'placeholder',
    category: 'AI engineering',
    title: 'AI engineering project',
    tagline: 'Slot reserved for a real LLM application — not filled with an invented one.',
    context:
      'I would rather leave this visibly empty than describe a project I have not built. This slot is for an application where a language model is one component in a system that still has to be correct: structured output that gets validated, tools the model can call, retrieval where it beats a longer prompt, and an evaluation harness that can tell whether a change made things better.',
    problems: [],
    stack: ['LLM APIs', 'Tool calling', 'RAG', 'Evaluation'],
    status: 'placeholder',
    diagram: 'ai',
  },
  {
    slug: 'developer-tool-placeholder',
    kind: 'placeholder',
    category: 'Developer tools',
    title: 'Developer tooling',
    tagline: 'Slot reserved for a utility, automation or dashboard worth writing up.',
    context:
      'Small tools that remove a recurring annoyance are some of the most useful software there is, and the easiest to overstate. This slot is for one that genuinely earned its place in a workflow.',
    problems: [],
    stack: [],
    status: 'placeholder',
  },
];

export const featuredWork = work.filter((w) => w.featured);
export const caseStudies = work.filter((w) => w.kind === 'case-study');
