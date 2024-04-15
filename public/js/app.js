var skip = document.querySelector('#skip')
var skip1 = document.querySelector('#skip1')
var score = document.querySelector('#score')
var totalScore = document.querySelector('#totalScore')
var countdown = document.querySelector('#countdown')
var count = 0;
var scoreCount = 0;
var duration = 0;
var qaSet = document.querySelectorAll(".qa_set")
var qaAnsRow = document.querySelectorAll("#qa_ans_row")

skip.addEventListener('click', function () {
    step();
    duration = 10;
})
qaAnsRow.forEach(function (qaAnsRowSingle) {
    qaAnsRowSingle.addEventListener('click', function () {
        setTimeout(function () {
            step();
            duration = 10;
        }, 500)
        let valid = qaAnsRowSingle.querySelector("input").getAttribute("valid")
        if (valid) {
            scoreCount += 10;
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;
        } else {
            scoreCount -= 10;
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;
        }
    })
})

function step() {
    count += 1;
    for (var i = 0; i < qaSet.length; i++) {
        qaSet[i].className = 'hidden'
    }
    qaSet[count].className = 'qa_set block'
    if (count == 9) {
        skip.style.display = 'none'
        skip1.style.display = 'inline-block'
        clearInterval(durationTime)
        countdown.innerHTML = 0;
    }
}

var durationTime = setInterval(function () {
    if (duration == 10) {
        duration = 0;
    }
    duration += 1;
    countdown.innerHTML = duration;
    if (countdown.innerHTML == "10") {
        step()
    }
}, 1000)