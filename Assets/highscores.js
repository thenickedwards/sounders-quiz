var scoresTable = document.getElementById("scorestable");
var previousScores = JSON.parse(localStorage.getItem("highscores"));

function getHighscores() {

    for (i = 0; i < previousScores.length; i++) {
        var newTableRow = document.createElement("tr");
        var name = document.createElement("td");
        var score = document.createElement("td");
        name.textContent = previousScores[i].name;
        score.textContent = previousScores[i].score;
        scoresTable.appendChild(newTableRow);
    }
}

getHighscores();