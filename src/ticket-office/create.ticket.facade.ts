import { clientsList } from '../clients/clients.list';
import { IPeople } from '../common/interfaces';
import { ITicket, TicketType } from './interfaces';
import { ticketsList } from './tickets.list';
import { visitsList } from './visits.list';

export function createTicketFacade(
  person: IPeople,
  ticketType: TicketType,
): ITicket {
  const existingClient = clientsList.isClientExist(person);

  if (!existingClient) {
    clientsList.addClient(person);
  }

  const newTicket: ITicket = ticketsList.createTicket(person, ticketType);

  visitsList.addVisit(person, false);

  return newTicket;
}
