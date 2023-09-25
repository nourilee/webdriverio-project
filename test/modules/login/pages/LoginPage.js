// LoginPage.js
const BasePage = require('../../../global/BasePage');

class LoginPage extends BasePage {

  get usernameInput() {
    return $('[name="user-name"]');
  }

  get passwordInput() {
    return $('[name="password"]');
  }

  get loginButton() {
    return $('[name="login-button"]');
  }

  // Define the login method
  async login(username, password) {
    await this.waitForElementDisplayed(this.usernameInput);
    await this.usernameInput.setValue(username);

    await this.waitForElementDisplayed(this.passwordInput);
    await this.passwordInput.setValue(password);

    await this.waitForElementToBeClickable(this.loginButton);
    await this.loginButton.click();

    await this.waitForPageToLoad();
  }

}

module.exports = new LoginPage();