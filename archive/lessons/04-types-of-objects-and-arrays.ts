// NOTE: Enum in blocks
//
// class Test {
//   constructor() {
//     if (true) {
//       type MyType = number;
//       enum Animal {
//         Cat,
//         Dog,
//       }
//     }
//     Animal.Cat;
//   }

//   method(): void {
//     Animal.Cat;
//   }
// }

// NOTE: Objects

// let obj: object = {};
// let Obj: Object = {};

// obj.hasOwnProperty('q');
// Obj.hasOwnProperty('1');

// Object
// let obj: object;
// let Obj: Object;

// obj = 5;
// Obj = 5;

// obj = "";
// Obj = "";

// obj = true;
// Obj = true;

// obj = null;
// Obj = null;

// obj = undefined;
// Obj = undefined;

// NOTE: ARRAY
//
// const animals: string[] = ["Elephant", "Dog", "Cat"];
// const otherAnimals: Array<string> = ["Elephant", "Dog", "Cat"];

// animals.push(5);
// animals.push(true);
// animals.push(null);
// animals.push(undefined);

// class Elephant {}
// class Rhino {}
// class Gorilla {}

// const animals: (Elephant | Rhino | Gorilla)[] = [new Rhino(), new Gorilla(), new Elephant()]

// const allData: any[] = [];

// allData.push('');
// allData.push(1);
// allData.push(true);

// const animalData: string[] = new Array();
// const elephantData: string[] = new Array('Dambo');

// const lionData = new Array('Simba', 1);

// NOTE: Tuple

// const v0: [string, number] = ["test", 1];
// const v1: [string, number] = [1, ''];
// const v2: [string, number] = [];

// function f(...rest: [number, string, boolean]): void {

// }

// const tuple: [number, string, boolean] = [5, "", true];
// const arr = [5, "", true, ''];

// f(5);
// f(5, "");
// f(5, "", true);

// f(...tuple);

// f(...arr);

// let v0: [...boolean[]];
// let v1: [...boolean[], ...string[]];
// let v2: [...boolean[], string];
// let v2: [string, ...boolean[]];
// let v3: [string, ...boolean[], true];
// let v4: [...boolean[], boolean?];
// let v4: [boolean?, ...boolean[]];

// type strings = [string, string];
// type boolArray = boolean[];

// type v0 = [...strings, number];

// const a: v0 = ["", "", 1];

// const f = (arg: [string, number]) => {}

// f(['', 1]);
// f([1, '']);

// const f = (arg: [id: string, name: number]) => {
//   let [c, d] = arg;
// };

// type T = [a: number, b: string];

// const elephantData = ['Dambo', 1];

// NOTE: FUNCTIONS

// function f1(p1: number): string {
//   return p1.toString();
// }

// function f2(p1: string): number {
//   return p1.length;
// }

// const v1: Function = f1;
// const v2: Function = f2;

// type FunctionalType = (p1: string, p2: number) => number;

// const func: FunctionalType = (p1, p2) => {
//   return p2;
// };
