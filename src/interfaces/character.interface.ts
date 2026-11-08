export interface Character {
  details: Details;
  vitals: Vitals;
  attributes: Attributes;
  abilities: Ability[];
  money: Money;
  gear: Gear;
  backpack: BackpackItem[];
  friends?: string;
}

export interface Details {
  name?: string;
  image?: string;
  race?: string;
  archetype?: string;
  occupation?: string;
  shadow?: string;
  totalXp: number;
  unspentXp: number;
  bio?: string;
}

export interface Vitals {
  toughness: number;
  temporaryCorruption: number;
  permanentCorruption: number;
  defense: number;
  painThreshold: number;
  corruptionThreshold: number;
}

export interface Attributes {
  [AttributeNames.ACCURATE]: number;
  [AttributeNames.CUNNING]: number;
  [AttributeNames.DISCREET]: number;
  [AttributeNames.PERSUASIVE]: number;
  [AttributeNames.QUICK]: number;
  [AttributeNames.RESOLUTE]: number;
  [AttributeNames.STRONG]: number;
  [AttributeNames.VIGILANT]: number;
}

export interface Money {
  thaler: number;
  shillings: number;
  ortegs: number;
}

export interface Gear {
  weapons?: Weapon[];
  armor?: Armor[];
}

export interface Weapon {
  name: string;
  damage: string;
  quality: string;
  attribute: string;
}

export interface Armor {
  name: string;
  protection: string;
  quality: string;
  defense: number;
}

export interface Ability {
  name: string;
  type: AbilityType[];
  notes?: string;
  tiers?: ExperienceType[] | ActionType[]; // if there is only "one tier", just show it in a paragraph
  currentTier?: ExperienceType | ActionType;
}

export interface BackpackItem {
  name: string;
  quantity: number;
  description?: string;
}

export enum ExperienceType {
  NOVICE = 'novice',
  ADEPT = 'adept',
  MASTER = 'master',
}

export enum AbilityType {
  ABILITY = 'ability',
  MYSTICAL_POWER = 'mystical power',
  RITUAL = 'ritual', //
  MONSTRUOUS_TRAIT = 'monstruous trait',
  TRAIT = 'trait',
  BOON = 'boon',
  BURDEN = 'burden',
}

// action types are in levels: Reaction 1, Reaction 2, Reaction 3 for example
export enum ActionType {
  REACTION = 'reaction',
  PASSIVE = 'passive',
  ACTIVE = 'active',
  FREE = 'free',
  SPECIAL = 'special',
}

export enum AttributeNames {
  ACCURATE = 'accurate',
  CUNNING = 'cunning',
  DISCREET = 'discreet',
  PERSUASIVE = 'persuasive',
  QUICK = 'quick',
  RESOLUTE = 'resolute',
  STRONG = 'strong',
  VIGILANT = 'vigilant',
}
