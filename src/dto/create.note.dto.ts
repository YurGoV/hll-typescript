import { v4 as uuidv4 } from 'uuid';
import { INote } from '../interfaces/notes.interface';

export class CreateNoteDto implements INote {
  readonly id: string;
  readonly isDone: boolean;
  readonly createdAt: number;
  readonly updatedAt: number;

  constructor(public title: string, public task: string) {
    if (!title.trim() || !task.trim()) {
      throw new Error('The fields must not be an empty string');
    }

    this.id = uuidv4();
    this.isDone = false;
    this.createdAt = Date.now();
    this.updatedAt = Date.now();
  }
}

// Example usage
const newNote = new CreateNoteDto('eee', 'ddd');
console.log(newNote);

// import { v4 as uuidv4 } from 'uuid';
// import { INote } from '../interfaces/notes.interface';
//
// export class CreateNoteDto implements INote {
//   private _title: string;
//
//   private _task: string;
//
//   constructor(title: string, task: string) {
//     if (!title.trim() || !task.trim()) {
//       throw new Error('The fields must not be an empty string');
//     }
//
//     this._title = title;
//     this._task = task;
//   }
//
//   get id(): string {
//     return uuidv4();
//   }
//
//   get title(): string {
//     return this._title;
//   }
//
//   get isDone(): boolean {
//     return false;
//   }
//
//   get task(): string {
//     return this._task;
//   }
//
//   get createdAt(): number {
//     return Date.now();
//   }
//
//   get updatedAt(): number {
//     return Date.now();
//   }
// }
//
// const newNote = new CreateNoteDto('eee', 'iiiii');
// console.log({ title: newNote.title, task: newNote.task });
