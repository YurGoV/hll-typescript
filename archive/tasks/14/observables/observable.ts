// NOTE:можливість динамічно підключати та відключати повідомлення
// без "втручання" в основний код
import { IObservable, IObserver } from '../common/interfaces';

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
