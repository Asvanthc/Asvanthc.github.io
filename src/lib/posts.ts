import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'writing'>;

const WORDS_PER_MINUTE = 210;

/** Estimate reading time from the raw MDX body, ignoring frontmatter and fences. */
export function readingTime(post: Post): number {
  if (post.data.readingTime) return post.data.readingTime;
  const body = post.body ?? '';
  const words = body
    .replace(/```[\s\S]*?```/g, ' ') // code blocks read slower but carry fewer words
    .replace(/<[^>]+>/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

/** Published posts, newest first. Drafts are excluded outside of `astro dev`. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('writing', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
