import { component$ } from '@builder.io/qwik';

interface ItemProps {
  mutationData: {
    id: number;
    amount: number;
    category: string;
    mutationType?: string;
  }[];
}

export const Item = component$<ItemProps>((props) => {
  return (
    <>
      {props.mutationData.map((mutation) => (
        <li class={mutation.mutationType} key={mutation.id}>
          {mutation.category} {mutation.amount}
        </li>
      ))}
    </>
  );
});
