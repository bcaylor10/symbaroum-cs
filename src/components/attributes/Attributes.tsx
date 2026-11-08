import { createSignal, For, Show } from 'solid-js';
import { FiRotateCcw, FiEdit, FiX } from 'solid-icons/fi';

import { Card } from '@/components/ui/Card';
import { Stat } from '@/components/attributes/Stat';
import { AttributeNames } from '@/interfaces/character.interface';
import { useCharacter, defaultAttributes } from '@/contexts/CharacterContext';

export const Attributes = () => {
  const [editMode, setEditMode] = createSignal<boolean>(false);
  const [character, setCharacter] = useCharacter();
  const maxAttributePoints = 80;
  const attributes = Object.values(AttributeNames);

  const currentAttributePoints = (): number => {
    const attrs = Object.values(character().attributes);
    return attrs.reduce((acc: number, attr: number) => acc + attr, 0);
  };

  const resetAttributePoints = () =>
    setCharacter((prev) => ({
      ...prev,
      attributes: defaultAttributes,
    }));

  const CardHeader = (
    <div class="flex flex-row justify-between items-center">
      <div class="flex flex-col text-left">
        <h2 class="text-lg font-bold">Attributes</h2>
        <h3>Roll under the value</h3>
      </div>
      <Show
        when={editMode()}
        fallback={
          <div class={'tooltip'} data-tip={'Edit Attributes'}>
            <button
              class={'btn btn-circle btn-primary'}
              aria-label="Edit Attribute Points"
              onClick={() => setEditMode(true)}
            >
              <FiEdit />
            </button>
          </div>
        }
      >
        <div class={'flex gap-4'}>
          <div class={'tooltip'} data-tip={'Stop Editing'}>
            <button
              class={'btn btn-circle btn-primary'}
              aria-label="Stop Editing"
              onClick={() => setEditMode(false)}
            >
              <FiX />
            </button>
          </div>
          <div class={'tooltip'} data-tip={'Reset Attributes'}>
            <button
              class={'btn btn-circle btn-secondary'}
              aria-label="Reset Attribute Points"
              onClick={() =>
                document.getElementById('reset-attributes-dialog').showModal()
              }
            >
              <FiRotateCcw />
            </button>
          </div>
        </div>
      </Show>
    </div>
  );

  return (
    <Card cardHeader={CardHeader}>
      <div class={'grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'}>
        <For each={attributes} keyed={true}>
          {(attribute) => (
            <Stat
              name={attribute}
              editMode={editMode()}
              enabled={currentAttributePoints() < maxAttributePoints}
            />
          )}
        </For>
      </div>

      <dialog id="reset-attributes-dialog" class="modal">
        <div class="modal-box">
          <div class={'flex items-center justify-between'}>
            <h3 class={'text-lg font-bold'}>Reset Attributes</h3>

            <form method="dialog">
              <button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">
                ✕
              </button>
            </form>
          </div>

          <p class="text-left mt-4 mb-6">
            Are you sure you want to reset your attributes?
          </p>

          <form method="dialog">
            <div class={'flex flex-row justify-end gap-4'}>
              <button class="btn btn-primary" onClick={resetAttributePoints}>
                Reset Attributes
              </button>
              <button class="btn btn-secondary">Cancel</button>
            </div>
          </form>
        </div>
      </dialog>
    </Card>
  );
};
