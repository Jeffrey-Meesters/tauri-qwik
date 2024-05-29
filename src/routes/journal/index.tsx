import {
  component$,
  createContextId,
  useContextProvider,
  useStore,
  useStyles$,
} from '@builder.io/qwik';
import styles from './journal.css?inline';

import { AddMutationForm } from '~/components/journal/addMutationForm';
import { Item } from '../../components/journal/mutationListItem';

type MutationListItemProps = {
  id: number;
  amount: number;
  category: string;
  mutationType: 'negative' | 'positive' | '';
  budgetTopic: string;
}[];

export const mutationDataCI =
  createContextId<MutationListItemProps>('mutationData');

export default component$(() => {
  useStyles$(styles);

  const mutationData: MutationListItemProps = useStore([
    {
      id: 1,
      amount: 600,
      category: 'Salery',
      mutationType: 'positive',
      budgetTopic: 'Income',
    },
    {
      id: 2,
      amount: -300,
      category: 'Painting',
      mutationType: 'negative',
      budgetTopic: 'house',
    },
    {
      id: 3,
      amount: -303,
      category: 'Various',
      mutationType: 'negative',
      budgetTopic: 'house',
    },
  ]);

  useContextProvider(mutationDataCI, mutationData);

  const saldo = mutationData.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amount,
    0
  );

  return (
    <div class='page'>
      <section>
        <h1>Journal</h1>
        <button>Add budget</button>
      </section>
      <section>
        <AddMutationForm />
      </section>
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
    </div>
  );
});
