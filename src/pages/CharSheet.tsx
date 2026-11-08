import { CharacterInfo } from '@/components/CharacterInfo';
import { Attributes } from '@/components/attributes/Attributes';
import { Container } from '@/components/layout/Container';
import { CharacterSheetActionBar } from '@/components/CharacterSheetActionBar';

export default function CharSheet() {
  return (
    <Container class={'px-10 max-w-full flex flex-col gap-10'}>
      <CharacterSheetActionBar />
      <div class={'flex flex-row gap-4'}>
        <div class={'w-[40%]'}>
          <CharacterInfo />
        </div>
        <div class={'w-full'}>
          <Attributes />
        </div>
      </div>
    </Container>
  );
}
