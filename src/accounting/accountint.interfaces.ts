import { WorkersPositions } from '../workers/workers.interface';

// export interface IAccounting {
//   // readonly budget: number;
//   // readonly getBudget: () => number;
//
//   paySalary(): void;
// }

export const salaries: Record<WorkersPositions, number> = {
  [WorkersPositions.WORKER]: 15000,
  [WorkersPositions.ADMINISTRATOR]: 19000,
  [WorkersPositions.ACCOUNTANT]: 18000,
  [WorkersPositions.PAYMASTER]: 17000,
};
