import { component$, useStyles$ } from '@builder.io/qwik';
import ticketStyle from './ticker.css?inline';

export default component$(() => {
  useStyles$(ticketStyle);
  return (
    <section class='ticker'>
      <div class='item item1'></div>
      <div class='item item2'></div>
      <div class='item item3'></div>
      <div class='item item4'></div>
      <div class='item item5'></div>
      <div class='item item6'></div>
      <div class='item item7'></div>
      <div class='item item8'></div>
    </section>
  );
});
