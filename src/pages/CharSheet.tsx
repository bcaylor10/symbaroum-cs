import { CharacterInfo } from '@/components/CharacterInfo';
import { Attributes } from '@/components/Attributes';
import { Container } from '@/components/layout/Container';
import { CharacterSheetActionBar } from '@/components/CharacterSheetActionBar';
import { Card } from '@/components/ui/Card';
import { Vitals } from '@/components/Vitals';
import { useCharacter } from '@/contexts/CharacterContext';

export default function CharSheet() {
  const [character] = useCharacter();

  return (
    <Container class={'px-10 max-w-full flex flex-col gap-10'}>
      <CharacterSheetActionBar />
      <div class={'flex flex-row gap-4'}>
        <div class={'w-[40%] flex flex-col gap-4'}>
          <Vitals />
          <CharacterInfo />
        </div>
        <div class={'w-full'}>
          <Attributes />
          <Card class={'mt-5'}>
            <pre class={'text-left'}>
              <code>{JSON.stringify(character, null, 2)}</code>
            </pre>
          </Card>
        </div>
      </div>
    </Container>
  );
}
