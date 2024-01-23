import { IClient } from '../clients/clients.interface';

export enum TicketType {
  ADULT = 'adult',
  CHILD = 'child',
  FAMILY = 'family',
}


export interface ITicket {
  type: TicketType;
  price: number;
  date: Date;
  client: IClient;
}

export interface IVisit {
  date: Date;
  client: IClient;
  isVisitComplete: boolean;
}
