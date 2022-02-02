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

// promp the player for their choce of rock paper or scissors
function player() {
    let playerChoice = prompt('Rock, Paper, Scissors').toLowerCase(); // make sure no matter how they enter, its the same case 
    return playerChoice;
}

    // compare computer to player choise 
    // determine who won or if its a tie
    // show player if they won or lost

function playRound(comp, player) {
    // compare for rock / scissors win con
    if(comp === 'rock' && player === 'scissors'){
        return console.log('you lose! rock beats scissors.');
    } else if(comp === 'scissors' && player === 'rock') {
        return console.log('you win! rock beats scissors.');
    }
    // compare for paper / rock win con
    if(comp === 'paper' && player === 'rock') {
        return console.log('you lose! paper beats rock');
    } else if(comp === 'rock' && player === 'paper'){
        return console.log('you win! paper beats rock.');
    }
    // compare for scissors / paper win con
    if(comp === 'scissors' && player === 'paper') {
        return console.log('you lose! scissors beats paper');
    } else if (comp === 'paper' && player === 'scissors') {
        return console.log('you win! scissors beat paper');
    }
    // if its none of the above it must be a tie
    else {
        return console.log('tie! go again.');
    }
}


// play the game for 5 rounds
function game() {
    for (i = 0; i < 5; i++) {
        playRound(computerPlay(), player());
    }
}

// executes the game
game();