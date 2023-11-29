import { ICircle } from "../interfaces/circle";
import { Shape } from "./shape";

export class Circle extends Shape implements ICircle {
  constructor(color: string, name: string, readonly radius: number) {
    super(color, name);
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
