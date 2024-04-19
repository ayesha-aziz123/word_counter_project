#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const answer: {
    sentence: string
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: (chalk.bgBlue("Enter your sentence to count Word :")),
    }
])

const Word = answer.sentence.trim().split(" ");

//print the array of words to the console
console.log(Word);

console.log(chalk.italic.magentaBright(`your sentence word count is ${Word.length}`));

