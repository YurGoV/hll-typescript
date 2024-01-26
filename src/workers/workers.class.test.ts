import { WorkersPositions } from './workers.interface';
import { Worker } from './workers.class';

describe('worker class', () => {
  let worker: Worker;
  // let worker: Worker;

  beforeEach(() => {
    worker = new Worker('name', 25, 380000000, WorkersPositions.WORKER);
  });

  it('should receive a payment', () => {
    const paymentResult = worker.rechargeCard(15000);

    expect(paymentResult).toBe(true);
  });
});
