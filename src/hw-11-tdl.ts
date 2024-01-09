import { type } from 'os';
import { notes } from './data/notes';
import { ToDoList } from './list/todo.list';
import { printNotesAsTable } from './output.console/output.console';
import { message } from './data/messages.text';
import { CreateNoteDto } from './dto/create.note.dto';
// import { printNotes } from './print.notes/print.notes';

// const path = require('path');
const clc = require('cli-color');

const readline = require('readline');
const figlet = require('figlet');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(figlet.textSync('Todo List App'));

const list = new ToDoList(notes);
// const introOne = 'Please choose:\n1- print all notes\n';
// const introTwo = '2- add note\n';
// const introThree = '3- exit app\n';
// const askTitle = 'please enter the note title..\n';
// const askTask = 'please enter the note task..\n';

const askQuestion = (question: string): Promise<string> =>
  new Promise((resolve) => {
    rl.question(clc.green(question), (answer: string) => {
      resolve(answer);
    });
  });

// const app = (): void => {
const app = async (): Promise<void> => {
  let continueApp = true;
  try {
    while (continueApp) {
      const userChoice = await askQuestion(message.intro);

      if (Number(userChoice) === 1) {
        list.printNotes();
        console.log('\n');
      } else if (Number(userChoice) === 2) {
        const title = await askQuestion(message.askTitle);
        const task = await askQuestion(message.askTask);

        const newNote = new CreateNoteDto(title, task);

        list.addNote(newNote);
      } else if (Number(userChoice) === 3) {
        continueApp = false;
      } else {
        console.log(clc.red('Invalid choice.'));
      }
    }
  } catch (err) {
    console.error(err);
  } finally {
    rl.close();
  }
};

app();

// https://www.npmjs.com/package/cli-color
