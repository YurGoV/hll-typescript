import { TStatus } from './workers.type';

export interface IWorker {
  readonly fullName: string;
  salary: number;
  bankAccount: number;
  status: TStatus;
  department: string | null;
  changeStatus(newStatus: TStatus): void;
  setDepartment(newDepartment: string | null): void;
  setSalary(newSalary: number): void;
  paySalary(salary: number): void;
}
