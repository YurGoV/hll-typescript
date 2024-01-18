import { Client } from '../clients/clients.class';
import { Worker } from './workers.class';
import { WorkersPositions } from './workers.interface';

export class Paymaster extends Worker {
  constructor(fullName: string, age: number, phoneNumber: number) {
    // Paymaster's workPosition is set to PAYMASTER
    super(fullName, age, phoneNumber, WorkersPositions.PAYMASTER);
  }

  // Additional method to create a new Client
  createClient(
    clientFullName: string,
    clientAge: number,
    clientPhoneNumber: number,
  ): Client {
    const newClient = new Client(clientFullName, clientAge, clientPhoneNumber);

    // Perform any additional logic related to creating clients if needed

    return newClient;
  }
}
