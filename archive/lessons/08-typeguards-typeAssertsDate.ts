// Type guard by type/instance

// type IParamType = number | string | boolean | object | Function;

// function foo(param: IParamType) {
//   param;

//   if (typeof param === "number") {
//     param.toFixed();
//   } else if (typeof param === "string") {
//     param.charAt(1);
//   } else if (typeof param === "boolean") {
//     param.valueOf();
//   } else if (typeof param === "object") {
//     // @ts-ignore;
//     param["name"];
//   } else if (typeof param === "function") {
//     param();
//   } else {
//     param;
//   }
// }

// class Bird {
//   name: string = "bird";
//   fly(): void {}
// }
// class Cat {
//   name: string = "cat";
//   meow(): void {}
// }
// class Fish {
//   name: string = "fish";
//   swim(): void {}
// }

// function foo(animal: Bird | Cat | Fish) {
//   animal.name;

//   if (animal instanceof Bird) {
//     animal.fly();
//   } else if (animal instanceof Cat) {
//     animal.meow();
//   } else {
//     animal.swim();
//   }
// }

// function foo(param: string | (() => string)): void {
//   param;
//
//   // 
//   // let value: string = typeof param === "string" ? param : param();
//
//   let value: string;
//   
//   switch (typeof param) {
//     case 'string':
//       value = param;
//       break;
//
//     default:
//       value = param();
//       break;
//   }
// }

// NOTE: Typeguard by field
// 
// enum AnimalType {
//   Bird = "bird",
//   Fish = "fish",
// }

// class Bird {
//   readonly type = AnimalType.Bird;

//   fly(): void {}
// }

// class Fish {
//   readonly type = AnimalType.Fish;

//   swim(): void {}
// }

// function move(animal: Bird | Fish): void {
//   // if (animal.type === AnimalType.Bird) {
//   //   animal.fly();
//   // } else {
//   //   animal.swim();
//   // }

//   // animal.type === AnimalType.Bird ? animal.fly() : animal.swim();

//   // switch (animal.type) {
//   //   case AnimalType.Bird:
//   //     animal.fly();
//   //     break;
//   //   default:
//   //     animal.swim();
//   //     break;
//   // }
// }

// NOTE: Typeguard by public property

// class A {
//   a: number = 10;
// }

// class B {
//   b: string = "text";
// }

// function foo(param: A | B) {
//   if ("a" in param) {
//     param.a;
//   } else {
//     param.b;
//   }
// }

// NOTE: Predicat function
// 
// class TypeA {
//   a: string = "a";
// }
// class TypeB {
//   b: string = "b";
// }
// class TypeC {
//   c: string = "c";
// }

// function isTypeA(param: TypeA | TypeB | TypeC): param is TypeA {
//   return param instanceof TypeA;
// }

// function foo(param: TypeA | TypeB | TypeC): void {
//   if (isTypeA(param)) {
//     param.a;
//   } else {
//     param;
//   }
// }

// NOTE: Type assertion

// class Fish {
//   swim(): void {}
// }

// class Bird {
//   fly(): void {}
// }

// const nemo = {
//   swim(): void {},
// };

// let fishA = new Fish();
// let fishB = <Fish>nemo;
// let fishC = nemo as Fish;
// let bird = new Bird();

// let fish = bird as Fish;

// const element = {
//   width: "42",
//   height: "32",
// };

// const { width: widthString, height: heightString } = element;

// const width: number = parseInt(widthString);

// class DataProvider {
//   constructor(public data: any) {}
// }

// let provider: DataProvider = new DataProvider("text");

// let a = provider.data.split("");
// let a1 = provider.data.SpLit("");

// let b = (provider.data as string).split("");
// let b = (provider.data as string).SplIt("");

// type Status = 200 | 404;

// type IRequest = { myStatus: Status };

// let myStatus = 200 as const;

// const request: IRequest = { myStatus: myStatus };

// let a = [200, 404];
// let b = [200, 404] as const;

// let a = {
//   status: 200,
//   data: { role: "user" },
// } as const;

// let value = "value";

// let valueCopy = value as const;

// const a = (Math.round(Math.random() * 1) ? "yes" : "no") as const;

// const b = Math.round(Math.random() * 1) ? ("yes" as const) : ("no" as const);

// interface User {
//   name: string;
// }

// const a: any = {};

// a.name = "";

// assertUser(a);

// a.name = "";

// function assertUser(obj: unknown): asserts obj is User {
//   if (typeof obj === "object" && !!obj && "name" in obj) {
//     return;
//   }

//   throw new Error("Not a user");
// }

// type NumberOrString = number | string;
// const isString = (s: NumberOrString): s is string => typeof s === "string";
// interface IObj {
//   b: NumberOrString;
// }

// function test(obj: IObj) {
//   if (isString(obj.b)) {
//     console.log(obj.b); // obj.b - string

//     let b = obj.b;

//     setTimeout(() => {
//       b.toLowerCase(); // obj.b - NumberOrString
//     }, 0);
//   }
// }
