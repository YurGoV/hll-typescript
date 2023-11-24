import { accounting, company } from '../hw-06';
import { IWorker } from '../workers';
import { IBudget, IDepartment } from './departments.interfaces';

export class Department implements IDepartment {
  readonly name: string;

  readonly domain: string;

  budget: IBudget = { debit: 3000000, credit: 30000000 };

  workersList: IWorker[] = [];

  constructor(name: string, domain: string) {
    this.name = name;
    this.domain = domain;

    company.addDepartment(this);
  }

  addWorker(worker: IWorker): void {
    if (
      !this.workersList.includes(worker) &&
      this.budget.debit - worker.salary > 0
    ) {
      this.workersList.push(worker);
      this.budget.debit -= worker.salary;
      this.budget.credit += worker.salary;
      accounting.removePreWorkerFromBallance(worker);
      worker.changeStatus('on-job');
      worker.setDepartment(this.name);
      worker.setSalary(worker.salary + worker.salary * 0.15);
    } else {
      console.error(`Error: chek if ${worker.fullName} is exists or budget compatibility`);
    }
  }

  removeWorker(worker: IWorker): void {
    if (this.workersList.includes(worker)) {
      this.workersList = this.workersList.filter((name) => name !== worker);
      this.budget.debit += worker.salary;
      this.budget.credit -= worker.salary;
      accounting.addPreWorkerToBallance(worker);
      worker.setDepartment(null);
    } else {
      console.error(`Worker ${worker} does not exist in the department`);
    }
  }

  addToBudget(sum: number): void {
    this.budget.debit += sum;
  }

  removeFromBudget(sum: number): void {
    if (this.budget.debit - sum < 0) {
      console.error('no money');
    }
    this.budget.debit -= sum;
  }

  getBudgetSummary(): string {
    return `Current budget of ${this.name} department: Debit: ${this.budget.debit}, Credit: ${this.budget.credit}`;
  }

  getWorkersList(): IWorker[] {
    return this.workersList;
  }
}
