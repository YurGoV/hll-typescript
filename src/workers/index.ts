import { accounting } from '../hw-06';

type Status = 'on-job' | 'on-vacation' | 'on-bench' | 'pre-worker';

export interface IWorker {
  fullName: string;
  sallary: number;
  bankAccount: number;
  status: Status;
  department: string | null;
  changeStatus(newStatus: Status): void;
  setDepartment(newDepartment: string | null): void;
  setSallary(newSalary: number): void;
  getSallary(): number;
  paySallary(sallary: number): void;
}

export class Worker implements IWorker {
  fullName: string;

  department: string | null;

  sallary: number;

  bankAccount: number;

  status: Status;

  constructor(fullName: string, sallary: number, status: Status) {
    this.fullName = fullName;
    this.sallary = sallary;
    this.status = status;
    this.bankAccount = 0;
    this.department = null;
    accounting.addPreWorkerToBallance(this);
  }

  changeStatus(newStatus: Status): void {
    this.status = newStatus;
  }

  setSallary(newSalary: number): void {
    this.sallary = newSalary;
  }

  setDepartment(newDepartment: string | null): void {
    this.department = newDepartment;
  }

  getSallary(): number {
    return this.sallary;
  }

  paySallary(sallary: number): void {
    if (sallary < this.sallary) {
      console.error('the payed sum can`t be less than sallary');
    }
    this.bankAccount += sallary;
  }
}
