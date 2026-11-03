import { Card } from '@/components/ui/Card';
import { Stat } from '@/components/attributes/Stat';
import { For } from 'solid-js';

const attributes = [
  {
    name: 'Accurate',
    startingValue: 8,
  },
  {
    name: 'Cunning',
    startingValue: 10,
  },
  {
    name: 'Discreet',
    startingValue: 9,
  },
  {
    name: 'Persuasive',
    startingValue: 8,
  },
  { name: 'Quick', startingValue: 12 },
  { name: 'Resolute', startingValue: 14 },
  {
    name: 'Strong',
    startingValue: 15,
  },
  {
    name: 'Vigilant',
    startingValue: 9,
  },
];

export const Attributes = () => {
  const CardHeader = (
    <div class="flex flex-col text-left">
      <h2 class="text-lg font-bold">Attributes</h2>
      <h3>Roll under the value</h3>
    </div>
  );

  return (
    <Card cardHeader={CardHeader}>
      <div class={'grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'}>
        <For each={attributes} keyed={true}>
          {(attribute) => (
            <Stat
              name={attribute.name}
              startingValue={attribute.startingValue}
            />
          )}
        </For>
      </div>
    </Card>
  );
};
