interface User {
  name: string;
  age: number;
  permission: string[];
}

// NOTE: task 1 DeepReadonly
//
// Вам потрібно створити тип DeepReadonly який буде робити доступними
// тільки для читання навіть властивості вкладених обʼєктів.
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

// NOTE: DeepReadonly test

function processUser(user: DeepReadonly<User>): void {
  console.log(user.name, user.age, user.permission);

  // check for readonly
  // user.name = 'New Name'; // Diagnostics: 1. Cannot
  // assign to 'name' because it is a read-only property.
}

const user: User = {
  name: 'John Doe',
  age: 25,
  permission: ['read'],
};

processUser(user);

//

//

// NOTE: task 2
//
// Вам потрібно створити тип DeepRequireReadonly який буде робити
// доступними тільки для читання навіть властивості вкладених
// обʼєктів та ще й робити їх обовʼязковими.
type DeepRequireReadonly<T> = {
  readonly [K in keyof T]-?: T[K] extends object ? DeepRequireReadonly<T[K]> : T[K];
};

type DeepRequiredUser = DeepRequireReadonly<User>;

const userDRU: DeepRequiredUser = {
  name: 'John Doe',
  age: 25,
  permission: ['read', 'write'],
};
// test for required
// const userDRUimcomplete: DeepRequiredUser = {
//   name: 'John Doe',
//   // Error: Type '{ name: string; }' is missing
//   // the following properties from type
//   // 'DeepRequireReadonly<User>': age, permission
// };

console.log(userDRU);
//

//

//

// NOTE: task 3 UpperCase
//
// Вам потрібно сворити тип UpperCaseKeys, який буде
// приводити всі ключи до верхнього регістру.
type UpperCaseKeys<T> = {
  [K in keyof T as Uppercase<string & K>]: T[K];
};

// NOTE: UpperCaseKeys test
interface ExampleObject {
  naMe: string;
  agE: number;
}

const objectExample: ExampleObject = {
  naMe: 'Sara',
  agE: 35,
};
console.log(objectExample, 'objectExample');

// Використовуємо UpperCaseKeys для отримання нового типу
type ExampleObjectUpper = UpperCaseKeys<ExampleObject>;

// Перевірка результату
const upperCaseExample: ExampleObjectUpper = {
  // naMe: 'Sara', // Object literal may only specify
  //known properties, but 'naMe' does not exist in type
  //'UpperCaseKeys<ExampleObject>'. Did you mean to write 'NAME'?
  NAME: 'John Doe',
  AGE: 25,
};
console.log(upperCaseExample, 'upper case object example');

//

//

//

// NOTE: task 4 Pick analogue
//
// Вам потрібно зробити свій аналог утіліти Pick, яка
// конструює новий тип, який буде включати в себе лише параметри
// передані в цю утіліту. Наприклад:

// interface User {
//   name: string;
//   age: number;
//   permission: string[];
// }
//
//
// let newUser: TPick<User, "name" | "age";

// повинен створити новий тип, який має включати в себе лише
// проперті name та age, без permissions
type TPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// test
type NewUser = TPick<User, 'name' | 'age'>;

const newUserPick: NewUser = {
  name: 'John Doe',
  age: 25,
  // Error: Property 'permission' does not exist on type 'NewUser'
  // permission: ['read'],
};
console.log(newUserPick, 'newUserPick');
