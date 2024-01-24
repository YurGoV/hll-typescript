import { notificationService, Observable } from '../observables/observable';
import { AnimalHealth, AnimalTypes, IAnimal } from './interfaces';

export class AnimalsList extends Observable {
  private animalsList: IAnimal[] = [];

  get list(): IAnimal[] {
    return this.animalsList;
  }

  addAnimal(animal: IAnimal): void {
    this.animalsList.push(animal);

    this.notify();
  }
}

export const animalsList = new AnimalsList();
animalsList.attach(notificationService);

export class Animal implements IAnimal {
  readonly name: string;

  readonly health: AnimalHealth;

  readonly age: number;

  readonly type: AnimalTypes;

  constructor(
    name: string,
    health: AnimalHealth,
    age: number,
    type: AnimalTypes,
  ) {
    this.name = name;
    this.health = health;
    this.age = age;
    this.type = type;

    animalsList.addAnimal(this);
  }
}