// privateFieldsTest.ts
class Direction00 {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  get name(): string {
    return this.#name;
  }
}

const direction0 = new Direction00('North');
console.log(direction0.name); // Should print "North"
