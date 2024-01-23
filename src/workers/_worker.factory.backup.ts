// NOTE: ідея цїєї факторі - можливість за "виробничої необхідності"
// надавати функцію додавання клієнтів будь-яким робітникам,

// woredr.factory.ts
import { Client } from '../clients/clients.class';
import { IClient } from '../clients/clients.interface';
import { IPeople } from '../common/interfaces';
import { createTicketFacade } from '../ticket-office/create.ticket.facade';
import { ITicket, IVisit, TicketType } from '../ticket-office/interfaces';
import { visitsList } from '../ticket-office/visits.list';
import { Worker } from './workers.class';
import { WorkersPositions } from './workers.interface';

export interface WorkerWithTicket extends Worker {
  createTicket: (person: IPeople, type: TicketType) => ITicket;

  closeVisit: (client: IClient) => void;
}

export function withCreateTicket<T extends { new(...args: any[]): Worker }>(
  constructor: T,
  // ): T & { createTicket: (person: IPeople, type: TicketType) => void } {
): T & WorkerWithTicket {
  return class extends constructor {
    createTicket(this: Worker, person: IPeople, type: TicketType): ITicket {
      console.log('Creating ticket...');
      const createdTicket: ITicket = createTicketFacade(person, type);
      // visitsList.addVisit(this, {} as IClient, false); // Assuming you have a default IClient
      return createdTicket;
    }

    closeVisit(this: Worker, client: IClient): void {
      console.log('closing visit...');

      visitsList.closeVisit(client);
      // const createdTicket: ITicket = createTicketFacade(person, type);
      // visitsList.addVisit(this, {} as IClient, false); // Assuming you have a default IClient
    }
  } as any;
}

export const WorkerWithCreateTicket = withCreateTicket(Worker);

type WorkerReturnType<T extends boolean> = T extends true
  ? Worker & WorkerWithTicket
  : Worker;

export class WorkerFactory {
  createWorker<T extends boolean>(
    fullName: string,
    age: number,
    phoneNumber: number,
    workPosition: WorkersPositions,
    ticketOfficeAccess: T = false as T,
  ): WorkerReturnType<T> {
    if (ticketOfficeAccess) {
      // const WorkerWithBoth = withCreateClient(withAddToVisitsList(Worker));
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
