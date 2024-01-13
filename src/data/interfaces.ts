enum WorkerPositions {
  WORKER = 'worker',
  ADMINISTRATOR = 'admin',
  ACCOUNTANT = 'accountant',
}

interface IPeople {
  name: string;
  age: number;
  phoneNumber: number;
}

interface IWorker {
  workPosition: WorkerPositions;
}

export interface Visitor extends IPeople {}

export interface Worker extends IPeople, IWorker {}
