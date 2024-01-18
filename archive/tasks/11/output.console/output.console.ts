const Table = require('cli-table');
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

class PrintAsStringProvider implements IOutputProvider {
  initialize(): void {
  }

  outputNotes(notesToOutput: INote | INote[]): void {
    // console.log('Printing notes as strings:');
    if (Array.isArray(notesToOutput)) {
      notesToOutput.forEach((note: INote) => this.printSingleNoteAsString(note));
    } else {
      this.printSingleNoteAsString(notesToOutput);
    }
  }

  private printSingleNoteAsString(note: INote): void {
    console.log(
      `ID: ${note.id}, Title: ${note.title}, Task: ${note.task}, IsDone: ${note.isDone}, CreatedAt: ${note.createdAt}, UpdatedAt: ${note.updatedAt}`,
    );
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

export const printSingleNote = new OutputNotesToConsole(
  new PrintAsStringProvider(),
);
