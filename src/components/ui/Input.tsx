import type { ComponentProps } from '@solidjs/web';
import { omit } from 'solid-js';
import { startCase } from 'lodash';
import { SetRequired } from 'type-fest';

import { cn } from '@/lib/utils';

interface InputProps extends SetRequired<ComponentProps<'input'>, 'name'> {
  label?: string;
  containerClass?: string;
}

export const Input = (props: InputProps) => {
  const rest = omit(props, 'class', 'containerClass', 'label', 'name');
  const label = () => props.label ?? startCase(props.name as string);

  return (
    <div class={cn('flex flex-col gap-2', props.containerClass)}>
      <label class="label capitalize text-base-content">{label()}</label>
      <input
        {...rest}
        class={cn(
          'input focus:border-primary focus:outline-primary w-full',
          props.class
        )}
        name={props.name}
      />
    </div>
  );
};
