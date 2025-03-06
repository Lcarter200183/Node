const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//function ageVerication() {
rl.question("Enter your age: ", (age) => {
  age = Number(age);

  if (age > 21) {
    console.log("You are allowed inside the club.");
  } else {
    console.log("You are not allowed inside the club.");
  }

  favoriteColors();
});
//}

// Favorite Colors
function favoriteColors() {
  rl.question("Enter your name:", (name) => {
    rl.question(
      "Enter your favorite colors, seperated by a comma:",
      (colorsInput) => {
        let colors = colorsInput.split(",").map((color) => color.trim());

        console.log(`Hi ${name}! Your favorite colors are:`);

        colors.forEach((color, index) => {
          console.log(`${index + 1}. ${color}`);
        });

        guessingGame();
      }
    );
  });
}

//Guessing Game
function guessingGame() {
  const correctNumber = Math.floor(Math.random() * 10) + 1;

  let attempts = 3;

  console.log("\nGuess a number between 1 and 10. You have 3 attempts.");

  function askGuess() {
    if (attempts === 0) {
      console.log(`Sorry, you lose. The correct number was ${correctNumber}.`);
      rl.close();
      return;
    }

    rl.question(
      `You have ${attempts} attempt(s) left. Enter your guess: `,
      (guess) => {
        guess = parseInt(guess);
        //guess = Number(guess);

        if ((guess = correctNumber)) {
          console.log("Congratulations! You guessed the correct number!");
          rl.close();
        } else {
          console.log("Wrong guess! Try agian.");
          attempts--;
          askGuess();
        }
      }
    );
  }
  askGuess();
}

ageVerification();
