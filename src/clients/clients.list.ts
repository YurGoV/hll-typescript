import { IPeople } from '../common/interfaces';
import { IClient } from './clients.interface';
import { Client } from './clients.class';

class ClientsList {
  private clientsList: IClient[] = [];

  getClient(person: IPeople): IClient {
    const oldClient = this.clientsList.find(
      (client: IClient) => client.phoneNumber === person.phoneNumber,
    );
    if (!oldClient) {
      return this.addClient(person);
    }

    return oldClient;
  }

  addClient(person: IPeople): IClient {
    const newClient = new Client(
      person.fullName,
      person.age,
      person.phoneNumber,
    );
    this.clientsList.push(newClient);

    return newClient;
    // Additional logic
  }

  get list(): IClient[] {
    return this.clientsList;
  }

  // ... other methods
}

export const clientsList = new ClientsList();
