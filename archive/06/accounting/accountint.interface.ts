import { ICompanyUnit } from '../departments';
import { IWorker } from '../workers';

export interface IAccounting extends ICompanyUnit {
  preWorkersBallance: IWorker[];

  addPreWorkerToBallance(worker: IWorker): void;
  removePreWorkerFromBallance(worker: IWorker): void;
  paySalary(): void;
}
