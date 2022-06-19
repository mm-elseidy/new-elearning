// ============ User Exam Quiz ==============//

var skip = document.getElementById("skip");
var score = document.getElementById("score");
var totalScore = document.getElementById("totalScore");
var countdown = document.getElementById("countdown");
var count = 0;
var scoreCount = 0;
var duartion = 0;
var qaSet = document.querySelectorAll(".qa-set");
var qaAnsRow = document.querySelectorAll(".qa-set .qa-ans-row input");


skip.addEventListener("click", function() {
    step();
    duartion = 30;
});


qaAnsRow.forEach(function(qaAnsRowSingle) {
    qaAnsRowSingle.addEventListener("click", function() {
        setTimeout(function() {
            step();
            duartion = 30
        }, 1000);

        var valid = this.getAttribute("valid");
        if (valid == "valid") {
            scoreCount += 20;
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;
        } else {
            scoreCount -= 20;
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;
        }

    });
});


function step() {
    count += 1;
    for (var i = 0; i < qaSet.length; i++) {
        qaSet[i].className = "qa-set";
    }
    qaSet[count].className = "qa-set active";
    if (count == 5) {
        skip.style.display = "none";
        clearInterval(duartionTime);
        countdown.innerHTML = 0;
    }
}

var duartionTime = setInterval(function() {
    if (duartion == 30) {
        duartion = 0;
    }
    duartion += 1;
    countdown.innerHTML = duartion;
    if (countdown.innerHTML == "30") {
        step()
    }

}, 1000)