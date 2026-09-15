// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import expressiveCode from 'astro-expressive-code';

export default defineConfig({
  site: 'https://asvanthc.github.io',

  integrations: [
    // Must come before mdx() so code blocks in .mdx are handled by Expressive Code.
    expressiveCode({
      themes: ['github-dark-default', 'github-light'],
      // Follow the site's own theme switch rather than the OS preference.
      themeCssSelector: (theme) => `[data-theme="${theme.type}"]`,
      useDarkModeMediaQuery: false,
      defaultProps: {
        // Long URLs and header lines should not need a sideways scroll on a phone.
        wrap: true,
        preserveIndent: true,
        // Shell commands read worse wrapped than scrolled.
        overridesByLang: { 'bash,sh,zsh,shell': { wrap: false } },
      },
      styleOverrides: {
        borderRadius: 'var(--radius)',
        borderColor: 'var(--border)',
        codeFontFamily: 'var(--font-mono)',
        codeFontSize: 'var(--step--1)',
        uiFontFamily: 'var(--font-sans)',
        frames: {
          shadowColor: 'transparent',
        },
      },
    }),
    mdx(),
    sitemap({
      // Keep the archive and 404 out of search results — both are noindex.
      filter: (page) => !/\/(archive|404)\/?$/.test(page),
    }),
  ],

  build: {
    // Emit one stylesheet rather than many small <link>s.
    inlineStylesheets: 'auto',
  },

  // GitHub Pages serves /path/ -> /path/index.html.
  trailingSlash: 'ignore',
});
