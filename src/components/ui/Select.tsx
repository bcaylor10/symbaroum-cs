import type { ComponentProps } from '@solidjs/web';
import { omit, For } from 'solid-js';
import { startCase, snakeCase } from 'lodash';

import { cn } from '@/lib/utils';
import { SetRequired } from 'type-fest';

interface SelectProps extends SetRequired<ComponentProps<'select'>, 'name'> {
  options: string[];
  label?: string;
  containerClass?: string;
}

export const Select = (props: SelectProps) => {
  const rest = omit(
    props,
    'class',
    'containerClass',
    'label',
    'name',
    'options'
  );
  const label = () => props.label ?? startCase(props.name as string);

  return (
    <div class={cn('flex flex-col gap-2', props.containerClass)}>
      <label class="label capitalize text-base-content">{label()}</label>
      <select
        class={cn(
          'select focus:border-primary focus:outline-primary w-full',
          props.class
        )}
        name={props.name}
        {...rest}
      >
        <option value={''} class={'capitalize'}>
          Select {label()}
        </option>
        <For each={props.options}>
          {(option) => <option value={snakeCase(option)}>{option}</option>}
        </For>
      </select>
    </div>
  );
};
