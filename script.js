let secretNumber;
let chancesLeft = 3;

function generateSecretNumber() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    const message = document.getElementById('message');
    const chancesLeftDisplay = document.getElementById('chancesLeft');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    chancesLeft--;

    if (userGuess === secretNumber) {
        message.textContent = "Congratulations! You guessed the correct number!";
        disableInput();
    } else if (userGuess < secretNumber) {
        message.textContent = "Too low. Try again!";
    } else {
        message.textContent = "Too high. Try again!";
    }

    chancesLeftDisplay.textContent = chancesLeft;

    if (chancesLeft === 0) {
        message.textContent = `Game over! The correct number was ${secretNumber}.`;
        disableInput();
    }
}

function disableInput() {
    document.getElementById('userGuess').disabled = true;
    document.querySelector('button').disabled = true;
}

window.onload = function() {
    generateSecretNumber();
};