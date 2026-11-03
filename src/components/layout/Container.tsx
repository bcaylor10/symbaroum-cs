import { ComponentProps } from '@solidjs/web';

import { cn } from '@/lib/utils';

export const Container = (props: ComponentProps<'div'>) => {
  return (
    <div class={cn('container mx-auto px-4', props.class)}>
      {props.children}
    </div>
  );
};
