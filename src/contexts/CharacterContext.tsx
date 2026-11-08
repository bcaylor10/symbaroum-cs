import {
  createContext,
  createEffect,
  ParentProps,
  useContext,
  onSettled,
  createStore,
  StoreSetter,
} from 'solid-js';

import {
  Ability,
  Attributes,
  BackpackItem,
  Character,
  Details,
  Gear,
  Money,
  Vitals,
} from '@/interfaces/character.interface';

type CharacterContextType = [
  character: Character,
  setCharacter: StoreSetter<Character>,
];

const CharacterContext = createContext<CharacterContextType>();

export const defaultAttributes: Attributes = {
  accurate: 5,
  cunning: 5,
  discreet: 5,
  persuasive: 5,
  quick: 5,
  resolute: 5,
  strong: 5,
  vigilant: 5,
};

const defaultValue: Character = {
  details: {
    name: '',
    image: '',
    race: '',
    archetype: '',
    occupation: '',
    shadow: '',
    totalXp: 0,
    unspentXp: 0,
    bio: '',
  },
  vitals: {
    toughness: 0,
    temporaryCorruption: 0,
    permanentCorruption: 0,
    defense: 0,
    painThreshold: 0,
    corruptionThreshold: 0,
  },
  attributes: defaultAttributes,
  abilities: [],
  money: { thaler: 0, shillings: 0, ortegs: 0 },
  gear: { weapons: [], armor: [] },
  backpack: [],
  friends: '',
};

export const CharacterProvider = (props: ParentProps) => {
  const [character, setCharacter] = createStore<Character>(
    JSON.parse(localStorage.getItem('character') ?? 'null') ?? defaultValue
  );

  createEffect(
    () => JSON.stringify(character),
    (saved) => {
      localStorage.setItem('character', saved);
    }
  );

  return (
    <CharacterContext value={[character, setCharacter]}>
      {props.children}
    </CharacterContext>
  );
};

export const useCharacter = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error('useCharacter must be used within a CharacterProvider');
  }
  return context;
};
