import { IDepartment } from '../departments';
import { IWorker } from '../workers';

export interface ICompany {
  readonly name: string;
  departments: IDepartment[];

  addDepartment(department: IDepartment): void;
  getAllWorkers(): IWorker[];
  getPreWorkers(): IWorker[];
  getDepartments(): IDepartment[];
}
