// interfaces.ts

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

export interface IPeople {
  fullName: string;
  age: number;
  phoneNumber: number;
}


// export interface IClient extends IPeople { }

// // NOTE: visits
// export interface IVisit {
//   date: Date;
//   clientPhone: Pick<IClient, 'phoneNumber'>;
//   isVisitComplete: boolean;
// }

// NOTE: animals
export interface IAnimal {
  name: string;
  health: AnimalHealth;
  age: number;
  type: AnimalTypes;
}
