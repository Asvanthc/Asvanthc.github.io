import type { APIRoute } from 'astro';
import { getPosts } from '../lib/posts';
import { site } from '../data/site';

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export const GET: APIRoute = async ({ site: astroSite }) => {
  const base = astroSite ?? new URL(site.url);
  const posts = await getPosts();

  const items = posts
    .map((post) => {
      const url = new URL(`/writing/${post.id}/`, base).href;
      return `    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.data.description)}</description>
      <pubDate>${post.data.date.toUTCString()}</pubDate>
      <dc:creator>${escapeXml(site.name)}</dc:creator>
${post.data.tags.map((t) => `      <category>${escapeXml(t)}</category>`).join('\n')}
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(`${site.name} — Engineering notes`)}</title>
    <link>${base.href}</link>
    <atom:link href="${new URL('/rss.xml', base).href}" rel="self" type="application/rss+xml" />
    <description>${escapeXml(site.description)}</description>
    <language>en</language>
    <managingEditor>${site.email} (${escapeXml(site.name)})</managingEditor>
    <lastBuildDate>${(posts[0]?.data.date ?? new Date()).toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
