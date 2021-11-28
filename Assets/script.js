console.log("Hello and welcome to the quiz!");

var playerScore;
var finalScore = document.querySelector("#final-score");
var scoreSubmit = document.querySelector("#submit-score");
scoreSubmit.className = "hide";

// Q&A variables, objects, arrays, etc.
var questionsData = [
    {
        questionItself: "Which Pacific Northwest icon is emblazoned into the Sounders crest?",
        answersOptions: ["Mount Rainier", "Seattle Space Needle", "Waters of Puget Sound", "A Ride the Ducks Boat"],
        answerCorrect: "Seattle Space Needle",
    },

    {
        questionItself: "In what year did the original Seattle Sounders debut in the North American Soccer League?",
        answersOptions: ["2009", "2016", "1974", "1983"],
        answerCorrect: "1974",
    },

    {
        questionItself: "As of 2021, which Sounder is the all-time leading goal scorer with 60 goals across all competitions?",
        answersOptions: ["Fredy Montero", "Clint Dempsey", "Nicolás Lodeiro", "Raúl Ruidíaz"],
        answerCorrect: "Fredy Montero",
    },

    {
        questionItself: "In late summer of 2018, Seattle Sounders set a record for most consecutive wins during the post-shootout era. How many games was their winning streak?",
        answersOptions: ["15", "34", "11", "9"],
        answerCorrect: "9",
    },

];

// Timer code to run timer used once game starts
var timer = document.querySelector(".time");
var timerInterval;
var secondsLeft = 10;
var remainingTime;

function startTime() {
    // Sets interval in variable
    timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft;
  
      if(secondsLeft < 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        alert("Oh no! You ran out of time which means your score is zero. Try the quiz again to get a better score!");
        location.reload();
      }
  
    }, 1000);
  }

  // Stop timer function (used if no more questions left)
function stopTime() {
    clearInterval(timerInterval);
    playerScore = secondsLeft
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
            
            // Verify player's answer
            // If correct, notify player, clear q and a, and move to next question
            if (userChoice === questionsData[currentQuestion].answerCorrect) {
                showResult.textContent = "Hey, you got that one right!";
                showResult.className = "result-correct";
                nextQuestion();
            } else {
                secondsLeft=secondsLeft-10;
                showResult.textContent = "Sorry, that wasn't correct.";
                showResult.className = "result-incorrect";
                nextQuestion();
            }
        });
    }
}

function nextQuestion() {
    currentQuestion++;
    // If no questions left, move to end quiz
     if (currentQuestion > questionsData.length-1) {
        endQuiz();
    }
    else {
        // still questions left, show next q
        nowQuestion.innerHTML = "";
        posAnswers.innerHTML = "";
        showQuestion();
    }
}

function endQuiz() {
    stopTime();
    nowQuestion.innerHTML = "";
    posAnswers.innerHTML = "";
    showResult.textContent = "";
    scoreSubmit.className = "show";
    finalScore.textContent = playerScore
    console.log("The playerScore is " + playerScore);
}

// Store current player's current score to object and then push to high scores
var currentScore = localStorage.getItem("score");
var playerName = document.getElementById("playername");
var submitButton = document.getElementById("submitnow");

function submitScore(event) {
    event.preventDefault();
    
    if (playerName !== "") {
        var allScores = JSON.parse(localStorage.getItem("highscores")) || [];
        var scoreObject = {
            name: playerName.value,
            score: playerScore
        };
        
        allScores.push(scoreObject);
        localStorage.setItem("highscores", JSON.stringify(allScores));
        location.href = "./highscores.html";
    } else {
        alert("Don't forget to add your initals!");
    }
}

submitButton.addEventListener("click", submitScore);

// Page starts with welcome message/rules
// Once button to start game is clicked welcome message disappears and timers starts
var startGameButton = document.getElementById("startGame");
var welcome = document.querySelector(".welcome-msg");

startGameButton.addEventListener("click", function () {
    welcome.setAttribute("style", "display:none;");
    startTime();
    showQuestion();
});

// Thanks for scrolling all the way through the code! #YNYA