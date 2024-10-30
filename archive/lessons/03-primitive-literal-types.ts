//
//  NOTE: UNION
//
// let a3: string | number | boolean;
// a3 = 'test';
// a3 = 1;
// a3 = true;
//
// // ==========
// class Cat {
//   run(): void {}
//
//   toString(): string {
//     return 'cat';
//   }
// }
//
// class Bird {
//   fly(): void {}
//
//   toString(): string {
//     return 'bird';
//   }
// }
//
// class Fish {
//   swim(): void {}
//
//   toString(): string {
//     return 'fish';
//   }
// }
//
// // there is not check for instance, this check only for properties
// function move(animal: Cat | Bird | Fish): void {
//   animal.run(); // Error
//   animal.fly(); // Error
//   animal.swim(); // Error
//
//   animal.toString();
// }
//
// let t0: any | unknown;
// let t1: number | unknown;
// let t2: string | unknown;
// let t3: boolean | unknown;
// let t4: null | unknown;
// let t5: undefined | unknown;

//  NOTE: Interseption

// class A3 {
//   a: number;
// }
//
// class B3 {
//   b: string;
// }
//
// class C3 {
//   c: boolean;
// }
//
// let identifier: A3 & B3 & C3;
//
// identifier = {
//   // if we have no c or b or a => error:
//   // Type '{ a: number; b: string; }' is not assignable to type 'A3 & B3 & C3'.
//   //      Property 'c' is missing in type '{ a: number; b: string; }' but required in type 'C3'. [2322]
//   a: 1,
//   b: '',
//   c: true,
//   // c: '', // error Type 'string' is not assignable to type 'boolean'.
//   // d: '', // error Object literal may only specify known properties, and 'd' does not exist in type 'A3 & B3 & C3'.
// };

// let t1: string | unknown;
// let t2: number | unknown;
// let t3: boolean | unknown;
// let t4: undefined | unknown;

// NOTE:  TYPEOF
//
// let a: string;
// let b: typeof a;
//
// b = '';
// b = 1; // err Type 'number' is not assignable to type 'string'.

// class Identifier {
//   static staticProp: number;
//   field: string;
//   get prop(): boolean {
//     return true;
//   }
//
//   method(): void {}
// }
//
// let identifier = new Identifier();
// let a1: typeof identifier;
// let a2: typeof Identifier.staticProp;
// let a3: typeof identifier.field;
// let a4: typeof identifier.prop;
// let a5: typeof identifier.method;

// const INITIAL_COORDINATES = { x: 0, y: 0 };
//
// function isValid(coordinates: typeof INITIAL_COORDINATES): void {
//   let element = document.querySelector("#some-element")!; // '!' - we sure that it will be
//   let { clientLeft: x, clientTop: y } = element;
//
//   let position = { x, y };
//
//   let isPositionXvalid = position.x === coordinates.x;
//   let isPositionYvalid = position.y === coordinates.y;
// }
//
// isValid({});

// // NOTE: TYPE ALIAS

// class AnimalProvider {}
// class FishProvider {}
// class BirdProvider {}
//
// type AnimalsProvider = AnimalProvider | FishProvider | BirdProvider;
//
// let allAnimals: AnimalsProvider;
//
// function move(animalsProvider: AnimalsProvider): void {}
//
// type AnimalProviderAlias = AnimalProvider;
//
// let animal: AnimalProviderAlias = new AnimalProvider();

// // NOTE: Primitive Literal types

// NOTE: NUMBER
//
// const port80: number = 80;
// const port42: number = 42;
//
// type ValidPortValue = 80 | 42;
//
// function fetch(port: ValidPortValue) {
//   // fetch('someurl:${port}')
// }
//
// fetch(81);
// fetch(80);
// fetch(42);

// // NOTE: STRING

// function animate(name: 'easy-in' | 'easy-out'): void {
//     // some animation
// }
//
// animate('easy-in');
//
// type Type = "Type";
// type Script = "Script"
//
// type Message = `I like ${Type}${Script}`;
//
// let message: Message = 'I like TypeScript';
// let message2: Message = 'I like JavaScript';
//
// type Sport = "Sport";
// type Beer = "Beer";
//
// type Hobby = `I like ${Sport | Uppercase<Beer>}`;
//
// let a = 'test';
// const a1: 'test' = 'test';
//
// // UpperCase
// // Lowercase
// // Capitilize
// // Uncapitilize
//
// let hobby: Hobby = "I like Sport";
// let hobby2: Hobby = "I like BEER";
// let hobby22: Hobby = "I like Beer";
// let hobby3: Hobby = "I like VINE";

// // NOTE: BOOLEAN

// let a: true;
//
// a = false;
//
// // NOTE: SYMBOL
//
// const id: unique symbol = Symbol('id');
// const wrongId: symbol = Symbol('wrong-id');
//
// function validate(key: typeof id): void {}
//
// validate(id);
// validate(wrongId);
//
// class Identifier {
//     static readonly staticProp: unique symbol = Symbol('test');
//     readonly field: unique symbol = Symbol('test');
// }

// // NOTE: ENUM
//
// enum Animals {
//     Cat = 'cat',
//     Dog = 'dog',
//     Horse = 'horse',
// }
//
// type CatOrDog = Animals.Cat | Animals.Dog;
//
// let animal: CatOrDog = Animals.Cat;
// let animal1: CatOrDog = Animals.Dog;
// let animal2: CatOrDog = Animals.Horse;
// let animal3: CatOrDog = 'cat';
//
// // enum Animals {
// //   Cat,
// //   Dog,
// //   Horse,
// // }
// //
// // let obj = {
// //   Cat: 0,
// // };
// //
// // Animals[0];
// //
// // type CatOrDog = Animals.Cat | Animals.Dog;
// //
// // let animal: CatOrDog = Animals.Cat;
// // let animal1: CatOrDog = Animals.Dog;
// // let animal3: CatOrDog = 0;
