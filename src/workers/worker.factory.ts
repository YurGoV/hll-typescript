// NOTE: мета факторі - зробити можливіть дещо "динамічно",
// за так би мовити "виробничої необхідності", надавати
// можливість працівникам здійснювати ті чи інші функції,
// що можуть напряму не відноситися до їх посади
import { accounting } from '../accounting/accounting.class';
import { animalsList } from '../animals/animals';
import { IAnimal } from '../animals/interfaces';
import { IClient } from '../clients/clients.interface';
import { IPeople } from '../common/interfaces';
import { createTicketFacade } from '../ticket-office/create.ticket.facade';
import { ITicket, TicketType } from '../ticket-office/interfaces';
import { visitsList } from '../ticket-office/visits.list';
import { Worker } from './workers.class';
import {
  IWorkerWithAddAnimal,
  IWorkerWithPaySalary,
  IWorkerWithTicket,
  WorkersPositions,
} from './workers.interface';

export function withTicketRole<T extends { new(...args: any[]): Worker }>(
  constructor: T,
): T & IWorkerWithTicket {
  return class extends constructor {
    createTicket(
      this: Worker,
      person: IPeople,
      type: TicketType,
    ): ITicket | undefined {
      const createdTicket: ITicket | undefined = createTicketFacade(
        person,
        type,
      );
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
      accounting.paySalary();
    }
  } as any;
}

export function withAddAnimal<T extends { new(...args: any[]): Worker }>(
  constructor: T,
): T & IWorkerWithAddAnimal {
  return class extends constructor {
    addAnimal(this: Worker, animal: IAnimal): void {
      animalsList.addAnimal(animal);
    }
  } as any;
}

const WorkerWithCreateTicket = withTicketRole(Worker);
const WorkerWithPaySalary = withPaySalary(Worker);
const WorkerWithAddAnimal = withAddAnimal(Worker);

export enum ROLE {
  PAY_SALLARY = 'pay',
  CREATE_TICKETS = 'ticket',
  WORKER = 'worker',
  ADD_ANIMAL = 'animal',
}

type WorkerReturnType<T extends ROLE> = T extends ROLE.PAY_SALLARY
  ? IWorkerWithPaySalary
  : T extends ROLE.CREATE_TICKETS
    ? IWorkerWithTicket
    : T extends ROLE.ADD_ANIMAL
      ? IWorkerWithAddAnimal
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
    } else if (prop === ROLE.ADD_ANIMAL) {
      return new WorkerWithAddAnimal(
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
