const questionBank = {
  incident: [
    {
      id: 1,
      type: 'single',
      question: 'Client indicates that they would like a way to designate VIP callers on an incident form. How could you accomplish this?',
      options: [
        'VIP Flag dictionary entry',
        'VIP Flag field style',
        'VIP Flash action script',
        'VIP Flag reference decorator'
      ],
      correctAnswers: [1],
      explanation: 'Field styles are used to change the appearance of fields, such as adding a VIP icon or color next to a caller name.',
      topic: 'Incident Management'
    },
    {
      id: 2,
      type: 'single',
      question: 'From which table, is the Incident table extended?',
      options: [
        'Task [sn_task]',
        'Work [sn_work]',
        'Task [task]',
        'Ticket [ticket]'
      ],
      correctAnswers: [2],
      explanation: 'The Incident table is a core ITSM table extended from the base Task [task] table.',
      topic: 'Incident Management'
    },
    {
      id: 3,
      type: 'single',
      question: '"Configure and manage Incident Management properties" Which role has the ability to do that?',
      options: [
        'itil_admin',
        'incident_admin',
        'itil',
        'incident_manager'
      ],
      correctAnswers: [3],
      explanation: 'The incident_manager role is responsible for managing the incident process and its properties.',
      topic: 'Incident Management'
    },
    {
      id: 4,
      type: 'single',
      question: 'Which of the following is the best way to categorize an Incident?',
      options: [
        'Category and Subcategory',
        'Configuration Item and Service',
        'Impact and Urgency',
        'Business Service and Service Offering'
      ],
      correctAnswers: [0],
      explanation: 'Category and Subcategory are the baseline method for high-level classification in ServiceNow.',
      topic: 'Incident Management'
    },
    {
      id: 5,
      type: 'single',
      question: 'What is the minimum role required to delete an Incident?',
      options: [
        'itil',
        'incident_manager',
        'itil_admin',
        'admin'
      ],
      correctAnswers: [2],
      explanation: 'The itil_admin role is typically required to perform deletion of incident records in the baseline configuration.',
      topic: 'Incident Management'
    }
  ],

  problem: [
    {
      id: 6,
      type: 'single',
      question: 'What table is the Problem table extended from?',
      options: [
        'Task',
        'Outage',
        'Major Incident',
        'Problem Task',
        'Incident'
      ],
      correctAnswers: [0],
      explanation: 'Like Incident and Change, the Problem table is an extension of the Task table.',
      topic: 'Problem Management'
    },
    {
      id: 7,
      type: 'single',
      question: 'What state does a Problem record move to when a workaround is found but the root cause is not yet resolved?',
      options: [
        'Root Cause Analysis',
        'Known Error',
        'Fix in Progress',
        'Resolved'
      ],
      correctAnswers: [0],
      explanation: 'In the baseline, a Problem stays in Root Cause Analysis while the workaround is identified and documented.',
      topic: 'Problem Management'
    },
    {
      id: 8,
      type: 'multiple',
      question: 'Which records can be created from a Problem? (Choose 2)',
      options: [
        'Change Request',
        'Knowledge Article',
        'Project Record',
        'Service Offering'
      ],
      correctAnswers: [0, 1],
      explanation: 'A Change Request is used to fix the cause, and a Knowledge Article provides the workaround/known error details.',
      topic: 'Problem Management'
    }
  ],

  change: [
    {
      id: 9,
      type: 'single',
      question: 'In the baseline Change - Normal model, when the Change request goes to the Review state, what happens to the implementation and testing tasks, if they have not been closed?',
      options: [
        'They are automatically canceled',
        'They are automatically closed',
        'They are automatically assigned to the Change assignee and closed',
        'An error displays, requiring that the Tasks be closed before moving to Review'
      ],
      correctAnswers: [0],
      explanation: 'In the standard state model, moving to Review will cancel any remaining open implementation tasks.',
      topic: 'Change Management'
    },
    {
      id: 10,
      type: 'multiple',
      question: 'Which of the below fields are used in conflict detection for Change Request? (Choose 3)',
      options: [
        'Planned end date',
        'Risk',
        'Planned start date',
        'CI Business criticality',
        'Configuration item'
      ],
      correctAnswers: [0, 2, 4],
      explanation: 'Conflict detection checks the CI and the Planned Start/End dates against other changes or maintenance windows.',
      topic: 'Change Management'
    },
    {
      id: 11,
      type: 'multiple',
      question: 'Which of the following are types of Change? (Choose 3)',
      options: [
        'Emergency',
        'Standard',
        'Normal',
        'Routine',
        'Urgent'
      ],
      correctAnswers: [0, 1, 2],
      explanation: 'ServiceNow baseline Change Management uses three types: Standard, Normal, and Emergency.',
      topic: 'Change Management'
    },
    {
      id: 12,
      type: 'single',
      question: 'What happens if a Change Request is rejected by the CAB?',
      options: [
        'The state changes to Canceled',
        'The state changes to New',
        'The state changes to On Hold',
        'The state changes to Authorization'
      ],
      correctAnswers: [1],
      explanation: 'If rejected, the Change Request reverts to the New/Draft state for modifications.',
      topic: 'Change Management'
    }
  ],

  'service-catalog': [
    {
      id: 13,
      type: 'single',
      question: 'What role is given to users that perform request fulfillment work, unless there are particular security requirements?',
      options: [
        'itil',
        'catalog_fulfiller',
        'task_worker',
        'fulfiller',
        'sc_fulfiller'
      ],
      correctAnswers: [0],
      explanation: 'The itil role is the standard baseline role for performing work on tasks and requests.',
      topic: 'Service Catalog'
    },
    {
      id: 14,
      type: 'single',
      question: 'For a Computer request, which record type would you use?',
      options: [
        'Catalog Item',
        'Order Guide',
        'Record Producer',
        'Content Item'
      ],
      correctAnswers: [0],
      explanation: 'Standard hardware or software requests are typically built as Catalog Items.',
      topic: 'Service Catalog'
    },
    {
      id: 15,
      type: 'multiple',
      question: 'How Catalog Items and Service Catalogs are related? (Choose 2)',
      options: [
        'Access to catalog items is determined by the service catalog\'s assigned user criteria',
        'A catalog item can be associated with one or more service catalogs',
        'Service catalogs may contain multiple catalog items',
        'A catalog item can only be associated with one service catalog'
      ],
      correctAnswers: [1, 2],
      explanation: 'ServiceNow allows a many-to-many relationship where items can appear in multiple catalogs.',
      topic: 'Service Catalog'
    },
    {
      id: 16,
      type: 'single',
      question: 'What is a Record Producer?',
      options: [
        'A catalog item used to order a service',
        'An interface used to create a task-based record',
        'A tool to import data into the CMDB',
        'A way to generate reports for the catalog'
      ],
      correctAnswers: [1],
      explanation: 'Record Producers allow users to create records like Incidents directly from the Service Catalog.',
      topic: 'Service Catalog'
    },
    {
      id: 17,
      type: 'single',
      question: 'What is the purpose of an Order Guide?',
      options: [
        'To group multiple catalog items into one request',
        'To track the shipping of hardware',
        'To provide a list of all available services',
        'To manage vendor contracts'
      ],
      correctAnswers: [0],
      explanation: 'Order Guides group multiple items into a single request based on user input.',
      topic: 'Service Catalog'
    }
  ],

  spm: [
    {
      id: 18,
      type: 'single',
      question: 'What controls the movement of the state from Scoping to Awaiting Approval in Release Management?',
      options: [
        'Manual state selection',
        'State model',
        'Workflow',
        'Flow'
      ],
      correctAnswers: [0],
      explanation: 'Release Management often relies on manual state transitions during the scoping phase.',
      topic: 'SPM'
    }
  ],

  cmdb: [
    {
      id: 19,
      type: 'single',
      question: 'What is a Configuration Item (CI)?',
      options: [
        'Any tangible or intangible asset in the CMDB',
        'Only hardware devices',
        'A document describing a process',
        'A user record in the system'
      ],
      correctAnswers: [0],
      explanation: 'CIs can include hardware, software, services, or even business processes tracked in the CMDB.',
      topic: 'CMDB'
    },
    {
      id: 20,
      type: 'single',
      question: 'Which table is the base class for the CMDB?',
      options: [
        'cmdb_ci',
        'cmdb_base',
        'configuration_item',
        'cmdb'
      ],
      correctAnswers: [0],
      explanation: 'The Configuration Item [cmdb_ci] table is the base class for all CIs.',
      topic: 'CMDB'
    }
  ],
  
  all: [] // This will be populated by your startQuiz function logic
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
