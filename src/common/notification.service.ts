import { Accounting } from '../accounting/accounting.class';
import { AnimalsList } from '../animals/animals';
import { IAnimal } from '../animals/interfaces';
import { clientsList } from '../clients/clients.list';
import { visitsList } from '../ticket-office/visits.list';
import { IObservable, IObserver } from './interfaces';

export class NotificationService implements IObserver {
  update(observable: IObservable): void {
    if (observable instanceof AnimalsList) {
      const newAnimal = observable.list[observable.list.length - 1]!;

      this.#notifyAllClientsAboutAnimal(newAnimal);
    }
    if (observable instanceof Accounting) {
      this.#notifyZooClosedSoon();
    }
  }

  #notifyZooClosedSoon(): void {
    console.log('zoo is closed soon');
    for (const visit of visitsList.listCurrentVisitors) {
      const client = clientsList.getClientByPhone(visit.client.phoneNumber);
      if (client) {
        const sendMessageResult = client.receiveMessage(
          `Dear ${client.fullName}, our zoo is closed soon. We glad to see you next day!`,
        );

        console.log(sendMessageResult);
      }
    }
  }

  #notifyAllClientsAboutAnimal(newAnimal: IAnimal): void {
    for (const client of clientsList.list) {
      const sendMessageResult = client.receiveMessage(
        `${client.fullName}, hi again! just now there are new animal ${newAnimal.name} in our zoo! we are waiting for you..`,
      );
      console.log(sendMessageResult);
    }
  }
}

export const notificationService = new NotificationService();
