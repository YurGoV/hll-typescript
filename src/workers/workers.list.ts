import { IWorker } from './workers.interface';

class WorkersList {
  private workersList: IWorker[] = [];

  get list(): IWorker[] {
    return this.workersList;
  }

  addWorker(worker: IWorker): void {
    this.workersList.push(worker);
  }
}

export const workersList = new WorkersList();
