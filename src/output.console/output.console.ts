const Table = require('cli-table');
import { notes } from '../data/notes';
import { INote, INotes } from '../interfaces/notes.interface';
import { IOutputProvider } from '../interfaces/output.interface';

class PrintAsTableProvider implements IOutputProvider {
  // TODO: how to fix any there?
  private table: any;

  initialize(): void {
    this.table = new Table({
      head: [],
    });
  }

  outputNotes(notesToOutput: INotes): void {
    this.table.length = 0;

    // if (notes.length > 0) {
    //   this.table.options.head = Object.keys(notesToOutput[0] || {});
    // }
    //
    // notes.forEach((row: INote) => {
    //   this.table.push(Object.values(row));
    // });

    if (notesToOutput.length > 0) {
      const columnsOrder: (keyof INote)[] = ['id', 'title', 'task', 'isDone', 'createdAt', 'updatedAt'];
      this.table.options.head = columnsOrder;

      notesToOutput.forEach((row: INote) => {
        const rowValues = columnsOrder.map((column) => row[column as keyof INote]);
        this.table.push(rowValues);
      });
    }

    console.log(this.table.toString());
  }
}

class OutputNotesToConsole {
  readonly #provider: IOutputProvider;

  constructor(provider: IOutputProvider) {
    this.#provider = provider;
  }

  send(note: INotes): void {
    this.#provider.initialize();
    this.#provider.outputNotes(note);
  }
}

export const printNotesAsTable = new OutputNotesToConsole(
  new PrintAsTableProvider(),
);
