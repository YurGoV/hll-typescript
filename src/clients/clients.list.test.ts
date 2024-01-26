import { IPeople } from '../common/interfaces';
import { IClient } from './clients.interface';
import { ClientsList } from './clients.list';

describe('clients list', () => {
  let clientsList: ClientsList;

  beforeEach(() => {
    clientsList = new ClientsList();
  });

  it('should return existing client or create & return new', () => {
    jest.spyOn(clientsList, 'getClient');

    const personOne: IPeople = {
      fullName: 'first client',
      age: 20,
      phoneNumber: 10001,
    };

    const clientOne = clientsList.getClient(personOne);
    const clientOneAgain = clientsList.getClient(personOne);

    expect(clientOne as unknown as IClient).toBeTruthy();
    expect(clientOneAgain as unknown as IClient).toBeTruthy();
    expect(clientOne).toBe(clientOneAgain);
  });

  it('should find client by phone', () => {
    jest.spyOn(clientsList, 'getClient');
    jest.spyOn(clientsList, 'getClientByPhone');

    const personOne: IPeople = {
      fullName: 'first client',
      age: 20,
      phoneNumber: 10001,
    };

    clientsList.getClient(personOne);
    const searchResultOne = clientsList.getClientByPhone(personOne.phoneNumber);
    const searchResultTwo = clientsList.getClientByPhone(10000);

    expect(searchResultOne as unknown as IClient).toBeTruthy();
    expect(searchResultOne?.phoneNumber).toBe(personOne.phoneNumber);
    expect(searchResultTwo as unknown as IClient).not.toBeTruthy();
    expect(searchResultTwo).toBe(undefined);
  });

  it('should return list of clients', () => {
    jest.spyOn(clientsList, 'getClient');

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

    clientsList.getClient(personOne);
    clientsList.getClient(personTwo);
    clientsList.getClient(personThree);

    expect(clientsList.list[0] as unknown as IClient).toBeTruthy();
    expect(clientsList.list.length).toBe(3);
  });
});
