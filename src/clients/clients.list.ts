import { IPeople } from '../common/interfaces';
import { IClient } from './clients.interface';

class ClientsList {
  private clientsList: IClient[] = [];

  isClientExist(person: IPeople): boolean {
    const searchResult = this.clientsList.find(
      (client: IClient) => client.phoneNumber === person.phoneNumber,
    );

    return searchResult ? true : false;
  }

  addClient(client: IClient): void {
    this.clientsList.push(client);

    // Additional logic 
  }

  // ... other methods
}

export const clientsList = new ClientsList();
