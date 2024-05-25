import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import type { RequestHandler } from '@builder.io/qwik-city';

import styles from './styles.css?inline';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <header>
        <div class='logo'>Budgy</div>
        <nav>
          <ul>
            <li class='updates'>
              <a href='#'>Updates</a>
            </li>
            <li class='dashboard'>
              <a href='#'>Dashboard</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Slot />
      </main>
      <footer>a footer</footer>
    </>
  );
});
