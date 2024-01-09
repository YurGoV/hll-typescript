export interface INote {
  id: string;
  title: string;
  isDone: boolean;
  task: string;
  createdAt: number;
  updatedAt: number;
}

export type INotes = INote[];
