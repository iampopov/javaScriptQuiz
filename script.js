var myQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: {
           "a": "In script element",
           "b": "In js element",
           "c": "In header element"
        },
        correctAnswer: "a"
    },
    {   
        question: "Where is the correct place to insert a JavaScript?",
        choices: {
            "a":  "In the body section",
            "b":  "In the head section",
            "c":  "Either body or head section"
        },
        correctAnswer: "a" 
        
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choices: {
           "a": "alert('Hello World')",
           "b": "msg('Hello World')",
           "c": "alertBox('Hello World')"
        },
        correctAnswer: "a"
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
var feedbackEl = document.getElementById("feedback");
var score = 0;
var secondsLeft = 60;
var currentQuesEl = 0;
var currentQuestion = myQuestions[currentQuesEl];
// var choicesEl = document.getElementById("choices");

function startQuiz (e) {
    e.preventDefault();
    startBtnEL.classList.add("d-none"); //hides the start button - works well
    questionEL.textContent = myQuestions[currentQuesEl].question;
    getChoices();
    
    function getChoices() {
        var choices = document.getElementById("choices");
        choices.innerHTML = "";
        for (i = 0; i < myQuestions.choices.length; i++) {
            var choiceButton = document.createElement("button");
            choiceButton.setAttribute("value", )
        }
        
        // currentQuestion.choices.forEach(
        //     function (choice, i) {
        //         var choiceButton = document.createElement("button");
        //         choiceButton.setAttribute("class", "btn btn-success");
        //         choiceButton.setAttribute("value", choice);
        //         choiceButton.textContent = i + 1 + ". "+choice;
        //         choiceButton.onclick = questionClick;
        //         choicesEl.appendChild(choiceButton);
        //     }
        ) 
    }
    
    function questionClick (e) {
        e.preventDefault();
        if (this.value !== myQuestions[currentQuesEl].correctAnswer) {
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


console.log(myQuestions[currentQuesEl].question)
console.log(myQuestions[currentQuesEl].choices.a)

startBtnEL.addEventListener("click", startQuiz);
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
                //     currentQuesEl++;
                    
                // }
