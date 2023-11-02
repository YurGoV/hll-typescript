export type Mark = 1 | 2 | 3 | 4 | 5;

export type Lecturer = {
  name: string;
  surname: string;
  position: string;
  company: string;
  experience: string;
  courses: string[];
  contacts: string[];
};
export type Grade = {
  [workName: string]: Mark;
};
