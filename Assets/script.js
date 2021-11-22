console.log("Hello!");

// Timer code to run timer used once game starts
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

// Q&A code to display q's and a's once game starts
// Question has to replace and element
// Question is an object which has properties that are teh answers
var quizSection = document.getElementById("QandA");
var posAnswers = document.getElementById("answers");
var currentQuestion = 0;




// Page starts with welcome message/rules
// Once button to start game is clicked welcome message disappears and timers starts
var startGameButton = document.getElementById("startGame");
var welcome = document.querySelector(".welcome-msg");

startGameButton.addEventListener("click", function () {
    welcome.setAttribute("style", "display:none;");
    setTime();
});


  

