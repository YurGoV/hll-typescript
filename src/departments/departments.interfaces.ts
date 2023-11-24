import { IWorker } from '../workers';

export interface IBudget {
  debit: number;
  credit: number;
}

export interface ICompanyUnit {
  readonly name: string;
  readonly domain: string;
  budget: IBudget;
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
