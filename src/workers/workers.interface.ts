import { IPeople } from '../common/interfaces';

export enum WorkersPositions {
  WORKER = 'worker',
  ADMINISTRATOR = 'admin',
  ACCOUNTANT = 'accountant',
  DIRECTOR = 'director',
  PAYMASTER = 'paymaster',
}

export interface IWorker extends IPeople {
  workPosition: WorkersPositions
  
}
