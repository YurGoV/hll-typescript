import { IDepartment } from '../departments';
import { IWorker } from '../workers';

interface ICompany {
  name: string;
  departments: IDepartment[];

  addDepartment(department: IDepartment): void;
  getAllWorkers(): IWorker[];
  getPreWorkers(): IWorker[];
  getDepartments(): IDepartment[];
}

export class Company implements ICompany {
  name: string;

  departments: IDepartment[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addDepartment(department: IDepartment): void {
    if (
      !this.departments.includes(department)
    ) {
      this.departments.push(department);
    } else {
      console.error('Error: department is already exist');
    }
  }

  getAllWorkers(): IWorker[] {
    return this.departments.reduce(
      (acc: IWorker[], department: IDepartment) => {
        acc.push(...department.workersList);
        return acc;
      },
      [],
    );
  }

  getPreWorkers(): IWorker[] {
    return this.departments.reduce(
      (acc: IWorker[], department: IDepartment) => {
        const preWorkers: IWorker[] = department.workersList.filter((worker) => worker.status === 'pre-worker');
        acc.push(...preWorkers);
        return acc;
      },
      [],
    );
  }

  getDepartments(): IDepartment[] {
    return this.departments;
  }
}
