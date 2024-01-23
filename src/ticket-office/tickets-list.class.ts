// tickets.class.ts
import { IClient } from '../clients/clients.interface';
import { IPeople } from '../common/interfaces';
import { ITicket, TicketType } from './interfaces';

export const TicketPrice: Record<TicketType, number> = {
  [TicketType.CHILD]: 100,
  [TicketType.ADULT]: 150,
  [TicketType.FAMILY]: 70,
};

export class TicketsList {
  private ticketsList: ITicket[] = [];

  createTicket(client: IClient, type: TicketType): ITicket {
    const ticket: ITicket = {
      type,
      date: new Date(),
      price: TicketPrice[type],
      client,
    };

    this.ticketsList.push(ticket);

    return ticket;

    // Additional logic 
  }

  // ... other methods 
}
