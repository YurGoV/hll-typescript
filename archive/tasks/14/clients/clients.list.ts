import { IPeople } from '../common/interfaces';
import { IClient } from './clients.interface';
import { Client } from './clients.class';

export class ClientsList {
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

  getClientByPhone(phone: number): IClient | undefined {
    return this.clientsList.find(
      (client: IClient) => client.phoneNumber === phone,
    );
  }

  addClient(person: IPeople): IClient {
    const newClient = new Client(
      person.fullName,
      person.age,
      person.phoneNumber,
    );
    this.clientsList.push(newClient);

    return newClient;
  }

  get list(): IClient[] {
    return this.clientsList;
  }
}

export const clientsList = new ClientsList();
