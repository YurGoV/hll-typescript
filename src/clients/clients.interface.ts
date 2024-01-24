import { IPeople } from '../common/interfaces';

export interface IClient extends IPeople { 
  receiveMessage: (message: string) => string
}
