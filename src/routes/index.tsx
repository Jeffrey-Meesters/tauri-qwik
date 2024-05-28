import { component$, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Ticker from '../components/ticker/ticker';
import homeStyle from './home.css?inline';

export default component$(() => {
  useStyles$(homeStyle);
  return (
    <>
      <section class='hero'>
        <h1>Budgy</h1>
        <h2>Your companion towards financial insight</h2>
      </section>
      <section class='info-banner'>
        <article class='article-card'>
          <h3>Gain insight</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            saepe assumenda ipsum, eaque iure commodi ea atque, rerum odio nobis
            ipsa, at fuga reiciendis quam ullam mollitia a quas corporis.
          </p>
        </article>
        <article class='article-card'>
          <h3>See progress</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            saepe assumenda ipsum, eaque iure commodi ea atque, rerum odio nobis
            ipsa, at fuga reiciendis quam ullam mollitia a quas corporis.
          </p>
        </article>
        <article class='article-card'>
          <h3>Track expenses</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            saepe assumenda ipsum, eaque iure commodi ea atque, rerum odio nobis
            ipsa, at fuga reiciendis quam ullam mollitia a quas corporis. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Sapiente saepe
            assumenda ipsum, eaque iure commodi ea atque, rerum odio nobis ipsa,
            at fuga reiciendis quam ullam mollitia a quas corporis.
          </p>
        </article>
        <Ticker />
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
