# QA Automation Showcase

Small portfolio project demonstrating different software testing approaches for a sports scoreboard application.

## Technologies

- Playwright (Visual Regression Testing)
- Postman (API Testing)
- k6 (Performance Testing)
- Gherkin (Manual Test Scenarios)

## Project Structure

```text
api-tests/          API testing documentation
app/                Demo scoreboard application
manual-tests/       Gherkin test scenarios
performance-tests/  k6 performance tests
postman/            Postman collection
visual-tests/       Playwright visual regression tests
```

## Requirements

- Node.js
- npm
- Playwright
- k6
- Postman (optional)

## Installation

```bash
npm install
npx playwright install
```

## Run Visual Regression Tests

```bash
npx playwright test visual-tests/prime-scoreboard-visual.spec.ts
```

Update baseline snapshot:

```bash
npx playwright test visual-tests/prime-scoreboard-visual.spec.ts --update-snapshots
```

## Run Performance Tests

```bash
k6 run performance-tests/prime-scoreboard-k6.js
```

## Included Test Types

### Manual Testing

Gherkin-based test scenarios located in `manual-tests/`.

### API Testing

Postman collection located in `postman/`.

### Visual Regression Testing

Playwright compares screenshots against a stored baseline image.

### Performance Testing

k6 load test using 10 virtual users for 30 seconds.
