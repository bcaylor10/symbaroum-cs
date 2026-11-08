import { ComponentProps } from '@solidjs/web';
import { Except } from 'type-fest';

import { useCharacter } from '@/contexts/CharacterContext';
import { AttributeNames } from '@/interfaces/character.interface';
import { Show } from 'solid-js';

interface StatProps extends Except<ComponentProps<'div'>, 'children'> {
  name: AttributeNames;
  editMode: boolean;
  enabled: boolean;
}

export const Stat = (props: StatProps) => {
  const [character, setCharacter] = useCharacter();
  const minValue = 5,
    maxValue = 15,
    attrName = props.name;

  const value = () => character.attributes[props.name] ?? minValue;

  const handleAttributeUpdate = (updatedValue: number) => {
    let currentValue = value() + updatedValue;

    if (currentValue <= minValue) {
      currentValue = minValue;
    }

    if (currentValue >= maxValue) {
      currentValue = maxValue;
    }

    setCharacter((c) => {
      c.attributes[attrName] = currentValue;
    });
  };

  return (
    <div
      class={
        'flex flex-col gap-2 items-center justify-center rounded-md bg-base-300 border border-base-content/10 p-4'
      }
    >
      <h4 class={'capitalize'}>{attrName}</h4>
      <div class={'flex flex-row items-center justify-center gap-2'}>
        <Show when={props.editMode}>
          <button
            onClick={() => handleAttributeUpdate(-1)}
            class={'btn btn-sm btn-circle btn-ghost'}
            aria-label={`Reduce ${props.name}`}
            disabled={value() === minValue}
          >
            -
          </button>
        </Show>
        <span class={'font-bold text-2xl w-10'}>{value()}</span>
        <Show when={props.editMode}>
          <button
            onClick={() => handleAttributeUpdate(1)}
            class={'btn btn-sm btn-circle btn-ghost'}
            aria-label={`Increase ${props.name}`}
            disabled={value() === maxValue || !props.enabled}
          >
            +
          </button>
        </Show>
      </div>
    </div>
  );
};
