import { IPeople } from '../common/interfaces';
import { IClient } from './clients.interface';
import { ClientsList } from './clients.list';

describe('clients list', () => {
  let clientsList: ClientsList;

  beforeEach(() => {
    clientsList = new ClientsList();
  });

  it('should return existing client or create & return new', () => {

    const personOne: IPeople = {
      fullName: 'first client',
      age: 20,
      phoneNumber: 10001,
    };

    const clientOne = clientsList.getClient(personOne);
    const clientOneAgain = clientsList.getClient(personOne);

    expect(clientOneAgain).toEqual(clientOne);
  });

  it('should find client by phone', () => {

    const personOne: IPeople = {
      fullName: 'first client',
      age: 20,
      phoneNumber: 10001,
    };

    const clientOne = clientsList.getClient(personOne);
    const searchResultOne = clientsList.getClientByPhone(personOne.phoneNumber);
    const searchResultTwo = clientsList.getClientByPhone(10000);

    expect(searchResultOne).toEqual(clientOne);
    expect(searchResultTwo).toBe(undefined);
  });

  it('should return list of clients', () => {

    const personOne: IPeople = {
      fullName: 'first client',
      age: 20,
      phoneNumber: 10001,
    };
    const personTwo: IPeople = {
      fullName: 'second client',
      age: 20,
      phoneNumber: 10002,
    };
    const personThree: IPeople = {
      fullName: 'third client',
      age: 20,
      phoneNumber: 10003,
    };

    const clientOne = clientsList.getClient(personOne);
    clientsList.getClient(personTwo);
    clientsList.getClient(personThree);

    expect(clientsList.list[0]).toEqual(clientOne);
    expect(clientsList.list.length).toBe(3);
  });
});
