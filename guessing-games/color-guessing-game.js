
const COLORS_ARRAY = ['cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow', 'blue'];

function runGame() {
 let guess = '';
 let correct = false;
 let numTries = 0;

 const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length) + 1;
const target = COLORS_ARRAY[targetIndex];

console.log(target);

do{
    guess= prompt('I am thinking of one of these colors:\n\n' + COLORS_ARRAY.sort().join(', ') +
    '\n\nWhat color am I thinking of?\n').toLowerCase()
    if (guess === null) {
        alert('The game has been aborted')
        return
    } 
    numTries += 1;
    correct = checkGuess(guess, target)

} while (!correct);
 
    alert('congrats you have guessed the color correctly\n\nIt took you' + numTries + 'times to guess it correctly')
    document.body.style.background = guess;
}


function checkGuess(guess, target){
    let correct = false;
    if (!COLORS_ARRAY.includes(guess)){
        alert('The color is not in the array\n\nPlease try again and enter a color')
    } else if (guess > target){
        alert('Your color is aplhabetically higher than mine\n\nPlease try again')
    } else if (guess < target) {
        alert('Your color is aplhabetically lower than mine\n\nPlease try again')
    } else {
        correct = true;
    }
      return correct 
}
