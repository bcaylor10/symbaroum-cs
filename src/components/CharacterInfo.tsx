import { createSignal, Show } from 'solid-js';
import { FiEdit } from 'solid-icons/fi';

import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { TextArea } from '@/components/ui/TextArea';
import { Card } from '@/components/ui/Card';

const races = [
  'Human - Ambrian',
  'Human - Barbarian',
  'Changeling',
  'Ogre',
  'Goblin',
  'Elf',
  'Abducted Human',
  'Dwarf',
  'Troll',
  'Undead',
].sort((a, b) => a.localeCompare(b));

const archetypes = ['Warrior', 'Mystic', 'Rogue'].sort((a, b) =>
  a.localeCompare(b)
);

export const CharacterInfo = () => {
  const [isEditing, setIsEditing] = createSignal<boolean>(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
    }
  };

  const CardHeader = (
    <figure class={'relative overflow-visible'}>
      <div class={'absolute top-2 right-2 z-10'}>
        <div class={'tooltip tooltip-bottom'} data-tip={'Edit Portrait'}>
          <button
            class={'btn btn-soft btn-circle'}
            aria-label="Edit Portrait"
            onClick={() =>
              document.getElementById('portrait-dialog').showModal()
            }
          >
            <FiEdit />
          </button>
        </div>
      </div>

      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes"
        class={'h-100 w-275 rounded-md object-center object-cover'}
      />
    </figure>
  );

  return (
    <Card cardHeader={CardHeader}>
      <form class={'grid grid-cols-1 gap-4'}>
        <Show
          when={!isEditing()}
          fallback={
            <div class={'flex flex-col gap-4'}>
              <Input name={'character_name'} onKeyDown={handleKeyDown} />
              <div class={'flex justify-end gap-2'}>
                <button
                  class={'btn btn-primary'}
                  aria-label="Save"
                  onClick={() => setIsEditing((prev) => !prev)}
                >
                  Save
                </button>
                <button
                  class={'btn btn-error'}
                  aria-label="Cancel"
                  onClick={() => setIsEditing((prev) => !prev)}
                >
                  Cancel
                </button>
              </div>
            </div>
          }
        >
          <h2
            class={
              'card-title text-base-content px-0 text-left text-2xl mb-4 flex items-center gap-2'
            }
          >
            Character Name{' '}
            <div class={'tooltip'} data-tip={'Edit Name'}>
              <button
                type={'button'}
                onClick={() => setIsEditing((prev) => !prev)}
                class={'btn btn-soft btn-circle btn-sm'}
                aria-label="Edit Name"
              >
                <FiEdit />
              </button>
            </div>
          </h2>
        </Show>

        <div class={'grid grid-cols-2 gap-4'}>
          <Select name={'race'} options={races} />
          <Select name={'archetype'} options={archetypes} />
        </div>
        <Input name={'occupation'} />
        <TextArea name={'shadow'} />
        <div class={'grid grid-cols-2 gap-4'}>
          <Input name={'total_xp'} label={'Total XP'} type={'number'} min={1} />
          <Input
            name={'unspent_xp'}
            label={'Unspent XP'}
            type={'number'}
            min={0}
          />
        </div>
      </form>
      <dialog id="portrait-dialog" class="modal">
        <div class="modal-box">
          <div class={'flex items-center justify-between'}>
            <h3 class={'text-lg font-bold'}>Portrait</h3>

            <form method="dialog">
              <button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">
                ✕
              </button>
            </form>
          </div>

          <p class="text-left mt-4 mb-6">
            You can set your character's portrait via two ways: uploading an
            already created image, or generating one with AI.
          </p>

          <div class={'flex flex-row justify-end gap-4'}>
            <button class="btn btn-primary">Upload Image</button>
            <button class="btn btn-secondary">Generate with AI</button>
          </div>
        </div>
      </dialog>
    </Card>
  );
};
