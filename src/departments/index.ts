// import { Accounting, accounting } from '../accounting';
// import { company } from '../company';
import { accounting, company } from '../hw-06';
import { IWorker } from '../workers';

export interface IBudget {
  debit: number;
  credit: number;
}

export interface ICompanyUnit {
  domain: string;
  budget: IBudget;
  // workersList: IWorker[];
}

export interface IDepartment extends ICompanyUnit {
  workersList: IWorker[];

  addWorker(worker: IWorker): void;
  removeWorker(worker: IWorker): void;
  addToBudget(sum: number): void;
  removeFromBudget(sum: number): void;
  getBudgetSummary(): string;
  getWorkersList(): IWorker[];
}

export class Department implements IDepartment {
  // export class Department implements IDepartment {
  departmentName: string;

  domain: string;

  budget: IBudget = { debit: 3000000, credit: 30000000 };

  workersList: IWorker[] = [];

  constructor(departmentName: string, domain: string) {
    this.departmentName = departmentName;
    this.domain = domain;

    company.addDepartment(this);
  }

  addWorker(worker: IWorker): void {
    if (
      !this.workersList.includes(worker) &&
      this.budget.debit - worker.sallary > 0
    ) {
      this.workersList.push(worker);
      this.budget.debit -= worker.sallary;
      this.budget.credit += worker.sallary;
      // TODO: enum
      accounting.removePreWorkerFromBallance(worker);
      worker.changeStatus('on-job');
      worker.setDepartment(this.departmentName);
    } else {
      console.error(`Error: chek if ${worker.fullName} is exists or budget compatibility`);
    }
  }

  removeWorker(worker: IWorker): void {
    if (this.workersList.includes(worker)) {
      this.workersList = this.workersList.filter((name) => name !== worker);
      this.budget.debit += worker.sallary;
      this.budget.credit -= worker.sallary;
      // TODO: enum
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
    return `Current budget of ${this.departmentName} department: Debit: ${this.budget.debit}, Credit: ${this.budget.credit}`;
  }

  getWorkersList(): IWorker[] {
    return this.workersList;
  }
}
