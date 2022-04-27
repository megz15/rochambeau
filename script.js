dict = {
    'rock': 0,
    'paper': 1,
    'scissors': 2,
}

function computerPlay() {
    return Object.keys(dict)[Math.floor(Math.random() * 3)];
}

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let player_choice;

rl.question("Your choice: ", function(choice) {
    player_choice = choice;
    rl.close();
});

rl.on("close", function() {
    computer_choice = computerPlay()
    console.log("\nYou chose " + player_choice);
    console.log("Computer chose", computer_choice);

    player_choice = dict[player_choice]
    computer_choice = dict[computer_choice]

    if (player_choice === computer_choice) {
        console.log("It's a tie!");
    } else {
        if ((player_choice+1) % 3 === computer_choice) {
            console.log("Computer wins!");
        } else {
            console.log("You win!");
        }
    }
});