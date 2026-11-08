import { Card } from '@/components/ui/Card';
import { useCharacter } from '@/contexts/CharacterContext';
import { Counter } from '@/components/ui/Counter';
import { AiFillCaretUp } from 'solid-icons/ai';
import { createMemo } from 'solid-js';
import { cn } from '@/lib/utils';

export const Vitals = () => {
  const [character, setCharacter] = useCharacter();

  const maxToughness = () => Math.max(10, character.attributes.strong);
  const painThreshold = () => Math.ceil(character.attributes.strong / 2);
  const corruptionThreshold = () =>
    Math.ceil(character.attributes.resolute / 2);
  const currentCorruption = () =>
    character.vitals.temporaryCorruption + character.vitals.permanentCorruption;
  const maxCorruption = () => character.attributes.resolute;

  const toughnessBadge = createMemo(() => {
    const currentToughness = character.vitals.toughness;
    if (currentToughness === maxToughness()) {
      return {
        class: 'badge-success',
        label: 'Healthy',
      };
    } else if (currentToughness < maxToughness() && currentToughness > 0) {
      return {
        class: 'badge-warning',
        label: 'Wounded',
      };
    } else if (currentToughness === 0) {
      return {
        class: 'badge-error',
        label: 'Dying',
      };
    }
  });

  const corruptionBadge = createMemo(() => {
    if (currentCorruption() < maxCorruption()) {
      if (currentCorruption() > corruptionThreshold()) {
        return {
          class: 'badge-error',
          label: 'Over Threshold',
        };
      } else if (currentCorruption() === corruptionThreshold()) {
        return {
          class: 'badge-warning',
          label: 'At Threshold',
        };
      } else {
        return {
          class: 'badge-success',
          label: 'Within Threshold',
        };
      }
    } else {
      return {
        class: 'badge-error',
        label: 'Abomination',
      };
    }
  });

  const CardHeader = (
    <div class="flex flex-col text-left">
      <h2 class="text-lg font-bold">Vitals</h2>
      <h3>Toughness & Corruption</h3>
    </div>
  );

  /*
    TODO: update `disabled={character.vitals.toughness === 15}` to be 15 as the max in addition to
    any other abilities that increase it
   */

  return (
    <Card cardHeader={CardHeader}>
      <div class={'flex flex-col gap-10'}>
        <div class={'flex flex-col gap-10'}>
          <div class={'flex flex-col gap-2'}>
            <div class={'flex justify-between'}>
              <p class={'flex-none'}>Toughness</p>
              <p class={'flex-none'}>
                {character.vitals.toughness}/{maxToughness()}
              </p>
            </div>
            <div class={'relative my-2'}>
              <span
                class={'text-error absolute z-2 top-4'}
                style={{ left: `${(painThreshold() / maxToughness()) * 100}%` }}
              >
                <AiFillCaretUp />
              </span>
              <progress
                class="progress w-full"
                value={character.vitals.toughness}
                max={maxToughness()}
              ></progress>
            </div>
            <div class={'flex justify-between'}>
              <p class={'flex-none flex items-center gap-2 text-sm'}>
                <span class={'text-error'}>
                  <AiFillCaretUp />
                </span>
                Pain threshold: damage from one hit
              </p>
              <p class={cn('flex-none badge badge-sm', toughnessBadge().class)}>
                {toughnessBadge().label}
              </p>
            </div>
          </div>
          <div class={'grid grid-cols-2 gap-4'}>
            <Counter
              class={'p-2 gap-1'}
              name={'Current'}
              getValue={() => character.vitals.toughness}
              setValue={(value) => {
                setCharacter((c) => {
                  c.vitals.toughness = value;
                });
              }}
              minValue={0}
              maxValue={maxToughness()}
              enabled={true}
              editMode={true}
            />
            <Counter
              class={'p-2 gap-1'}
              name={'Maximum'}
              getValue={() => maxToughness()}
              enabled={false}
            />
          </div>
        </div>
        <div class={'flex flex-col gap-10'}>
          <div class={'flex flex-col gap-2'}>
            <div class={'flex justify-between'}>
              <p class={'flex-none'}>Corruption</p>
              <p class={'flex-none'}>
                {currentCorruption()} / {maxCorruption()}
              </p>
            </div>
            <div class={'relative my-2'}>
              <span
                class={'text-error absolute z-2 top-4'}
                style={{
                  left: `${(corruptionThreshold() / maxCorruption()) * 100}%`,
                }}
              >
                <AiFillCaretUp />
              </span>
              <progress
                class="progress w-full"
                value={currentCorruption()}
                max={maxCorruption()}
              ></progress>
            </div>
            <div class={'flex justify-between'}>
              <p class={'flex-none flex items-center gap-2 text-sm'}>
                <span class={'text-error'}>
                  <AiFillCaretUp />
                </span>
                Corruption threshold (temporary)
              </p>
              <p
                class={cn('flex-none badge badge-sm', corruptionBadge().class)}
              >
                {corruptionBadge().label}
              </p>
            </div>
          </div>
          <div class={'grid grid-cols-2 gap-4'}>
            <Counter
              class={'p-2 gap-1'}
              name={'Temporary'}
              getValue={() => character.vitals.temporaryCorruption}
              setValue={(value) => {
                setCharacter((c) => {
                  c.vitals.temporaryCorruption = value;
                });
              }}
              minValue={0}
              maxValue={maxCorruption()}
              enabled={currentCorruption() < maxCorruption()}
              editMode={true}
            />
            <Counter
              class={'p-2 gap-1'}
              name={'Permanent'}
              getValue={() => character.vitals.permanentCorruption}
              setValue={(value) => {
                setCharacter((c) => {
                  c.vitals.permanentCorruption = value;
                });
              }}
              minValue={0}
              maxValue={maxCorruption()}
              enabled={currentCorruption() < maxCorruption()}
              editMode={true}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};
