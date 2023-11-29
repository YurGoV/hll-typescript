import { IShape } from "../interfaces/shape";

export abstract class Shape implements IShape {
  constructor(readonly color: string, readonly name: string) {}

  abstract calculateArea(): number;
}
