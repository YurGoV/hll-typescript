import { ITriangle, IPrintable } from "../interfaces";
import { Shape } from "./shape";

export class Triangle extends Shape implements ITriangle, IPrintable {
  constructor(
    color: string,
    name: string,
    readonly base: number,
    readonly height: number
  ) {
    super(color, name);
  }

  calculateArea(): number {
    return this.base * this.height * 0.5;
  }

  print(): void {
    console.log("this.base * this.height * 0.5");
  }
}
