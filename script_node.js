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

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function game() {
    let player_choice;

    rl.question("\nYour choice: ", function (choice) {
        player_choice = choice.toLowerCase();

        if (!(player_choice in dict)) {
            console.log("\nInvalid choice");
            game();
        } else {
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

        rl.question("\nPlay again? (y/n): ", function (answer) {
            if (answer.toLowerCase() === 'y') {
                game();
            } else {
                rl.close();
            }
        });

        // rl.close();
    });

    rl.on("close", function () {
        console.log("\nFinal scores",
            "\nPlayer: " + scores['player'],
            "\nComputer: " + scores['computer'],
            "\nTies: " + scores['ties']);
        console.log("Overall winner:", Math.max(...Object.values(scores)));
        console.log("Thanks for playing!");
    });
}

game();