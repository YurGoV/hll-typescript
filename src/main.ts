// main.ts
import { TicketType } from './ticket-office/interfaces';
import { ticketsList } from './ticket-office/tickets.list';
import { visitsList } from './ticket-office/visits.list';
import { factory, ROLE } from './workers/worker.factory';
import { WorkersPositions } from './workers/workers.interface';

// Create a regular Worker without createClient method
const workerJohn = factory.createWorker(
  'John Doe',
  30,
  1234567890,
  WorkersPositions.WORKER,
  ROLE.WORKER,
);

// Create a Worker with createClient method
const paymasterJane = factory.createWorker(
  'Jane Smith',
  35,
  9876543210,
  WorkersPositions.PAYMASTER,
  ROLE.CREATE_TICKETS,
);

const accounterJimm = factory.createWorker(
  'Accounter Jimm',
  32,
  8383272672,
  WorkersPositions.ACCOUNTANT,
  ROLE.PAY_SALLARY,
);

accounterJimm.paySalary();

paymasterJane.createTicket(
  { fullName: 'second Client Name', age: 25, phoneNumber: 5555545555 },
  TicketType.ADULT,
);
paymasterJane.createTicket({ fullName: 'Client Name', age: 25, phoneNumber:5555555555 }, TicketType.ADULT );

// TODO: give only number
paymasterJane.closeVisit({
  fullName: 'Client Name',
  age: 25,
  phoneNumber: 5555555555,
});

console.log(visitsList);
console.log(ticketsList);
