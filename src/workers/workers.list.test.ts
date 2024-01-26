import { WorkersPositions } from './workers.interface';
import { WorkersList } from './workers.list';
import { Worker } from './workers.class';

describe('workers list', () => {
  let workersList: WorkersList;
  // let worker: Worker;

  beforeEach(() => {
    workersList = new WorkersList();
  });

  it('should add a worker to the list', () => {
    const worker = new Worker('name', 25, 380000000, WorkersPositions.WORKER);
    const addWorkerSpy = jest.spyOn(workersList, 'addWorker');
    workersList.addWorker(worker);

    expect(addWorkerSpy).toHaveBeenCalledWith(worker);
    expect(workersList.list.length).toBe(1);
    expect(workersList.list).toContain(worker);
  });
});
