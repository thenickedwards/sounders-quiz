console.log("Hello!");

// Q&A variables, objects, arrays, etc.
var questionsData = [
    {
        questionItself: "Two plus Two equals?",
        answersOptions: ["One", "Two", "Three", "Four"],
        answerCorrect: "Four",
    },

    {
        questionItself: "Three plus Three equals?",
        answersOptions: ["Five", "Six", "Seven", "Eight"],
        answerCorrect: "Six",
    },

    {
        questionItself: "Four plus Three Four?",
        answersOptions: ["Eight", "Nine", "Ten", "Eleven"],
        answerCorrect: "Six",
    },

];

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
var nowQuestion = document.getElementById("questions");
var posAnswers = document.getElementById("answers");
var currentQuestion = 0;
var userChoice = "";

// console.log(questionsData[currentQuestion].answersOptions);

function showQuestion() {
    nowQuestion.textContent = questionsData[currentQuestion].questionItself;

    for (i = 0; i < questionsData[currentQuestion].answersOptions.length; i++) {
        var answerButton = document.createElement("button");
        answerButton.innerHTML=questionsData[currentQuestion].answersOptions[i];
        answerButton.addEventListener("click", function() {
            userChoice = this.textContent
            console.log("The user choice was " + userChoice)
            return userChoice
            
        });
        posAnswers.appendChild(answerButton);
        }
}


// Confirm if answer is correct (if wrong, minus 5 from time; else show correct and go to next q)

// function checkAnswer() {
//     if 
// }



// Page starts with welcome message/rules
// Once button to start game is clicked welcome message disappears and timers starts
var startGameButton = document.getElementById("startGame");
var welcome = document.querySelector(".welcome-msg");

startGameButton.addEventListener("click", function () {
    welcome.setAttribute("style", "display:none;");
    setTime();
    showQuestion();
});


// TODO's:
// Update rules in Welcome Msg
// !!! Make answers appear as buttons

// Option to store score
// highscores pg
