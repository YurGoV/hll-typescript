// NOTE: ідея цїєї факторі - можливість за "виробничої необхідності"
// надавати функцію додавання клієнтів будь-яким робітникам,

import { Client } from '../clients/clients.class';
import { Worker } from './workers.class';
import { WorkersPositions } from './workers.interface';

export interface WorkerWithClient extends Worker {
  createClient: (
    clientFullName: string,
    clientAge: number,
    clientPhoneNumber: number,
  ) => Client;
}

function withCreateClient<T extends { new(...args: any[]): Worker }>(
  constructor: T,
): T & WorkerWithClient {
  return class extends constructor {
    createClient(
      clientFullName: string,
      clientAge: number,
      clientPhoneNumber: number,
    ): Client {
      const newClient = new Client(
        clientFullName,
        clientAge,
        clientPhoneNumber,
      );
      return newClient;
    }
  } as any;
}

export const WorkerWithCreateClient = withCreateClient(Worker);

type WorkerReturnType<T extends boolean> = T extends true
  ? Worker & WorkerWithClient
  : Worker;

export class WorkerFactory {
  createWorker<T extends boolean>(
    fullName: string,
    age: number,
    phoneNumber: number,
    workPosition: WorkersPositions,
    createClient: T = false as T,
  ): WorkerReturnType<T> {
    if (createClient) {
      return new WorkerWithCreateClient(
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
