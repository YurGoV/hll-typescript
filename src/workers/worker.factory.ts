// NOTE: ідея цїєї факторі - можливість за необхідності надавати функцію додавання клієнтів
// будь-яким робітникам, за "виробничої необхідності"
import { Client } from '../clients/clients.class';
import { Worker } from './workers.class';
import { WorkersPositions } from './workers.interface';


export interface WorkerWithClient extends Worker {
  createClient: (clientFullName: string, clientAge: number, clientPhoneNumber: number) => Client;
}

// Decorator function to add createClient method
function withCreateClient<T extends { new(...args: any[]): Worker }>(constructor: T): T & WorkerWithClient {
  return class extends constructor {
    createClient(
      clientFullName: string,
      clientAge: number,
      clientPhoneNumber: number,
    ): Client {
      const newClient = new Client(clientFullName, clientAge, clientPhoneNumber);
      // Perform any additional logic related to creating clients if needed
      return newClient;
    }
  } as any;
}

// Apply the decorator to the Worker class
const WorkerWithCreateClient = withCreateClient(Worker);

export class WorkerFactory {
  createWorker(
    fullName: string,
    age: number,
    phoneNumber: number,
    workPosition: WorkersPositions,
    createClient: boolean = false,
  ): Worker {
    let worker: Worker;

    if (createClient) {
      // If createClient is true, use the WorkerWithCreateClient class
      worker = new WorkerWithCreateClient(fullName, age, phoneNumber, workPosition);
    } else {
      // Otherwise, use the regular Worker class
      worker = new Worker(fullName, age, phoneNumber, workPosition);
    }

    return worker;
  }
}

export const factory = new WorkerFactory();

// User-defined type guard to check if an object has createClient method
// export function hasCreateClient(obj: any): obj is WorkerWithClient {
//   return 'createClient' in obj;
// }

