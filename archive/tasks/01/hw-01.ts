class School01 {
  directions: string[] = [];

  addDirection(direction: string): void {
    this.directions.push(direction);
  }
}

class Direction01 {
  #name: string;

  levels: number[] = [];

  constructor(name: string) {
    this.#name = name;
  }

  get name(): string {
    return this.#name;
  }

  addLevel(level: number): void {
    this.levels.push(level);
  }
}

class Level01 {
  private _name: string;

  private _program: string;

  groups: string[] = [];

  constructor(name: string, program: string) {
    this.name = name;
    this._program = program;
  }

  get name(): string {
    return this._name;
  }

  set name(val: string) {
    this._name = val;
  }

  get program(): string {
    return this._program;
  }

  addGroup(group: string): void {
    this.groups.push(group);
  }
}

class Student01 {
  grades: { [key: string]: number } = {};

  attendance: boolean[] = [];

  firstName: string;

  lastName: string;

  birthYear: number;

  subject: string;

  constructor(firstName: string, lastName: string, birthYear: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  get fullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    [this.lastName, this.firstName] = value.split(' ');
  }

  get age(): number {
    return new Date().getFullYear() - this.birthYear;
  }

  setGrade(subject: string, grade: number): void {
    this.grades[subject] = grade;
  }

  markAttendance(present: boolean): void {
    this.attendance.push(present);
  }

  getPerformanceRating(): number {
    const gradeValues: number[] = Object.values(this.grades);

    if (gradeValues.length === 0) {
      return 0;
    }

    const averageGrade: number = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;

    const attendancePercentage: number =
      (this.attendance.filter((present) => present).length / this.attendance.length) * 100;

    return (averageGrade + attendancePercentage) / 2;
  }
}

class Group01 {
  _students: Student01[] = [];

  directionName: string;

  levelName: string;

  get students(): Student01[] {
    return this._students;
  }

  constructor(directionName: string, levelName: string) {
    this.directionName = directionName;
    this.levelName = levelName;
  }

  addStudent(student: Student01): void {
    this._students.push(student);
  }

  showPerformance(): Student01[] {
    const sortedStudents = this._students.toSorted(
    // NOTE: ???  error: 1. Property 'toSorted' does not exist on type 'Student[]'. [2339]
    // const sortedStudents = this._students.sort(
      (a, b) => b.getPerformanceRating() - a.getPerformanceRating(),
    );

    return sortedStudents;
  }
}
