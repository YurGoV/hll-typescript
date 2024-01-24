import { IWorker } from '../workers/workers.interface';
import { workersList } from '../workers/workers.list';
import { IAccounting, salaries } from './accountint.interfaces';

class Accounting implements IAccounting {
  budget: number;

  constructor() {
    this.budget = 30000;
  }

  paySalary(): void {
    for (const worker of workersList.list) {
      const salary = salaries[worker.workPosition];
      this.budget -= salary;
      worker.rechargeCard(salary);
      console.log('salary', salary);
    }
  }
}

export const accounting = new Accounting();
