function guessingGame() {
    let num = Math.ceil(Math.random() * 99);
    let guesses = 0;
    let gameWon = false;
    return (guess) => {
        if(guess === num){
            if(gameWon) return 'The game is over, you already won!';
            gameWon = true;
            guesses++;
            return `You win! You found ${num} in ${guesses} guesses.`
        } else if(guess > num) {
            guesses++;
            return `${guess} is too high!`
        } else if(guess<num){
            guesses++;
            return `${guess} is too low!`
        }
    }
}

module.exports = { guessingGame };
