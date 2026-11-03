import { JSX, ComponentProps } from '@solidjs/web';

import { cn } from '@/lib/utils';

interface CardProps extends ComponentProps<'div'> {
  cardHeader: JSX.Element;
}

export const Card = (props: CardProps) => {
  return (
    <div
      class={cn(
        'card bg-base-100 shadow-sm border border-primary p-4',
        props.class
      )}
    >
      {props.cardHeader}
      <div class="card-body px-0">{props.children}</div>
    </div>
  );
};
