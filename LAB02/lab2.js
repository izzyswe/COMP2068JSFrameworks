// all packages are const, because they will never be modified
const prompt = require("prompt")
prompt.start()

function rangeBetween(number, min, max) {
  return number >= min && number <= max;
}

prompt.get(["RPS"], (err, res) => {

  const RPS_CPU = Math.random().toFixed(2)
  const RPS_PAPER = rangeBetween(RPS_CPU, 0.00, 0.34)
  const RPS_SCISSORS = rangeBetween(RPS_CPU, 0.35, 0.67)
  const RPS_ROCK = rangeBetween(RPS_CPU, 0.68, 1.00)

  console.log(`\nTest answer: ${RPS_CPU}\ntest paper: ${RPS_PAPER}\ntest-scissors: ${RPS_SCISSORS}\ntest-rock: ${RPS_ROCK} \n\n`) 

  if(RPS_CPU === RPS_PAPER){ 
    switch (res.RPS) { 
      case "rock": 
        console.log(`user: ${res.RPS} \n CPU: Paper \n You Lose!`); 
        break; 
      case "paper": 
        console.log(`user: ${res.RPS} \n CPU: Paper \n Tie!`); 
        break; 
      case "scissors": 
        console.log(`user: ${res.RPS} \n CPU: Paper \n You Win!`); 
        break; 
      default: 
        console.log("Try again"); 
    } 
  } else if(RPS_CPU == RPS_SCISSORS){ 
    switch (res.RPS) { 
      case "rock": 
        console.log(`user: ${res.RPS} \n CPU: Paper \n You Lose!`); 
        break; 
      case "paper": 
        console.log(`user: ${res.RPS} \n CPU: Paper \n Tie!`); 
        break; 
      case "scissors": 
        console.log(`user: ${res.RPS} \n CPU: Paper \n You Win!`); 
        break; 
      default: 
        console.log("Try again");
    }
  } else if(RPS_CPU == RPS_ROCK){ 
      switch (res.RPS) { 
        case "rock": 
          console.log(`user: ${res.RPS} \n CPU: Paper \n You Lose!`); 
          break; 
        case "paper": 
          console.log(`user: ${res.RPS} \n CPU: Paper \n Tie!`); 
          break; 
        case "scissors": 
          console.log(`user: ${res.RPS} \n CPU: Paper \n You Win!`); 
          break; 
        default: 
          console.log("Try again");
      }
  }
})

