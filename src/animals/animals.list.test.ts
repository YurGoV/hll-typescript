import { AnimalsList } from './animals';
import { AnimalHealth, AnimalTypes, IAnimal } from './interfaces';

describe('animals list', () => {
  let animalsList: AnimalsList;

  beforeEach(() => {
    animalsList = new AnimalsList();
  });

  it('should add animal', () => {
    jest.spyOn(animalsList, 'addAnimal');

    const buddy: IAnimal = {
      name: 'buddy',
      health: AnimalHealth.EXCELLENT,
      age: 4,
      type: AnimalTypes.PREDATOR,
    };

    animalsList.addAnimal(buddy);

    expect(animalsList.list[0] as unknown as IAnimal).toBeTruthy();
  });

  it('should return animals list', () => {
    jest.spyOn(animalsList, 'addAnimal');

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

    animalsList.addAnimal(buddy);
    animalsList.addAnimal(porky);

    expect(animalsList.list.length).toBe(2);
    expect(animalsList.list[0] as unknown as IAnimal).toBeTruthy();
  });
});
