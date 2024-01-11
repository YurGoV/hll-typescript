const clc = require('cli-color');
import { INote, INotes } from '../interfaces/notes.interface';
import { notes as defaultNotes } from '../data/notes';
import { printNotesAsTable, printSingleNote } from '../output.console/output.console';
// import { printNotesAsTable } from('../output.console/output.console');

export class ToDoList {
  // private notes: INotes = [...defaultNotes];
  protected notes: INotes;

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

  printReport(): void {
    const allNotesQuantity = this.notes.length;
    const completedNotesQuantity = this.notes.filter((note) => note.isDone === true).length;
    const uncompletedNotesQuantity = allNotesQuantity - completedNotesQuantity;
    console.log(clc.blue(`there is ${allNotesQuantity} notes now.\n
${completedNotesQuantity} of them is completed, rest (${uncompletedNotesQuantity}) - is waiting for you ))\n\n`));
  }

  findNoteById(id: string): INote | null {
    // this.notes.push(newNote);
    const noteInListIndex = this.notes.findIndex((note) => note.id === id);
    // console.log(noteInListIndex, 'nili');

    return noteInListIndex >= 0 ? this.notes[noteInListIndex]! : null;
  }

  markNoteAsDone(id: string): boolean {
    // this.notes.push(newNote);
    const noteInListIndex = this.notes.findIndex((note) => note.id === id);
    if (noteInListIndex < 0) {
      return false;
    }
    this.notes[noteInListIndex]!.isDone = true;
    return true;
  }

  deleteNoteById(id: string): boolean {
    // this.notes.push(newNote);
    const noteInListIndex = this.notes.findIndex((note) => note.id === id);
    if (noteInListIndex < 0) {
      return false;
    }
    this.notes.splice(noteInListIndex, 1);
    return true;
  }

  printNotes(notes?: INote | INotes): void {
    // const { printNotesAsTable } = await import('../output.console/output.console');
    if (Array.isArray(notes)) {
      printNotesAsTable.send(notes);
    } else if (notes) {
      printSingleNote.send([notes]);
    } else {
      printNotesAsTable.send(this.notes);
    }
  }
}
