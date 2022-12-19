#!usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";


const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};

async function welcome() {
  let rainbowTitle = chalkAnimation.rainbow("Welcome to EsJay Calculator");
  await sleep();
  rainbowTitle.stop();
  console.log(` 
     _____________________
    |  _________________  |
    | | EsJay           | |
    | | Calculator      | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);
}

await welcome();

async function askQuestion() {
  const answers = await inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: "list",
        name: "operator",
        message: "\nWhich operation you want to perform\n",
        choices: ["Addition", "Subtraction", "Times", "Division"],
      },
      {
        type: "number",
        name: "num1",
        message: "Enter First Number: ",
      },
      {
        type: "number",
        name: "num2",
        message: "Enter Second Number: ",
      },
    ]);

// checking user input

function checkUserInput (a:any , b:any): boolean {
if( isNaN(a) || isNaN(b))
{
console.log("Please provide correct Inputs");
return false;
}
console.log("Let's Calculate");
return true;
};

let checkMe= checkUserInput(answers.num1,answers.num2);

if (checkMe == true )
{   
    // Use user feedback for... whatever!!
      if (answers.operator == "Addition") {
        console.log(
          chalk.green(
            `${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`
          )
        );
      } else if (answers.operator == "Subtraction") {
        console.log(
          chalk.green(
            `${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`
          )
        );
      } else if (answers.operator == "Times") {
        console.log(
          chalk.green(
            `${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`
          )
        );
      } else if (answers.operator == "Division") {
        console.log(
          chalk.green(
            `${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`
          )
        );
      }
    }
    };


async function startAgain() {
  do {
    await askQuestion();
    var again = await inquirer.prompt({
      type: "input",
      name: "restart",
      message: "Do you want to calculate more Y/N: ",
    });
  } while (again.restart == "y" || again.restart == "Y");
  console.log("Thank you for using the Esjay Calculator! see you soon.");
}

startAgain();
