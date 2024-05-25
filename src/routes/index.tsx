import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <section class='hero'>
        <h1>Budgy</h1>
        <h2>Your companion to financial insight</h2>
      </section>
      <section class='main'>
        <article class='article-card'>
          <h3>Gain insight</h3>
          <p>some text here</p>
        </article>
        <article class='article-card'>
          <h3>See progress</h3>
          <p>some text here</p>
        </article>
        <article class='article-card'>
          <h3>Track expenses</h3>
          <p>some text here</p>
        </article>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
