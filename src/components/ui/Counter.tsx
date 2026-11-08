import { ComponentProps } from '@solidjs/web';
import { Show } from 'solid-js';
import { Except } from 'type-fest';

import { cn } from '@/lib/utils';

interface CounterProps extends Except<ComponentProps<'div'>, 'children'> {
  name: string;
  editMode: boolean;
  enabled: boolean;
  getValue: () => number;
  setValue: (value: number) => void;
  minValue: number;
  maxValue?: number;
  hideName?: boolean;
}

export const Counter = (props: CounterProps) => {
  const value = () => props.getValue();

  const handleAttributeUpdate = (updatedValue: number) => {
    let currentValue = value() + updatedValue;

    if (currentValue <= props.minValue) {
      currentValue = props.minValue;
    }

    if (props.maxValue) {
      if (currentValue >= props.maxValue) {
        currentValue = props.maxValue;
      }
    }

    props.setValue(currentValue);
  };

  return (
    <div
      class={cn(
        'flex flex-col gap-2 items-center justify-center rounded-md bg-base-300 border border-base-content/10 p-4',
        props.class
      )}
    >
      <Show when={!props.hideName}>
        <h4 class={'capitalize'}>{props.name}</h4>
      </Show>
      <div class={'flex flex-row items-center justify-center gap-2'}>
        <Show when={props.editMode}>
          <button
            onClick={() => handleAttributeUpdate(-1)}
            class={'btn btn-sm btn-circle btn-ghost'}
            aria-label={`Reduce ${props.name}`}
            disabled={value() === props.minValue}
          >
            -
          </button>
        </Show>
        <span class={'font-bold text-2xl w-10 select-none'}>{value()}</span>
        <Show when={props.editMode}>
          <button
            onClick={() => handleAttributeUpdate(1)}
            class={'btn btn-sm btn-circle btn-ghost'}
            aria-label={`Increase ${props.name}`}
            disabled={value() === props.maxValue || !props.enabled}
          >
            +
          </button>
        </Show>
      </div>
    </div>
  );
};
