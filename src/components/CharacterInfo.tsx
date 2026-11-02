import { createSignal, Show } from 'solid-js';
import { FiEdit } from 'solid-icons/fi';

import { Input } from '@/components/Input';
import { Select } from '@/components/Select';
import { TextArea } from '@/components/TextArea';

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
      setIsEditing((prev) => !prev);
    }
  };

  return (
    <div class="card bg-base-100 shadow-sm border border-primary p-4">
      <figure class={'relative'}>
        <button
          class={'btn btn-info absolute top-2 right-2 z-10'}
          onClick={() => document.getElementById('portrait-dialog').showModal()}
        >
          Portrait
        </button>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          class={'h-100 w-275 rounded-md object-center object-cover'}
        />
      </figure>
      <div class="card-body px-0">
        <form class={'grid grid-cols-1 gap-4'}>
          {/* TODO: look into making this focus automatically, find a better way for a user to cancel */}

          <Show
            when={!isEditing()}
            fallback={
              <Input
                name={'character_name'}
                onBlur={() => setIsEditing((prev) => !prev)}
                onKeyDown={handleKeyDown}
              />
            }
          >
            <h2
              class={
                'card-title px-0 text-left text-primary text-2xl mb-4 flex items-center gap-2'
              }
            >
              Character Name{' '}
              <button
                type={'button'}
                onClick={() => setIsEditing((prev) => !prev)}
                class={'btn btn-ghost btn-circle btn-sm'}
              >
                <FiEdit />
              </button>
            </h2>
          </Show>

          <div class={'grid grid-cols-2 gap-4'}>
            <Select name={'race'} options={races} />
            <Select name={'archetype'} options={archetypes} />
          </div>
          <Input name={'occupation'} />
          <TextArea name={'shadow'} />
          <div class={'grid grid-cols-2 gap-4'}>
            <Input
              name={'total_xp'}
              label={'Total XP'}
              type={'number'}
              min={1}
            />
            <Input
              name={'unspent_xp'}
              label={'Unspent XP'}
              type={'number'}
              min={1}
            />
          </div>
        </form>
      </div>

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
    </div>
  );
};
