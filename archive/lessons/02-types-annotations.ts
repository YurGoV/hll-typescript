const a: string = 'string value';

function foo(param1: string, param2: string): string {
  return param1 + param2;
}

foo('s1', 's2');

function fooWithGen<T>(param1: T, param2: T) {
  return { param1, param2 };
}

fooWithGen(1, 'str');
fooWithGen('str', 1);

function fooWithGen2<T, K>(param1: T, param2: K) {
  return { param1, param2 };
}
fooWithGen2('str', 1);
//
//

// NOTE: function overload (not user ofnen)
function identifier(p1: string, p2: string): string;
function identifier(p1: number, p2: number): number;
function identifier(p1: any, p2: any): any {
  return p1 + p2;
}

identifier(1, 2);
identifier('str1', 'str2');
identifier(3, 'str2');

// NOTE: oferload in classes (contstructor, method)
class Fruit {
  constructor(p1: number, p2: number);
  constructor(p1: string, p2: string);
  constructor(p1, p2) {}

  // NOTE: ??
  method(p1: number);
  method(p1: string);
  method(p1) {
    return p1;
  }
}

// NOTE: types deifinition in classes
class Identity {
  static staticField: string;
  param: number;

  constructor(param: number) {
    this.param = param;
  }

  get property(): number {
    return 1;
  }

  set property(param: number) {
    this.param = param;
  }
}

// NOTE: error because static
Identity.staticField;
new Identity.staticField();

// NOTE: TYPES
let a1: any = 0;
a1 = 'apple';

let n: number;
n = 'str';

// NOTE: not used
let N: Number;
N = new Number(3);

N = n;
n = N;

// the same with string

// NOTE: symbol:
let s: Symbol = Symbol('asds');

// NOTE: bigint:
let bigint: bigint = 42n;
let Bigint: BigInt = BigInt(42);

Bigint = bigint;
bigint = Bigint;

const nullIdentifier: null = null;

class TypeSystem {
  static any = null;
  static number: number = null; // not ok, why? (in course - ok)
  static string: string = null; // not ok, why? (in course - ok)
  static boolean: boolean = null; // not ok, why? (in course - ok)
  static null: null = null;
}

TypeSystem.null = TypeSystem.any; // ok
TypeSystem.null = TypeSystem.number; // error
TypeSystem.null = TypeSystem.string; // error
TypeSystem.null = TypeSystem.boolean; // error
TypeSystem.null = TypeSystem.null; // ok

const identifierAgain = null;
const str = '';
typeof identifierAgain; // there is any there 1:47:30 // "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */

// NOTE: undefined:
const identifierU: undefined = undefined;
let identifierU2;

class TypeSystemUndefined {
  static any = undefined; // ok
  static number: number = undefined; // not ok
  static string: string = undefined; // not ok
  static boolean: boolean = undefined; // not ok
  static null: null = undefined; // not ok
  static undefined: undefined = undefined; // ok
}
TypeSystemUndefined.undefined = TypeSystemUndefined.any; // ok
TypeSystemUndefined.undefined = TypeSystemUndefined.number; // error
TypeSystemUndefined.undefined = TypeSystemUndefined.string; // error
TypeSystemUndefined.undefined = TypeSystemUndefined.boolean; // error
TypeSystemUndefined.undefined = TypeSystemUndefined.null; // ok
TypeSystemUndefined.undefined = TypeSystemUndefined.undefined; // ok

// NOTE: void;
function action(): void {}
class TypeSystemVoid {
  static any = action(); // ok
  static number: number = action(); // not ok
  static string: string = action(); // not ok
  static boolean: boolean = action(); // not ok
  static null: null = action(); // not ok
  static undefined: undefined = action(); // not ok
  static void: void = action(); // ok
}
TypeSystemVoid.void = TypeSystemVoid.any; // ok
TypeSystemVoid.void = TypeSystemVoid.number; // error
TypeSystemVoid.void = TypeSystemVoid.string; // error
TypeSystemVoid.void = TypeSystemVoid.boolean; // error
TypeSystemVoid.void = TypeSystemVoid.null; // error
TypeSystemVoid.void = TypeSystemVoid.undefined; // ok
TypeSystemVoid.void = TypeSystemVoid.void; // ok

function a2(): void {
  // const result: number = 5; // error: Type 'number' is not assignable to type 'void'
  const result: any = 5; // no error, because any compatible with void (no use any))
  return result;
}

// NOTE: never 2:00:00
function returnNever(): never {
  throw new Error();
  // also can use in switch - case...
}
class TypeSystemNever {
  static any = returnNever(); // ok
  static number: number = returnNever(); // ok
  static string: string = returnNever(); // ok
  static boolean: boolean = returnNever(); // ok
  static null: null = returnNever(); // ok
  static undefined: undefined = returnNever(); // ok
  static void: void = returnNever(); // ok
  static never: never = returnNever(); // ok
}
TypeSystemNever.never = TypeSystemNever.any; // error
TypeSystemNever.never = TypeSystemNever.number; // error
TypeSystemNever.never = TypeSystemNever.string; // error
TypeSystemNever.never = TypeSystemNever.boolean; // error
TypeSystemNever.never = TypeSystemNever.null; // error
TypeSystemNever.never = TypeSystemNever.undefined; // error
TypeSystemNever.never = TypeSystemNever.void; // error
TypeSystemNever.never = TypeSystemNever.never; // ok

// NOTE: unknown

class TypeSystemUnknown {
  static unknown: unknown;

  static any = TypeSystemUnknown.unknown; // ok
  static number: number = TypeSystemUnknown.unknown; // error
  static string: string = TypeSystemUnknown.unknown; // error
  static boolean: boolean = TypeSystemUnknown.unknown; // error
  static null: null = TypeSystemUnknown.unknown; // error
  static undefined: undefined = TypeSystemUnknown.unknown; // error
  static void: void = TypeSystemUnknown.unknown; // error
  static never: never = TypeSystemUnknown.unknown; // error
  static unknown: never = TypeSystemUnknown.unknown; // error
}
TypeSystemNever.never = TypeSystemNever.any; // error
TypeSystemNever.never = TypeSystemNever.number; // error
TypeSystemNever.never = TypeSystemNever.string; // error
TypeSystemNever.never = TypeSystemNever.boolean; // error
TypeSystemNever.never = TypeSystemNever.null; // error
TypeSystemNever.never = TypeSystemNever.undefined; // error
TypeSystemNever.never = TypeSystemNever.void; // error
TypeSystemNever.never = TypeSystemNever.never; // ok

const aU: unknown = 1;
const bU: unknown = '';
const abRes = aU + bU; // is better than any
const abCompare = aU === bU;
const abCompare2 = aU || bU;

// NOTE: enum
enum FruitsEnum {
  Apple,
  Banana,
  Orange,
}
enum FruitsEnum2 {
  Apple = 2,
  Banana,
  Orange = 6,
  Pear,
}

const valueFromEnumKey = FruitsEnum2.Apple; // 2
const keyFromEnumValue = FruitsEnum2[2]; // 'Apple'

// enum (EFruitsEnum - name for test) after compiler:
// var EFruitsEnum;
// (function (EFruitsEnum) {
//     EFruitsEnum[EFruitsEnum["EApple"] = 0] = "EApple";
//     EFruitsEnum[EFruitsEnum["EBanana"] = 1] = "EBanana";
//     EFruitsEnum[EFruitsEnum["EOrange"] = 2] = "EOrange";
// })(EFruitsEnum || (EFruitsEnum = {}));
//
// and as result:
// {
//   EApple: 0,
//   EBanana: 1,
//   EOrange: 2,
//   0: 'EApple',
//   1: 'EBanana',
//   2: 'EOrange',
// }

// if we use enum with 'const' = in result code we have no enum,
// we have resulted const only

// pause: 01:57:00
