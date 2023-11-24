import { accounting } from '../hw-06';
import { IWorker } from './workers.interface';
import { TStatus } from './workers.type';

export class Worker implements IWorker {
  readonly fullName: string;

  department: string | null;

  private _salary: number;

  bankAccount: number;

  status: TStatus;

  constructor(fullName: string, salary: number, status: TStatus) {
    this.fullName = fullName;
    this._salary = salary;
    this.status = status;
    this.bankAccount = 0;
    this.department = null;
    accounting.addPreWorkerToBallance(this);
  }

  changeStatus(newStatus: TStatus): void {
    this.status = newStatus;
  }

  setSalary(newSalary: number): void {
    if (newSalary < this._salary) {
      console.error('company politic no approve to decrease salary');
    }
    this._salary = newSalary;
  }

  setDepartment(newDepartment: string | null): void {
    this.department = newDepartment;
  }

  get salary(): number {
    return this._salary;
  }

  paySalary(salary: number): void {
    if (salary < this._salary) {
      console.error('the payed sum can`t be less than salary');
    }
    this.bankAccount += salary;
  }
}
