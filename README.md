# FanCode API Automation Project

This project automates a scenario to validate that all users from FanCode city (based on latitude and longitude) have more than half of their todos completed. The project uses Cypress for API testing.

## Folder Structure

```bash
/Fancode_Assignment
├── cypress
│   ├── e2e
│   │   └── api-tests
│   │       └── fancode_user.cy.js         # Main test file
│   ├── support
│   │   └── UsersAPI.js               # API helper class
├── .gitignore                        # Files to be ignored by Git
├── cypress.config.js                 # Cypress configuration
├── package-lock.json                 # Auto-generated
├── package.json                      # Dependencies and scripts
└── README.md                         # Project documentation

```

# Setup Instructions
## Clone the Repository:

```bash
git clone https://github.com/parmarkrishnpal/FancodeAssignment.git
cd Fancode_Assignment
```


## Install Dependencies:
Make sure you have Node.js installed. Run the following command:
```bash
npm install
```

## Run Cypress Tests:

```bash
npm run cypress:run
```

## Dependencies:
- Cypress: API testing framework
- Node.js: Required to run Cypress
