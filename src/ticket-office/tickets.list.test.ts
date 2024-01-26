import { IClient } from '../clients/clients.interface';
import { ITicket, TicketType } from './interfaces';
import { TicketPrice, TicketsList } from './tickets.list';

describe('ticket list', () => {
  let ticketsList: TicketsList;

  beforeEach(() => {
    ticketsList = new TicketsList();
  });

  it('should create ticket', () => {
    const adultClient: IClient = {
      fullName: 'name full',
      age: 20,
      phoneNumber: 10001,
      receiveMessage(message) {
        return message;
      },
    };
    const childClient: IClient = {
      fullName: 'name full',
      age: 14,
      phoneNumber: 10001,
      receiveMessage(message) {
        return message;
      },
    };
    jest.spyOn(ticketsList, 'createTicket');

    const adultTicket = ticketsList.createTicket(adultClient, TicketType.ADULT);
    const childTicket = ticketsList.createTicket(childClient, TicketType.CHILD);
    const childToAdultTicket = ticketsList.createTicket(
      adultClient,
      TicketType.CHILD,
    );

    expect(ticketsList).toBeInstanceOf(TicketsList);
    expect(adultTicket as unknown as ITicket).toBeTruthy();
    expect((adultTicket as unknown as ITicket).type).toBe(TicketType.ADULT);
    expect((adultTicket as unknown as ITicket).price).toBe(
      TicketPrice[TicketType.ADULT],
    );
    expect((childTicket as unknown as ITicket).type).toBe(TicketType.CHILD);
    expect((childTicket as unknown as ITicket).price).toBe(
      TicketPrice[TicketType.CHILD],
    );
    expect(childToAdultTicket as unknown as ITicket).not.toBeTruthy();
    expect(childToAdultTicket).toBe(undefined);
    expect(ticketsList.list).toHaveLength(2);
  });
});
