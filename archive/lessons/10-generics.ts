// T, U, V, Z, P.

// // Generic interface
// interface Identifier<TName, TAge> {
//   name: TName;
//   age: TAge;
// }
//
// const a: Identifier<string, number> = {
//   name: '',
//   age: 1,
// };

// // Generic type
// type MyType<T> = T[];

// // Generic function
// function sum<T>(arg1: T, arg2: T): T {
//   return arg1 + arg2;
// }
//
// sum<number>(1, 2);
// sum<string>('name', 1);
//
// const foo = <T>(arg: T) => {};

// // Generic class
// class Identifier<TId> {
//   constructor(readonly id: TId) {}
//
//   method<TArg>(arg: TArg): TArg {
//     return arg;
//   }
// }
//
// const ident = new Identifier<string>('');
//
// class ClassA<T> {}
//
// class ClassB extends ClassA<string> {}
//
// class ClassC<T> extends ClassA<T> {}
//
// const c = new ClassC<string>();
// const a: ClassA<string> = new ClassA();
//
// class User<T> {
//   public name!: T;
//
//   constructor(readonly id: string) {}
// }
//
// const admin = new User('admin');
//
// admin.name = 1;

// //
// class Identifier<T> {
//   constructor(readonly id: T) {}
//
//   method<T>(arg: T): T {
//     return arg;
//   }
// }

// interface CustomConstructor<T> {
//   new (): T;
// }

// Generic extend

// class A<T extends CustomConstructor<T>> {
//   getInstance(): T {
//     return new T();
//   }
// }

// type typeA = {};
// type typeA<T> = {};

// interface IName {
//   name: string;
// }

// class Collections<T extends IName> {
//   private items: T[] = [];

//   add(item: T): void {
//     this.items.push(item);
//   }

//   get(name: string): T | undefined {
//     return this.items.find((item) => item.name === name);
//   }
// }

// interface IBird {
//   fly(): void;
// }

// interface IFish {
//   swim(): void;
// }

// interface IDuck extends IBird, IFish {}

// interface IFly<T extends IBird> {
//   child: T
// }

// let a: IFly<IBird>;
// let b: IFly<IDuck>;
// let c: IFly<IFish>;

// class A<T extends number> {}
// class B<T extends string> {}

// class A<T = string> {}

// const a = new A<number>();

// class A<T extends number = number> {}

// const a = new A();

// class A<T extends string> {
//   constructor(value?: T) {
//     value!.charAt(1);
//     if (value) {
//       value.charAt(1);
//     }
//   }
// }

// function funcA<T>(param: any): T {
//   return param;
// }

// function sum<T extends string | number>(arg1: T, arg2: T) {
//   return (arg1 as any) + (arg2 as any);
// }

// sum<number>(1, 2);
