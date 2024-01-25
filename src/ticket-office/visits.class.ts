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

    // Additional logic
  }

  closeVisit(person: IPeople): void {
    const visitId = this.visits.findIndex(
      (el) => el.client.phoneNumber === person.phoneNumber,
    );
    if (visitId === -1) {
      console.log('Visit not found for the client.');
    }
    // if (visitId !== -1) {
    this.visits[visitId]!.isVisitComplete = true;
    // const visit = this.visits[visitId];
    // if (visit) {
    //   visit.isVisitComplete = true;
    // } else {
    //   console.log('Visit not found for the client.');
    // }
    // } else {
    // }
  }
}
