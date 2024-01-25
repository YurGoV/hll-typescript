// clients.class.ts
import { IClient } from './clients.interface';

export class Client implements IClient {
  readonly fullName: string;

  readonly age: number;

  readonly phoneNumber: number;

  constructor(fullName: string, age: number, phoneNumber: number) {
    this.fullName = fullName;
    this.age = age;
    this.phoneNumber = phoneNumber;
  }

  receiveMessage(message: string): string {
    return `client ${this.fullName} received message: ${message}`;
  }
}
