export interface IShape {
  readonly color: string;
  readonly name: string;

  calculateArea(): number;
}
