import { Observable } from '../observables/observable';
import { IWorker, WorkersPositions } from '../workers/workers.interface';
import { workersList } from '../workers/workers.list';
import { salaries, ZooState } from './accountint.interfaces';

export class Accounting extends Observable {
  #budget: number = 300000;

  #zooState: ZooState = 'close';

  setZooState(worker: IWorker, state: ZooState): void {
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
    }
  }
}

export const accounting = new Accounting();
