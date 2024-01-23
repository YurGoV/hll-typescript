// wokrers.interface.ts
import { IClient } from '../clients/clients.interface';
import { IPeople } from '../common/interfaces';
import { ITicket, TicketType } from '../ticket-office/interfaces';

export enum WorkersPositions {
  WORKER = 'worker',
  ADMINISTRATOR = 'admin',
  ACCOUNTANT = 'accountant',
  DIRECTOR = 'director',
  PAYMASTER = 'paymaster',
}

export interface IWorker extends IPeople {
  workPosition: WorkersPositions
  
}

export interface IWorkerWithTicket extends IWorker {
  createTicket: (person: IPeople, type: TicketType) => ITicket;

  closeVisit: (client: IClient) => void;
}

export interface IWorkerWithPaySalary extends IWorker {
  paySalary: () => void;
}
