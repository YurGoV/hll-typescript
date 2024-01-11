import { INotes } from '../interfaces/notes.interface';
import { ToDoList } from './todo.list';

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
