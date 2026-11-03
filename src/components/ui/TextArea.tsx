import type { ComponentProps } from '@solidjs/web';
import { omit } from 'solid-js';
import { startCase } from 'lodash';

import { cn } from '@/lib/utils';
import { SetRequired } from 'type-fest';

interface TextAreaProps extends SetRequired<
  ComponentProps<'textarea'>,
  'name'
> {
  label?: string;
  containerClass?: string;
}

export const TextArea = (props: TextAreaProps) => {
  const rest = omit(props, 'class', 'containerClass', 'label', 'name');
  const label = () => props.label ?? startCase(props.name as string);

  return (
    <div class={cn('flex flex-col gap-2', props.containerClass)}>
      <label class="label capitalize text-base-content">{label()}</label>
      <textarea
        class={cn(
          'textarea focus:border-primary focus:outline-primary resize-vertical min-h-20 w-full',
          props.class
        )}
        name={props.name}
        {...rest}
      />
    </div>
  );
};
