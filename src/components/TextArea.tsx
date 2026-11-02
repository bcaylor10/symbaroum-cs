import type { JSX } from '@solidjs/web';
import { omit } from 'solid-js';
import { startCase } from 'lodash';

import { cn } from '@/libs/cn';

interface TextAreaProps extends JSX.HTMLElement<HTMLTextAreaElement> {
  label?: string;
  containerClass?: string;
}

export const TextArea = (props: TextAreaProps) => {
  const rest = omit(props, ['class', 'containerClass', 'label', 'name']);
  const label = () => props.label ?? startCase(props.name);

  return (
    <div class={cn('flex flex-col gap-2', props.containerClass)}>
      <label class="label capitalize">{label()}</label>
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
