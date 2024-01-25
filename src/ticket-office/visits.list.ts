// visits.class.ts
import { IClient } from '../clients/clients.interface';
import { IPeople } from '../common/interfaces';
import { IVisit } from './interfaces';

export class VisitsList {
  private visits: IVisit[] = [];

  get list(): IVisit[] {
    return this.visits;
  }

  get listCurrentVisitors(): IVisit[] {
    return this.visits.filter((visit) => !visit.isVisitComplete);
  }

  addVisit(client: IClient, isVisitComplete: boolean): void {
    const visit: IVisit = {
      date: new Date(),
      client,
      isVisitComplete,
    };
    this.visits.push(visit);
  }

  closeVisit(person: IPeople): void {
    const visitId = this.visits.findIndex(
      (el) => el.client.phoneNumber === person.phoneNumber,
    );
    if (visitId === -1) {
      console.log('Visit not found for the client.');
    }
    this.visits[visitId]!.isVisitComplete = true;
  }
}

export const visitsList = new VisitsList();
