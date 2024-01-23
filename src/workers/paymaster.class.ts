import { Client } from '../clients/clients.class';
import { Worker } from './workers.class';
import { WorkersPositions } from './workers.interface';

export class Paymaster extends Worker {
  constructor(fullName: string, age: number, phoneNumber: number) {
    super(fullName, age, phoneNumber, WorkersPositions.PAYMASTER);
  }

  createClient(
    clientFullName: string,
    clientAge: number,
    clientPhoneNumber: number,
  ): Client {
    const newClient = new Client(clientFullName, clientAge, clientPhoneNumber);

    return newClient;
  }
}
