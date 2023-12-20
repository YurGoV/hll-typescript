// NOTE: task 1
//
// Написати функцію convertToString, яка може приймати
// аргумент будь якого типу та повертати його у вигляді строки
// (за допомогою методу toString).
// Якщо цього методу немає, тоді повертати undefined

interface IValueWithToString {
  toString(): string;
}

type SimpleObject = { [key: string]: IValueWithToString };
//
function isSimpleObject(obj: unknown): obj is SimpleObject {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    !Array.isArray(obj) &&
    Object.values(obj).every((value) => typeof value !== 'function')
  );
}

function convertToString<T>(value: T): string | undefined {
  if (value === null || value === undefined) {
    return undefined;
  }

  if (isSimpleObject(value)) {
    return JSON.stringify(value);
  }

  if (value.toString() === '[object Object]') {
    return undefined;
  }

  if (typeof value.toString === 'function') {
    return value.toString();
  }

  return undefined;
}

// CHECK:
console.log(convertToString(42), '1'); // 42 1
console.log(convertToString('Hello'), '2'); // Hello 2
console.log(convertToString(true), '3'); // true 3
console.log(convertToString({ key: 'simple string' }), '4'); // {"key":"simple string"} 4
console.log(convertToString({ key: 25 }), '5'); // {"key":25} 5
console.log(convertToString([14, 17, 'some text']), '6'); // 14,17,some text 6
console.log(
  convertToString({
    key: 25,
    test() {
      console.log('lll');
    },
  }),
  '8',
); // undefined 8

// NOTE: task 2
//
// Написати функцію sortEntities, яка має сортувати різні об'єкти,
// які мають id за зростанням або за зменшенням.
// Функція приймає 2 аргументи - масив об'єктів та ключове слово desc або asс,
// відповідно до нього буде відбуватися сортування.

interface IObjWithId {
  id: number;
  [key: string]: unknown;
}

enum ESort {
  ASC = 1,
  DESC = -1,
}

function sortEntities(obj: IObjWithId[], sort: ESort): IObjWithId[] {
  return [...obj].sort((a, b) => (a.id - b.id) * sort);
}

// function sortEntities<TObj extends IObjWithId, NSort extends ESort>(
//   obj: TObj[],
//   sort: NSort,
// ): TObj[] {
//   return [...obj].sort((a, b) => (a.id - b.id) * sort);
// }

const entities: IObjWithId[] = [
  { id: 3 },
  { id: 1, key2: [2, 3, 5] },
  { id: 2, key2: { k1: 'k' } },
];

const ascendingOrder = sortEntities(entities, ESort.ASC);
console.log(ascendingOrder);

const descendingOrder = sortEntities(entities, ESort.DESC);
console.log(descendingOrder);
// RESULT:
// [
//   { id: 1, key2: [ 2, 3, 5 ] },
//   { id: 2, key2: { k1: 'k' } },
//   { id: 3 }
// ]
// [
//   { id: 3 },
//   { id: 2, key2: { k1: 'k' } },
//   { id: 1, key2: [ 2, 3, 5 ] }
// ]
