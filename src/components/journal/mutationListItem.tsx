import { component$ } from '@builder.io/qwik';

interface ItemProps {
  mutationData: {
    id: number;
    amount: number;
    category: string;
    mutationType: 'negative' | 'positive' | '';
    budgetTopic: string;
  }[];
}

export const Item = component$<ItemProps>((props) => {
  return (
    <>
      {props.mutationData.map((mutation) => (
        <li class={'mutation ' + mutation.mutationType} key={mutation.id}>
          <span class='item-icon'>icon</span>
          <span class='item-info'>
            <span class='topic'>{mutation.budgetTopic}</span>
            <span class='category'>{mutation.category}</span>
          </span>
          <span class='item-amount'>{mutation.amount}</span>
        </li>
      ))}
    </>
  );
});
