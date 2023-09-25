// LoginActions.js

const LoginPage = require('../pages/LoginPage');

class LoginActions {

  loginAsAdmin() {
    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;
    LoginPage.login(adminUsername, adminPassword);
  }

}

module.exports = new LoginActions();
