
var LetsLearnHowToCodeQuiz = [
    {
        question: "what is a JavaScript data type?",
        a: 'boolean',
        b: 'document',
        c: 'index',
        d: 'paradox',
        e: 'all of the above',
        answer: 'a'
    },
    {
        question: "Which symbol or symbols can be used for comments when using JavaScript?",
            a: '!-',
            b: '&',
            c: '*/',
            d: '!',
            e: 'Both a and b',
        answer: 'c'
    },
    {
        question: "What code would a developer use for a Pop up box?",
            a: 'call to action',
            b: 'alert',
            c: 'warning',
            d: 'pop up box',
            e: 'all of the above',
        answer: 'b'
    },
    {
        question: "What is an example of a type of loops in JavaScript?",
            a: 'for loop',
            b: 'absolute loop',
            c: 'if loop',
            d: 'boolean loop',
            e: 'both c and d',
        answer: 'a'
    },
];

var score = 0;
var timeLeft = 100;
const timePenalty = 25;
var lastQuestionIndex = LetsLearnHowToCodeQuiz.length;
var questionIndex = 0;
var questionsEl = document.getElementById("question");
var startQuizEl = document.querySelector("#start-btn");
var containerEl = document.querySelector(".container");
var openingEl = document.querySelector(".opening");
var timerEl = document.querySelector("#timer");
var gameOverEl = document.querySelector(".game-over");
var finalScoreEl = document.querySelector("#finalscore");
var choiceOptionA = document.querySelector("#a");
var choiceOptionB = document.querySelector("#b");
var choiceOptionC = document.querySelector("#c");
var choiceOptionD = document.querySelector("#d");
var choiceOptionE = document.querySelector("#e");
var correct;

var showQuestion = function () {
    if (questionIndex === lastQuestionIndex) {
        return userScore();
    } 
    var currentQuestion = LetsLearnHowToCodeQuiz[questionIndex];
    questionsEl.innerHTML = "<h2>" + currentQuestion.question + "</h2>";
    choiceOptionA.innerHTML = currentQuestion.a;
    choiceOptionB.innerHTML = currentQuestion.b;
    choiceOptionC.innerHTML = currentQuestion.c;
    choiceOptionD.innerHTML = currentQuestion.d;
    choiceOptionE.innerHTML = currentQuestion.e;
}       

function startQuiz() {
    
    openingEl.setAttribute("class", "hide");
    containerEl.removeAttribute("class", "hide");
    countdowmTimer();
    showQuestion();
};

function countdowmTimer() {
    timer = setInterval(function () {
       timerEl.textContent = "Time: " + timeLeft;
       
        if (timeLeft >= 0) {
            timeLeft--;
        } else {
            clearInterval(timer);
            alert('Game Over!');
            userScore();
        }
    }, 1000);
};


function userScore() {
    clearInterval(timer);
    containerEl.setAttribute("class", "hide");
    gameOverEl.removeAttribute("class", "hide");
    finalScoreEl.textContent = "Congratulations you scored" + score + ".";
};

function compareAnswer(answer) {
    correct = LetsLearnHowToCodeQuiz[questionIndex].answer;

    if (answer === correct && questionIndex !== lastQuestionIndex){
        
        score++;
        alert("You Are Correct!");
        questionIndex++;
        showQuestion();

    } else if (answer !== correct && questionIndex !== lastQuestionIndex) {
        
        timeLeft = timeLeft - timePenalty;
        alert("You Are Incorrect!")
        questionIndex++;     
        showQuestion();
    } else {
        userScore();
    };
};

startQuizEl.addEventListener("click", startQuiz);