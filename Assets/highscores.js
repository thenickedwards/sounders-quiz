var scoresTable = document.getElementById("scorestable");
var previousScores = JSON.parse(localStorage.getItem("highscores"));

console.log({previousScores});

function getHighscores() {

    for (i = 0; i < previousScores.length; i++) {
        console.log(previousScores[i]);
        var newTableRow = document.createElement("tr");
        var name = document.createElement("td");
        var score = document.createElement("td");
        name.textContent = previousScores[i].name;
        score.textContent = previousScores[i].score;
        newTableRow.appendChild(name);
        newTableRow.appendChild(score);
        scoresTable.appendChild(newTableRow);
    }
}

getHighscores();