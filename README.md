# WebDriverIO Project

This is a WebDriverIO project with Mocha, Chai, Allure Reporter, Babel, ESLint, and other tools for automated testing.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

## Getting Started

1. Clone this repository:

   ```bash
   git clone <repository-url>

2. Install project dependencies:

   ```bash
   npm install
   ```

3. Running Tests
   ```bash
   npm test
   ```

4. Linting
   ```bash
   npm run lint
   ```

5. Generating Allure Reports
   ```bash
   npm run report
   ```

## Tech Stack and Architecture

### Tech Stack

- **WebDriverIO**: WebDriverIO is the core automation framework used in this project. It provides a concise and powerful API for interacting with web applications.

- **Mocha**: Mocha is the testing framework used to structure and organize your test cases. It offers various testing features and hooks for better test management.

- **Chai**: Chai is an assertion library that pairs well with Mocha. It provides a range of assertion styles to make your tests more expressive and readable.

- **Allure Reporter**: Allure Reporter is used for generating detailed and interactive test reports. It provides a user-friendly interface for viewing test results.

- **Babel**: Babel is used for transpiling modern JavaScript code (ES6/ES7) into a format that can be run in Node.js or browsers. This allows you to write tests using the latest JavaScript features.

- **ESLint**: ESLint is a popular linter that helps maintain code quality and consistency. It checks your code for errors and enforces coding standards.

- **dotenv**: The dotenv library is used to manage environment-specific variables, such as URLs and credentials, in a secure manner.

- **wdio-wait-for**: wdio-wait-for is a custom WebDriverIO service that adds wait functionality for elements on the page. It helps improve test stability by waiting for elements to become available.

### Project Architecture

The project follows a modular and organized structure to keep your tests maintainable and scalable:

- **`wdio.conf.js`**: The WebDriverIO configuration file specifies the test framework, reporters, services, and other settings for your tests. You can customize it according to your needs.

- **`.eslintrc.js`**: The ESLint configuration file defines coding standards and rules for your JavaScript code. It helps maintain code quality and consistency.

- **`.env`**: The `.env` file stores environment-specific variables, such as base URLs, API keys, and credentials. These variables can be accessed in your tests using the `dotenv` library.

- **`test/modules`**: This directory is organized based on the different modules or features of our application. 

   Each module has its own subdirectory containing the following:
   - **`actions`**: Actions specific to that module, encapsulating actions related to that feature.

   - **`pages`**: Page objects specific to that module, representing the pages or sections related to that feature.

   - **`specs`**: Test scripts specific to that module, organized by functionality or scenario.