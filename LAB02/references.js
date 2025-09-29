//NPM PROMPT

//Using prompt is relatively straight forward. 
//There are two core methods you should be aware of: prompt.get() 
//and prompt.addProperties(). Their methods take strings representing property 
//names in addition to objects for complex property validation (and more). 
//There are a number of examples that you should examine for detailed usage.

//BASIC PROMPT INFORMATION
var prompt = require('prompt');

//
// Start the prompt
//
prompt.start();

//Get two properties from the user: username and email

prompt.get(['username', 'email'], function (err, result) {

  if (err) throw err;
  // Log the results.
  console.log('Command-line input received:');
  console.log('  username: ' + result.username);
  console.log('  email: ' + result.email);
});

//incase future thick brain isaac doesn't understand and forgets
// this -> const { username, email } = await prompt.get(['username', 'email']);
// that is the modern way, not needed nor worried for this project.

// all packages are const, because they will never be modified
const prompt = require("prompt");
prompt.start();

prompt.get(["RPS"], (err, res) => {
  if (err) throw err;

  const userChoice = res.RPS.toLowerCase();

  // CPU makes a choice
  const rand = Math.random();
  let cpuChoice;
  if (rand < 0.34) {
    cpuChoice = "rock";
  } else if (rand < 0.67) {
    cpuChoice = "paper";
  } else {
    cpuChoice = "scissors";
  }

  console.log(`\nUser: ${userChoice}\nCPU: ${cpuChoice}`);

  // Decide winner
  if (userChoice === cpuChoice) {
    console.log("Tie!");
  } else if (
    (userChoice === "rock" && cpuChoice === "scissors") ||
    (userChoice === "paper" && cpuChoice === "rock") ||
    (userChoice === "scissors" && cpuChoice === "paper")
  ) {
    console.log("You Win!");
  } else {
    console.log("You Lose!");
  }
});

//concept code
// function rangeBetween(number, min, max) {
//   return number >= min && number <= max;
// }
//
// const hand = "rock"
//
// const RPS_GEN = Math.round(Math.random() * 100) / 100  
//
// const RPS_RANGER = {
//   rock : rangeBetween(RPS_GEN, 0.00, 0.34),
//   paper: rangeBetween(RPS_GEN, 0.35, 0.67),
//   scissors : rangeBetween(RPS_GEN, 0.68, 1.00),
// }
//
// if(RPS_RANGER[0]){
//     console.log("true")
//     console.log(RPS_GEN)
// } else{
//     console.log("false")
//     console.log(RPS_GEN)
// }
//
// //v2
// ////v2
// function rangeBetween(number, min, max) {
//   return number >= min && number <= max;
// }
//
// const hand = "rock"
//
// const RPS_GEN = Math.round(Math.random() * 100) / 100  
//
// const RPS_RULES = {
//   rock_: { ags_paper: "Lose", ags_rock: `Tied`, ags_scissors: `Win`,},
//   paper_: { ags_paper: `Tied`, ags_rock: `Win`, ags_scissors: `Lose`,
//   },
//   scissors_: {
//     ags_paper : `Win`,
//     ags_rock : `Lose`,
//     ags_scissors : `Tied`,
//   },
// }
//
// if(rangeBetween(RPS_GEN, 0.00, 0.34)){
//     console.log(RPS_RULES.rock_.ags_paper)
// }else{
//     console.log("false")
//     console.log(RPS_GEN)
// }

//v3
// // all packages are const, because they will never be modified
// const prompt = require("prompt")
// prompt.start()
//
// function rangeBetween(number, min, max) {
//   return number >= min && number <= max;
// }
//
// RPS_GEN = Math.round(Math.random() * 100) / 100  
//
// const RPS_RANGER = {
//   rock : rangeBetween(RPS_GEN, 0.00, 0.34),
//   paper: rangeBetween(RPS_GEN, 0.35, 0.67),
//   scissors : rangeBetween(RPS_GEN, 0.68, 1.00),
// }
//
// const RPS_RULES = {
//   rock_: {
//     ags_paper: "Lose",
//     ags_rock: `Tied`,
//     ags_scissors: `Win`,
//   },
//   paper_: {
//     ags_paper: `Tied`,
//     ags_rock: `Win`,
//     ags_scissors: `Lose`,
//   },
//   scissors_: {
//     ags_paper : `Win`,
//     ags_rock : `Lose`,
//     ags_scissors : `Tied`,
//   },
// }
//
//
// prompt.get(["RPS"], (err, res) => {
//
//   if (err) throw err
//   const RPS_CPU = Math.round(Math.random() * 100) / 100  
//   const RPS_PAPER = "empty"
//   const RPS_SCISSORS = "empty"
//   const RPS_ROCK = "empty"
//
//   console.log(`\nTest answer: ${RPS_CPU}\ntest paper: ${RPS_PAPER}\ntest-scissors: ${RPS_SCISSORS}\ntest-rock: ${RPS_ROCK} \n\n`) 
//
//   switch (res.RPS) {
//     case "rock":
//     case "1":
//
//       break;
//     case "paper":
//     case "2":
//       RPS_PAPER ? console.log(`user: ${res.RPS} \nCPU: Paper\n Tied!`) : 
//       RPS_ROCK ? console.log(`user: ${res.RPS} \nCPU: Rock\n You Win!`) :
//       RPS_SCISSORS ? console.log(`user: ${res.RPS} \nCPU: Scissors \n You Lose!`) : "error";
//       break;
//     case "scissors":
//     case "3":
//       RPS_PAPER ? console.log(`user: ${res.RPS} \nCPU: Paper\n You Win!`) : 
//       RPS_ROCK ? console.log(`user: ${res.RPS} \nCPU: Rock\n You Lose!`) :
//       RPS_SCISSORS ? console.log(`user: ${res.RPS} \nCPU: Scissors \n Tied!`) : "error";
//       break;
//     default:
//       console.log("Try again");
//   }
// })
