const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS';

let gameIsRunning = false;

const getPlayerChoice = function () {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?` , '').toUpperCase();
    if (
        selection !== ROCK && 
        selection !== PAPER && 
        selection !== SCISSORS
    ) {
        alert(`Invalid choice... We chose ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
        }
        return selection;
};

const getComputerChoice = function () {
    const choices = [ROCK, PAPER, SCISSORS];
    return choices[Math.floor(Math.random() * choices.length)];
};

const getWinner = function (cChoice, pChoice) {
    if (cChoice === pChoice) {
        return RESULT_DRAWER; 
    } else if (
        cChoice === ROCK && pChoice === PAPER || 
        cChoice === PAPER && cChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === ROCK 
    ) {
        return RESULT_PLAYER_WINS; 
    } else {
        return RESULT_COMPUTER_WINS; 
    }
};

startGameBtn.addEventListener('click', function() {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    const winner = getWinner(computerChoice, playerSelection);
    console.log(`The winner is: ${winner}`);
});