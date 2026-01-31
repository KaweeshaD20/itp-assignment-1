# it23643390 
# Y3S1 WD IT 1.1
# itp-assignment-1

## Installation

### Prerequisites
- Node.js (v14 or higher) - [Download here](https://nodejs.org/)

### Install Dependencies

1. Clone or navigate to the project directory:
```bash
cd itp-assignment-1
```

2. Install project dependencies including Playwright:
```bash
npm install
```

This will install:
- Playwright Test Framework (`@playwright/test`)
- TypeScript type definitions (`@types/node`)

3. Install Playwright browsers (required for running tests):
```bash
npx playwright install
```

## Running the Project

### Run Tests
Execute all Playwright tests:
```bash
npx playwright test
```

### Run Tests in Headed Mode
Run tests with browser UI visible:
```bash
npx playwright test --headed
```

### Run Specific Test File
Run a specific test file:
```bash
npx playwright test tests/example.spec.js
```

### View Test Report
After running tests, view the HTML report:
```bash
npx playwright show-report
```

## Project Structure

- `tests/` - Test files (Playwright spec files)
- `playwright.config.js` - Playwright configuration
- `playwright-report/` - Test results and reports
- `test-results/` - Detailed test output