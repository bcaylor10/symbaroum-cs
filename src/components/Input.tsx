import type { JSX } from '@solidjs/web';
import { omit } from 'solid-js';
import { startCase } from 'lodash';

import { cn } from '@/libs/cn';

interface InputProps extends JSX.HTMLElement<HTMLInputElement> {
  label?: string;
  containerClass?: string;
}

export const Input = (props: InputProps) => {
  const rest = omit(props, ['class', 'containerClass', 'label', 'name']);
  const label = () => props.label ?? startCase(props.name);

  return (
    <div class={cn('flex flex-col gap-2', props.containerClass)}>
      <label class="label capitalize">{label()}</label>
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
