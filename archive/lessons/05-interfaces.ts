// Interface declaration

// interface Identifier {

// }

// interface IIdentifier {}

// class T {
//   method(): void {
//     interface Identifier {}
//   }
// }

// function func(): void {
//   interface Identifier {}
// }

// INterface with class

// interface IAnimal {
//   name: string;
//   run(): void;
// }

// interface IPet {
//   pet(): void;
// }

// class Cat implements IAnimal, IPet {
//   name: string;
//   run(): void {}
//   pet(): void {}
// }

// INterface with extends

// interface IAnimal{}

// interface IPet{}

// class Cat implements IAnimal, IPet {}

// interface IWildCat {}

// class Lion extends Cat implements IWildCat {}

// interface accesors

// interface IAnimal {
//   id: string;
// }

// class Cat implements IAnimal {
//   // id: string;
//   //   get id(): string {
//   //     return "cat";
//   //   }
//   //   set id(newId: string) {}
// }

// Interface parent

// interface IAnimal {}

// class Cat implements IAnimal {}

// class Lion extends Cat {}

// const cat: IAnimal = new Cat();
// const lion: IAnimal = new Lion();

// class Animal implements IAnimal {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// Interface обмеження

// interface IAnimal {
//   name: string;
// }

// interface IPet {
//   home: string;
// }

// class Animal implements IAnimal {
//   constructor(public name: string) {}
// }

// class Cat extends Animal implements IPet {
//   home = "m. Kyiv";
// }

// const wildCat: IAnimal = new Cat("Barsik");

// wildCat.name;
// wildCat.home;

// const homeCat: IPet = new Cat("Murzik");

// homeCat.home;
// homeCat.name;

// Interface extend

// interface IAnimal {
//   name: string;
// }
// interface IPet {
//   age: number;
// }

// interface IHomeAnimal extends IAnimal, IPet {
//   // age
//   // name
//   pet(): void;
// }

// const pet: IHomeAnimal = {
//   name: "",
//   age: 12,
//   pet(): void {},
// };

// class Animal {
//   name: string;
// }

// interface IAnimal extends Animal {
//   age: number;
// }

// class Cat implements IAnimal {
//   name: string;
//   age: number;
// }

// const cat: IAnimal = new Cat();

// Extend interface by class

// class Animal {
//   private id: string;
//   protected maxAge: number;

//   name: string;
// }

// interface IAnimal extends Animal {}

// class Cat extends Animal implements IAnimal {
//   protected maxAge: number;
//   name: string;
// }

// class Dog implements IAnimal {
//   name: string;
//   protected maxAge: number;
//   private id: string;
// }

// describes instanses of  class; (new Class())
// interface IAnimal {
//   nickname: string;
// }

// describes class (Class)
// interface IAnimalConstructor {
//   create(): IAnimal;
//   new (nickname: string): IAnimal;
// }

// class Animal implements IAnimal {
//   nickname: string;
//   constructor(nickname: string) {
//     this.nickname = nickname;
//   }
// }

// class Bird extends Animal {
//   static DEFAULT_NAME: string = "bird";

//   static create(): IAnimal {
//     return new Bird(Bird.DEFAULT_NAME);
//   }
// }

// class Fish extends Animal {
//   static DEFAULT_NAME: string = "fish";

//   static create(): IAnimal {
//     return new Fish(Fish.DEFAULT_NAME);
//   }
// }

// const bird: Bird = new Bird("bird");
// const fish: Fish = new Fish("fish");
// const fish1: IAnimal = new Fish("fish");
// const fish2: IAnimal = new Fish("fish");

// // new Fish() !== Fish;
// const birdConstructor: IAnimalConstructor = Bird;
// const fishConstructor: IAnimalConstructor = new Fish("fish");

// Describes functions with interface;

// type ReduceCallback = (
//   previousValue: string,
//   currentValue: string,
//   arr: unknown[]
// ) => unknown;

// interface IReduceCallback {
//   (previousValue: string, currentValue: string, arr: unknown[]): unknown;
// }

// class Collection {
//   reduce(callback: ReduceCallback) {
//     return null;
//   }
// }

// class Collection {
//   reduce(callback: IReduceCallback) {
//     return null;
//   }
// }

// Inline interface
// let identifier: { name: string; age: number };

// function func(config: { id: string; password: number }) {

// }

// interface Ident1 extends { id: number } {}
// class Ident2 implements { id: number } {}

// Злиття інтерфейсів
// interface IAnimal {
//   name: string;
// }

// interface IAnimal {
//   age: number;
// }

// let a: IAnimal = {
//   name: "",
//   age: 21,
// };

// interface ICat {}
// interface IDog {}
// interface IDuck {}
// interface IBird {}

// interface IAnimalFactory {
//   getAnimalById(id: number): ICat;
// }

// interface IAnimalFactory {
//   getAnimalById(id: string): IDog;
// }

// class AnimalFactory implements IAnimalFactory {
//   getAnimalById(id: number): ICat;
//   getAnimalById(id: string): IDog;
//   getAnimalById(id: unknown): ICat | IDog {}
// }

// const animalFactory = new AnimalFactory();

// animalFactory.getAnimalById(1);
// animalFactory.getAnimalById('');

// interface IAnimal {
//   name: string;
// }

// interface IBear extends IAnimal {
//   honey: number;
// }

// type TAnimal = {
//   name: string;
// };

// type TBear = TAnimal & {
//   honey: number;
// };

// type TBear = {}

// const animalInterface: IAnimal = { name: "test" };
// const animalType: TAnimal = { name: "test" };

// Readonly

// interface IAnimal {
//   readonly name: string;
// }

// const a1: IAnimal = {
//   name: "",
// };

// a1.name = "";

// class Animal implements IAnimal {
//   readonly name: string = '';

//   constructor() {
//     this.name = "tst";
//   }

//   /**
//    * name
//    */
//   public method() {
//     this.name = "";
//   }
// }

// const a = new Animal();

// a.name = "asd";

// interface IAnimal {
//   name: string;
//   age?: number;
// }

// let a: IAnimal = {
//   name: "",
//   age: undefined,
// };

// let a: number = undefined;

// interface IAnimal {
//   age?;
// }

// class A {
//   test?: number;

//   method?() {}
// }

// function foo(...rest: [number, boolean, string?]): [number, boolean, string?] {
//   return rest;
// }

// foo(1, true, "test");
