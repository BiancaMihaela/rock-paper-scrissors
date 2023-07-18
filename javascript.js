const array = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * array.length);
  const item = array[randomIndex];
  return item;
}

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection);
  console.log(computerSelection);
  console.log("---------------");
  var winner = null;

  if (playerSelection == 'rock') {
    if (computerSelection == 'scissors') {
      console.log("The player won! Rock beats scissors!");
      winner = 'player';
    } else if (computerSelection == 'paper') {
      console.log("The computer won! Paper beats rock");
      winner = 'computer';
    } else if (computerSelection == 'rock') {
      console.log("It's a tie! Both have chosen rock!");
    }
  } else if (playerSelection == 'paper') {
    if (computerSelection == 'scissors') {
      console.log("The computer won! Scissors beats paper!");
      winner = 'computer';
    } else if (computerSelection == 'rock') {
      console.log("The player won! Paper beats rock!");
      winner = 'player';
    } else {
      console.log("It's a tie! Both have chosen paper!");
    }
  } else if (playerSelection == 'scissors') {
    if (computerSelection == 'rock') {
      console.log("The computer won! Rock beats scissors!");
      winner = 'computer';
    } else if (computerSelection == 'paper') {
      console.log("The player won! Scissors beats paper!");
      winner = 'player';
    } else {
      console.log("It's a tie! Both have chosen scissors!");
    }
  }
  else{
    console.log("Valoare invalida");
  }

  return winner;
}

function game() {
  var computerScore = 0;
   playerScore = 0;

  while (computerScore < 5 && playerScore < 5) {
    var playerSelection = prompt();
    const computerSelection = getComputerChoice();

    const result = playRound(playerSelection, computerSelection);

    if (result === 'player') {
      playerScore++;
    }
    if (result === 'computer') {
      computerScore++;
    }

    console.log("Player Score:", playerScore);
    console.log("Computer Score:", computerScore);
  }
}

game();
