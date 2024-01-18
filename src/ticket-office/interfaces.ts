enum TicketType {
  ADULT = 'adult',
  CHILD = 'child',
  FAMILY = 'family',
}

interface ITicket {
  type: TicketType;
  prise: number;
  date: Date;
  visitor: string;
}
