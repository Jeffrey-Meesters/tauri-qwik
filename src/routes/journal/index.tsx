import { component$, useStyles$, useStore, $ } from '@builder.io/qwik';
import styles from './journal.css?inline';

import { Item } from '../../components/journal/mutationListItem';

type MutationListItemProps = {
  id: number;
  amount: number;
  category: string;
  mutationType: 'negative' | 'positive' | '';
}[];

export default component$(() => {
  useStyles$(styles);

  const mutationData: MutationListItemProps = useStore([
    {
      id: 1,
      amount: 600,
      category: 'something',
      mutationType: 'positive',
    },
    {
      id: 2,
      amount: -300,
      category: 'something',
      mutationType: 'negative',
    },
    {
      id: 3,
      amount: -303,
      category: 'something',
      mutationType: 'negative',
    },
  ]);

  const saldo = mutationData.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amount,
    0
  );

  const handleSubmit = $((e: MouseEvent) => {
    e.preventDefault();
    console.log(
      'hi',
      (e.target as HTMLInputElement).form?.amount.valueAsNumber
    );
    console.log('hi2', (e.target as HTMLInputElement).form?.category.value);
    console.log(
      Math.sign((e.target as HTMLInputElement).form.amount.valueAsNumber)
    );
    mutationData.push({
      id: Math.random() * 100,
      category: (e.target as HTMLInputElement).form?.category.value,
      amount: (e.target as HTMLInputElement).form.amount.valueAsNumber,
      mutationType:
        Math.sign((e.target as HTMLInputElement).form.amount.valueAsNumber) < 1
          ? 'negative'
          : Math.sign(
                (e.target as HTMLInputElement).form.amount.valueAsNumber
              ) === 1
            ? 'positive'
            : '',
    });
  });

  return (
    <div class='page'>
      <div>
        <h1>Journal</h1>
        <button>Add mutation</button>
      </div>
      <section>
        <h2 class={saldo < 0 ? 'negative' : saldo > 0 ? 'positive' : ''}>
          Saldo: {saldo}
        </h2>
      </section>
      <section>
        <h2>Overview of latest mutations</h2>
        <ul>
          <Item mutationData={mutationData} />
        </ul>
      </section>
      <section>
        <form>
          <label>
            Amount
            <input name='amount' type='number' />
          </label>
          <label>
            Category
            <select name='category'>
              <option value='food'>Food</option>
              <option value='mortgage'>Mortgage</option>
            </select>
          </label>
          <button preventdefault:click onClick$={handleSubmit}>
            Add mutation
          </button>
        </form>
      </section>
    </div>
  );
});
