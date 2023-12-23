// NOTE: task 1
// Вам потрібно створити умовний тип, що служить для встановлення типу,
// що повертається з функції. Як параметр типу повинен обов'язково
// виступати функціональний тип.

type ConditionalType<T> = T extends (...args: infer Args) => infer Result ? Args extends any[] ? Result
  : never
  : 'error: must be a function';

function exampleFunctionOne(): number {
  return 42;
}
function exampleFunctionTwo(): string {
  return 'string';
}
function exampleFunctionThree(): boolean {
  return false;
}

type ResultTypeOne = ConditionalType<typeof exampleFunctionOne>;
type ResultTypeTwo = ConditionalType<typeof exampleFunctionTwo>;
type ResultTypeThree = ConditionalType<typeof exampleFunctionThree>;

const resultOne: ResultTypeOne = exampleFunctionOne();
const resultTwo: ResultTypeTwo = exampleFunctionTwo();
const resultThree: ResultTypeThree = exampleFunctionThree();

// const resultFour: ResultTypeThree = exampleFunctionTwo(); // Type 'string' is not assignable to type 'boolean'.

console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);
// console.log(resultFour);

// NOTE: task 2
// Вам потрібно створити умовний тип, який приймає функціональний тип
// з одним параметром (або задовільним) та повертає кортеж,
// де перше значення - це тип, що функція повертає, а другий - тип її параметру

type FunctionInfo<T> = T extends (...args: infer Args) => infer Result
  ? Args extends [infer FirstParam, ...any[]] ? [FirstParam, Result]
    : never
  : never;

function functOne(value: string): number {
  return parseInt(value, 10);
}
function funcTwo(value: number): boolean {
  return value < 10;
}

type Info = FunctionInfo<typeof functOne>;
type InfoTwo = FunctionInfo<typeof funcTwo>;

const info: Info = ['123', 123];
const infoTwo: InfoTwo = [123, false];
console.log(info, infoTwo);
