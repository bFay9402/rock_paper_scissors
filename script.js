let btns = document.querySelectorAll('.btn');
let pScoreElement = document.querySelector('.p-score');
let cScoreElement = document.querySelector('.c-score');
let winBanner = document.querySelector('.win-banner');
let winText = document.querySelector('.win-text');
let rstBtn = document.querySelector('.rst-btn');
let cpuPick = document.querySelector('.cpu-pick');
let pScore = 0;
let cScore = 0;

function computerPlay() {
    // pick a random number from 1 - 3
    let randNum = Math.floor(Math.random() * 3) + 1;
    // determine rock paper or scissors for the computer depending on what the randNum returns
    // if 1 pick rock, if 2 pick paper, if 3 pick scissors
    if(randNum === 1) {
        return 'rock';
    } else if (randNum === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
    // compare computer to player choise 
    // determine who won or if its a tie
    // show player if they won or lost

function playRound(comp, player) {
    // compare for rock / scissors win con
    if(comp === 'rock' && player === 'scissors'){
        cScore++;
        cpuPick.textContent = 'Rock';
    } else if(comp === 'scissors' && player === 'rock') {
        pScore++;
        cpuPick.textContent = 'Scissors';
    }
    // compare for paper / rock win con
    if(comp === 'paper' && player === 'rock') {
        cScore++;
        cpuPick.textContent = 'Paper';
    } else if(comp === 'rock' && player === 'paper'){
        pScore++;
        cpuPick.textContent = 'Rock';
    }
    // compare for scissors / paper win con
    if(comp === 'scissors' && player === 'paper') {
        cScore++;
        cpuPick.textContent = 'Scissors';
    } else if (comp === 'paper' && player === 'scissors') {
        pScore++;
        cpuPick.textContent = 'Paper';
    }
    // if its none of the above it must be a tie
    if(comp === player) {
        cpuPick.textContent = 'Tie go again!';
    }
}

// adds and event listner for a click on each button for the players choise
// updates the score
// if the score hits 5 for either the player or computer displays the win banner
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        playRound(computerPlay(), btn.textContent.toLowerCase());
        if(cScore === 5){
            winBanner.style.display = 'flex';
            winText.textContent = 'Computer Wins!';
        } else if(pScore === 5){
            winBanner.style.display = 'flex';
            winText.textContent = 'Player Wins!';
        }
        cScoreElement.textContent = cScore;
        pScoreElement.textContent = pScore;
    });
});

// reset button on the win banner sets values to 0, removes computers pick and the banner itself
if(winBanner){
    rstBtn.addEventListener('click', () => {
        winBanner.style.display = 'none';
        cScore = 0;
        pScore = 0;
        cScoreElement.textContent = 0;
        pScoreElement.textContent = 0;
        cpuPick.textContent = '';
    });
}