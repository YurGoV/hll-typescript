import { Client } from './clients.class';

describe('client class', () => {
  let client: Client;

  beforeEach(() => {
    client = new Client('name', 24, 3801);
  });

  it('should receive a message', () => {
    const receiveMessageResult = client.receiveMessage('test message');

    expect(typeof receiveMessageResult).toBe('string');
  });
});
