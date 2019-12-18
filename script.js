var myQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: 
           ["In script element",
           "In js element",
           "In header element"],
        correctAnswer: 0
    },
    {   
        question: "Where is the correct place to insert a JavaScript?",
        choices: 
            ["In the body section",
            "In the head section",
            "Either body or head section"],

        correctAnswer: 0 
        
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choices: 
           ["alert('Hello World')",
           "msg('Hello World')",
           "alertBox('Hello World')"],
        correctAnswer: 0
    }
]
// var aBtnEL = document.getElementById("aBtn");
// var bBtnEL = document.getElementById("bBtn");
// var cBtnEL = document.getElementById("cBtn");

var header1El = document.getElementById("header1");
var contentEl = document.getElementById("content");
var startBtnEL = document.getElementById("startBtn");
var questionEL = document.getElementById("main");
var timeEl = document.querySelector("#time");
var feedbackEl = document.getElementById("feedback");
var choicesEl = document.getElementById("choices")
var score = 0;
var secondsLeft = 60;
var currentQuesEl = 0;
var currentQuestion = myQuestions[currentQuesEl];
// var choicesEl = document.getElementById("choices");

function startQuiz (e) {
    e.preventDefault();
    startBtnEL.classList.add("d-none"); //hides the start button - works well
    questionEL.textContent = myQuestions[currentQuesEl].question;
    
    function getChoices() {
        console.log(currentQuestion.choices);
        currentQuestion.choices.forEach( function (choice, i) {
            var choiceButton = document.createElement("button");
            choicesEl.appendChild(choiceButton);
            choiceButton.setAttribute("class", "btn btn-success");
            choiceButton.setAttribute("value", i);
            choiceButton.textContent = i + 1 + ". "+choice;
            choiceButton.onclick = questionClick;
        }
        ) 
    }
    getChoices();
    
    function questionClick (e) {
        e.preventDefault();
        console.log(this.value);
        if (this.value != myQuestions[currentQuesEl].correctAnswer) {
            secondsLeft -= 10;
            if (secondsLeft < 0) {
                secondsLeft = 0;
            }
            
            timeEl.textContent = time;
            feedbackEl.textContent = "Incorrect";
        } else { //if correct
            feedbackEl.textContent = "Correct";
            score++;
        }
        currentQuesEl++;
        function nextQuestion () {
            
        }
    }
    
    function setTime() {
        var timerInterval = setInterval(function() {
            secondsLeft--;
            timeEl.textContent = secondsLeft;
            
            if(secondsLeft === 0) {
                clearInterval(timerInterval);
            }
            
        }, 1000);
        
    }
    setTime();
}



console.log(myQuestions[currentQuesEl].question)
console.log(myQuestions[currentQuesEl].choices.a)

startBtnEL.addEventListener("click", startQuiz);
//     currentQuesEl++;
// aBtnEL.classList.remove('d-none')
// bBtnEL.classList.remove('d-none')
// cBtnEL.classList.remove('d-none')

// aBtnEL.onclick = questionClick;
// bBtnEL.addEventListener("click", questionClick);
// cBtnEL.addEventListener("click", questionClick);

// aBtnEL.textContent = myQuestions[currentQuesEl].choices.a;
// bBtnEL.textContent = myQuestions[currentQuesEl].choices.b;
// cBtnEL.textContent = myQuestions[currentQuesEl].choices.c;

// console.log (questions[0].answer)
// console.log (startBtnEL.addEventListener);
// bBtnEL.classList.remove('d-none')
// cBtnEL.classList.remove('d-none')
// aBtnEL.textContent = questions[currentQuesEl].choices[0];
// bBtnEL.textContent = questions[currentQuesEl].choices[1];
// cBtnEL.textContent = questions[currentQuesEl].choices[2];

// function questionClick(e) {
    //     e.preventDefault();
    //     aBtnEL.onclick() = "a"
    
    //     if (this.value !== questions[currentQuesEl].answer) { //if wrong
    //         console.log(this.value)
    //         console.log (questions[currentQuesEl].answer);
    //         secondsLeft -= 10;
    //         if (secondsLeft < 0) {
        //             secondsLeft = 0;
        //         }
                //         timeEl.textContent = time;
                //         feedbackEl.textContent = "Incorrect";
                //     } else { //if correct
                //         feedbackEl.textContent = "Correct";
                //     }
                    
                // }
