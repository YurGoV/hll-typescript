// main.ts
import { accounting } from './accounting/accounting.class';
import { animalsList } from './animals/animals';
import { AnimalHealth, AnimalTypes } from './animals/interfaces';
import { notificationService } from './common/notification.service';
import { TicketType } from './ticket-office/interfaces';
import { factory, ROLE } from './workers/worker.factory';
import { WorkersPositions } from './workers/workers.interface';

// NOTE: prepare to open the zoo
//
// Create a Worker
const workerJohn = factory.createWorker(
  'John Doe',
  30,
  1234567890,
  WorkersPositions.WORKER,
  ROLE.WORKER,
);

// Create a paymaster
const paymasterJane = factory.createWorker(
  'Jane Black',
  35,
  9876543210,
  WorkersPositions.PAYMASTER,
  ROLE.CREATE_TICKETS,
);

// Create accountant
const accounterJimm = factory.createWorker(
  'Jimm Smith',
  32,
  8383272672,
  WorkersPositions.ACCOUNTANT,
  ROLE.PAY_SALLARY,
);

// Create administrator
const administratorMegan = factory.createWorker(
  'Megan Kogan',
  30,
  38900000000,
  WorkersPositions.ADMINISTRATOR,
  ROLE.ADD_ANIMAL,
);

// NOTE: turn on notifications logic
accounting.attach(notificationService);
animalsList.attach(notificationService);

// NOTE: open the zoo
accounting.setZooState(administratorMegan, 'open');

paymasterJane.createTicket(
  {
    fullName: 'Sam Vordik',
    age: 25,
    phoneNumber: 5555545551,
  },
  TicketType.ADULT,
);

paymasterJane.createTicket(
  {
    fullName: 'Kim Saruman',
    age: 25,
    phoneNumber: 5555545552,
  },
  TicketType.ADULT,
);

administratorMegan.addAnimal({
  name: 'Buddy',
  health: AnimalHealth.EXCELLENT,
  age: 4,
  type: AnimalTypes.PREDATOR,
});

paymasterJane.createTicket(
  {
    fullName: 'Alex Ericcson',
    age: 13,
    phoneNumber: 5555555553,
  },
  TicketType.CHILD,
);

// TODO: give only number
paymasterJane.closeVisit({
  fullName: 'Sam Vordik',
  age: 25,
  phoneNumber: 5555545551,
});

administratorMegan.addAnimal({
  name: 'Giffy',
  health: AnimalHealth.EXCELLENT,
  age: 4,
  type: AnimalTypes.HERBIVORE,
});

accounterJimm.paySalary();
accounting.setZooState(administratorMegan, 'readyToClose');

// NOTE: test output summary
//
// Test Suites: 12 passed, 12 total
// Tests:       26 passed, 26 total
// Snapshots:   0 total
// Time:        4.577 s, estimated 5 s
// Ran all test suites.                   

// NOTE: output:
//
// client Sam Vordik received message: Sam Vordik, hi again! just now there are
//       new animal Buddy in our zoo! we are waiting for you..
// client Kim Saruman received message: Kim Saruman, hi again! just now there
//       are new animal Buddy in our zoo! we are waiting for you..
// closing visit...
// client Sam Vordik received message: Sam Vordik, hi again! just now there are
//       new animal Giffy in our zoo! we are waiting for you..
// client Kim Saruman received message: Kim Saruman, hi again! just now there
//       are new animal Giffy in our zoo! we are waiting for you..
// client Alex Ericcson received message: Alex Ericcson, hi again! just
//        now there are new animal Giffy in our zoo! we are waiting for you..
// worker John Doe received 15000 of salary
// worker Jane Black received 17000 of salary
// worker Jimm Smith received 18000 of salary
// worker Megan Kogan received 19000 of salary
// zoo is closed soon
// client Kim Saruman received message: Dear Kim Saruman, our zoo is closed soon.
//        We glad to see you next day!
// client Alex Ericcson received message: Dear Alex Ericcson, our zoo is closed soon.
//        We glad to see you next day!
