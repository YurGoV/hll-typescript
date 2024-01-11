import { INote, INotes } from '../interfaces/notes.interface';
import { printNotesAsTable } from '../output.console/output.console';
import { ToDoList } from './todo.list';

const clc = require('cli-color');

export class ExtendedToDoList extends ToDoList {
  constructor(notes: INotes = []) {
    super(notes);
  }

  searchNotes(query: string): INotes {
    const lowerCaseQuery = query.toLowerCase();
    return this.notes.filter(
      (note) =>
        note.title.toLowerCase().includes(lowerCaseQuery) ||
        note.task.toLowerCase().includes(lowerCaseQuery),
    );
  }

  sortNotesByStatus(): INotes {
    // this.notes.sort((a, b) => (a.isDone === b.isDone ? 0 : a.isDone ? 1 : -1));
    return this.notes.sort((a, b) =>
      a
        .isDone
        .toString()
        .localeCompare(b.isDone.toString())
    );
  }

  sortNotesByCreationTime(): INotes {
    return this.notes.sort((a, b) => b.createdAt - a.createdAt);
  }
}

// export { ExtendedToDoList };
