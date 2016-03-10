var game = function() {

    // private members
    var factor = document.getElementById('factor');
    var problemsPerGame = 3; // default to 3
    
    function printGame() {
        
        // determine the number of problems to show
        setProblemCount(document.getElementById('problemCount').value);
        
        var gameForm = '';
        
        for (var i = 1; i <= problemsPerGame; i++) {
            gameForm += factor.value + ' x ' + i + ' = <input type="text" id="answer' + i + '" size="5" /><br>';
        }
        
        var g = document.getElementById('game');
        g.innerHTML = gameForm;
        
        // show the calculate score button
        document.getElementById('calculate').style.display = "block";
    }
    
    function calculateScore() {
        
        var problemsInGame = getProblemCount();
        var score = 0;
        
        // loop through the text boxes and calculate the number that are correct
        for (var i = 1; i <= problemsInGame; i++) {
            var answer = document.getElementById('answer' + i).value;
            if(i * factor.value == answer) {
                score++;
            }
        }
        
        var result = {
            name: player.getName(),
            score: score,
            problems: problemsInGame,
            factor: factor.value
        };
        
        scoreboard.addResult(result);
        scoreboard.updateScoreboard();

        // hide the calculate score button        
        document.getElementById('calculate').style.display = "none";
    }
    
    function setProblemCount(newProblemCount) {
        problemsPerGame = newProblemCount;
    }
    
    function getProblemCount() {
        return problemsPerGame;
    }
    
    // public members
    return {
        printGame: printGame,
        calculateScore: calculateScore,
        setProblemCount: setProblemCount,
        getProblemCount: getProblemCount
    };
        
}();