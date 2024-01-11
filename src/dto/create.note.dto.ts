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
