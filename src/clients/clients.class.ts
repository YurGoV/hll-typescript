// clients.class.ts
import { IClient } from './clients.interface';

export class Client implements IClient {
  readonly fullName: string;

  readonly age: number;

  readonly phoneNumber: number;

  readonly receivedMessages: string[];

  walletAmount: number;

  // status: TStatus;

  constructor(fullName: string, age: number, phoneNumber: number) {
    this.fullName = fullName;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.walletAmount = 300000;
    this.receivedMessages = [];
    // TODO: add to records...
    // NOTE: to simplify - add money to wallet is out of logic
  }

  buyTicket(visitPayment: number): void {
    if (visitPayment < this.walletAmount) {
      console.error('the payed sum can`t be less than wallet amount');
    }
    this.walletAmount -= visitPayment;
  }

  enterTheZoo(): void {}

  leftTheZoo(): void {}

  receiveMessage(): void {}
}
