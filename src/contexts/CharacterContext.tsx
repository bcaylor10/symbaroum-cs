import {
  createContext,
  createSignal,
  createEffect,
  ParentProps,
  Accessor,
  Setter,
  useContext,
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

type CharacterContextTuple = [
  character: Accessor<Character>,
  setCharacter: Setter<Character>,
];

const CharacterContext = createContext<CharacterContextTuple>();

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
    maxToughness: 0,
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
  const [character, setCharacter] = createSignal<Character>(() => {
    const saved = localStorage.getItem('character');
    return saved ? JSON.parse(saved) : defaultValue; // default fallback
  });

  createEffect(
    () => character(),
    (data) => {
      if (data) {
        localStorage.setItem('character', JSON.stringify(data));
      }
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
