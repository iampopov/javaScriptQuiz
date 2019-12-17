var questions = [
    {
        number: (1),
        question: "Inside which HTML element do we put the JavaScript?",
        answer: (0), // index of the correct choice
        choices: [
            "In script element",
            "In js element",
            "In header element"
        ]
    },
    {   
        number: (2),
        question: "Where is the correct place to insert a JavaScript?",
        answer: (0), // index of the correct choice
        choices: [
            "In the body section",
            "In the head section",
            "Either body or head section"
        ]
    },
    {
        number: [3],
        question: "How do you write 'Hello World' in an alert box?",
        answer: (0), // index of the correct choice
        choices: [
            "alert('Hello World')",
            "msg('Hello World')",
            "alertBox('Hello World')"
        ]
    }
]

var header1El = document.getElementById("header1");
var contentEl = document.getElementById("content");
var startBtnEL = document.getElementById("startBtn");
var questionEL = document.getElementById("main");
var timeEl = document.querySelector("#time");
var aBtnEL = document.getElementById("aBtn");
var bBtnEL = document.getElementById("bBtn");
var cBtnEL = document.getElementById("cBtn");
var score = 0;
var secondsLeft = 60;


function startQuiz (e) {
    e.preventDefault();
    startBtnEL.classList.add("d-none"); //hides the start button - works well
   //timer below works ok
    function setTime() {
        var timerInterval = setInterval(function() {
          secondsLeft--;
          timeEl.textContent = secondsLeft;
      
          if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
          }
      
        }, 1000);

    }
    setTime();
}

startBtnEL.addEventListener("click", startQuiz);
console.log (questions[0].question)
console.log (secondsLeft);
// aBtnEL.classList.remove('d-none')
// bBtnEL.classList.remove('d-none')
// cBtnEL.classList.remove('d-none')
// header1El.textContent = "Question number " + questions[i].number;
// questionEL.textContent = questions[i].question;
// aBtnEL.textContent = questions[i].choices[0];
// bBtnEL.textContent = questions[i].choices[1];
// cBtnEL.textContent = questions[i].choices[2];
