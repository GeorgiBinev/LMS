const questionBank = {
  incident: [
    {
      id: 1,
      type: 'single',
      question: 'What is the primary goal of Incident Management?',
      options: [
        'Restore service quickly',
        'Manage assets',
        'Create reports',
        'Manage budgets'
      ],
      correctAnswers: [0],
      explanation: 'Incident Management restores normal service operation quickly.',
      topic: 'Incident Management'
    },
    {
      id: 2,
      type: 'multiple',
      question: 'Which are characteristics of a Major Incident?',
      options: [
        'High business impact',
        'Requires urgent resolution',
        'Always low priority',
        'Can involve executive communication'
      ],
      correctAnswers: [0, 1, 3],
      explanation: 'Major incidents are high-impact and require urgent handling.',
      topic: 'Incident Management'
    }
  ],

  problem: [],
  change: [],
  spm: [],
  cmdb: [],
  'service-catalog': [],
  all: []
};

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

const homeScreen = document.getElementById('home-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const questionCounter = document.getElementById('question-counter');
const scoreText = document.getElementById('score');
const questionText = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const finalScore = document.getElementById('final-score');
const resultsReview = document.getElementById('results-review');
const progressBar = document.getElementById('progress');
const questionType = document.getElementById('question-type');

function startQuiz(topic) {
  questions = [...questionBank[topic]];

  if (topic === 'all') {
    questions = [
      ...questionBank.incident,
      ...questionBank.problem,
      ...questionBank.change,
      ...questionBank.spm,
      ...questionBank.cmdb,
      ...questionBank['service-catalog']
    ];
  }

  questions = shuffleArray(questions);

  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];

  homeScreen.classList.add('hidden');
  resultScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');

  showQuestion();
}

function showQuestion() {
  const question = questions[currentQuestionIndex];

  questionCounter.textContent = `Question ${currentQuestionIndex + 1} / ${questions.length}`;
  scoreText.textContent = `Score: ${score}`;
  questionText.textContent = question.question;

  const progress = (currentQuestionIndex / questions.length) * 100;
  progressBar.style.width = `${progress}%`;

  optionsContainer.innerHTML = '';

  if (question.type === 'multiple') {
    questionType.textContent = 'Select ALL correct answers';
  } else {
    questionType.textContent = 'Select ONE correct answer';
  }

  question.options.forEach((option, index) => {
    const div = document.createElement('div');
    div.classList.add('option');

    const input = document.createElement('input');
    input.type = question.type === 'multiple' ? 'checkbox' : 'radio';
    input.name = 'option';
    input.value = index;

    const label = document.createElement('label');
    label.textContent = option;

    div.appendChild(input);
    div.appendChild(label);

    optionsContainer.appendChild(div);
  });
}

nextBtn.addEventListener('click', () => {
  const question = questions[currentQuestionIndex];

  const selectedInputs = document.querySelectorAll('input[name="option"]:checked');

  if (selectedInputs.length === 0) {
    alert('Please select at least one answer.');
    return;
  }

  const selectedAnswers = Array.from(selectedInputs).map(input => Number(input.value));

  const isCorrect = arraysEqual(
    selectedAnswers.sort(),
    [...question.correctAnswers].sort()
  );

  if (isCorrect) {
    score++;
  }

  userAnswers.push({
    question: question.question,
    selectedAnswers,
    correctAnswers: question.correctAnswers,
    options: question.options,
    explanation: question.explanation,
    isCorrect
  });

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
});

function showResults() {
  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');

  finalScore.textContent = `You scored ${score} / ${questions.length}`;

  resultsReview.innerHTML = '';

  userAnswers.forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('review-item');

    const selectedText = item.selectedAnswers
      .map(i => item.options[i])
      .join(', ');

    const correctText = item.correctAnswers
      .map(i => item.options[i])
      .join(', ');

    div.innerHTML = `
      <h4>${index + 1}. ${item.question}</h4>
      <p class="${item.isCorrect ? 'correct' : 'wrong'}">
        ${item.isCorrect ? 'Correct' : 'Wrong'}
      </p>
      <p><strong>Your answer:</strong> ${selectedText}</p>
      <p><strong>Correct answer:</strong> ${correctText}</p>
      <p class="explanation"><strong>Explanation:</strong> ${item.explanation}</p>
    `;

    resultsReview.appendChild(div);
  });
}

function goHome() {
  resultScreen.classList.add('hidden');
  homeScreen.classList.remove('hidden');
}

function arraysEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}
