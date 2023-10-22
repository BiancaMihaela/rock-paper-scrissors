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
  var statusScore= null; 
  if (playerSelection == 'rock') {
    if (computerSelection == 'scissors') {
      statusScore="The player won! Rock beats scissors!"; 
      console.log(statusScore); //ff
      winner = 'player';
    } else if (computerSelection == 'paper') {
      statusScore="The computer won! Paper beats rock";
      console.log(statusScore);
      winner = 'computer';
    } else if (computerSelection == 'rock') {
      statusScore="It's a tie! Both have chosen rock!";
      console.log(statusScore);
    }
  } else if (playerSelection == 'paper') {
    if (computerSelection == 'scissors') {
      statusScore="The computer won! Scissors beats paper!";
      console.log(statusScore);
      winner = 'computer';
    } else if (computerSelection == 'rock') {
      statusScore="The player won! Paper beats rock!";
      console.log(statusScore);
      winner = 'player';
    } else {
      statusScore="It's a tie! Both have chosen paper!";
      console.log(statusScore);
    }
  } else if (playerSelection == 'scissors') {
    if (computerSelection == 'rock') {
      statusScore="The computer won! Rock beats scissors!";
      console.log(statusScore);
      winner = 'computer';
    } else if (computerSelection == 'paper') {
      statusScore="The player won! Scissors beats paper!";
      console.log(statusScore);
      winner = 'player';
    } else {
      statusScore="It's a tie! Both have chosen scissors!";
      console.log("It's a tie! Both have chosen scissors!");
    }
  }
  else{
    console.log("Valoare invalida");
  }

  return [winner, statusScore];
}
var computerScore = 0;
var playerScore = 0;
var statusScore=null; 






  function removeTransition(e) {
    if (e.propertyName === 'transform') {
      e.target.classList.remove('playing');
    }
  }


const rock= document.getElementById('rock');
const paper=document.getElementById('paper'); 
const scissors=document.getElementById('scissors'); 
const choice=document.getElementById('choice');  


 const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

function game() {
  var jReplayMessage=document.getElementById("replayMessage");
  jReplayMessage.classList.add("aftermath");

  console.log("Player Score:", playerScore);
  console.log("Computer Score:", computerScore);
 
  //ROCK!!!!!!!!!!!!!!!!!

  rock.addEventListener('click', function() {
    rock.classList.add('playing');
    // Access the clicked element using event.target
    const playerSelection = 'rock'; // Set the player's choice
    const computerSelection = getComputerChoice();
    const [result, statusRound] = playRound(playerSelection, computerSelection);

    


    if (result === 'player') {
      playerScore++;
    } else if (result === 'computer') {
      computerScore++;
    }
    console.log("Player Score:", playerScore);
    console.log("Computer Score:", computerScore);
    
    var pScore=document.getElementById("htmlPlayerScore");
    pScore.innerHTML=playerScore; 

    var cScore=document.getElementById("htmlComputerScore");
    cScore.innerHTML=computerScore; 

    var stRound= document.getElementById("statusRound"); 
    stRound.innerHTML= statusRound; 

    if((playerScore>4) || (computerScore >4)){
     jReplayMessage.classList.remove('aftermath'); 
     
     rock.classList.remove('playing');
     rock.classList.add('aftermath'); 
      paper.classList.add('aftermath'); 
      scissors.classList.add('aftermath'); 
    }

  });

//SCISSORS!!!!!!!!!!!!!
  scissors.addEventListener('click', function() {
    scissors.classList.add('playing');
    // Access the clicked element using event.target
    const playerSelection = 'scissors'; // Set the player's choice
    const computerSelection = getComputerChoice();
    const [result, statusRound] = playRound(playerSelection, computerSelection);

    


    if (result === 'player') {
      playerScore++;
    } else if (result === 'computer') {
      computerScore++;
    }
    console.log("Player Score:", playerScore);
    console.log("Computer Score:", computerScore);
   
    var pScore=document.getElementById("htmlPlayerScore");
    pScore.innerHTML=playerScore; 

    var cScore=document.getElementById("htmlComputerScore");
    cScore.innerHTML=computerScore; 

    var stRound= document.getElementById("statusRound"); 
    stRound.innerHTML= statusRound; 

    if((playerScore>4) || (computerScore >4)){
      jReplayMessage.classList.remove('aftermath'); 
      rock.classList.add('aftermath'); 
      paper.classList.add('aftermath'); 
      scissors.classList.add('aftermath'); 
     }
  });

  
//PAPER !!!!!!!!!!!!!!

  paper.addEventListener('click', function() {
    paper.classList.add('playing');
    // Access the clicked element using event.target
    const playerSelection = 'paper'; // Set the player's choice
    const computerSelection = getComputerChoice();
    const [result, statusRound] = playRound(playerSelection, computerSelection);

    


    if (result === 'player') {
      playerScore++;
    } else if (result === 'computer') {
      computerScore++;
    }
    console.log("Player Score:", playerScore);
    console.log("Computer Score:", computerScore);
   
    var pScore=document.getElementById("htmlPlayerScore");
    pScore.innerHTML=playerScore; 

    var cScore=document.getElementById("htmlComputerScore");
    cScore.innerHTML=computerScore; 
    
    var stRound= document.getElementById("statusRound"); 
    stRound.innerHTML= statusRound; 

    ///test
    if((playerScore>4) || (computerScore >4)){
      jReplayMessage.classList.remove('aftermath'); 
      rock.classList.add('aftermath'); 
      paper.classList.add('aftermath'); 
      scissors.classList.add('aftermath'); 
     }
      
  });

    choice.addEventListener('click', function(){
      window.location.reload(true);
    });
 
}

function tournament() {

if((playerScore<6) || (computerScore <6)){
  game();
}
else{
  console.log("game finished >>>>>>>>>>>>>>>>>>>>>>>>>");
}

}


tournament();
