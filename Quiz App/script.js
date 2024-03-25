const questions = [
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        answers: [
            {text: "var", correct:false},
            {text: "let", correct:false},
            {text: "const", correct:false},
            {text: "all of the above", correct:true},
        ]
    },
    {
        question: "What does the term DOM stand for in JavaScript?",
        answers: [
            {text: "Document Object Model", correct:true},
            {text: "Data Object Model", correct:false},
            {text: "Document Oriented Model", correct:false},
            {text: "Dynamic Object Manipulation", correct:false},
        ]
    },
    {
        question: "Which method is used to add a new element to the end of an array in JavaScript?",
        answers: [
            {text: "shift()", correct:false},
            {text: "pop()", correct:false},
            {text: "push()", correct:true},
            {text: "unshift()", correct:false},
        ]
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        answers: [
            {text: "()", correct:false},
            {text: "{}", correct:false},
            {text: "[]", correct:false},
            {text: "//", correct:true},
        ]
    }
];

const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')
const nextButton = document.getElementById('next-btn')

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}

function showQuestions() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button")
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answers.correct) {
            button.dataset.correct = answers.correct
        }

        button.addEventListener('click', selectAnswer);
    })
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect) {
        selectedBtn.classList.add("correct")
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect")
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();

    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again!"
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;

    if(currentQuestionIndex < questions.length) {
        showQuestions();
    }
    else {
        showScore();
    }
}

nextButton.addEventListener('click', ()=> {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
})

startQuiz();

