const game = document.querySelector('#game');
// get boundries of guessing
const maxNumber = document.querySelector(".max-num");
const minNumber = document.querySelector(".min-num");
// get submit btn
const submitBtn = document.querySelector("#guess-btn");
// get clear btn
const clearBtn = document.querySelector("#restart-btn");
// mess
const message = document.querySelector(".message");
// guess input
const guessNumber = document.querySelector('#guess-input');

let min = 1,
    max = 10,
    numberOfTry = 3;
    winningNumber = numberToGuess(min, max);

maxNumber.textContent = 10;
minNumber.textContent = 1;

game.addEventListener('mousedown', function(e){
  if(e.target.className === "play-again"){
    window.location.reload();
  }
});

// Listen for a guess
submitBtn.addEventListener('click', playGame);

// play game flow
function playGame(){
  let guess = parseInt(guessNumber.value);
  if(isNaN(guess) || guess < min || guess > max){
     setMessage(`Please enter a nuber between ${min} and ${max}`, 'red');
  }else{
    if(guess === winningNumber){
      guessNumber.disabled = true;
      setMessage(`Congratulations!, You\'ve guess the right the number is ${winningNumber}`, 'green');
      guessNumber.style.borderColor = 'green';
      submitBtn.value = "PLAY AGAIN";
      submitBtn.className += "play-again"; 
    }else{
      numberOfTry -= 1;
      setMessage(`${guess} is Wrong, try again you have ${numberOfTry} guess left`, 'black');
    }
    if(numberOfTry == 0){
      guessNumber.disabled = true;
      setMessage(`Game Over!, You have ${numberOfTry} guess left please start a new game`, 'red');
      submitBtn.value = "PLAY AGAIN";
      submitBtn.className += "play-again"; 
    } 
  }
}
function numberToGuess(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}
// set user information message
function setMessage(messageValue, color){
  message.style.color = color;
  message.textContent = messageValue;
}











