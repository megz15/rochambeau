dict = {
    'rock': 0,
    'paper': 1,
    'scissor': 2,
}

scores = {
    'player': 0,
    'computer': 0,
    'ties': 0,
}

function computerPlay() {
    return Object.keys(dict)[Math.floor(Math.random() * 3)];
}

function game(player_choice) {
    
    computer_choice = computerPlay()

    document.getElementById('player-choice').innerHTML = `You chose ${player_choice}`;
    document.getElementById('computer-choice').innerHTML = `Computer chose ${computer_choice}`;

    player_choice = dict[player_choice];
    computer_choice = dict[computer_choice];

    if (player_choice === computer_choice) {
        document.getElementById('result-text').innerHTML = `It's a tie!`;
        scores['ties']++;
    } else {
        if ((player_choice + 1) % 3 === computer_choice) {
            document.getElementById('result-text').innerHTML = `Computer wins!`;
            scores['computer']++;
        } else {
            document.getElementById('result-text').innerHTML = `You win!`;
            scores['player']++;
        }
    }

    document.getElementById('player-wins').innerHTML = scores['player'];
    document.getElementById('computer-wins').innerHTML = scores['computer'];
    document.getElementById('ties').innerHTML = scores['ties'];
}