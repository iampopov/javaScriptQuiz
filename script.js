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
var header1El = document.getElementById("header1");
var contentEl = document.getElementById("content");
var startBtnEL = document.getElementById("startBtn");
var questionEL = document.getElementById("main");
var timeEl = document.querySelector("#time");
var feedbackEl = document.getElementById("feedback");
var choicesEl = document.getElementById("choices")
var score = 0;
var secondsLeft = 60;
var currentQuestionIndex = 0;
var currentQuestion = myQuestions[currentQuestionIndex];

function startQuiz () {
    startBtnEL = document.getElementById("startBtn");
    startBtnEL.classList.add("d-none"); //hides the start button - works well
    getChoices();
}

function getChoices() {
    // e.preventDefault();
    //console.log(currentQuestion.choices); works
    var currentQuestion = myQuestions[currentQuestionIndex];
    var titleEL = document.getElementById("main");
    titleEL.textContent = currentQuestion.question;
    choicesEl.innerHTML = "";
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
    console.log(currentQuestionIndex);
    function questionClick (e) {
        e.preventDefault();
        // console.log(this.value);
        if (this.value != myQuestions[currentQuestionIndex].correctAnswer) {
            secondsLeft -= 10;
            if (secondsLeft < 0) {
                secondsLeft = 0;
            }
            
            timeEl.textContent = time;
            feedbackEl.textContent = "Incorrect";
        } else { //if correct
            feedbackEl.textContent = "Correct";
            score++;
            // console.log(score); score works
        }
        currentQuestionIndex++;
        getChoices();
        console.log(currentQuestionIndex);
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

startBtnEL.addEventListener("click", startQuiz);

    // function startQuiz (e) {
    //     e.preventDefault();
    //     startBtnEL.classList.add("d-none"); //hides the start button - works well
    //     questionEL.textContent = myQuestions[currentQuestionIndex].question;
        
    //     function getChoices() {
    //         console.log(currentQuestion.choices);
    //         currentQuestion.choices.forEach( function (choice, i) {
    //             var choiceButton = document.createElement("button");
    //             choicesEl.appendChild(choiceButton);
    //             choiceButton.setAttribute("class", "btn btn-success");
    //             choiceButton.setAttribute("value", i);
    //             choiceButton.textContent = i + 1 + ". "+choice;
    //             choiceButton.onclick = questionClick;
    //         }
    //         ) 
    //     }
    //     getChoices();
        
    //     function questionClick (e) {
    //         e.preventDefault();
    //         console.log(this.value);
    //         if (this.value != myQuestions[currentQuestionIndex].correctAnswer) {
    //             secondsLeft -= 10;
    //             if (secondsLeft < 0) {
    //                 secondsLeft = 0;
    //             }
                
    //             timeEl.textContent = time;
    //             feedbackEl.textContent = "Incorrect";
    //         } else { //if correct
    //             feedbackEl.textContent = "Correct";
    //             score++;
    //         }
    //         currentQuestionIndex++;
    //         function nextQuestion () {
    
    //         }
    //     }
        
    //     function setTime() {
    //         var timerInterval = setInterval(function() {
    //             secondsLeft--;
    //             timeEl.textContent = secondsLeft;
                
    //             if(secondsLeft === 0) {
    //                 clearInterval(timerInterval);
    //             }
                
    //         }, 1000);
            
    //     }
    //     setTime();
    // }
    
    
    
    // console.log(myQuestions[currentQuestionIndex].question)
    // console.log(myQuestions[currentQuestionIndex].choices.a)
//     currentQuestionIndex++;
// aBtnEL.classList.remove('d-none')
// bBtnEL.classList.remove('d-none')
// cBtnEL.classList.remove('d-none')

// aBtnEL.onclick = questionClick;
// bBtnEL.addEventListener("click", questionClick);
// cBtnEL.addEventListener("click", questionClick);

// aBtnEL.textContent = myQuestions[currentQuestionIndex].choices.a;
// bBtnEL.textContent = myQuestions[currentQuestionIndex].choices.b;
// cBtnEL.textContent = myQuestions[currentQuestionIndex].choices.c;

// console.log (questions[0].answer)
// console.log (startBtnEL.addEventListener);
// bBtnEL.classList.remove('d-none')
// cBtnEL.classList.remove('d-none')
// aBtnEL.textContent = questions[currentQuestionIndex].choices[0];
// bBtnEL.textContent = questions[currentQuestionIndex].choices[1];
// cBtnEL.textContent = questions[currentQuestionIndex].choices[2];

// function questionClick(e) {
    //     e.preventDefault();
    //     aBtnEL.onclick() = "a"
    
    //     if (this.value !== questions[currentQuestionIndex].answer) { //if wrong
    //         console.log(this.value)
    //         console.log (questions[currentQuestionIndex].answer);
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
