import { IAnimal } from '../animals/interfaces';
import { IPeople } from '../common/interfaces';
import { ITicket, TicketType } from '../ticket-office/interfaces';

export enum WorkersPositions {
  WORKER = 'worker',
  ADMINISTRATOR = 'admin',
  ACCOUNTANT = 'accountant',
  PAYMASTER = 'paymaster',
}

export interface IWorker extends IPeople {
  workPosition: WorkersPositions;

  rechargeCard: (amount: number) => void;
}

export interface IWorkerWithTicket extends IWorker {
  createTicket: (person: IPeople, type: TicketType) => ITicket;

  closeVisit: (person: IPeople) => void;
}

export interface IWorkerWithPaySalary extends IWorker {
  paySalary: () => void;
}

export interface IWorkerWithAddAnimal extends IWorker {
  addAnimal: (animal: IAnimal) => void;
}

export interface IWorkersList {
  workersList: IWorker[];
}
