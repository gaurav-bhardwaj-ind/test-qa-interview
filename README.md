# Test QA Developer Interview Challenge

## Problem Statement

### Objective
As a QA Developer using Cypress, your task is to create automated end-to-end tests for a web application's login flow and random number validation system.

### Application Description
You have been provided with a React-based web application that implements:
1. **Login Page** - A simple authentication interface
2. **Dashboard Page** - A post-login page displaying a randomly generated number

### Requirements

#### Part 1: Understanding the Application
The application has the following features:

**Login Page (`/login`):**
- Username input field (required)
- Password input field (required)
- Login button
- Error message display for validation failures
- Sample user information text

**Dashboard Page (`/dashboard`):**
- Welcome message with username
- Randomly generated number (between 1-100)
- Classification of the number as "Even" or "Odd"
- Selection status badge
- Challenge details card
- Test helpers showing data-testid attributes

#### Part 2: Test Scenarios

You need to write Cypress tests that cover the following scenarios:

##### Scenario 1: Form Validation
- **Test Case 1.1:** Verify that leaving the username field empty and submitting shows an error
- **Test Case 1.2:** Verify that leaving the password field empty and submitting shows an error
- **Test Case 1.3:** Verify both fields are required for successful login

##### Scenario 2: Successful Login Flow
- **Test Case 2.1:** Successfully login with valid credentials
- **Test Case 2.2:** Verify that after login, the user is redirected to the dashboard
- **Test Case 2.3:** Verify the welcome message displays the entered username

##### Scenario 3: Random Number Validation (CRITICAL)
- **Test Case 3.1:** Extract the random number from the dashboard
- **Test Case 3.2:** Verify the random number is within the range of 1-100
- **Test Case 3.3:** Calculate if the number is even or odd
  - Even: if `number % 2 === 0`
  - Odd: if `number % 2 !== 0`
- **Test Case 3.4:** Assert that the displayed "Number Type" matches the calculated type
- **Test Case 3.5:** Verify the "SELECTED" status badge is displayed
