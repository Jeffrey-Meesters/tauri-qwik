import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Image from '../media/laptoptWithDiagrams.jpg?jsx';

export default component$(() => {
  return (
    <>
      <section class='hero'>
        <h1>Budgy</h1>
        <h2>Your companion to financial insight</h2>
      </section>
      <section class='main'>
        <Image class='first-image' />
        {/* Photo by <a href="https://unsplash.com/@kmuza?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Carlos Muza</a> on <a href="https://unsplash.com/photos/laptop-computer-on-glass-top-table-hpjSkU2UYSU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> */}
        <Image class='second-image' />
        {/* Photo by <a href="https://unsplash.com/@kmuza?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Carlos Muza</a> on <a href="https://unsplash.com/photos/laptop-computer-on-glass-top-table-hpjSkU2UYSU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> */}
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
            ipsa, at fuga reiciendis quam ullam mollitia a quas corporis.
          </p>
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
