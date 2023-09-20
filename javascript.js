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
      console.log("The player won! Rock beats scissors!"); //ff
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
var computerScore = 0;
  var playerScore = 0;






  function removeTransition(e) {
    if (e.propertyName === 'transform') {
      e.target.classList.remove('playing');
    }
  }


const rock= document.getElementById('rock');
 const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

function game() {

  console.log("Player Score:", playerScore);
  console.log("Computer Score:", computerScore);
 
  rock.addEventListener('click', function() {
    rock.classList.add('playing');
    // Access the clicked element using event.target
    const playerSelection = 'rock'; // Set the player's choice
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    


    if (result === 'player') {
      playerScore++;
    } else if (result === 'computer') {
      computerScore++;
    }
    console.log("Player Score:", playerScore);
    console.log("Computer Score:", computerScore);
   
  });

 
  
}


game();


