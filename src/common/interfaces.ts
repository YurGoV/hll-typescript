export interface IObserver {
  update(observable: IObservable): void;
}

export interface IObservable {
  attach(observer: IObserver): void;
  detach(observer: IObserver): void;
  notify(): void;
}

export interface IPeople {
  fullName: string;
  age: number;
  phoneNumber: number;
}
