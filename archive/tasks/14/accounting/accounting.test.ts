import { Worker } from '../workers/workers.class';
import { WorkersPositions } from '../workers/workers.interface';
import { Accounting } from './accounting.class';
import { salaries } from './accountint.interfaces';

describe('accounting', () => {
  let accounting: Accounting;

  beforeEach(() => {
    accounting = new Accounting();
  });

  it('should pay salary', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const worker1: Worker = new Worker(
      'name1',
      25,
      380000001,
      WorkersPositions.WORKER,
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const worker2: Worker = new Worker(
      'name2',
      24,
      380000002,
      WorkersPositions.PAYMASTER,
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const worker3: Worker = new Worker(
      'name3',
      23,
      380000003,
      WorkersPositions.ACCOUNTANT,
    );

    const budgetBefore = accounting.getBudget();

    accounting.paySalary();
    const payedSallarySum =
      salaries.worker + salaries.paymaster + salaries.accountant;

    expect(budgetBefore).toBe(300000);
    expect(accounting.getBudget()).toBe(budgetBefore - payedSallarySum);
  });

  it('should set zoo state', () => {
    const worker1: Worker = new Worker(
      'name1',
      25,
      380000001,
      WorkersPositions.WORKER,
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const worker2: Worker = new Worker(
      'name2',
      24,
      380000002,
      WorkersPositions.ADMINISTRATOR,
    );

    accounting.setZooState(worker2, 'close');
    expect(accounting.getZooState()).toBe('close');
    accounting.setZooState(worker1, 'open');
    expect(accounting.getZooState()).toBe('close');
    accounting.setZooState(worker2, 'open');
    expect(accounting.getZooState()).toBe('open');
  });
});
