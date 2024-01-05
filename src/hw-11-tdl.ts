const path = require('path');
const clc = require('cli-color');

const readline = require('readline');
const figlet = require('figlet');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(figlet.textSync('Todo List App'));

const todoList = (): void => {
  try {
    rl.question(
      clc.green('Please enter the index, what data you want to use\n'),
      (val: string) => {
        console.log(val, 'val');
        rl.close();
      },
    );
  } catch (err) {
    console.error(err);
  }
};

todoList();

// https://www.npmjs.com/package/cli-color
