import { questions } from './questions.js';
import { startTimer } from './timer.js';

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('questions');
const answerElement = document.getElementById('answer-buttons');
const rulesBox = document.getElementById('rules-box');
const rulesStartBtn = document.getElementById('rules-start-btn');
const quitBtn = document.getElementById('quit-btn');
const controlBar = document.querySelector('.control');
const progressBar = document.querySelector('.progress');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');

totalQuestionsSpan.innerText = questions.length;
let shuffledQuestions, currentQuestionIndex;
let userScore = [];

rulesBox.classList.add('hide');
questionContainerElement.classList.add('hide');
controlBar.classList.remove('hide'); // needed so Start button can show
startButton.classList.remove('hide');
nextButton.classList.add('hide');
progressBar.classList.add('hide');


document.addEventListener("timeUp", () => {
    endQuizDueToTime();
});

startButton.addEventListener('click', () => {
     const oldScoreDiv = document.getElementById("score-div");
      if (oldScoreDiv) {
        oldScoreDiv.remove();
    }
    startButton.classList.add('hide');
    rulesBox.classList.remove('hide');
});

quitBtn.addEventListener('click', () => {
    rulesBox.classList.add('hide');
    questionContainerElement.classList.add('hide');
    progressBar.classList.add('hide');

    const oldScoreDiv = document.getElementById("score-div");
    if (oldScoreDiv) oldScoreDiv.remove();

    startButton.innerText = 'Start';
    startButton.classList.remove('hide');
});

rulesStartBtn.addEventListener('click', () => {
    rulesBox.classList.add('hide');
    progressBar.classList.remove('hide');
    startGame();
});

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        currentQuestionIndex++;
        setNextQuestion();
    } else {
        showScore(); // ✅ Submit
    }
});
// startButton.addEventListener('click',  startGame);
// nextButton.addEventListener('click', () => {
//     currentQuestionIndex++;
//     setNextQuestion();
// })

function endQuizDueToTime() {
    // Stop user interaction
    nextButton.classList.add('hide');

    Array.from(answerElement.children).forEach(btn => {
        btn.disabled = true;
    });

    showScore(); // ✅ auto-submit
}

function startGame(){
    userScore = [];
    localStorage.removeItem('quizScore');
    localStorage.setItem('quizStarted', 'true');

    nextButton.innerText = 'Next';

    startTimer();

    startButton.classList.add('hide');
    controlBar.classList.remove('hide');
    questionContainerElement.classList.remove('hide');

    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion(){
    resetState();
    currentQuestionSpan.innerText = currentQuestionIndex + 1;
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question){
    resetState();
    questionElement.innerText = question.question;
    question.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerElement.appendChild(button)
    });
    
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    userScore.push({
        question: shuffledQuestions[currentQuestionIndex].question,
        selectedAnswer: selectedButton.innerText,
        correctAnswer: shuffledQuestions[currentQuestionIndex].answer.find(ans => ans.correct).text,
        isCorrect: correct ? true : false
    });

    localStorage.setItem('quizScore', JSON.stringify(userScore));


    setStatusClass(document.body, correct);
    Array.from(answerElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
         });

       if (currentQuestionIndex < shuffledQuestions.length - 1) {
            nextButton.innerText = 'Next';
            nextButton.classList.remove('hide');
        } else {
            nextButton.innerText = 'Submit';
            nextButton.classList.remove('hide');
        }
   
}

function setStatusClass(element, correct){
    clearStatus(element);
    if(correct){
        element.classList.add('correct');
    }else{
        element.classList.add('wrong');
    }
}

function clearStatus(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function resetState(){
    clearStatus(document.body);
    nextButton.classList.add('hide');
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild);
    }
}
function showScore() {
    localStorage.setItem('quizStarted', 'false');
    progressBar.classList.add('hide');
    const results = JSON.parse(localStorage.getItem("quizScore")) || [];

    const correctCount = results.filter(r => r.isCorrect).length;
    const wrongCount = results.length - correctCount;

    // Clear the question area
    questionElement.innerText = '';
    answerElement.innerHTML = '';
    nextButton.classList.add('hide');

    const oldScoreDiv = document.getElementById("score-div");
    if (oldScoreDiv) {
        oldScoreDiv.remove();
    }

    // Create score display
    const scoreDiv = document.createElement("div");
    scoreDiv.id = "score-div";
    scoreDiv.innerHTML = `
        <h2>Your Score</h2>
        <p>Total Questions: <strong>${results.length}</strong></p>
        <p>✔ Correct: <strong>${correctCount}</strong></p>
        <p>✖ Wrong: <strong>${wrongCount}</strong></p>
        <hr>
    `;
    questionContainerElement.appendChild(scoreDiv);
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
    quitBtn.classList.remove('hide');
    
}

