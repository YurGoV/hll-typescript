import { INotes } from './notes.interface';

export interface IOutputProvider {
  outputNotes(notes: INotes): void;
  initialize(): void;
}
