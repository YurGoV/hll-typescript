import { WorkersPositions } from '../workers/workers.interface';

export type ZooState = 'open' | 'close' | 'readyToClose';

export const salaries: Record<WorkersPositions, number> = {
  [WorkersPositions.WORKER]: 15000,
  [WorkersPositions.ADMINISTRATOR]: 19000,
  [WorkersPositions.ACCOUNTANT]: 18000,
  [WorkersPositions.PAYMASTER]: 17000,
};
