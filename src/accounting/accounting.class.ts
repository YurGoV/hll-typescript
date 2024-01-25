// accounting.class.ts
// import { notificationService, Observable } from '../observables/observable';
import { Observable } from '../observables/observable';
import { IWorker, WorkersPositions } from '../workers/workers.interface';
import { workersList } from '../workers/workers.list';
// import { IAccounting, salaries } from './accountint.interfaces';
import { salaries } from './accountint.interfaces';

type ZooState = 'open' | 'close' | 'readyToClose';

export class Accounting extends Observable {
  // export class Accounting {
  #budget: number = 300000;

  #zooState: ZooState = 'close';

  // constructor() {
  //   // super();
  //   this.budget = 300000;
  //   this.zooState = 'close';
  // }

  setZooState(worker: IWorker, state: ZooState): void {
    console.log(worker.workPosition, 'wwwww');
    if (worker.workPosition !== WorkersPositions.ADMINISTRATOR) {
      console.log('error forbiden to change zoo state');
      return;
    }
    this.#zooState = state;
    if (state === 'readyToClose') {
      this.notify();
    }
  }

  getZooState(): ZooState {
    return this.#zooState;
  }

  getBudget(): number {
    return this.#budget;
  }

  paySalary(): void {
    for (const worker of workersList.list) {
      const salary = salaries[worker.workPosition];
      this.#budget -= salary;
      worker.rechargeCard(salary);
      console.log('salary', salary);
    }
  }
}

export const accounting = new Accounting();
// accounting.attach(notificationService);
