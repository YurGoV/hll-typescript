import { IWorker, WorkersPositions } from './workers.interface';
import { workersList } from './workers.list';

export class Worker implements IWorker {
  readonly fullName: string;

  readonly age: number;

  readonly phoneNumber: number;

  readonly receivedMessages: string[];

  private salaryCard: number;

  workPosition: WorkersPositions;

  constructor(
    fullName: string,
    age: number,
    phoneNumber: number,
    workPosition: WorkersPositions,
  ) {
    this.fullName = fullName;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.salaryCard = 0;
    this.receivedMessages = [];
    this.workPosition = workPosition;

    workersList.addWorker(this);
  }

  rechargeCard(salary: number): void {
    this.salaryCard += salary;
    console.log(`worker ${this.fullName} received ${salary} of salary`);
  }
}
