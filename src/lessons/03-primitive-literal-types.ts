// UNION
// let a: string | number | boolean;
// a = 'test';
// a = 1;
// a = true;

// class Cat {
//   run(): void {}

//   toString(): string {
//     return "cat";
//   }
// }

// class Bird {
//   fly(): void {}

//   toString(): string {
//     return "bird";
//   }
// }

// class Fish {
//   swim(): void {}

//   toString(): string {
//     return "fish";
//   }
// }

// function move(animal: Cat | Bird | Fish): void {
//   animal.run(); // Error
//   animal.fly(); // Error
//   animal.swim(); // Error

//   animal.toString();
// }

// let t0: any | unknown;
// let t1: number | unknown;
// let t2: string | unknown;
// let t3: boolean | unknown;
// let t4: null | unknown;
// let t5: undefined | unknown;

// Intersection

// class A {
//   a: number;
// }

// class B {
//   b: string;
// }

// class C {
//   c: boolean;
// }

// let identifier: A & B & C;

// identifier = {
//   a: 1,
//   b: "",
//   c: true,
// };

// let t1: string | unknown;
// let t2: number | unknown;
// let t3: boolean | unknown;
// let t4: undefined | unknown;

// TYPEOF
// let a: string;
// let b: typeof a;

// b = "";
// b = 1;

// class Identifier {
//   static staticProp: number;
//   field: string;
//   get prop(): boolean {
//     return true;
//   }

//   method(): void {}
// }

// let identifier = new Identifier();
// let a1: typeof identifier;
// let a2: typeof Identifier.staticProp;
// let a3: typeof identifier.field;
// let a4: typeof identifier.prop;
// let a5: typeof identifier.method;

// const INITIAL_COORDINATES = { x: 0, y: 0 };

// function isValid(coordinates: typeof INITIAL_COORDINATES): void {
//   let element = document.querySelector("#some-element")!;
//   let { clientLeft: x, clientTop: y } = element;

//   let position = { x, y };

//   let isPositionXvalid = position.x === coordinates.x;
//   let isPositionYvalid = position.y === coordinates.y;
// }

// isValid({});

// TYPE ALIAS

// class AnimalProvider {}
// class FishProvider {}
// class BirdProvider {}

// type AnimalsProvider = AnimalProvider | FishProvider | BirdProvider;

// let allAnimals: AnimalsProvider;

// function move(animalsProvider: AnimalsProvider): void {}

// type AnimalProviderAlias = AnimalProvider;

// let animal: AnimalProviderAlias = new AnimalProvider();

// Primitive Literal types

// NUMBER
// const port80: number = 80;
// const port42: number = 42;

// type ValidPortValue = 80 | 42;

// function fetch(port: ValidPortValue) {
//   // fetch('someurl:${port}')
// }

// fetch(80);

//STRING

// function animate(name: 'easy-in' | 'easy-out'): void {
//     // some animation
// }

// animate('easy-in');

// type Type = "Type";
// type Script = "Script"

// type Message = `I like ${Type}${Script}`;

// let message: Message = 'I like TypeScript';

// type Sport = "Sport";
// type Beer = "Beer";

// type Hobby = `I like ${Sport | Uppercase<Beer>}`;

// let a = 'test';
// const a1: 'test' = 'test';

// UpperCase
// Lowercase
// Capitilize
// Uncapitilize

// let hobby: Hobby = "I like Sport";
// let hobby2: Hobby = "I like BEER";

// BOOLEAN
// let a: true;

// a = false;

// Symbol

// const id: unique symbol = Symbol('id');
// const wrongId: symbol = Symbol('wrong-id');

// function validate(key: typeof id): void {}

// validate(id);
// validate(wrongId);

// class Identifier {
//     static readonly staticProp: unique symbol = Symbol('test');
//     readonly field: unique symbol = Symbol('test');
// }

// ENUM

// enum Animals {
//     Cat = 'cat',
//     Dog = 'dog',
//     Horse = 'horse',
// }

// type CatOrDog = Animals.Cat | Animals.Dog;

// let animal: CatOrDog = Animals.Cat;
// let animal1: CatOrDog = Animals.Dog;
// let animal2: CatOrDog = Animals.Horse;
// let animal3: CatOrDog = 'cat';

// enum Animals {
//   Cat,
//   Dog,
//   Horse,
// }

// let obj = {
//   Cat: 0,
// };

// Animals[0];

// type CatOrDog = Animals.Cat | Animals.Dog;

// let animal: CatOrDog = Animals.Cat;
// let animal1: CatOrDog = Animals.Dog;
// let animal3: CatOrDog = 0;
