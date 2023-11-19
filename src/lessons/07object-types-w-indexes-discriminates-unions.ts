// // Key = string | number | symbol
// // Value could be anything
// interface IDictionary {
//   [englishWord: string]: string; // we can sdd dinamically keys there after object is created
//   // in js all keys are string
// }
//
// let engishUkrainianDictionary: IDictionary = {};
//
// engishUkrainianDictionary['dog'] = 'собака';
// engishUkrainianDictionary[1] = 'кішка';
//
// console.log(engishUkrainianDictionary);
//
// // engishUkrainianDictionary[a] = 'кішка'; //
//
// function addTranslation(key: string, translation: string, dictionary: any): void {
//   dictionary[key] = translation;
// }
//
// addTranslation('lamp', 'Лампа', []);
//
// enum NumberEnum {
//   Prop = 0,
// }
//
// enum StringEnum {
//   Prop = 'prop',
// }

// engishUkrainianDictionary[1] = "";
// engishUkrainianDictionary[NumberEnum.Prop] = "";
// engishUkrainianDictionary[StringEnum.Prop] = "";
// engishUkrainianDictionary[Symbol("key")] = "";

// engishUkrainianDictionary[StringEnum.Prop] = "";
// engishUkrainianDictionary[Symbol("key")] = "";

// NOTE: classes
//

// class Identifier {
//   [key: string]: string; // TODO: ask: error 'key is not defined
//
//   name: string = 'default';
// }
//
// const identifier = new Identifier();
//
// identifier['test'] = 'test';

// NOTE:  ===
//
// interface Identifier {
//   [key: string]: number | string;
// }
//
// function foo(obj: Identifier): void {
//   if ('test' in obj) {
//     obj['test'].toString(); // eslint-disable-line dot-notation
//   }
//
//   // obj.test!.toString();
//   // obj.test?.toString();
// }
// foo({});

// let obj: Identifier = {
//   name: '',
// };

// obj["test"] = 1;
// obj.test = 2;
// console.log(obj["name"]);

// foo(obj);

// function fooArr(arr: string[]) {
//   arr[5]?.toString();
// }

//
// type User = {
//   name?: string;
//   surname?: string | undefined;
// };
//
// const user: User = {};
//
// const admin: { [key: string]: string } = user;

// admin["name"] = "John";
// admin["surname"] = undefined;

// NOTE: ==== Discriminant union
//
// interface IType {
//   type: string;
// }
//
// class Cat implements IType {
//   type: 'cat' = 'cat';
//
//   meow(): void {}
//
//   toString(): string {
//     return 'cat';
//   }
// }
//
// class Bird implements IType {
//   type: 'bird' = 'bird';
//
//   fly(): void {}
//
//   toString(): string {
//     return 'bird';
//   }
// }
//
// class Fish implements IType {
//   type: 'fish' = 'fish';
//
//   swim(): void {}
//
//   toString(): string {
//     return 'fish';
//   }
// }
//
// function move(animal: Cat | Bird | Fish): void {
//   animal.toString();
//
//   // animal.meow(); // error: Property 'meow' does not exist on type 'Bird'.
//   if (animal.type === 'cat') {
//     animal.meow();
//   } else if (animal.type === 'bird') {
//     animal.fly();
//   } else {
//     animal.swim();
//   }
// }

// ======= 1h 31m
// interface IDevice {
//   readonly color: string;
//   readonly power: number;
//
//   on(): boolean;
//   off(): boolean;
// }
//
// interface IKettle {
//   waterTemperature: number;
// }
//
// interface IWashingMashine {
//   capacity: number;
// }
//
// interface IDelayedStart {
//   startInHours(time: number): Promise<boolean>;
// }
//
// abstract class Device implements IDevice {
//   protected working: boolean = false;
//
//   constructor(public readonly color: string, public readonly power: number) {}
//
//   abstract on(): boolean;
//   abstract off(): boolean;
// }
//
// class Kettle extends Device implements IKettle {
//   waterTemperature: number = Kettle.ROOM_TEMPERATURE;
//   static readonly ROOM_TEMPERATURE = 20;
//   static readonly BOILING_TEMPERATURE = 100;
//
//   on(): boolean {
//     this.working = true;
//     this.#startHeating();
//
//     return this.working;
//   }
//
//   off(): boolean {
//     this.working = false;
//     this.#stopHeating();
//
//     return this.working;
//   }
//
//   #startHeating(): void {
//     while (this.waterTemperature !== Kettle.BOILING_TEMPERATURE) {
//       this.waterTemperature += 5;
//     }
//   }
//
//   #stopHeating(): void {
//     // Stop heating of water;
//   }
// }
//
// class WashingMashine extends Device implements IWashingMashine {
//   constructor(
//     public color: string,
//     public power: number,
//     public capacity: number,
//   ) {
//     super(color, power);
//   }
//
//   on(): boolean {
//     this.working = true;
//
//     this.#startWashing();
//
//     return this.working;
//   }
//
//   off(): boolean {
//     this.working = false;
//
//     this.#stopWashing();
//
//     return this.working;
//   }
//
//   #startWashing(): void {
//     this.#fillWithWater();
//     // Add washing powder
//     // Turn on the speed
//   }
//
//   #stopWashing(): void {
//     // Drain the water
//     // Dry the clothes
//     // Turn off the speed
//   }
//
//   #fillWithWater(): void {}
// }
//
// class WashingMashinePro extends WashingMashine implements IDelayedStart {
//   startInHours(time: number): Promise<boolean> {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         this.on();
//
//         resolve(this.working);
//       }, time);
//     });
//   }
// }
//
// const kettle = new Kettle('white', 1500);
// const washingMashine = new WashingMashine('white', 1500, 5);
// const washingMashinePro = new WashingMashinePro('black', 2000, 8);
//
// kettle.on();
// kettle.off();
// kettle.color;
//
// washingMashine.capacity;
// washingMashine.on();
// washingMashine.off();
//
// washingMashine.startInHours();
//
// washingMashinePro.startInHours(2000).then(() => {});
//
// function testDevice(device: Device): void {
//   if (device.on() === false) {
//     console.log('device is broken (not turning on)');
//   } else if (device.off() === true) {
//     console.log('device is broken (unable to turn off)');
//   } else {
//     console.log('device works well');
//   }
// }
