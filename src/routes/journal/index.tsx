import { component$, useStyles$ } from '@builder.io/qwik';
import styles from './journal.css?inline';

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <h1>Journal</h1>
    </>
  );
});
