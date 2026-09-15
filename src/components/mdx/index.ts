import Callout from './Callout.astro';
import Flow from './Flow.astro';
import Table from './Table.astro';

/**
 * Components available inside every MDX article without an import, plus the
 * HTML element overrides. Passed to `<Content components={mdxComponents} />`.
 */
export const mdxComponents = {
  table: Table,
  Callout,
  Flow,
};
