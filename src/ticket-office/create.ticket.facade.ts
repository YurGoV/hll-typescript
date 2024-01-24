import { clientsList } from '../clients/clients.list';
import { IPeople } from '../common/interfaces';
import { ITicket, TicketType } from './interfaces';
import { ticketsList } from './tickets.list';
import { visitsList } from './visits.list';

export function createTicketFacade(
  person: IPeople,
  ticketType: TicketType,
): ITicket {
  // const existingClient = clientsList.isClientExist(person);
  //
  // if (!existingClient) {
  //   clientsList.addClient(person);
  // }
  // let existingClient: boolean | IClient = clientsList.isClientExist(person);
  //
  // if (!existingClient) {
  //   existingClient = clientsList.addClient(person);
  // }
  const client = clientsList.getClient(person);
  const newTicket: ITicket = ticketsList.createTicket(client, ticketType);

  visitsList.addVisit(client, false);

  return newTicket;
}
