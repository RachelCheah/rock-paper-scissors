let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;

var selection = document.querySelector(`.selection`);
var loading = document.querySelector(`.loading`);
var resultScreen = document.querySelector(`.result`);

var leftResult = document.querySelector(`#left-result`);
var rightResult = document.querySelector(`#right-result`);
var resultText = document.querySelector(`#result-text`);


const buttons = document.querySelectorAll(`.rps-button`);

buttons.forEach((button) =>
    button.addEventListener('click', () => {
        let playerChoice = capitalize(button.id); 
        let result = round(playerChoice, computerPlay());

        playerScore += result[1];
        computerScore += result[2];

        computerChoice = result[3];

        leftResult.classList.add(`${playerChoice}-image`);
        rightResult.classList.add(`${computerChoice}-image`);
        resultText.textContent = result[0];
        console.log(resultText.textContent);

        setTimeout(function(){leftResult.classList.remove(`${playerChoice}-image`);},2500);
        setTimeout(function(){rightResult.classList.remove(`${computerChoice}-image`);},2500);


        selection.classList.add('hide');
        loading.classList.remove("hide");
        setTimeout(function(){loading.classList.add("hide");},1500);
        setTimeout(function(){resultScreen.classList.remove("hide");},1500);
        setTimeout(function(){resultScreen.classList.add("hide");},2200);
        setTimeout(function(){resultText.classList.remove("hide");},2200);

        setTimeout(function(){resultText.classList.add("hide");},3500);
        setTimeout(function(){selection.classList.remove("hide");},3500);

        setTimeout(function(){updateScore(playerScore, computerScore);},3500);
        
  })
);

function computerPlay() {
    let number = Math.floor(Math.random() * 3);
    const list = ["Rock","Paper","Scissors"];
    return list[number];
}

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function round(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection.toLowerCase());
    computerSelection = capitalize(computerSelection.toLowerCase());
    
    var playerWins = ["PaperRock", "RockScissors", "ScissorsPaper"]
    var didPlayerWin = playerWins.includes(playerSelection + computerSelection)

    if (playerSelection === computerSelection) {
        return [`It's a tie! \nYou both chose ${playerSelection}!`, 0, 0, computerSelection];
    } else if (didPlayerWin === true) {
        return [`You Win! \n${playerSelection} beats ${computerSelection}`,1,0, computerSelection];
    }
    else {
        return [`You Lose! \n${computerSelection} beats ${playerSelection}`,0,1, computerSelection];
    }
}  

function game() {
    for (var i = 0; i < 5; i++){
        let selection = prompt("Rock, Scissors or Paper?");
        round(selection, computerPlay());
    }
}

function updateScore(n, m) {
    var playerScore = document.querySelector(`#player-score-text`);
    var computerScore = document.querySelector(`#computer-score-text`);
    playerScore.textContent = n;
    computerScore.textContent = m;
}
