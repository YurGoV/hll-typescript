// privateFieldsTest.ts
class Direction00 {
    #name;
    constructor(name) {
        this.#name = name;
    }
    get name() {
        return this.#name;
    }
}
const direction0 = new Direction00('North');
console.log(direction0.name); // Should print "North"
