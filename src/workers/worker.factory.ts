// NOTE: ідея цїєї факторі - можливість за "виробничої необхідності"
// надавати функцію додавання клієнтів будь-яким робітникам,

import { IClient } from '../clients/clients.interface';
import { IPeople } from '../common/interfaces';
import { createTicketFacade } from '../ticket-office/create.ticket.facade';
import { ITicket, IVisit, TicketType } from '../ticket-office/interfaces';
import { visitsList } from '../ticket-office/visits.list';
import { Worker } from './workers.class';
import {
  IWorkerWithPaySalary,
  IWorkerWithTicket,
  WorkersPositions,
} from './workers.interface';

export function withTicketRole<T extends { new(...args: any[]): Worker }>(
  constructor: T,
): T & IWorkerWithTicket {
  return class extends constructor {
    createTicket(this: Worker, person: IPeople, type: TicketType): ITicket {
      console.log('Creating ticket...');
      const createdTicket: ITicket = createTicketFacade(person, type);
      return createdTicket;
    }

    closeVisit(this: Worker, client: IClient): void {
      console.log('closing visit...');

      visitsList.closeVisit(client);
    }
  } as any;
}

export function withPaySalary<T extends { new(...args: any[]): Worker }>(
  constructor: T,
): T & IWorkerWithPaySalary {
  return class extends constructor {
    paySalary(this: Worker): void {
      console.log('pay salary...');
    }
  } as any;
}

export const WorkerWithCreateTicket = withTicketRole(Worker);
export const WorkerWithPaySalary = withPaySalary(Worker);

export enum ROLE {
  PAY_SALLARY = 'pay',
  CREATE_TICKETS = 'ticket',
  WORKER = 'worker',
}

type WorkerReturnType<T extends ROLE> = T extends ROLE.PAY_SALLARY
  ? IWorkerWithPaySalary
  : T extends ROLE.CREATE_TICKETS
    ? IWorkerWithTicket
    : Worker;

export class WorkerFactory {
  createWorker<T extends ROLE>(
    fullName: string,
    age: number,
    phoneNumber: number,
    workPosition: WorkersPositions,
    prop: T,
  ): WorkerReturnType<T> {
    if (prop === ROLE.PAY_SALLARY) {
      return new WorkerWithPaySalary(
        fullName,
        age,
        phoneNumber,
        workPosition,
      ) as WorkerReturnType<T>;
    } else if (prop === ROLE.CREATE_TICKETS) {
      return new WorkerWithCreateTicket(
        fullName,
        age,
        phoneNumber,
        workPosition,
      ) as WorkerReturnType<T>;
    }
    return new Worker(
      fullName,
      age,
      phoneNumber,
      workPosition,
    ) as WorkerReturnType<T>;
  }
}

export const factory = new WorkerFactory();
