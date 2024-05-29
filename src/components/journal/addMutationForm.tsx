import { component$, $, useContext } from '@builder.io/qwik';
import { mutationDataCI } from '~/routes/journal';

export const AddMutationForm = component$(() => {
  const mutationData = useContext(mutationDataCI);
  const handleSubmit = $((e: MouseEvent) => {
    e.preventDefault();
    const amount: number = (e.target as HTMLInputElement).form?.amount
      .valueAsNumber;
    const category: string = (e.target as HTMLInputElement).form?.category
      .value;
    const budgetTopic: string = (e.target as HTMLInputElement).form?.budget
      .value;
    const mutationType: 'negative' | 'positive' | '' =
      Math.sign(amount) < 1
        ? 'negative'
        : Math.sign(amount) === 1
          ? 'positive'
          : '';

    mutationData.push({
      id: Math.random() * 100,
      category,
      amount,
      mutationType,
      budgetTopic,
    });
  });

  return (
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
      <label>
        Budget
        <select name='budget'>
          <option value='groceries'>Groceries</option>
          <option value='house'>House</option>
        </select>
      </label>
      <button preventdefault:click onClick$={handleSubmit}>
        Add mutation
      </button>
    </form>
  );
});
