import { notes } from './data/notes';
import { message } from './data/messages.text';
import { CreateNoteDto } from './dto/create.note.dto';
import { ExtendedToDoList } from './list/todo.list.extended';

const clc = require('cli-color');

const readline = require('readline');
const figlet = require('figlet');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(figlet.textSync('Todo List App'));

const list = new ExtendedToDoList(notes);

const askQuestion = (question: string): Promise<string> =>
  new Promise((resolve) => {
    rl.question(clc.green(question), (answer: string) => {
      resolve(answer);
    });
  });

const app = async (): Promise<void> => {
  let continueApp = true;
  try {
    while (continueApp) {
      const userChoice = await askQuestion(message.menu);

      if (Number(userChoice) === 1) {
        list.printNotes();
        console.log('\n');
      } else if (Number(userChoice) === 2) {
        list.printReport();
      } else if (Number(userChoice) === 3) {
        const title = await askQuestion(message.askTitle);
        const task = await askQuestion(message.askTask);

        const newNote = new CreateNoteDto(title, task);

        list.addNote(newNote);
      } else if (Number(userChoice) === 4) {
        const id = await askQuestion(message.askId);
        const note = list.findNoteById(id);
        if (note) {
          console.log(clc.yellow(note));
          list.printNotes(note);
        } else {
          console.log(clc.red('there is no note with shuch id..'));
        }
      } else if (Number(userChoice) === 5) {
        const query = await askQuestion(message.askQuery);
        const result = list.searchNotes(query);
        if (result.length > 0) {
          list.printNotes(result);
        } else {
          console.log(clc.red('there is no notes finded..'));
        }
      } else if (Number(userChoice) === 6) {
        const result = list.sortNotesByStatus();
        if (result) {
          list.printNotes(result);
        } else {
          console.log(clc.red('there is no notes..'));
        }
      } else if (Number(userChoice) === 7) {
        const result = list.sortNotesByCreationTime();
        if (result) {
          list.printNotes(result);
        } else {
          console.log(clc.red('there is no notes..'));
        }
      } else if (Number(userChoice) === 8) {
        const id = await askQuestion(message.askId);
        const result = list.markNoteAsDone(id);
        if (result) {
          console.log(clc.green('note successfully marked as done'));
        } else {
          console.log(clc.red('there is no note with shuch id..'));
        }
      } else if (Number(userChoice) === 9) {
        const id = await askQuestion(message.askId);
        const note = list.deleteNoteById(id);
        if (note) {
          console.log(clc.green('note successfully deleted'));
        } else {
          console.log(clc.red('there is no note with shuch id..'));
        }
      } else if (Number(userChoice) === 10) {
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
