const clc = require('cli-color');
import { INote, INotes } from '../interfaces/notes.interface';
import { notes as defaultNotes } from '../data/notes';

export class ToDoList {
  // private notes: INotes = [...defaultNotes];
  private notes: INotes;

  constructor(notes: INotes = []) {
    // this.notes = defaultNotes;
    this.notes = [...defaultNotes];
  }

  addNote(newNote: INote): void {
    this.notes.push(newNote);

    console.log(clc.green(
      'you note added with id: ' +
        `${newNote.id}`,
    ));
  }

  deleteNoteById(id: string): void {
    // this.notes.push(newNote);
    const noteInListIndex = this.notes.findIndex((note) => note.id === id);
    console.log(noteInListIndex, 'nili');
  }

  async printNotes(): Promise<void> {
    const { printNotesAsTable } = await import('../output.console/output.console');

    printNotesAsTable.send(this.notes);
  }
}
