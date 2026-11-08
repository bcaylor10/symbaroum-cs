import { For } from 'solid-js';
import { isEmpty, startCase } from 'lodash-es';
import {
  FiBookOpen,
  FiFileText,
  FiUser,
  FiArrowUp,
  FiArrowDown,
  FiMenu,
} from 'solid-icons/fi';

import { Card, CardProps } from '@/components/ui/Card';
import { useCharacter } from '@/contexts/CharacterContext';
import { cn } from '@/lib/utils';

const colorClass = [
  'btn-primary',
  'btn-secondary',
  'btn-accent',
  'btn-info',
  'btn-success',
];

const buttons = [
  {
    label: 'Open Journal',
    icon: FiBookOpen,
  },
  {
    label: 'Open Notes',
    icon: FiFileText,
  },
  {
    label: 'Character Details',
    icon: FiUser,
  },
  {
    label: 'Import Character',
    icon: FiArrowUp,
  },
  {
    label: 'Export Character',
    icon: FiArrowDown,
  },
];

export const CharacterSheetActionBar = () => {
  const [character] = useCharacter();

  const name = () => {
    let name = 'Character Name';

    if (!isEmpty(character.details.name)) {
      name = character.details.name;
    }

    if (!isEmpty(character.details.race)) {
      name = `${name} - ${startCase(character.details.race)}`;
    }

    if (!isEmpty(character.details.archetype)) {
      name = `${name} (${startCase(character.details.archetype)})`;
    }

    return name;
  };

  return (
    <Card class="w-full" bodyClass={'p-0'}>
      <div class="flex flex-row justify-between items-center">
        <h2 class={'text-xl text-left font-bold m-0'}>{name()}</h2>
        <div class="hidden sm:flex gap-2">
          <For each={buttons}>
            {({ label, icon: Icon }) => (
              <div class={'tooltip'} data-tip={label}>
                <button
                  class={
                    'btn btn-square btn-ghost hover:bg-secondary hover:text-secondary-content'
                  }
                  aria-label={label}
                >
                  <Icon />
                </button>
              </div>
            )}
          </For>
        </div>
        <div class={'sm:hidden flex'}>
          <div class={'tooltip'} data-tip={'Show/Hide Menu'}>
            <button
              class={'btn btn-primary btn-square'}
              aria-label={'Show/Hide Menu'}
              popovertarget="mobile-menu"
              style="anchor-name:--anchor-popover"
            >
              <FiMenu />
            </button>
          </div>
          <ul
            class="dropdown dropdown-end menu flex gap-2 mt-4 bg-base-200 text-base-content rounded-box border-(length:--border) border-white/5 shadow-2xl outline-(length:--border) outline-black/5"
            popover
            id="mobile-menu"
            style="position-anchor:--anchor-popover"
          >
            <For each={buttons}>
              {({ label, icon: Icon }) => (
                <li>
                  <div class={'flex flex-row items-center gap-2'}>
                    <Icon /> {label}
                  </div>
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
    </Card>
  );
};
