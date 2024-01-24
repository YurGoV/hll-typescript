export enum AnimalHealth {
  EXCELLENT = 'exceellent',
  GOOD = 'good',
  NEED_TO_THERAPY = 'therapy',
}


export enum AnimalTypes {
  PREDATOR = 'predator',
  HERBIVORE = 'herbivore',
  INSECTIVOROUS = 'insectivorous',
}

export interface IAnimal {
  name: string;
  health: AnimalHealth;
  age: number;
  type: AnimalTypes;
}

