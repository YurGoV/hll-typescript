import { INote, INotes } from './notes.interface';

export interface IOutputProvider {
  outputNotes(notes: INote | INotes): void;
  initialize(): void;
}
