import { ComponentProps } from '@solidjs/web';
import { Except } from 'type-fest';
import { createSignal } from 'solid-js';

interface StatProps extends Except<ComponentProps<'div'>, 'children'> {
  name: string;
  startingValue: number;
}

export const Stat = (props: StatProps) => {
  const [attribute, setAttribute] = createSignal(props.startingValue);
  const minValue = 0;

  const increment = () => setAttribute(attribute() + 1);
  const decrement = () => {
    const currentValue = attribute();
    if (currentValue > minValue) {
      setAttribute(attribute() - 1);
    }
  };

  return (
    <div
      class={
        'flex flex-col gap-2 items-center justify-center rounded-md border border-primary p-4'
      }
    >
      <h4>{props.name}</h4>
      <div class={'flex flex-row items-center justify-center gap-2'}>
        <button
          onClick={decrement}
          class={'btn btn-sm btn-circle btn-ghost'}
          aria-label={`Reduce ${props.name}`}
        >
          -
        </button>
        <span class={'font-bold text-2xl w-10'}>{attribute()}</span>
        <button
          onClick={increment}
          class={'btn btn-sm btn-circle btn-ghost'}
          aria-label={`Increase ${props.name}`}
        >
          +
        </button>
      </div>
    </div>
  );
};
