import { AnimalsList, animalsList } from '../animals/animals';
import { IAnimal } from '../animals/interfaces';
import { clientsList } from '../clients/clients.list';

interface IObserver {
  update(observable: IObservable): void;
}

interface IObservable {
  attach(observer: IObserver): void;

  detach(observer: IObserver): void;

  notify(): void;
}

export abstract class Observable implements IObservable {
  #observers: IObserver[] = [];

  attach(observer: IObserver): void {
    if (this.#observers.includes(observer)) {
      return;
    }
    this.#observers.push(observer);
  }

  detach(observer: IObserver): void {
    const observerIndex = this.#observers.indexOf(observer);
    if (observerIndex === -1) {
      return;
    }
    this.#observers.splice(observerIndex, 1);
  }

  notify(): void {
    this.#observers.forEach((observer) => {
      observer.update(this);
    });
  }
}

class NotificationService implements IObserver {
  update(observable: IObservable): void {
    if (observable instanceof AnimalsList) {
      const newAnimal = observable.list[observable.list.length - 1]!;

      this.#notifyAllClientsAboutAnimal(newAnimal);
    }
  }
  //   } else if (observable instanceof OrderManager) {
  //     const newOrder = observable.orders[observable.orders.length - 1]!;
  //
  //     this.#notifyDeliveryTeam(newOrder);
  //   }
  // }

  // #notifyDeliveryTeam(order: IOrder) {
  //   console.log(
  //     `Notification to delivery team about new order: ${order.amount} ${order.price}`,
  //   );
  // }

  #notifyAllClientsAboutAnimal(newAnimal: IAnimal): void {
    for (const client of clientsList.list) {
      // console.log('for clients cycle');
      const sendMessageResult = client.receiveMessage(
        `${client.fullName}, hi again! just now there are new animal ${newAnimal.name} in our zoo! we are waiting for you..`,
      );
      console.log(sendMessageResult);
    }
  }
}

export const notificationService = new NotificationService();

