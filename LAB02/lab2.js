// all packages are const, because they will never be modified
const prompt = require("prompt")
prompt.start()

function rangeBetween(number, min, max) {
  return number >= min && number <= max;
}

prompt.get(["RPS"], (err, res) => {

  const RPS_CPU = Math.round(Math.random() * 100) / 100  
  const RPS_PAPER = rangeBetween(RPS_CPU, 0.00, 0.34)
  const RPS_SCISSORS = rangeBetween(RPS_CPU, 0.35, 0.67)
  const RPS_ROCK = rangeBetween(RPS_CPU, 0.68, 1.00)

  console.log(`\nTest answer: ${RPS_CPU}\ntest paper: ${RPS_PAPER}\ntest-scissors: ${RPS_SCISSORS}\ntest-rock: ${RPS_ROCK} \n\n`) 

  switch (res.RPS) {
    case "rock":
    case "1":
      RPS_PAPER ? console.log(`user: ${res.RPS} \nCPU: Paper\n You Lose!`) : 
      RPS_ROCK ? console.log(`user: ${res.RPS} \nCPU: Rock\n Tied!`) :
      RPS_SCISSORS ? console.log(`user: ${res.RPS} \nCPU: Scissors \n You Win!`) : "error";
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

