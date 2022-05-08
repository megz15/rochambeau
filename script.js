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
    console.log("\nYou chose " + player_choice);
    console.log("Computer chose", computer_choice);

    player_choice = dict[player_choice]
    computer_choice = dict[computer_choice]

    if (player_choice === computer_choice) {
        console.log("It's a tie!");
        scores['ties']++;
    } else {
        if ((player_choice + 1) % 3 === computer_choice) {
            console.log("Computer wins!");
            scores['computer']++;
        } else {
            console.log("You win!");
            scores['player']++;
        }
    }
}