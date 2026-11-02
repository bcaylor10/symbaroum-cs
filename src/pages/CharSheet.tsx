import { CharacterInfo } from '@/components/CharacterInfo';

export default function CharSheet() {
  return (
    <div class={'flex flex-row'}>
      <div class={'w-[40%]'}>
        <CharacterInfo />
      </div>
    </div>
  );
}
