// all packages are const, because they will never be modified
const prompt = require("prompt")
prompt.start()

function rangeBetween(number, min, max) {
  return number >= min && number <= max;
}

RPS_GEN = Math.round(Math.random() * 100) / 100  

const RPS_RANGER = {
  rock : rangeBetween(RPS_GEN, 0.00, 0.34),
  paper: rangeBetween(RPS_GEN, 0.35, 0.67),
  scissors : rangeBetween(RPS_GEN, 0.68, 1.00),
}

const RPS_RULES = {
  rock_: {
    ags_paper: "Lose",
    ags_rock: `Tied`,
    ags_scissors: `Win`,
  },
  paper_: {
    ags_paper: `Tied`,
    ags_rock: `Win`,
    ags_scissors: `Lose`,
  },
  scissors_: {
    ags_paper : `Win`,
    ags_rock : `Lose`,
    ags_scissors : `Tied`,
  },
}


prompt.get(["RPS"], (err, res) => {

  if (err) throw err
  const RPS_CPU = Math.round(Math.random() * 100) / 100  
  const RPS_PAPER = "empty"
  const RPS_SCISSORS = "empty"
  const RPS_ROCK = "empty"

  console.log(`\nTest answer: ${RPS_CPU}\ntest paper: ${RPS_PAPER}\ntest-scissors: ${RPS_SCISSORS}\ntest-rock: ${RPS_ROCK} \n\n`) 

  switch (res.RPS) {
    case "rock":
    case "1":
      
      break;
    case "paper":
    case "2":
      RPS_PAPER ? console.log(`user: ${res.RPS} \nCPU: Paper\n Tied!`) : 
      RPS_ROCK ? console.log(`user: ${res.RPS} \nCPU: Rock\n You Win!`) :
      RPS_SCISSORS ? console.log(`user: ${res.RPS} \nCPU: Scissors \n You Lose!`) : "error";
      break;
    case "scissors":
    case "3":
      RPS_PAPER ? console.log(`user: ${res.RPS} \nCPU: Paper\n You Win!`) : 
      RPS_ROCK ? console.log(`user: ${res.RPS} \nCPU: Rock\n You Lose!`) :
      RPS_SCISSORS ? console.log(`user: ${res.RPS} \nCPU: Scissors \n Tied!`) : "error";
      break;
    default:
      console.log("Try again");
  }
})

