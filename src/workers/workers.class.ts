// workers.class.ts
import { IWorker, WorkersPositions } from './workers.interface';

export class Worker implements IWorker {
  readonly fullName: string;

  readonly age: number;

  readonly phoneNumber: number;

  readonly receivedMessages: string[];

  walletAmount: number;

  workPosition: WorkersPositions;
  // status: TStatus;

  constructor(
    fullName: string,
    age: number,
    phoneNumber: number,
    workPosition: WorkersPositions,
  ) {
    this.fullName = fullName;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.walletAmount = 300000;
    this.receivedMessages = [];
    this.workPosition = workPosition;
  }


  receiveMessage(): void {}
}
