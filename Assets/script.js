console.log("Hello and welcome to the quiz!");

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
        answerCorrect: "Eight",
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
// Storing html elements as variables
var quizSection = document.getElementById("QandA");
var nowQuestion = document.getElementById("questions");
var posAnswers = document.getElementById("answers");
var showResult = document.getElementById("result");
var currentQuestion = 0;
var userChoice = "";

function showQuestion() {
    // Render question to page
    nowQuestion.textContent = questionsData[currentQuestion].questionItself;

    // For loop to iterate and render answers as buttons
    for (i = 0; i < questionsData[currentQuestion].answersOptions.length; i++) {
        var answerButton = document.createElement("button");
        answerButton.innerHTML=questionsData[currentQuestion].answersOptions[i];
        posAnswers.appendChild(answerButton);

        // Listener for button clicks and store player's answer
        answerButton.addEventListener("click", function() {
            userChoice = this.textContent
            // console.log("The userChoice was " + userChoice)
            
            // Verify player's answer
            // If correct, notify player, clear q and a, and move to next question
            if (userChoice === questionsData[currentQuestion].answerCorrect) {
                // console.log("userChoice is " + userChoice)
                // console.log("The user was right! Next question.")
                showResult.textContent = "Hey, you got that one right!";
                showResult.className = "result-correct";
                nowQuestion.innerHTML = "";
                posAnswers.innerHTML = "";
                currentQuestion++
                showQuestion();
            } else {
                secondsLeft=secondsLeft-10;
                showResult.textContent = "Sorry, that wasn't correct.";
                showResult.className = "result-incorrect";
                nowQuestion.innerHTML = "";
                posAnswers.innerHTML = "";
                currentQuestion++
                showQuestion();
            }


        });
    }
}

// Confirm if answer is correct (if wrong, minus 5 from time; else show correct and go to next q)

// function checkAnswer() {
//     if (userChoice = questionsData[currentQuestion].answerCorrect) {
//         console.log("userChoice is " + userChoice)
//         console.log("answerCorrect is" + questionsData[currentQuestion].answerCorrect)
//     }

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

// Option to store score
// highscores pg
