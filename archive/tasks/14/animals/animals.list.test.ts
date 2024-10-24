import { AnimalsList } from './animals';
import { AnimalHealth, AnimalTypes, IAnimal } from './interfaces';

describe('animals list', () => {
  let animalsList: AnimalsList;

  beforeEach(() => {
    animalsList = new AnimalsList();
  });

  it('should add animal', () => {

    const buddy: IAnimal = {
      name: 'buddy',
      health: AnimalHealth.EXCELLENT,
      age: 4,
      type: AnimalTypes.PREDATOR,
    };

    animalsList.addAnimal(buddy);

    expect(animalsList.list[0]).toEqual(buddy);
  });

  it('should return animals list', () => {

    const buddy: IAnimal = {
      name: 'buddy',
      health: AnimalHealth.EXCELLENT,
      age: 4,
      type: AnimalTypes.PREDATOR,
    };
    const porky: IAnimal = {
      name: 'buddy',
      health: AnimalHealth.GOOD,
      age: 3,
      type: AnimalTypes.PREDATOR,
    };

    const returnedBuddy = animalsList.addAnimal(buddy);
    const returnedPordy = animalsList.addAnimal(porky);

    expect(returnedBuddy).toBe(buddy);
    expect(returnedPordy).toEqual(porky);
  });
});
