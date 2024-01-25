// NOTE: мета застосування фасаду - відокремити та ізолювати процеси
// перевірки чи є відвідувач вже у списку клієнтів,
// створення нового клієтніа, та списку відвідування
// припущення логіки - що при отриманні квитка клієнт входить до 
// зоопарку.
import { clientsList } from '../clients/clients.list';
import { IPeople } from '../common/interfaces';
import { ITicket, TicketType } from './interfaces';
import { ticketsList } from './tickets.list';
import { visitsList } from './visits.list';

export function createTicketFacade(
  person: IPeople,
  ticketType: TicketType,
): ITicket | undefined {
  const client = clientsList.getClient(person);
  const newTicket: ITicket | undefined = ticketsList.createTicket(
    client,
    ticketType,
  );

  visitsList.addVisit(client, false);

  return newTicket;
}
