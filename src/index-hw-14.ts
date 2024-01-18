import { factory, WorkerWithClient } from './workers/worker.factory';
import { WorkersPositions } from './workers/workers.interface';

// Create a regular Worker without createClient method
const workerJohn = factory.createWorker(
  'John Doe',
  30,
  1234567890,
  WorkersPositions.WORKER,
);

// Create a Worker with createClient method
const paymasterJane = factory.createWorker(
  'Jane Smith',
  35,
  9876543210,
  WorkersPositions.PAYMASTER,
  true,
);

// Example usage of createClient method if available
if ('createClient' in paymasterJane) {
  const newClient = (paymasterJane as any).createClient(
    'Client Name',
    25,
    5555555555,
  );
  // Do something with the new client
}

if ('createClient' in workerJohn) {
  const newClient = (paymasterJane as WorkerWithClient).createClient(
    'Client Name',
    25,
    5555555555,
  );
  // Do something with the new client
}
