class Task {
  constructor(
    public title: string,
    public description: string,
    public assigneeId: string,
  ) {}
}

interface Observer {
  update(task: Task): void;
}

class TaskBoard {
  #tasks: Task[] = [];

  #observers: Observer[] = [];

  get tasks(): Task[] {
    return this.#tasks;
  }

  addTask(task: Task): void {
    this.#tasks.push(task);
    this.notifyObservers(task);
  }

  addObserver(observer: Observer): void {
    this.#observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.#observers = this.#observers.filter((obs) => obs !== observer);
  }

  private notifyObservers(task: Task): void {
    this.#observers.forEach((observer) => observer.update(task));
  }
}

class User implements Observer {
  #activeTasks: Task[] = [];

  name: string;

  readonly id: string;

  constructor(name: string) {
    this.name = name;
    this.id = 'id' + Math.random().toString(16).slice(2);
  }

  update(task: Task): void {
    if (task.assigneeId === this.id) {
      this.#activeTasks.push(task);
      console.log(`${this.name} has a new active task: ${task.title}`);
    }
  }

  get activeTasks(): Task[] {
    return this.#activeTasks;
  }
}

const taskBoard = new TaskBoard();
const user1 = new User('User 1');

const user2 = new User('User 2');

taskBoard.addObserver(user1);
taskBoard.addObserver(user2);

const newTask = new Task('Task 1', 'Description 1', user1.id);
const newTask2 = new Task('Task 2', 'Description 2', user1.id);
taskBoard.addTask(newTask);
taskBoard.addTask(newTask2);

console.log('user 1 active tasks: ', user1.activeTasks);
console.log('user 2 active tasks: ', user2.activeTasks);

// ❯ node ./dist/index-hw-13.js
// User 1 has a new active task: Task 1
// User 1 has a new active task: Task 2
// user 1 active tasks:  [
//   Task {
//     title: 'Task 1',
//     description: 'Description 1',
//     assigneeId: 'idefcd59324d9f4'
//   },
//   Task {
//     title: 'Task 2',
//     description: 'Description 2',
//     assigneeId: 'idefcd59324d9f4'
//   }
// ]
// user 2 active tasks:  []

