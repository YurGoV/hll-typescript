// visits.class.ts 
import { IClient } from '../clients/clients.interface';
import { IVisit } from './interfaces';

export class VisitsList {
  private visits: IVisit[] = [];

  addVisit(client: IClient, isVisitComplete: boolean): void {
    const visit: IVisit = {
      date: new Date(),
      client,
      isVisitComplete,
    };

    this.visits.push(visit);

    // Additional logic 
  }

  closeVisit(client: IClient): void {
    const visitId = this.visits.findIndex(
      (el) => el.client.phoneNumber === client.phoneNumber,
    );
    if (visitId !== -1) {
      const visit = this.visits[visitId];
      if (visit) {
        visit.isVisitComplete = true;
      } else {
        console.log('Visit not found for the client.');
      }
    } else {
      console.log('Visit not found for the client.');
    }
  }
}
