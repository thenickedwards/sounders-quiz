console.log("Hello!");

// Start by having welcome in html that disappears when a button is clicked
// That also starts the timer (call function)

// Timer variables
var timer = document.querySelector(".time");
var secondsLeft = 91;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }
  
    }, 910);
  }

//   add event listener for click and call this when you hide welcome
var startGameButton = document.getElementById("startGame");
var welcome = document.querySelector(".welcome-msg");

startGameButton.addEventListener("click", function () {
    welcome.setAttribute("style", "display:none;");
    setTime();
});


  

// Question has to replace and element
// Question is an object which has properties that are teh answers