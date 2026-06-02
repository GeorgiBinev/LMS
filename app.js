const questionBank = {
  incident: [
    {
      id: 1,
      type: 'single',
      question: 'Client indicates that they would like a way to designate VIP callers on an incident form. How could you accomplish this?',
      options: ['VIP Flag dictionary entry', 'VIP Flag field style', 'VIP Flash action script', 'VIP Flag reference decorator'],
      correctAnswers: [1],
      explanation: 'Field styles are used to change the appearance of fields, such as adding a VIP icon next to a caller name.',
      topic: 'Incident Management'
    },
    {
      id: 2,
      type: 'single',
      question: 'From which table is the Incident table extended?',
      options: ['Task [sn_task]', 'Work [sn_work]', 'Task [task]', 'Ticket [ticket]'],
      correctAnswers: [2],
      explanation: 'The Incident table is a core ITSM table extended from the base Task [task] table.',
      topic: 'Incident Management'
    },
    {
      id: 3,
      type: 'single',
      question: 'Which role has the ability to configure and manage Incident Management properties?',
      options: ['itil_admin', 'incident_admin', 'itil', 'incident_manager'],
      correctAnswers: [3],
      explanation: 'The incident_manager role is responsible for managing the incident process and its properties.',
      topic: 'Incident Management'
    },
    {
      id: 4,
      type: 'single',
      question: 'Which of the following is the best way to categorize an Incident?',
      options: ['Category and Subcategory', 'Configuration Item and Service', 'Impact and Urgency', 'Business Service and Service Offering'],
      correctAnswers: [0],
      explanation: 'Category and Subcategory are the baseline method for high-level classification in ServiceNow.',
      topic: 'Incident Management'
    },
    {
      id: 5,
      type: 'single',
      question: 'What is the minimum role required to delete an Incident?',
      options: ['itil', 'incident_manager', 'itil_admin', 'admin'],
      correctAnswers: [2],
      explanation: 'The itil_admin role is typically required to perform deletion of incident records.',
      topic: 'Incident Management'
    },
    {
      id: 6,
      type: 'single',
      question: 'Which of the following field types is used to display the "Caller" field on the Incident form?',
      options: ['String', 'Reference', 'Choice', 'Journal'],
      correctAnswers: [1],
      explanation: 'The Caller field is a Reference field pointing to the User [sys_user] table.',
      topic: 'Incident Management'
    },
    {
      id: 7,
      type: 'multiple',
      question: 'Which of the following are valid Incident states? (Choose 3)',
      options: ['New', 'In Progress', 'On Hold', 'Awaiting Approval', 'Fixed'],
      correctAnswers: [0, 1, 2],
      explanation: 'Baseline incident states include New, In Progress, On Hold, Resolved, Closed, and Canceled.',
      topic: 'Incident Management'
    },
    {
      id: 8,
      type: 'single',
      question: 'In the baseline Incident state model, which state indicates the Incident is no longer active but can still be reopened?',
      options: ['Closed', 'Resolved', 'On Hold', 'Canceled'],
      correctAnswers: [1],
      explanation: 'The Resolved state indicates the fix is applied. It stays in Resolved until a duration passes, then moves to Closed.',
      topic: 'Incident Management'
    },
    {
      id: 9,
      type: 'single',
      question: 'When an incident is set to "Resolved", what happens to the associated SLAs?',
      options: ['They are deleted', 'They are paused', 'They are completed', 'Nothing happens'],
      correctAnswers: [1],
      explanation: 'Reaching the Resolved state typically pauses the SLA until the Incident is Closed.',
      topic: 'Incident Management'
    },
    {
      id: 10,
      type: 'single',
      question: 'Which UI Action moves an incident from "Resolved" back to "In Progress"?',
      options: ['Reopen Incident', 'Undo Resolution', 'Back to Work', 'Resume Incident'],
      correctAnswers: [0],
      explanation: 'If a caller is not satisfied with the resolution, the "Reopen Incident" action is used.',
      topic: 'Incident Management'
    },
    {
      id: 11,
      type: 'single',
      question: 'Which field on the Incident form is used to track the number of times the record has been updated?',
      options: ['Updates', 'Sys mod count', 'Reassignment count', 'Update count'],
      correctAnswers: [1],
      explanation: 'The sys_mod_count field tracks every time the record is saved.',
      topic: 'Incident Management'
    }
  ],

  problem: [
    {
      id: 12,
      type: 'single',
      question: 'What table is the Problem table extended from?',
      options: ['Task', 'Outage', 'Major Incident', 'Problem Task', 'Incident'],
      correctAnswers: [0],
      explanation: 'The Problem table is an extension of the Task table.',
      topic: 'Problem Management'
    },
    {
      id: 13,
      type: 'single',
      question: 'What state does a Problem record move to when a workaround is found but the root cause is not yet resolved?',
      options: ['Root Cause Analysis', 'Known Error', 'Fix in Progress', 'Resolved'],
      correctAnswers: [0],
      explanation: 'A Problem stays in Root Cause Analysis while the workaround is identified and documented.',
      topic: 'Problem Management'
    },
    {
      id: 14,
      type: 'multiple',
      question: 'Which records can be created from a Problem? (Choose 2)',
      options: ['Change Request', 'Knowledge Article', 'Project Record', 'Service Offering'],
      correctAnswers: [0, 1],
      explanation: 'A Change Request is used to fix the cause, and a Knowledge Article provides the workaround.',
      topic: 'Problem Management'
    },
    {
      id: 15,
      type: 'single',
      question: 'What is the purpose of the "Confirm" button on a Problem record?',
      options: ['To acknowledge the problem exists', 'To move the state to Root Cause Analysis', 'To assign the problem to a group', 'To close the problem'],
      correctAnswers: [1],
      explanation: 'Confirming the problem validates it and moves it into the RCA phase.',
      topic: 'Problem Management'
    },
    {
      id: 16,
      type: 'single',
      question: 'Which role is required to move a Problem to the "Closed" state?',
      options: ['itil', 'problem_coordinator', 'problem_admin', 'problem_manager'],
      correctAnswers: [3],
      explanation: 'The problem_manager role typically has the authority to close out problem records.',
      topic: 'Problem Management'
    },
    {
      id: 17,
      type: 'single',
      question: 'In Problem Management, what does the "Create Known Error" button do?',
      options: ['Creates a Knowledge Article', 'Creates a Problem Task', 'Creates a Change Request', 'Sends an email to all users'],
      correctAnswers: [0],
      explanation: 'Creating a Known Error generates a Knowledge Article so users can see workarounds.',
      topic: 'Problem Management'
    },
    {
      id: 18,
      type: 'single',
      question: 'Which of the following is a key differentiator between a Problem and an Incident?',
      options: ['Problems always have higher priority', 'Incidents are about service restoration; Problems are about identifying the root cause', 'Problems only involve hardware', 'Incidents cannot be related to CIs'],
      correctAnswers: [1],
      explanation: 'Incident Management focuses on restoration, while Problem Management focuses on root cause.',
      topic: 'Problem Management'
    },
    {
      id: 19,
      type: 'multiple',
      question: 'What are valid ways to create a Problem record? (Choose 2)',
      options: ['From an Incident record', 'From a Change Request', 'Automatically from the CMDB', 'Directly from the Problem application'],
      correctAnswers: [0, 3],
      explanation: 'Problems are usually identified from Incidents or created proactively.',
      topic: 'Problem Management'
    }
  ],

  change: [
    {
      id: 20,
      type: 'single',
      question: 'In the baseline Change - Normal model, when the Change request goes to the Review state, what happens to open tasks?',
      options: ['They are automatically canceled', 'They are automatically closed', 'Assigned to assignee', 'Error displays'],
      correctAnswers: [0],
      explanation: 'Normal changes cancel open tasks when moving to the Review phase.',
      topic: 'Change Management'
    },
    {
      id: 21,
      type: 'multiple',
      question: 'Which of the below fields are used in conflict detection for Change Request? (Choose 3)',
      options: ['Planned end date', 'Risk', 'Planned start date', 'CI Business criticality', 'Configuration item'],
      correctAnswers: [0, 2, 4],
      explanation: 'Conflict detection checks the CI and the Planned Start/End dates.',
      topic: 'Change Management'
    },
    {
      id: 22,
      type: 'multiple',
      question: 'Which of the following are types of Change? (Choose 3)',
      options: ['Emergency', 'Standard', 'Normal', 'Routine', 'Urgent'],
      correctAnswers: [0, 1, 2],
      explanation: 'ServiceNow baseline Change Management uses three types: Standard, Normal, and Emergency.',
      topic: 'Change Management'
    },
    {
      id: 23,
      type: 'single',
      question: 'What happens if a Change Request is rejected by the CAB?',
      options: ['The state changes to Canceled', 'The state changes to New', 'The state changes to On Hold', 'The state changes to Authorization'],
      correctAnswers: [1],
      explanation: 'If rejected, the Change Request reverts to the New/Draft state.',
      topic: 'Change Management'
    },
    {
      id: 24,
      type: 'single',
      question: 'Which table stores Change Request tasks?',
      options: ['change_task', 'change_request_task', 'task_change', 'sc_task'],
      correctAnswers: [0],
      explanation: 'Change tasks are stored in the change_task table.',
      topic: 'Change Management'
    },
    {
      id: 25,
      type: 'single',
      question: 'A Standard Change is what type of change?',
      options: ['High risk, low impact', 'Pre-approved, low risk', 'High urgency, high risk', 'Requires CAB approval every time'],
      correctAnswers: [1],
      explanation: 'Standard changes are pre-approved and low-risk.',
      topic: 'Change Management'
    },
    {
      id: 26,
      type: 'single',
      question: 'Which tool allows Change Managers to manage Change Request schedules and detect conflicts visually?',
      options: ['Change Calendar', 'Change Workbench', 'Timeline View', 'Conflict Map'],
      correctAnswers: [1],
      explanation: 'The Change Management Workbench provides a specialized interface for visualizing the process.',
      topic: 'Change Management'
    },
    {
      id: 27,
      type: 'single',
      question: 'Which table stores Change Request [change_request] approval records?',
      options: ['sysapproval_approver', 'change_approval', 'task_approval', 'sys_approver'],
      correctAnswers: [0],
      explanation: 'All task-based approvals are stored in the sysapproval_approver table.',
      topic: 'Change Management'
    },
    {
      id: 28,
      type: 'single',
      question: 'Who can move a Change Request from "New" to "Assess"?',
      options: ['The Change Requester', 'The Change Manager', 'The Assignee', 'Anyone with the itil role'],
      correctAnswers: [0],
      explanation: 'The user who creates the Change typically initiates the move to assessment.',
      topic: 'Change Management'
    },
    {
      id: 29,
      type: 'multiple',
      question: 'Which of the following are valid Change Request states? (Choose 3)',
      options: ['New', 'Assess', 'Authorize', 'Pending', 'Awaiting Fix'],
      correctAnswers: [0, 1, 2],
      explanation: 'Baseline Change states include New, Assess, and Authorize.',
      topic: 'Change Management'
    }
  ],

  'service-catalog': [
    {
      id: 30,
      type: 'single',
      question: 'What role is given to users that perform request fulfillment work?',
      options: ['itil', 'catalog_fulfiller', 'task_worker', 'fulfiller', 'sc_fulfiller'],
      correctAnswers: [0],
      explanation: 'The itil role is the standard baseline role for performing work on tasks.',
      topic: 'Service Catalog'
    },
    {
      id: 31,
      type: 'single',
      question: 'For a Computer request, which record type would you use?',
      options: ['Catalog Item', 'Order Guide', 'Record Producer', 'Content Item'],
      correctAnswers: [0],
      explanation: 'Standard hardware requests are typically Catalog Items.',
      topic: 'Service Catalog'
    },
    {
      id: 32,
      type: 'multiple',
      question: 'How Catalog Items and Service Catalogs are related? (Choose 2)',
      options: ['Access to catalog items is determined by user criteria', 'A catalog item can be associated with one or more service catalogs', 'Service catalogs may contain multiple catalog items', 'A catalog item can only be associated with one service catalog'],
      correctAnswers: [1, 2],
      explanation: 'ServiceNow allows a many-to-many relationship between items and catalogs.',
      topic: 'Service Catalog'
    },
    {
      id: 33,
      type: 'single',
      question: 'What is a Record Producer?',
      options: ['A catalog item used to order a service', 'An interface used to create a task-based record', 'A tool to import data into the CMDB', 'A way to generate reports'],
      correctAnswers: [1],
      explanation: 'Record Producers allow users to create records like Incidents directly from the Service Catalog.',
      topic: 'Service Catalog'
    },
    {
      id: 34,
      type: 'single',
      question: 'What is the purpose of an Order Guide?',
      options: ['To group multiple catalog items into one request', 'To track the shipping of hardware', 'To provide a list of all available services', 'To manage vendor contracts'],
      correctAnswers: [0],
      explanation: 'Order Guides group multiple items into a single request based on user input.',
      topic: 'Service Catalog'
    },
    {
      id: 35,
      type: 'single',
      question: 'Which of the following is used to restrict who can see a Service Catalog?',
      options: ['User Criteria', 'ACLs', 'Business Rules', 'Dictionary Overrides'],
      correctAnswers: [0],
      explanation: 'User Criteria defines access to catalogs and items.',
      topic: 'Service Catalog'
    },
    {
      id: 36,
      type: 'single',
      question: 'In the Service Catalog, what is created when an order is submitted?',
      options: ['REQ, RITM, and Task', 'INC and Task', 'CHG and RITM', 'PRB and Task'],
      correctAnswers: [0],
      explanation: 'Submitting an order creates a Request (REQ), Requested Item (RITM), and Catalog Task.',
      topic: 'Service Catalog'
    },
    {
      id: 37,
      type: 'multiple',
      question: 'Which of the following are types of Catalog Items? (Choose 2)',
      options: ['Content Item', 'Order Guide', 'Service Level Agreement', 'UI Policy'],
      correctAnswers: [0, 1],
      explanation: 'Content Items and Order Guides are specific types of Service Catalog components.',
      topic: 'Service Catalog'
    },
    {
      id: 38,
      type: 'single',
      question: 'Which table stores the items within a single request?',
      options: ['sc_req_item', 'sc_request', 'sc_task', 'sc_item'],
      correctAnswers: [0],
      explanation: 'The Requested Item [sc_req_item] table stores individual items (RITMs).',
      topic: 'Service Catalog'
    },
    {
      id: 39,
      type: 'multiple',
      question: 'What can be defined in a Service Catalog Category? (Choose 2)',
      options: ['A title and description', 'Workflow for the items', 'An icon or image', 'Approval rules for the category'],
      correctAnswers: [0, 2],
      explanation: 'Categories use titles, descriptions, and icons for organization.',
      topic: 'Service Catalog'
    },
    {
      id: 40,
      type: 'single',
      question: 'What is the purpose of the "Variable Set" in the Service Catalog?',
      options: ['To store a single variable', 'To allow a group of variables to be reused across multiple items', 'To define the price of an item', 'To set the approval workflow'],
      correctAnswers: [1],
      explanation: 'Variable Sets allow you to reuse a collection of variables across many items.',
      topic: 'Service Catalog'
    }
  ],

  cmdb: [
    {
      id: 41,
      type: 'single',
      question: 'What is a Configuration Item (CI)?',
      options: ['Any tangible or intangible asset in the CMDB', 'Only hardware devices', 'A document describing a process', 'A user record'],
      correctAnswers: [0],
      explanation: 'CIs can include hardware, software, services, or business processes.',
      topic: 'CMDB'
    },
    {
      id: 42,
      type: 'single',
      question: 'Which table is the base class for the CMDB?',
      options: ['cmdb_ci', 'cmdb_base', 'configuration_item', 'cmdb'],
      correctAnswers: [0],
      explanation: 'The cmdb_ci table is the base class for all CIs.',
      topic: 'CMDB'
    },
    {
      id: 43,
      type: 'single',
      question: 'What is the name of the tool used to visualize CI relationships?',
      options: ['Dependency Views', 'Relationship Mapper', 'CI Explorer', 'Schema Map'],
      correctAnswers: [0],
      explanation: 'Dependency Views provide a graphical representation of CI relationships.',
      topic: 'CMDB'
    },
    {
      id: 44,
      type: 'multiple',
      question: 'Which of the following are valid CI relationship types? (Choose 2)',
      options: ['Runs on', 'Depends on', 'Extended from', 'Related to'],
      correctAnswers: [0, 1],
      explanation: 'Common relationship types include Runs on and Depends on.',
      topic: 'CMDB'
    },
    {
      id: 45,
      type: 'single',
      question: 'Which ServiceNow feature allows for the automatic population of the CMDB?',
      options: ['Discovery', 'Import Sets', 'Service Mapping', 'Data Collector'],
      correctAnswers: [0],
      explanation: 'ServiceNow Discovery finds devices and applications on your network.',
      topic: 'CMDB'
    },
    {
      id: 46,
      type: 'single',
      question: 'What is the purpose of the CI Class Manager?',
      options: ['To manage the CI hierarchy and definitions', 'To create new CIs manually', 'To delete duplicate CIs', 'To track CI depreciation'],
      correctAnswers: [0],
      explanation: 'The CI Class Manager is the central location for managing the CMDB structure.',
      topic: 'CMDB'
    },
    {
      id: 47,
      type: 'multiple',
      question: 'What are the two main types of CI relationships? (Choose 2)',
      options: ['Parent/Child', 'Upstream/Downstream', 'Source/Target', 'Class/Subclass'],
      correctAnswers: [0, 1],
      explanation: 'ServiceNow uses Parent/Child and Upstream/Downstream terminology.',
      topic: 'CMDB'
    },
    {
      id: 48,
      type: 'single',
      question: 'Which table is used to store CI relationships?',
      options: ['cmdb_rel_ci', 'cmdb_relationship', 'ci_relationship', 'sys_rel_ci'],
      correctAnswers: [0],
      explanation: 'All relationships between CIs are stored in the cmdb_rel_ci table.',
      topic: 'CMDB'
    },
    {
      id: 49,
      type: 'single',
      question: 'What is the relationship between a "Service" CI and a "Server" CI called?',
      options: ['Depends on / Used by', 'Hosted on / Hosts', 'Runs on / Runs', 'Member of / Contains'],
      correctAnswers: [0],
      explanation: 'A Service typically "Depends on" the underlying infrastructure.',
      topic: 'CMDB'
    }
  ],

  spm: [
    {
      id: 50,
      type: 'single',
      question: 'What controls the movement of the state from Scoping to Awaiting Approval in Release Management?',
      options: ['Manual state selection', 'State model', 'Workflow', 'Flow'],
      correctAnswers: [0],
      explanation: 'Release Management often relies on manual state transitions during scoping.',
      topic: 'SPM'
    },
    {
      id: 51,
      type: 'single',
      question: 'Which application is used to define and manage Service Level Agreements?',
      options: ['Service Level Management', 'SLA Manager', 'Task Management', 'Service Desk'],
      correctAnswers: [0],
      explanation: 'Service Level Management provides the tools to define SLA, OLA, and UC.',
      topic: 'SPM'
    },
    {
      id: 52,
      type: 'single',
      question: 'What does an SLA "Retroactive start" do when enabled?',
      options: ['Starts the SLA from the time the record was created', 'Starts the SLA from the time it was assigned', 'Recalculates the SLA after it expires', 'Allows the SLA to pause automatically'],
      correctAnswers: [0],
      explanation: 'Retroactive start ensures the SLA timing begins from the original creation date/time.',
      topic: 'SPM'
    },
    {
      id: 53,
      type: 'single',
      question: 'What is the primary difference between an SLA and an OLA?',
      options: ['OLA is for internal groups, SLA is with the customer', 'SLA is internal, OLA is with a vendor', 'OLA has no financial penalty', 'SLA is only for Incidents'],
      correctAnswers: [0],
      explanation: 'SLAs are customer-facing; OLAs are between internal departments.',
      topic: 'SPM'
    },
    {
      id: 54,
      type: 'single',
      question: 'What is the purpose of the Benchmarks application?',
      options: ['Compare your instance performance with others', 'Track user login times', 'Measure server CPU usage', 'Optimize database queries'],
      correctAnswers: [0],
      explanation: 'Benchmarks allow you to compare your ITSM KPIs against industry peers.',
      topic: 'SPM'
    },
    {
      id: 55,
      type: 'single',
      question: 'Which of the following is used to define the available hours for an SLA?',
      options: ['SLA Schedule', 'Business Hours', 'Work Schedule', 'Time Profile'],
      correctAnswers: [0],
      explanation: 'Schedules define the time windows (e.g., 8-5 weekdays) that an SLA clock runs.',
      topic: 'SPM'
    }
  ],

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

const questionTopic =
  document.getElementById('question-topic');

const homeBtn =
  document.getElementById('home-btn');

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

  const question =
    questions[currentQuestionIndex];

  questionCounter.textContent =
    `Question ${currentQuestionIndex + 1} / ${questions.length}`;

  scoreText.textContent =
    `Score: ${score}`;

  questionText.textContent =
    question.question;

  questionTopic.textContent =
    question.topic;

  const progress =
    ((currentQuestionIndex + 1) / questions.length) * 100;

  progressBar.style.width = `${progress}%`;

  optionsContainer.innerHTML = '';

  if (question.type === 'multiple') {

    questionType.textContent =
      'Select ALL correct answers';

  } else {

    questionType.textContent =
      'Select ONE correct answer';
  }

  question.options.forEach((option, index) => {

    const div = document.createElement('div');

    div.classList.add('option');

    const input = document.createElement('input');

    input.type =
      question.type === 'multiple'
        ? 'checkbox'
        : 'radio';

    input.name = 'option';

    input.value = index;

    const label = document.createElement('label');

    label.textContent = option;

    div.appendChild(input);
    div.appendChild(label);

    div.addEventListener('click', () => {

      if (question.type === 'single') {

        document
          .querySelectorAll('.option')
          .forEach(opt => {
            opt.classList.remove('selected');
          });

        document
          .querySelectorAll('input[name="option"]')
          .forEach(inp => {
            inp.checked = false;
          });

        input.checked = true;

        div.classList.add('selected');

      } else {

        input.checked = !input.checked;

        div.classList.toggle('selected');
      }

    });

    optionsContainer.appendChild(div);
  });
}

nextBtn.addEventListener('click', () => {

  const question =
    questions[currentQuestionIndex];

  const selectedInputs =
    document.querySelectorAll(
      'input[name="option"]:checked'
    );

  if (selectedInputs.length === 0) {

    alert('Please select at least one answer.');

    return;
  }

  const selectedAnswers =
    Array.from(selectedInputs)
      .map(input => Number(input.value));

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

homeBtn.addEventListener('click', goHome);

function showResults() {

  quizScreen.classList.add('hidden');

  resultScreen.classList.remove('hidden');

  finalScore.textContent =
    `You scored ${score} / ${questions.length}`;

  resultsReview.innerHTML = '';

  userAnswers.forEach((item, index) => {

    const div = document.createElement('div');

    div.classList.add('review-item');

    const selectedText =
      item.selectedAnswers
        .map(i => item.options[i])
        .join(', ');

    const correctText =
      item.correctAnswers
        .map(i => item.options[i])
        .join(', ');

    div.innerHTML = `

      <h4>
        ${index + 1}. ${item.question}
      </h4>

      <p class="${item.isCorrect ? 'correct' : 'wrong'}">

        ${item.isCorrect ? 'Correct' : 'Wrong'}

      </p>

      <p>
        <strong>Your answer:</strong>
        ${selectedText}
      </p>

      <p>
        <strong>Correct answer:</strong>
        ${correctText}
      </p>

      <p class="explanation">

        <strong>Explanation:</strong>
        ${item.explanation}

      </p>
    `;

    resultsReview.appendChild(div);
  });
}

function goHome() {

  quizScreen.classList.add('hidden');

  resultScreen.classList.add('hidden');

  homeScreen.classList.remove('hidden');
}

function arraysEqual(a, b) {

  return JSON.stringify(a) === JSON.stringify(b);
}

function shuffleArray(array) {

  return [...array]
    .sort(() => Math.random() - 0.5);
}
