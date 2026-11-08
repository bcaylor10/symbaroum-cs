import { JSX, ComponentProps } from '@solidjs/web';

import { cn } from '@/lib/utils';

export interface CardProps extends ComponentProps<'div'> {
  cardHeader?: JSX.Element;
  bodyClass?: string;
}

export const Card = (props: CardProps) => {
  return (
    <div class={cn('card bg-base-300 shadow-sm border p-4', props.class)}>
      {props.cardHeader && props.cardHeader}
      <div class={cn('card-body px-0', props.bodyClass)}>{props.children}</div>
    </div>
  );
};
