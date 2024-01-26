//worker.factory.test.ts
import { ROLE, WorkerFactory } from './worker.factory';
import { Worker } from './workers.class';
import { WorkersPositions } from './workers.interface';

describe('WorkerFactory', () => {
  let workerFactory: WorkerFactory;

  beforeEach(() => {
    workerFactory = new WorkerFactory();
  });

  it('should create an instance of workerFactory', () => {
    expect(workerFactory).toBeInstanceOf(WorkerFactory);
  });

  it('shoult create an instance of worker with no extra propetries', () => {
    const worker = workerFactory.createWorker(
      'John Doe',
      30,
      1234567890,
      WorkersPositions.WORKER,
      ROLE.WORKER,
    );
    expect(worker).toBeInstanceOf(Worker);
    expect(worker).not.toHaveProperty('createTicket');
    expect(worker).not.toHaveProperty('addAnimal');
    expect(worker).not.toHaveProperty('closeVisit');
    expect(worker).not.toHaveProperty('paySalary');
    expect(worker).not.toHaveProperty('setZooState');
  });

  it('should create paymaster, that can create ticket & close visit ', () => {
    const paymaster = workerFactory.createWorker(
      'John Doe',
      30,
      1234567890,
      WorkersPositions.PAYMASTER,
      ROLE.CREATE_TICKETS,
    );
    expect(paymaster).toBeInstanceOf(Worker);
    expect(paymaster).toHaveProperty('createTicket');
    expect(paymaster).toHaveProperty('closeVisit');
    expect(paymaster).not.toHaveProperty('addAnimal');
    expect(paymaster).not.toHaveProperty('paySalary');
    expect(paymaster).not.toHaveProperty('setZooState');
  });

  it('should create accountant that can pay salary', () => {
    const accountant = workerFactory.createWorker(
      'acc-t Doe',
      30,
      1234567890,
      WorkersPositions.ACCOUNTANT,
      ROLE.PAY_SALLARY,
    );
    expect(accountant).toBeInstanceOf(Worker);
    expect(accountant).toHaveProperty('paySalary');
    expect(accountant).not.toHaveProperty('createTicket');
    expect(accountant).not.toHaveProperty('addAnimal');
    expect(accountant).not.toHaveProperty('closeVisit');
    expect(accountant).not.toHaveProperty('setZooState');
  });

  it('should create administrator that can add animal', () => {
    const admin = workerFactory.createWorker(
      'adm Doe',
      30,
      1234567890,
      WorkersPositions.ADMINISTRATOR,
      ROLE.ADD_ANIMAL,
    );
    expect(admin).toBeInstanceOf(Worker);
    expect(admin).toHaveProperty('addAnimal');
    expect(admin).not.toHaveProperty('setZooState');
    expect(admin).not.toHaveProperty('createTicket');
    expect(admin).not.toHaveProperty('closeVisit');
    expect(admin).not.toHaveProperty('paySalary');
  });

  it('should create worker, that can add animal', () => {
    const worker = workerFactory.createWorker(
      'John Doe',
      30,
      1234567890,
      WorkersPositions.WORKER,
      ROLE.ADD_ANIMAL,
    );
    expect(worker).toBeInstanceOf(Worker);
    expect(worker).toHaveProperty('addAnimal');
    expect(worker).not.toHaveProperty('createTicket');
    expect(worker).not.toHaveProperty('closeVisit');
    expect(worker).not.toHaveProperty('paySalary');
    expect(worker).not.toHaveProperty('setZooState');
  });
});
