const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('questions');
const answerElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;
let userScore = [];

startButton.addEventListener('click',  startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})

function startGame(){
    const scoreDiv = document.getElementById("score-div");
    if (scoreDiv) {
        scoreDiv.remove();
    }
    userScore = [];
    localStorage.removeItem('quizScore');
    
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion(){
    resetState();
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

        if(shuffledQuestions.length > currentQuestionIndex + 1){
            nextButton.classList.remove('hide');
        }else{
            showScore();
            startButton.innerText = 'Restart';
            startButton.classList.remove('hide');
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
    const results = JSON.parse(localStorage.getItem("quizScore")) || [];

    const correctCount = results.filter(r => r.isCorrect).length;
    const wrongCount = results.length - correctCount;

    // Clear the question area
    questionContainerElement.classList.add('hide');

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
    document.body.appendChild(scoreDiv);
}


const questions = [
  {
    question: 'What does HTML stand for?',
    answer: [
      {text: 'Hyper Text Markup Language', correct: true},
      {text: 'High Tech Modern Language', correct: false},
      {text: 'Hyper Transfer Markup Language', correct: false},
      {text: 'Home Tool Markup Language', correct: false}
    ]
  },
  {
    question: 'Which programming language is known as the language of the web?',
    answer: [
      {text: 'Python', correct: false},
      {text: 'Java', correct: false},
      {text: 'JavaScript', correct: true},
      {text: 'C++', correct: false}
    ]
  },
  {
    question: 'What does CSS stand for?',
    answer: [
      {text: 'Creative Style System', correct: false},
      {text: 'Cascading Style Sheets', correct: true},
      {text: 'Computer Style Sheets', correct: false},
      {text: 'Colorful Style Sheets', correct: false}
    ]
  },
  {
    question: 'Which is the largest ocean on Earth?',
    answer: [
      {text: 'Atlantic Ocean', correct: false},
      {text: 'Indian Ocean', correct: false},
      {text: 'Pacific Ocean', correct: true},
      {text: 'Arctic Ocean', correct: false}
    ]
  },
  {
    question: 'What is the capital of Japan?',
    answer: [
      {text: 'Seoul', correct: false},
      {text: 'Beijing', correct: false},
      {text: 'Tokyo', correct: true},
      {text: 'Bangkok', correct: false}
    ]
  },
  {
    question: 'Which country has the most population?',
    answer: [
      {text: 'India', correct: true},
      {text: 'United States', correct: false},
      {text: 'China', correct: false},
      {text: 'Indonesia', correct: false}
    ]
  },
  {
    question: 'What is the chemical symbol for water?',
    answer: [
      {text: 'H2O', correct: true},
      {text: 'CO2', correct: false},
      {text: 'O2', correct: false},
      {text: 'NaCl', correct: false}
    ]
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answer: [
      {text: 'Venus', correct: false},
      {text: 'Mars', correct: true},
      {text: 'Jupiter', correct: false},
      {text: 'Saturn', correct: false}
    ]
  },
  {
    question: 'What is the human body\'s largest organ?',
    answer: [
      {text: 'Liver', correct: false},
      {text: 'Brain', correct: false},
      {text: 'Skin', correct: true},
      {text: 'Lungs', correct: false}
    ]
  },
  {
    question: 'Who played Iron Man in the Marvel Cinematic Universe?',
    answer: [
      {text: 'Chris Evans', correct: false},
      {text: 'Chris Hemsworth', correct: false},
      {text: 'Robert Downey Jr.', correct: true},
      {text: 'Mark Ruffalo', correct: false}
    ]
  },
  {
    question: 'Which TV show features characters named Ross, Rachel, and Chandler?',
    answer: [
      {text: 'The Office', correct: false},
      {text: 'Friends', correct: true},
      {text: 'How I Met Your Mother', correct: false},
      {text: 'Seinfeld', correct: false}
    ]
  },
  {
    question: 'Who is known as the "King of Pop"?',
    answer: [
      {text: 'Elvis Presley', correct: false},
      {text: 'Michael Jackson', correct: true},
      {text: 'Prince', correct: false},
      {text: 'Madonna', correct: false}
    ]
  },
  {
    question: 'Which country won the 2022 FIFA World Cup?',
    answer: [
      {text: 'Brazil', correct: false},
      {text: 'France', correct: false},
      {text: 'Argentina', correct: true},
      {text: 'Germany', correct: false}
    ]
  },
  {
    question: 'How many players are on a basketball team on the court?',
    answer: [
      {text: '5', correct: true},
      {text: '6', correct: false},
      {text: '7', correct: false},
      {text: '11', correct: false}
    ]
  },
  {
    question: 'In which sport would you perform a "slam dunk"?',
    answer: [
      {text: 'Tennis', correct: false},
      {text: 'Basketball', correct: true},
      {text: 'Soccer', correct: false},
      {text: 'Baseball', correct: false}
    ]
  },
  {
    question: 'How many continents are there?',
    answer: [
      {text: '5', correct: false},
      {text: '6', correct: false},
      {text: '7', correct: true},
      {text: '8', correct: false}
    ]
  },
  {
    question: 'What is the capital of Australia?',
    answer: [
      {text: 'Sydney', correct: false},
      {text: 'Melbourne', correct: false},
      {text: 'Canberra', correct: true},
      {text: 'Perth', correct: false}
    ]
  },
  {
    question: 'Which year did World War II end?',
    answer: [
      {text: '1943', correct: false},
      {text: '1944', correct: false},
      {text: '1945', correct: true},
      {text: '1946', correct: false}
    ]
  },
  {
    question: 'What is the currency of Japan?',
    answer: [
      {text: 'Won', correct: false},
      {text: 'Yen', correct: true},
      {text: 'Yuan', correct: false},
      {text: 'Ringgit', correct: false}
    ]
  },
  {
    question: 'Which platform has a character limit of 280 per post?',
    answer: [
      {text: 'Facebook', correct: false},
      {text: 'Instagram', correct: false},
      {text: 'Twitter (X)', correct: true},
      {text: 'TikTok', correct: false}
    ]
  }
];

