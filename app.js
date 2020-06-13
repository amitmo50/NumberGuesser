const game = document.querySelector('.game');
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
    winningNumber = Math.floor(Math.random() * max + 1);

maxNumber.textContent = 10;
minNumber.textContent = 1;

// Listen for a guess
submitBtn.addEventListener('click', function(){
  let guess = parseInt(guessNumber.value);
  if(isNaN(guess) || guess < min || guess > max){
     setMessage(`Please enter a nuber between ${min} and ${max}`, 'red');
  }else{
    if(guess === winningNumber){
      guessNumber.disabled = true;
      submitBtn.disabled = true;
      setMessage(`Congratulations!, You\'ve guess the right the number is ${winningNumber}`, 'green');
      guessNumber.style.borderColor = 'green';
    }else{
      numberOfTry -= 1;
      setMessage(`${guess} is Wrong, try again you have ${numberOfTry} guess left`, 'black');
    }
    if(numberOfTry == 0){
      guessNumber.disabled = true;
      submitBtn.disabled = true;
      setMessage(`Game Over!, You have ${numberOfTry} guess left please start a new game`, 'red');
    } 
  }
   
});

clearBtn.addEventListener('click', function(){
  location.reload();
});


function setMessage(messageValue, color){
  message.style.color = color;
  message.textContent = messageValue;
}











