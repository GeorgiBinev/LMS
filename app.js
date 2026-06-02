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
      explanation: 'Category and Subcategory are the baseline method for high-level classification.',
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
    },
    {
      id: 56,
      type: 'single',
      question: 'What is the default behavior when an incident is reopened by a user?',
      options: ['State changes to New', 'State changes to In Progress', 'State changes to On Hold', 'A new Incident is created'],
      correctAnswers: [1],
      explanation: 'When an incident is reopened from a Resolved state, it baseline moves back to In Progress.',
      topic: 'Incident Management'
    },
    {
      id: 57,
      type: 'multiple',
      question: 'Which of the following can be used to create an Incident? (Choose 2)',
      options: ['Inbound Email Action', 'Service Portal', 'Workflow', 'Scheduled Script'],
      correctAnswers: [0, 1],
      explanation: 'Incidents are commonly created via incoming emails or user submissions on the Service Portal.',
      topic: 'Incident Management'
    },
    {
      id: 66,
      type: 'single',
      question: 'Which field is used to link an Incident to a Major Incident?',
      options: ['Parent', 'Parent Incident', 'Major Incident ID', 'Related Record'],
      correctAnswers: [1],
      explanation: 'The "Parent Incident" field is used to create a hierarchy where child incidents are linked to a Major Incident.',
      topic: 'Incident Management'
    },
    {
      id: 79,
      type: 'single',
      question: 'What is a characteristic of Major Incidents in the ServiceNow platform?',
      options: [
        'They only affect a single user.',
        'They are resolved exclusively through manual processes.',
        'They can only be created manually.',
        'They are incidents of high impact and urgency affecting a large number of users.'
      ],
      correctAnswers: [3],
      explanation: 'Major Incidents are defined by high impact and urgency, typically affecting a large number of users or critical business services.',
      topic: 'Incident Management'
    },
    {
      id: 84,
      type: 'multiple',
      question: 'Which incident management roles are activated by installing the ITSM Roles plugin named com.snc.itsm.roles? (Choose 2)',
      options: ['sn_incident_read', 'sn_incident_write', 'incident_manager', 'itsm_incident_write', 'itsm_incident_read'],
      correctAnswers: [0, 1],
      explanation: 'The ITSM Roles plugin activates sn_incident_read and sn_incident_write to provide scoped read and write access using the sn_ prefix convention.',
      topic: 'Incident Management'
    },
    {
      id: 97,
      type: 'multiple',
      question: 'What happens to Business Duration and Duration when an incident is set to Resolved? (Choose 2)',
      options: [
        'Business Duration and Duration are cleared',
        'Duration is calculated',
        'Duration is paused',
        'Business Duration is calculated'
      ],
      correctAnswers: [1, 3],
      explanation: 'Upon resolution, ServiceNow calculates both the absolute Duration (total time) and the Business Duration (time within work hours).',
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
      id: 58,
      type: 'single',
      question: 'What is the table name for Problem Tasks?',
      options: ['problem_task', 'task_problem', 'sn_problem_task', 'problem_item'],
      correctAnswers: [0],
      explanation: 'Problem tasks are stored in the problem_task table.',
      topic: 'Problem Management'
    },
    {
      id: 67,
      type: 'multiple',
      question: 'What are the two default types of Problem Tasks? (Choose 2)',
      options: ['General', 'Root Cause Analysis', 'Fix', 'Workaround'],
      correctAnswers: [1, 2],
      explanation: 'ServiceNow provides "Root Cause Analysis" and "Fix" as baseline task types for problems.',
      topic: 'Problem Management'
    },
    {
      id: 68,
      type: 'single',
      question: 'Can a Problem record be closed if there are open Problem Tasks?',
      options: ['Yes, tasks are canceled', 'Yes, tasks are closed', 'No, all tasks must be closed first', 'Only if the user is an admin'],
      correctAnswers: [2],
      explanation: 'To maintain data integrity, all related problem tasks must be closed before the parent Problem can be Closed.',
      topic: 'Problem Management'
    },
    {
      id: 76,
      type: 'multiple',
      question: 'Which of the following are steps in the Problem Management process lifecycle on the ServiceNow platform? (Choose 3)',
      options: [
        'Conduct customer satisfaction surveys post-resolution.',
        'Conduct a root cause analysis (RCA).',
        'Create a new problem record and document known details.',
        'Confirm workaround or fix restores service for related incidents.',
        'Allocate budget for preventive maintenance.'
      ],
      correctAnswers: [1, 2, 3],
      explanation: 'The Problem Management standard lifecycle includes creating/documenting details, conducting RCA to uncover underlying causes, and confirming workarounds or fixes before closure.',
      topic: 'Problem Management'
    },
    {
      id: 90,
      type: 'single',
      question: 'Tester has submitted a bug report, because at no point in the Problem lifecycle, does the Create Known Error article link appear under Related Links. Also, they notice there is no Known Error knowledge base in the instance. What might be the cause of this?',
      options: [
        'The requirement was not in the stories',
        'Tester is not impersonating Problem Coordinator',
        'The customer did not pay the bill for Knowledge management',
        'The sn_known_error_write role is required to see the Create Known Error article link',
        'The Problem Management Best Practice - Madrid - Knowledge Integration plugin has not been activated'
      ],
      correctAnswers: [4],
      explanation: 'The Problem Management Best Practice - Madrid - Knowledge Integration plugin enables the Create Known Error button and related functionality in the Problem lifecycle.',
      topic: 'Problem Management'
    },
    {
      id: 95,
      type: 'single',
      question: 'Which module should you use to locate and update the Priority Problem Lookup record based on this scenario: "Customer wants to change the way Priority on Problem records is calculated based on Impact and Urgency."',
      options: ['Data Lookup Definitions', 'Priority Rule Definitions', 'Priority Matrix', 'Choice Lists'],
      correctAnswers: [0],
      explanation: 'Data Lookup Definitions is the module where rules like Priority Lookup (based on Impact and Urgency) are stored and updated.',
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
      id: 22,
      type: 'multiple',
      question: 'Which of the following are types of Change? (Choose 3)',
      options: ['Emergency', 'Standard', 'Normal', 'Routine', 'Urgent'],
      correctAnswers: [0, 1, 2],
      explanation: 'ServiceNow baseline Change Management uses three types: Standard, Normal, and Emergency.',
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
      id: 59,
      type: 'single',
      question: 'What is the purpose of the CAB Workbench?',
      options: ['To schedule CAB meetings', 'To automatically approve changes', 'To manage the CAB meeting agenda and review changes', 'To create new change models'],
      correctAnswers: [2],
      explanation: 'The CAB Workbench is used to manage CAB meetings, agendas, and the review process.',
      topic: 'Change Management'
    },
    {
      id: 69,
      type: 'single',
      question: 'Which table stores the Standard Change Catalog templates?',
      options: ['std_change_record_producer', 'std_change_template', 'change_template', 'std_change_master'],
      correctAnswers: [0],
      explanation: 'Standard Change templates are stored as Record Producers in the std_change_record_producer table.',
      topic: 'Change Management'
    },
    {
      id: 70,
      type: 'single',
      question: 'When is a "Post Implementation Review" (PIR) typically required?',
      options: ['Standard Changes', 'All Changes', 'Normal and Emergency Changes', 'Only Canceled Changes'],
      correctAnswers: [2],
      explanation: 'PIRs are typically performed for Normal and Emergency changes during the Review state.',
      topic: 'Change Management'
    },
    {
      id: 83,
      type: 'multiple',
      question: 'In support of Change Management which actions can a user with the itil_admin role take? (Choose 3)',
      options: [
        'Manage Risk Assessments',
        'Delete Change',
        'Manage Risk Conditions',
        'Delete CAB Definition',
        'Create and manage Approval Policies'
      ],
      correctAnswers: [0, 1, 2],
      explanation: 'An itil_admin has elevated rights within ITSM enabling them to manage Risk Assessments, manage Risk Conditions, and delete Change records.',
      topic: 'Change Management'
    },
    {
      id: 85,
      type: 'multiple',
      question: 'Which Change Task Types are available by default? (Choose 3)',
      options: ['Review', 'Verification', 'Testing', 'Deployment', 'Planning'],
      correctAnswers: [0, 2, 4],
      explanation: 'ServiceNow Change Management provides Planning, Testing, and Review out of the box as baseline default Change Task types.',
      topic: 'Change Management'
    },
    {
      id: 89,
      type: 'single',
      question: 'What should you do to satisfy this requirement: "Customer wants to use the Normal change model, but wants to add another level of approval for changes relating to the Service, SAP Enterprise Services."',
      options: [
        'Add a new Decision to the Normal Change Workflow',
        'Add a new Decision to the Normal Change Approval Policy',
        'Add a new Policy Input to the Normal Change Approval Policy',
        'Add a new Change Approval Policy'
      ],
      correctAnswers: [1],
      explanation: 'Adding a new Decision to the existing Approval Policy allows a conditional branch that triggers the new approval requirement for Normal Changes.',
      topic: 'Change Management'
    },
    {
      id: 92,
      type: 'single',
      question: 'What is technical name of table that stores Change records?',
      options: ['Change [change]', 'Change Request [rfc]', 'Change [task_change]', 'Change Request [change_request]', 'Change [change_task]'],
      correctAnswers: [3],
      explanation: 'Change Request [change_request] is the correct technical name for the table where Change records are stored in ServiceNow.',
      topic: 'Change Management'
    },
    {
      id: 94,
      type: 'single',
      question: 'Where can Change Manager define interval frequency for unauthorized change detection?',
      options: ['Unauthorized Change Properties module', 'Event Processing Properties module', 'Unauthorized change flow', 'The ci.change.unplanned business rule'],
      correctAnswers: [0],
      explanation: 'The Unauthorized Change Properties module is where the Change Manager can configure the interval frequency for unauthorized change detection scheduling.',
      topic: 'Change Management'
    },
    {
      id: 96,
      type: 'single',
      question: 'Moving a Change Request to the Review state will automatically close all Change Tasks associated with it.',
      options: ['True', 'False'],
      correctAnswers: [1],
      explanation: 'Moving to Review does not close tasks; in fact, it often cancels open tasks in the Normal model, but does not "automatically close" them as completed.',
      topic: 'Change Management'
    },
    {
      id: 103,
      type: 'single',
      question: 'When a Change Request is canceled, all open Change Tasks are:',
      options: ['Canceled', 'Closed', 'Paused', 'Left open'],
      correctAnswers: [0],
      explanation: 'Standard behavior is to cancel all child tasks if the parent change is canceled.',
      topic: 'Change Management'
    }
  ],

  'service-catalog': [
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
      id: 40,
      type: 'single',
      question: 'What is the purpose of the "Variable Set" in the Service Catalog?',
      options: ['To store a single variable', 'To allow a group of variables to be reused across multiple items', 'To define the price of an item', 'To set the approval workflow'],
      correctAnswers: [1],
      explanation: 'Variable Sets allow you to reuse a collection of variables across many items.',
      topic: 'Service Catalog'
    },
    {
      id: 71,
      type: 'single',
      question: 'Which Catalog component allows you to show/hide variables based on other variable values?',
      options: ['Catalog UI Policy', 'Catalog Client Script', 'Variable Rule', 'Data Policy'],
      correctAnswers: [0],
      explanation: 'Catalog UI Policies are used to dynamically control the visibility and behavior of variables on a form.',
      topic: 'Service Catalog'
    },
    {
      id: 72,
      type: 'multiple',
      question: 'Which of the following are valid Service Catalog Request states? (Choose 2)',
      options: ['Pending Approval', 'Approved', 'Fulfillment', 'Work in Progress'],
      correctAnswers: [0, 1],
      explanation: 'The Request [sc_request] record tracks high-level states like Pending Approval and Approved.',
      topic: 'Service Catalog'
    },
    {
      id: 77,
      type: 'multiple',
      question: 'When you are building out a service catalog, categorizing items helps users navigate and search in the catalog. Which of the roles would allow to create and maintain categories? (Choose 3)',
      options: ['catalog_admin', 'catalog_manager', 'catalog_editor', 'catalog_builder_editor', 'itil_admin'],
      correctAnswers: [0, 1, 2],
      explanation: 'catalog_admin has full administrative rights over Service Catalog. catalog_manager and catalog_editor can manage and edit categories within their assigned scopes.',
      topic: 'Service Catalog'
    },
    {
      id: 78,
      type: 'single',
      question: 'When you are creating a catalog, which role specifies who can edit, update, and delete catalogs, categories, and catalog items?',
      options: ['Manager', 'Contributors', 'Owner', 'Editors'],
      correctAnswers: [0],
      explanation: 'The Manager role on a catalog record provides full management rights to edit, update, and publish items or configurations within that catalog.',
      topic: 'Service Catalog'
    },
    {
      id: 80,
      type: 'single',
      question: 'What would you use to create a New Hire Employee request that would allow you to order your workstation and company mobile?',
      options: ['Catalog Item', 'Content Item', 'Order Guide', 'Knowledge item', 'Record Producer'],
      correctAnswers: [2],
      explanation: 'An Order Guide bundles multiple baseline catalog items into a single unified guided request experience, which is perfect for scenarios like onboarding.',
      topic: 'Service Catalog'
    },
    {
      id: 82,
      type: 'single',
      question: 'What catalog property enables users to save their partially filled-out requests and submit them later?',
      options: ['Enable wish list', 'Edit cart layout', 'User partial save', 'Enable cart save'],
      correctAnswers: [0],
      explanation: '"Enable wish list" is the standard OOTB property that lets catalog users save incomplete orders for future finalization.',
      topic: 'Service Catalog'
    },
    {
      id: 88,
      type: 'single',
      question: 'What would you use to capture data in a grid layout on the catalog item?',
      options: ['Variable set', 'Grid variable', 'Cascade variable', 'Multi-row variable set'],
      correctAnswers: [3],
      explanation: 'A Multi-row Variable Set captures data in a grid/table layout, allowing users to provide multiple rows of structured data inside a single catalog item submission.',
      topic: 'Service Catalog'
    },
    {
      id: 91,
      type: 'single',
      question: 'Released in Quebec. What tool enables you to delegate the creation and maintenance of common and simple use case Catalog Items to business users?',
      options: ['Catalog Builder', 'Catalog Designer', 'Catalog Wizard', 'Catalog Item Builder'],
      correctAnswers: [0],
      explanation: 'Catalog Builder provides a simple, guided user interface that enables delegated business users to create and maintain catalog items without needing full platform admin skills.',
      topic: 'Service Catalog'
    },
    {
      id: 93,
      type: 'multiple',
      question: 'Which objects on the Shopping Cart Widget can be displayed or hidden using Maintain Cart Layouts settings? (Choose 2)',
      options: ['Requested by', 'Price', 'Shipping Address', 'Quantity'],
      correctAnswers: [1, 3],
      explanation: 'Price and Quantity are baseline standard elements of the shopping cart widget that can be shown or hidden via Maintain Cart Layouts configurations.',
      topic: 'Service Catalog'
    },
    {
      id: 98,
      type: 'single',
      question: 'In the Service Catalog, what represents the fulfiller-facing component of a requested item?',
      options: ['Request [sc_request]', 'Requested Item [sc_req_item]', 'Catalog Task [sc_task]', 'Service Catalog [sc_catalog]'],
      correctAnswers: [2],
      explanation: 'The sc_task (Catalog Task) is the record assigned to fulfillers to perform the actual work of a request.',
      topic: 'Service Catalog'
    },
    {
      id: 100,
      type: 'single',
      question: 'A Catalog Item can have many associated Variable Sets.',
      options: ['True', 'False'],
      correctAnswers: [0],
      explanation: 'Variable sets are designed to be reusable; a single item can include multiple sets of variables.',
      topic: 'Service Catalog'
    }
  ],

  cmdb: [
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
      id: 45,
      type: 'single',
      question: 'Which ServiceNow feature allows for the automatic population of the CMDB?',
      options: ['Discovery', 'Import Sets', 'Service Mapping', 'Data Collector'],
      correctAnswers: [0],
      explanation: 'ServiceNow Discovery finds devices and applications on your network.',
      topic: 'CMDB'
    },
    {
      id: 73,
      type: 'single',
      question: 'What is a CI Class?',
      options: ['A group of CIs sharing common attributes', 'A priority level for CIs', 'A CI relationship type', 'A list of users assigned to CIs'],
      correctAnswers: [0],
      explanation: 'A Class (table) represents a specific type of CI, like Linux Server or IP Switch.',
      topic: 'CMDB'
    },
    {
      id: 86,
      type: 'single',
      question: 'To define a common grouping of configuration items such as all web servers in Chicago, what would you use?',
      options: ['CI class', 'Dynamic CI group', 'Dependent group', 'CSDM component group'],
      correctAnswers: [1],
      explanation: 'Dynamic CI Groups use specific query criteria to dynamically cluster and manage configuration items based on filtered parameters (like location and type).',
      topic: 'CMDB'
    },
    {
      id: 101,
      type: 'single',
      question: 'Which CMDB tool allows for the graphical representation of CI relationships?',
      options: ['Dependency View', 'Schema Map', 'CI Explorer', 'Relation Mapper'],
      correctAnswers: [0],
      explanation: 'The Dependency View provides an interactive map showing how CIs are upstream or downstream from each other.',
      topic: 'CMDB'
    }
  ],

  spm: [
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
      id: 74,
      type: 'single',
      question: 'What defines the time an SLA should stop counting?',
      options: ['Start Condition', 'Stop Condition', 'Pause Condition', 'Reset Condition'],
      correctAnswers: [1],
      explanation: 'The Stop Condition defines the specific criteria that fulfill and complete the SLA.',
      topic: 'SPM'
    },
    {
      id: 75,
      type: 'multiple',
      question: 'What are the three types of Service Level Agreements? (Choose 3)',
      options: ['SLA', 'OLA', 'UC', 'PLA', 'Contract'],
      correctAnswers: [0, 1, 2],
      explanation: 'Service Level Management includes SLA (with customers), OLA (internal), and UC (with vendors).',
      topic: 'SPM'
    },
    {
      id: 102,
      type: 'multiple',
      question: 'What are the three stages of an SLA lifecycle? (Choose 3)',
      options: ['In progress', 'Completed', 'Paused', 'Breached', 'Canceled'],
      correctAnswers: [0, 2, 4],
      explanation: 'SLA records move through stages like In progress, Paused, Completed, and Canceled depending on record conditions.',
      topic: 'SPM'
    }
  ],

  knowledge_management: [
    {
      id: 87,
      type: 'single',
      question: 'To view all of the search queries entered by users in the knowledge search where should an admin go?',
      options: ['[kb_feedback] table', 'Knowledge queries application', 'Search logs application', '[kb_view] table'],
      correctAnswers: [2],
      explanation: 'The Search Logs application monitors and keeps structural logs of full search texts, counts, and click-through results utilized by system users.',
      topic: 'Knowledge Management'
    },
    {
      id: 99,
      type: 'single',
      question: 'Which table stores the search terms used in Knowledge Management?',
      options: ['ts_query_kb', 'ts_word_kb', 'kb_search_log', 'kb_query_log'],
      correctAnswers: [0],
      explanation: 'ts_query_kb is the baseline table that logs knowledge-specific search queries.',
      topic: 'Knowledge Management'
    }
  ],

  platform_automation: [
    {
      id: 81,
      type: 'single',
      question: 'Which are the correct components of a Flow Action?',
      options: [
        'Inputs, Action Steps and Outputs',
        'Processes, Subprocess and Action Steps',
        'Indexes, Processes and Outputs',
        'Inputs, Processes, Subprocesses, and Outputs'
      ],
      correctAnswers: [0],
      explanation: 'A custom Flow Action in Flow Designer is fundamentally structured around Inputs (data passed in), Action Steps (the operational components/logic), and Outputs (the evaluated results sent back).',
      topic: 'Platform Automation'
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
