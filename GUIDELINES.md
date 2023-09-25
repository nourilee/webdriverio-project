# Naming Conventions and Coding Standards

In this document, we outline the naming conventions and coding standards to be followed in our WebDriverIO project. Consistency in naming and coding style helps improve code readability and maintainability.

## Table of Contents

- [File and Directory Names](#file-and-directory-names)
- [Variables and Constants](#variables-and-constants)
- [Functions and Methods](#functions-and-methods)
- [Comments](#comments)
- [Whitespace and Formatting](#whitespace-and-formatting)
- [Testing Practices](#testing-practices)

## File and Directory Names

- **Test Scripts**: Name test script files in a descriptive and clear manner. Use lowercase letters and separate words with hyphens or underscores. Example: `login-tests.js` or `loginTests.js`.

- **Page Objects**: Name page object files to reflect the corresponding page or section of the application. Use CamelCase. Example: `LoginPage.js` or `DashboardPage.js`.

- **Action Classes**: Name action class files based on the actions they encapsulate. Use CamelCase. Example: `AuthenticationActions.js` or `RequestActions.js`.

- **Directories**: Use lowercase letters for directory names. Organize test scripts, page objects, and actions into relevant module directories. Example: `test/modules/module1`.

## Variables and Constants

- **Variables**: Use descriptive variable names. Use CamelCase for variable names. Example: `pageTitle` or `submitButton`.

- **Constants**: Use uppercase letters and separate words with underscores for constants. Example: `MAX_ATTEMPTS` or `BASE_URL`.

## Functions and Methods

- **Function Names**: Use descriptive function names that convey their purpose. Use CamelCase. Example: `loginAsAdmin` or `clickSubmitButton`.

- **Method Names**: Use verbs to start method names. Use CamelCase. Example: `getUserInfo` or `createNewRequest`.

- **Parameter Names**: Use descriptive parameter names. Example: `username` or `buttonElement`.

## Comments

- Use comments to explain complex logic, non-obvious behavior, or to provide context for the code.

- Use JSDoc comments to document functions and methods, specifying parameters, return types, and descriptions.

## Whitespace and Formatting

- Use consistent indentation with 2 or 4 spaces.

- Keep lines of code concise and within a reasonable character limit (e.g., 80-120 characters per line).

- Maintain a consistent and clean code formatting style throughout the project.

## Testing Practices

- Follow the Arrange-Act-Assert (AAA) pattern in test scripts, clearly separating test setup, execution, and assertions.

- Use meaningful test case names that describe the expected behavior or scenario.

- Avoid using hard-coded values in test scripts whenever possible. Use constants or data files for test data.

- Keep tests independent of each other. Each test should not rely on the outcome of other tests.

- Use assertions to validate expected outcomes and avoid using excessive sleep/wait statements.

- Always clean up any test data or state changes made during a test to leave the application in a known state.

## Configure environment for testing
In the root directory of the project, create a new `.env` file. You can use a text editor or a code editor to do this.

1. Open the `.env `file in your editor.

2. Use the following format to define your environment-specific variables and credentials.
   ```dotenv
   # .env for QA environment
   BASEURL=https://<base_url>
   ADMIN_USERNAME=<username>
   ADMIN_PASSWORD=<password>
   ```

---

By following these naming conventions and coding standards, we aim to create clean, maintainable, and reliable WebDriverIO tests that are easy to understand and work with.